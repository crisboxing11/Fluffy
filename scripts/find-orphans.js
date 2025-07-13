#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function parseCsv(content) {
  const lines = content.trim().split(/\r?\n/);
  const headers = lines.shift().split(',');
  return lines.map(line => {
    const values = line.split(',');
    const obj = {};
    headers.forEach((h, i) => { obj[h.trim()] = (values[i] || '').trim(); });
    return obj;
  });
}

function collectFiles(dir, acc) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectFiles(full, acc);
    else if (/\.(tsx?|jsx?|md|html)$/.test(entry.name)) acc.push(full);
  }
}

function isLinked(slug, files) {
  const slugRegex = new RegExp(slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  return files.some(f => {
    const txt = fs.readFileSync(f, 'utf8');
    if (f.includes(slug)) return false; // ignore the page file itself
    return slugRegex.test(txt);
  });
}

if (process.argv.length < 3) {
  console.error('Usage: node scripts/find-orphans.js <semrush.csv>');
  process.exit(1);
}

const csvPath = process.argv[2];
const csvData = fs.readFileSync(csvPath, 'utf8');
const rows = parseCsv(csvData);
const slugs = rows.map(r => {
  const url = r['Page URL'] || r['URL'] || r[Object.keys(r)[0]];
  if (!url) return null;
  try { return new URL(url).pathname.replace(/\/$/, ''); }
  catch { return url.startsWith('/') ? url.replace(/\/$/, '') : '/' + url.replace(/\/$/, ''); }
}).filter(Boolean);

const files = [];
collectFiles('pages', files);
collectFiles('components', files);
collectFiles('data', files);

const orphans = [];
for (const slug of slugs) {
  if (!isLinked(slug, files)) {
    orphans.push(slug);
  }
}

if (orphans.length) {
  console.log('Orphaned pages:');
  orphans.forEach(s => console.log('  ' + s));
} else {
  console.log('No orphaned pages found');
}
