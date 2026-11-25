/**
 * Move emotion's server-rendered <style> tags into a stylesheet for that page.
 *
 * The tags are not part of what the client renders (Emotion returns null for
 * them in the browser). Removing only those tags leaves every class name,
 * icon, and inline style exactly as React rendered it, so hydration matches.
 * Class names are shortened earlier, by generateUtilityClass, on both sides.
 *
 * Safe to run twice: a build that already links the stylesheet is left alone.
 * Scripts, including GTM and JSON-LD, are copied through unchanged.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { visibleText, breakdown, pageFiles, routeFor } = require('./text-html-ratio');
const { keptShortClasses } = require('../lib/keptUtilityClasses');

const ROOT = path.join(__dirname, '..');
const PAGES = path.join(ROOT, '.next', 'server', 'pages');
const PUBLIC_CSS = path.join(ROOT, 'public', 'css');

function extractEmotionCss(html) {
  const blocks = [];
  const without = html.replace(/<style\b([^>]*)>([\s\S]*?)<\/style>/gi, (full, attrs, css) => {
    if (!/data-emotion="/i.test(attrs)) return full;
    const id = (attrs.match(/data-emotion="([^"]*)"/i) || [])[1] || css;
    blocks.push({ id, css });
    return '';
  });
  return { html: without, blocks };
}

function hrefsOf(html) {
  return [...html.matchAll(/\shref="([^"]*)"/g)].map((match) => match[1]);
}

function assertPreserved(before, after) {
  const scripts = (html) =>
    [...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)].map((match) => match[0]).join('\n');
  const noscripts = (html) =>
    [...html.matchAll(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi)].map((match) => match[0]).join('\n');
  if (scripts(before) !== scripts(after)) {
    throw new Error('A script tag changed. Tracking and JSON-LD must stay byte-for-byte.');
  }
  if (noscripts(before) !== noscripts(after)) {
    throw new Error('A noscript block changed. The GTM iframe must stay as it is.');
  }
  if (visibleText(before) !== visibleText(after)) {
    throw new Error('Visible text changed.');
  }
  const beforeHrefs = new Set(hrefsOf(before));
  for (const href of hrefsOf(after)) {
    if (beforeHrefs.has(href) || href.startsWith('/css/emotion-')) continue;
    throw new Error(`Unexpected new href ${href}`);
  }
  for (const href of beforeHrefs) {
    if (!hrefsOf(after).includes(href)) throw new Error(`Missing href ${href}`);
  }
}

function splitRules(css) {
  const rules = [];
  let cursor = 0;
  while (cursor < css.length) {
    const start = cursor;
    let depth = 0;
    let opened = false;
    for (; cursor < css.length; cursor += 1) {
      const char = css[cursor];
      if (char === '{') {
        depth += 1;
        opened = true;
      } else if (char === '}') {
        depth -= 1;
        if (opened && depth === 0) {
          cursor += 1;
          break;
        }
      }
    }
    const rule = css.slice(start, cursor).trim();
    if (rule) rules.push(rule);
  }
  return rules;
}

function emotionClasses(html) {
  const classes = new Set();
  for (const match of html.matchAll(/class="([^"]*)"/g)) {
    for (const token of match[1].split(/\s+/)) {
      if (token.startsWith('c-')) classes.add(token);
    }
  }
  return classes;
}

function rulesFor(rules, classes, includeUntagged = true) {
  const picked = [];
  for (const rule of rules) {
    const used = [...rule.matchAll(/\.c-[a-z0-9]+/g)].map((match) => match[0].slice(1));
    if (used.length === 0) {
      if (includeUntagged) picked.push(rule);
      continue;
    }
    if (used.some((token) => classes.has(token))) picked.push(rule);
  }
  return picked.join('');
}

function globalRules(files) {
  const seen = new Map();
  const ordered = [];
  for (const file of files) {
    for (const block of extractEmotionCss(fs.readFileSync(file, 'utf8')).blocks) {
      const previous = seen.get(block.id);
      if (previous === undefined) {
        seen.set(block.id, block.css);
        ordered.push(block.css);
      } else if (previous !== block.css) {
        throw new Error(`Emotion style ${block.id} has two different bodies.`);
      }
    }
  }
  const rules = splitRules(minifyCss(ordered.join('')));
  const seenRule = new Set();
  return rules.filter((rule) => {
    if (!rule || /\{\s*\}/.test(rule) || seenRule.has(rule)) return false;
    seenRule.add(rule);
    return true;
  });
}

function minifyBlock(body) {
  const decls = body.split(';').map((part) => part.trim()).filter(Boolean);
  const plain = new Set(
    decls
      .map((decl) => decl.slice(0, decl.indexOf(':')).trim())
      .filter((prop) => prop && !prop.startsWith('-'))
  );
  const kept = [];
  const seen = new Set();
  for (const decl of decls) {
    const prop = decl.slice(0, decl.indexOf(':')).trim();
    const bare = prop.replace(/^-(webkit|moz|ms)-/, '');
    if (prop !== bare && plain.has(bare)) continue;
    if (seen.has(decl)) continue;
    seen.add(decl);
    kept.push(decl);
  }
  return kept.join(';');
}

function minifyCss(css) {
  return css.replace(/\{([^{}]*)\}/g, (_full, body) => `{${minifyBlock(body)}}`);
}

function heroClasses(html) {
  const image = html.indexOf('<img', html.indexOf('<main'));
  if (image < 0) return new Set();
  const slice = html.slice(html.indexOf('<body'), image);
  const classes = new Set();
  const nav = slice.match(/<nav\b[^>]*class="([^"]*)"/);
  if (nav) {
    for (const token of nav[1].split(/\s+/)) if (token.startsWith('c-')) classes.add(token);
  }
  const stack = [];
  for (const match of slice.matchAll(/<\/?([a-z0-9]+)([^>]*)>/gi)) {
    if (match[0].startsWith('</')) {
      stack.pop();
      continue;
    }
    if (match[0].endsWith('/>')) continue;
    stack.push((match[2].match(/class="([^"]*)"/) || [])[1] || '');
  }
  for (const classAttr of stack) {
    for (const token of classAttr.split(/\s+/)) if (token.startsWith('c-')) classes.add(token);
  }
  return classes;
}

function linkStylesheet(html, href) {
  if (html.includes(href)) return html;
  const preload = `<link rel="preload" as="style" href="${href}"/>`;
  const sheet = `<link rel="stylesheet" href="${href}"/>`;
  const head = html.match(/<head[^>]*>/);
  if (!head) return html.replace('</head>', `${preload}${sheet}</head>`);
  return html.replace(head[0], `${head[0]}${preload}${sheet}`);
}

function promoteHeroPreload(html) {
  const match = html.match(/<link rel="preload" as="image" imageSrcSet="[^"]*" imageSizes="[^"]*"\s*\/?>/);
  if (!match) return html;
  let tag = match[0];
  if (!/fetchpriority=/i.test(tag)) tag = tag.replace('<link ', '<link fetchpriority="high" ');
  const without = html.replace(match[0], '');
  const head = without.match(/<head[^>]*>/);
  if (!head) return tag + without;
  return without.replace(head[0], `${head[0]}${tag}`);
}

function alreadyRewritten(files) {
  return files.some((file) => {
    const html = fs.readFileSync(file, 'utf8');
    return html.includes('/css/emotion-') && !html.includes('data-emotion=');
  });
}

function percent(ratio) {
  return `${(ratio * 100).toFixed(2)}%`;
}

function main() {
  if (!fs.existsSync(PAGES)) {
    throw new Error(`Missing ${PAGES}. Run next build first.`);
  }
  const files = pageFiles(PAGES);
  if (alreadyRewritten(files)) {
    console.log('Emotion CSS is already external. Skipping.');
    return [];
  }
  fs.mkdirSync(PUBLIC_CSS, { recursive: true });
  for (const name of fs.readdirSync(PUBLIC_CSS)) {
    if (/^emotion-.*\.css$/.test(name)) fs.unlinkSync(path.join(PUBLIC_CSS, name));
  }

  const rules = globalRules(files);
  const written = new Map();
  const rows = [];
  let combined = rules.join('');
  for (const file of files) {
    const before = fs.readFileSync(file, 'utf8');
    const css = rulesFor(rules, emotionClasses(before));
    if (!css) throw new Error(`No emotion rules for ${file}. Refusing to rewrite HTML.`);
    const hash = crypto.createHash('sha256').update(css).digest('hex').slice(0, 12);
    const href = `/css/emotion-${hash}.css`;
    if (!written.has(hash)) {
      fs.writeFileSync(path.join(PUBLIC_CSS, `emotion-${hash}.css`), css);
      written.set(hash, css.length);
    }
    let after = extractEmotionCss(before).html;
    // Next marks the tags it owns. Drop that attribute on elements, and leave
    // it on JSON-LD script tags so those scripts stay byte-for-byte.
    const scripts = [];
    after = after.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (script) => {
      const token = `\u0000S${scripts.length}\u0000`;
      scripts.push(script);
      return token;
    });
    after = after.replace(/ data-next-head=""/g, '');
    after = after.replace(/\u0000S(\d+)\u0000/g, (_token, index) => scripts[Number(index)]);
    const critical = minifyCss(rulesFor(rules, heroClasses(before), false));
    const withSheet = linkStylesheet(promoteHeroPreload(after), href);
    const withCritical = critical
      ? withSheet.replace('</head>', `<style>${critical}</style></head>`)
      : withSheet;
    after = critical && breakdown(withCritical).ratio >= 0.12 ? withCritical : withSheet;
    assertPreserved(before, after);
    fs.writeFileSync(file, after);
    rows.push({
      route: routeFor(PAGES, file),
      before: breakdown(before),
      after: breakdown(after),
      css: css.length,
    });
  }

  const keep = keptShortClasses();
  const missing = [
    ...new Set([...combined.matchAll(/\.m[a-z0-9]{4}\b/g)].map((match) => match[0].slice(1))),
  ].filter((id) => !keep.has(id));
  if (missing.length) {
    throw new Error(
      `Stylesheet selects utility classes that were removed from the markup: ${missing.join(', ')}`
    );
  }

  const failing = rows.filter((row) => row.route !== '/500' && row.after.ratio < 0.12);
  console.log('route | before | after | html before | html after');
  for (const row of rows) {
    console.log(
      [
        row.route.padEnd(52),
        percent(row.before.ratio).padStart(8),
        percent(row.after.ratio).padStart(8),
        String(row.before.total).padStart(8),
        String(row.after.total).padStart(8),
      ].join(' ')
    );
  }
  const sizes = rows.map((row) => row.css).sort((a, b) => a - b);
  console.log(
    `stylesheets ${written.size} files, page css ${sizes[0]}-${sizes[sizes.length - 1]} chars`
  );
  for (const route of ['/booking', '/about']) {
    const row = rows.find((item) => item.route === route);
    if (!row) continue;
    console.log(`\n${route} breakdown (bytes)`);
    for (const key of ['total', 'text', 'styleTags', 'scripts', 'nextData', 'jsonLd', 'otherScripts', 'svgs', 'classAttrs', 'styleAttrs']) {
      console.log(`  ${key.padEnd(14)} before ${String(row.before[key]).padStart(8)} after ${String(row.after[key]).padStart(8)}`);
    }
  }
  if (failing.length) {
    throw new Error(`Text-to-HTML ratio is still below 12%: ${failing.map((row) => row.route).join(', ')}`);
  }
  return rows;
}

if (require.main === module) {
  main();
}

module.exports = { main };
