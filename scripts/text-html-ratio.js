/**
 * Text-to-HTML ratio for prerendered pages.
 *
 * Visible text is the document with scripts, styles, and tags removed.
 * The ratio is visible text bytes divided by total HTML bytes.
 * Semrush flags a page at 10% or below, so a passing page is above 10%.
 */

const fs = require('fs');
const path = require('path');

function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '');
}

function bytes(value) {
  return Buffer.byteLength(value, 'utf8');
}

function measure(html) {
  const total = bytes(html);
  const text = bytes(visibleText(html));
  return {
    total,
    text,
    ratio: total === 0 ? 0 : text / total,
  };
}

function blockBytes(html, pattern) {
  let total = 0;
  for (const match of html.matchAll(pattern)) total += bytes(match[0]);
  return total;
}

function breakdown(html) {
  const scripts = [...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)].map((match) => match[0]);
  const nextData = scripts.filter((script) => script.includes('id="__NEXT_DATA__"'));
  const jsonLd = scripts.filter((script) => /application\/ld\+json/i.test(script));
  const otherScripts = scripts.filter((script) => !nextData.includes(script) && !jsonLd.includes(script));
  const sum = (list) => list.reduce((total, item) => total + bytes(item), 0);
  return {
    ...measure(html),
    styleTags: blockBytes(html, /<style\b[^>]*>[\s\S]*?<\/style>/gi),
    scripts: sum(scripts),
    nextData: sum(nextData),
    jsonLd: sum(jsonLd),
    otherScripts: sum(otherScripts),
    svgs: blockBytes(html, /<svg\b[\s\S]*?<\/svg>/gi),
    classAttrs: blockBytes(html, /\sclass="[^"]*"/g),
    styleAttrs: blockBytes(html, /\sstyle="[^"]*"/g),
  };
}

function pageFiles(root) {
  const files = [];
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (name.endsWith('.html')) files.push(full);
    }
  }
  walk(root);
  return files.sort();
}

function routeFor(root, file) {
  const rel = path.relative(root, file).replace(/\.html$/, '').replace(/\\/g, '/');
  if (rel === 'index') return '/';
  return `/${rel}`;
}

module.exports = {
  visibleText,
  bytes,
  measure,
  breakdown,
  pageFiles,
  routeFor,
};
