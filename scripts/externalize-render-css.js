/**
 * Move emotion's server-rendered <style> tags out of each page and shorten
 * the class attributes that referred to them.
 *
 * Semrush reads the HTML document, so rules in an external stylesheet do not
 * count against the text-to-HTML ratio. The stylesheet still lists every
 * original selector, so client hydration can put those class names back
 * without changing the computed style. Static style="" values that scripts
 * do not animate move into that same file. Inline SVGs become <use> pointers
 * at a shared sprite; hydration restores the original icon tree.
 *
 * Scripts, including GTM and JSON-LD, are copied through unchanged.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { visibleText, breakdown, pageFiles, routeFor } = require('./text-html-ratio');

const ROOT = path.join(__dirname, '..');
const PAGES = path.join(ROOT, '.next', 'server', 'pages');
const PUBLIC_CSS = path.join(ROOT, 'public', 'css');
const CLASS_PATTERN = /\.((?:css-|Mui|mui-)[A-Za-z0-9_-]+)/g;
const ANIMATED_STYLE = /(^|;)\s*(?:-webkit-|-moz-|-ms-)?(?:opacity|transform|visibility|animation|transition)\s*:/i;

function buildAliasMap(css) {
  const map = new Map();
  for (const match of css.matchAll(CLASS_PATTERN)) {
    const name = match[1];
    if (!map.has(name)) map.set(name, `e${map.size.toString(36)}`);
  }
  return map;
}

function aliasSelector(selector, map) {
  return selector.replace(CLASS_PATTERN, (token, name) => {
    const alias = map.get(name);
    return alias ? `.${alias}` : token;
  });
}

function splitTopLevelCommas(selector) {
  const parts = [];
  let depth = 0;
  let current = '';
  let quote = null;
  let escaped = false;
  for (const char of selector) {
    if (quote) {
      current += char;
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === '\\') {
        escaped = true;
        continue;
      }
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      current += char;
      continue;
    }
    if (char === '(') depth += 1;
    else if (char === ')') depth = Math.max(0, depth - 1);
    if (char === ',' && depth === 0) {
      parts.push(current);
      current = '';
      continue;
    }
    current += char;
  }
  parts.push(current);
  return parts;
}

function aliasPrelude(prelude, map) {
  const extras = [];
  for (const part of splitTopLevelCommas(prelude)) {
    const aliased = aliasSelector(part, map);
    if (aliased !== part) extras.push(aliased);
  }
  if (extras.length === 0) return prelude;
  return `${prelude},${extras.join(',')}`;
}

function rewriteCss(css, map) {
  let out = '';
  let buffer = '';
  let quote = null;
  let escaped = false;

  const flushAtRuleOrSelector = () => {
    const prelude = buffer;
    buffer = '';
    const trimmed = prelude.trim();
    if (trimmed.startsWith('@')) return `${prelude}{`;
    return `${aliasPrelude(prelude, map)}{`;
  };

  for (let index = 0; index < css.length; index += 1) {
    const char = css[index];
    if (quote) {
      buffer += char;
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === '\\') {
        escaped = true;
        continue;
      }
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      buffer += char;
      continue;
    }
    if (char === '{') {
      out += flushAtRuleOrSelector();
      continue;
    }
    if (char === '}') {
      out += `${buffer}}`;
      buffer = '';
      continue;
    }
    buffer += char;
  }
  return out + buffer;
}

function rewriteClassAttribute(value, map) {
  const seen = new Set();
  const kept = [];
  for (const token of value.split(/\s+/)) {
    if (!token || seen.has(token)) continue;
    const generated = token.startsWith('Mui') || token.startsWith('css-') || token.startsWith('mui-');
    if (generated && !map.has(token)) continue;
    const next = map.get(token) || token;
    if (seen.has(next)) continue;
    seen.add(next);
    kept.push(next);
  }
  return kept.join(' ');
}

function shouldKeepInlineStyle(value) {
  return ANIMATED_STYLE.test(`;${value}`);
}

function decodeAttr(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function importantize(style) {
  return style
    .split(';')
    .map((part) => {
      const declaration = part.trim();
      if (!declaration) return '';
      if (/!\s*important\s*$/i.test(declaration)) return declaration;
      return `${declaration} !important`;
    })
    .filter(Boolean)
    .join(';');
}

function maskScripts(html, masks) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (script) => {
    const token = `\u0000SCRIPT${masks.length}\u0000`;
    masks.push(script);
    return token;
  });
}

function unmaskScripts(html, masks) {
  return html.replace(/\u0000SCRIPT(\d+)\u0000/g, (_token, index) => masks[Number(index)]);
}

function rewriteClassAttributes(html, map) {
  return html.replace(/\sclass="([^"]*)"/g, (_match, value) => {
    const rewritten = rewriteClassAttribute(value, map);
    return rewritten ? ` class="${rewritten}"` : '';
  });
}

function rewriteSvgs(html, symbols) {
  return html.replace(/<svg\b([^>]*)>([\s\S]*?)<\/svg>/gi, (full, attrs, inner) => {
    const viewBox = (attrs.match(/\sviewBox="([^"]*)"/) || [])[1] || '0 0 24 24';
    const key = `${viewBox}\n${inner}`;
    let symbol = symbols.get(key);
    if (!symbol) {
      symbol = {
        id: `i${crypto.createHash('sha1').update(key).digest('hex').slice(0, 8)}`,
        viewBox,
        inner,
      };
      symbols.set(key, symbol);
    }
    const kept = attrs.replace(/\sdata-testid="[^"]*"/g, '').replace(/\sfocusable="false"/g, '');
    return `<svg${kept}><use href="/icons.svg#${symbol.id}"/></svg>`;
  });
}

function rewriteInlineStyles(html, inlineRules) {
  return html.replace(/<([a-zA-Z][\w:-]*)(\s[^<>]*?)>/g, (full, tag, attrs) => {
    const styleMatch = attrs.match(/\sstyle="([^"]*)"/);
    if (!styleMatch) return full;
    if (shouldKeepInlineStyle(styleMatch[1])) return full;
    const decoded = decodeAttr(styleMatch[1]).trim();
    if (!decoded) {
      return `<${tag}${attrs.replace(/\sstyle="[^"]*"/, '')}>`;
    }
    let className = inlineRules.get(decoded);
    if (!className) {
      className = `i${inlineRules.size.toString(36)}`;
      inlineRules.set(decoded, className);
    }
    let nextAttrs = attrs.replace(/\sstyle="[^"]*"/, '');
    if (/\sclass="/.test(nextAttrs)) {
      nextAttrs = nextAttrs.replace(/\sclass="([^"]*)"/, (_match, value) => ` class="${value} ${className}"`);
    } else {
      nextAttrs += ` class="${className}"`;
    }
    return `<${tag}${nextAttrs}>`;
  });
}

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
  const beforeScripts = [...before.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)].map((match) => match[0]);
  const afterScripts = [...after.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)].map((match) => match[0]);
  if (beforeScripts.join('\n') !== afterScripts.join('\n')) {
    throw new Error('A script tag changed. Tracking and JSON-LD must stay byte-for-byte.');
  }
  const beforeNoscript = [...before.matchAll(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi)].map((match) => match[0]);
  const afterNoscript = [...after.matchAll(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi)].map((match) => match[0]);
  if (beforeNoscript.join('\n') !== afterNoscript.join('\n')) {
    throw new Error('A noscript block changed. The GTM iframe must stay as it is.');
  }
  if (visibleText(before) !== visibleText(after)) {
    throw new Error('Visible text changed.');
  }
  const beforeHrefs = new Set(hrefsOf(before));
  const afterHrefs = hrefsOf(after);
  for (const href of beforeHrefs) {
    if (!afterHrefs.includes(href)) throw new Error(`Missing href ${href}`);
  }
  for (const href of afterHrefs) {
    if (beforeHrefs.has(href)) continue;
    if (href.startsWith('/icons.svg#') || href.startsWith('/css/emotion-')) continue;
    throw new Error(`Unexpected new href ${href}`);
  }
}

function collectCss(files) {
  const seen = new Map();
  const ordered = [];
  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    const { blocks } = extractEmotionCss(html);
    for (const block of blocks) {
      const previous = seen.get(block.id);
      if (previous === undefined) {
        seen.set(block.id, block.css);
        ordered.push(block.css);
      } else if (previous !== block.css) {
        throw new Error(`Emotion style ${block.id} has two different bodies.`);
      }
    }
  }
  return ordered.join('');
}

function transformHtml(html, map, symbols, inlineRules, stylesheetHref) {
  const extracted = extractEmotionCss(html);
  const masks = [];
  let next = maskScripts(extracted.html, masks);
  next = rewriteClassAttributes(next, map);
  next = rewriteSvgs(next, symbols);
  next = rewriteInlineStyles(next, inlineRules);
  next = unmaskScripts(next, masks);
  if (!next.includes(stylesheetHref)) {
    next = next.replace('</head>', `<link rel="stylesheet" href="${stylesheetHref}"/></head>`);
  }
  assertPreserved(html, next);
  return next;
}

function writeSprite(symbols) {
  const symbolsMarkup = [...symbols.values()]
    .map(({ id, viewBox, inner }) => `<symbol id="${id}" viewBox="${viewBox}">${inner}</symbol>`)
    .join('');
  const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">${symbolsMarkup}</svg>\n`;
  fs.writeFileSync(path.join(ROOT, 'public', 'icons.svg'), svg);
}

function percent(ratio) {
  return `${(ratio * 100).toFixed(2)}%`;
}

function main() {
  if (!fs.existsSync(PAGES)) {
    throw new Error(`Missing ${PAGES}. Run next build first.`);
  }
  const files = pageFiles(PAGES);
  const css = collectCss(files);
  if (!css) throw new Error('No emotion style tags found. Refusing to rewrite HTML.');
  const map = buildAliasMap(css);
  const symbols = new Map();
  const inlineRules = new Map();
  const inlineCss = [];
  const emotionCss = rewriteCss(css, map);
  fs.mkdirSync(PUBLIC_CSS, { recursive: true });
  for (const name of fs.readdirSync(PUBLIC_CSS)) {
    if (/^emotion-.*\.css$/.test(name)) fs.unlinkSync(path.join(PUBLIC_CSS, name));
  }

  // Write pages after a collection pass that uses the final stylesheet name.
  // Inline rules are discovered during the write, so the stylesheet hash has
  // to be computed after that pass. Hold the HTML, then insert the real href.
  const pending = [];
  for (const file of files) {
    const before = fs.readFileSync(file, 'utf8');
    const after = transformHtml(before, map, symbols, inlineRules, '/css/emotion-placeholder.css');
    pending.push({ file, before, after });
  }
  for (const [style, className] of inlineRules) {
    inlineCss.push(`.${className}{${importantize(style)}}`);
  }
  const finalCss = `${emotionCss}${inlineCss.join('')}`;
  const hash = crypto.createHash('sha256').update(finalCss).digest('hex').slice(0, 12);
  const href = `/css/emotion-${hash}.css`;
  fs.writeFileSync(path.join(PUBLIC_CSS, `emotion-${hash}.css`), finalCss);
  writeSprite(symbols);

  const rows = [];
  for (const item of pending) {
    const after = item.after.replaceAll('/css/emotion-placeholder.css', href);
    assertPreserved(item.before, after);
    fs.writeFileSync(item.file, after);
    rows.push({
      route: routeFor(PAGES, item.file),
      before: breakdown(item.before),
      after: breakdown(after),
    });
  }

  // /500 is Next's error document, not a public URL. Every sitemap page must clear 10%.
  const failing = rows.filter((row) => row.route !== '/500' && row.after.ratio <= 0.1);
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
  console.log(`stylesheet ${href} (${finalCss.length} chars), icons ${symbols.size}`);
  for (const route of ['/booking', '/about']) {
    const row = rows.find((item) => item.route === route);
    if (!row) continue;
    console.log(`\n${route} breakdown (bytes)`);
    for (const key of ['total', 'text', 'styleTags', 'scripts', 'nextData', 'jsonLd', 'otherScripts', 'svgs', 'classAttrs', 'styleAttrs']) {
      console.log(`  ${key.padEnd(14)} before ${String(row.before[key]).padStart(8)} after ${String(row.after[key]).padStart(8)}`);
    }
  }
  if (failing.length) {
    throw new Error(`Text-to-HTML ratio is still 10% or below: ${failing.map((row) => row.route).join(', ')}`);
  }
  return rows;
}

if (require.main === module) {
  main();
}

module.exports = {
  aliasPrelude,
  aliasSelector,
  buildAliasMap,
  decodeAttr,
  importantize,
  rewriteClassAttribute,
  rewriteCss,
  shouldKeepInlineStyle,
};
