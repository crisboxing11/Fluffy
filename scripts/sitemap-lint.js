#!/usr/bin/env node
const fs = require('fs');
const path = process.argv[2];
if (!path) {
  console.error('Usage: sitemap-lint <path> [--no-redirects] [--status=200] [--base=http://localhost:3000]');
  process.exit(1);
}
const wantStatus = parseInt(process.argv.find(a => a.startsWith('--status='))?.split('=')[1] || '200', 10);
const checkRedirects = process.argv.includes('--no-redirects');
const base = process.argv.find(a => a.startsWith('--base='))?.split('=')[1];
const xml = fs.readFileSync(path, 'utf8');
const urls = [];
const regex = /<loc>([^<]+)<\/loc>/g;
let m;
while ((m = regex.exec(xml)) !== null) {
  urls.push(m[1]);
}
(async () => {
  let fails = 0;
  for (const url of urls) {
    const u = new URL(url);
    const fetchUrl = base ? new URL(u.pathname + u.search, base).href : url;
    try {
      const res = await fetch(fetchUrl, { method: 'HEAD', redirect: 'manual' });
      const redirectLocation = res.headers.get('location');
      if (checkRedirects && redirectLocation) {
        console.error(`Redirect ${url} -> ${redirectLocation}`);
        fails++;
        continue;
      }
      if (res.status !== wantStatus) {
        console.error(`Status ${res.status} for ${url}`);
        fails++;
      }
    } catch (err) {
      console.error(`Error fetching ${url}: ${err.message}`);
      fails++;
    }
  }
  if (fails > 0) {
    console.error(`${fails} errors`);
    process.exit(1);
  }
})();
