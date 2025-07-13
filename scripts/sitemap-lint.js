const fs = require('fs');
const { execSync } = require('child_process');

const filepath = process.argv[2];
if (!filepath) {
  console.error('Usage: node scripts/sitemap-lint.js <sitemap.xml>');
  process.exit(1);
}

function extractLocs(xml) {
  const regex = /<loc>([^<]+)<\/loc>/g;
  const locs = [];
  let match;
  while ((match = regex.exec(xml))) {
    locs.push(match[1]);
  }
  return locs;
}

function fetchStatus(url) {
  try {
    const code = execSync(`curl -o /dev/null -s -w '%{http_code}' '${url}'`, {
      stdio: 'pipe',
    }).toString().trim();
    return parseInt(code, 10);
  } catch {
    return null;
  }
}

async function main() {
  const indexXml = fs.readFileSync(filepath, 'utf8');
  let urls = extractLocs(indexXml);
  // If this is a sitemap index, load nested sitemaps
  if (urls.length === 1 && urls[0].endsWith('.xml')) {
    const indexPath = require('path').join(require('path').dirname(filepath), urls[0].split('/').pop());
    if (fs.existsSync(indexPath)) {
      const xml = fs.readFileSync(indexPath, 'utf8');
      urls = extractLocs(xml);
    }
  }

  const baseOverride = process.env.BASE_URL;
  const results = [];
  for (let url of urls) {
    if (baseOverride) {
      try {
        const u = new URL(url);
        url = baseOverride + u.pathname;
      } catch {}
    }
    const status = await fetchStatus(url);
    results.push({ url, status });
    console.log(`${url} -> ${status}`);
  }

  const failed = results.filter(r => r.status !== 200);
  if (failed.length) {
    console.error('Sitemap check failed for URLs:', failed);
    process.exit(1);
  }
}

main();
