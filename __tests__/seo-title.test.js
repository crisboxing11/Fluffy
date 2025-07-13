const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of list) {
    const full = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getHtmlFiles(full));
    } else if (file.isFile() && full.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

test('all built html pages have a <title>', () => {
  const buildDir = path.join(__dirname, '..', '.next', 'server', 'pages');
  if (!fs.existsSync(buildDir)) {
    throw new Error('Build directory not found. Run `npm run build` first.');
  }
  const htmlFiles = getHtmlFiles(buildDir);
  const missing = htmlFiles.filter(file => {
    const content = fs.readFileSync(file, 'utf8');
    return !/<title[^>]*>.*<\/title>/i.test(content);
  });
  expect(missing).toEqual([]);
});

test('page titles are 70 characters or less', () => {
  const buildDir = path.join(__dirname, '..', '.next', 'server', 'pages');
  if (!fs.existsSync(buildDir)) {
    throw new Error('Build directory not found. Run `npm run build` first.');
  }
  const htmlFiles = getHtmlFiles(buildDir);
  const longTitles = [];
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const match = content.match(/<title[^>]*>(.*?)<\/title>/i);
    if (match) {
      const title = match[1].trim();
      if (title.length > 70) {
        longTitles.push({ file, title, length: title.length });
      }
    }
  });
  expect(longTitles).toEqual([]);
});
