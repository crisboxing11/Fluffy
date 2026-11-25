const fs = require('fs');
const path = require('path');
const { measure, pageFiles, routeFor } = require('../scripts/text-html-ratio');

function readPage(name) {
  const file = path.join(__dirname, '..', '.next', 'server', 'pages', name);
  if (!fs.existsSync(file)) {
    throw new Error(`Build output not found at ${file}. Run \`npm run build\` first.`);
  }
  return fs.readFileSync(file, 'utf8');
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&apos;|&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

describe('crawled HTML includes page copy', () => {
  test('booking is not a loading shell', () => {
    const text = visibleText(readPage('booking.html'));
    expect(text).toContain('Complete Your Booking');
    expect(text).toContain('Important Service Guidelines');
    expect(text).not.toContain('Loading your booking...');
    expect(text.split(' ').length).toBeGreaterThan(120);
  });

  test('contact is not a loading shell', () => {
    const text = visibleText(readPage('contact.html'));
    expect(text).toContain("Let's Connect!");
    expect(text).not.toContain('Loading Contact Page');
    expect(text.split(' ').length).toBeGreaterThan(200);
  });

  test('booking document has a canonical on www', () => {
    const html = readPage('booking.html');
    expect(html).toContain('rel="canonical" href="https://www.fluffypetwash.com/booking"');
  });
});

describe('text to HTML ratio', () => {
  test('every prerendered page is at least 12 percent', () => {
    const root = path.join(__dirname, '..', '.next', 'server', 'pages');
    if (!fs.existsSync(root)) {
      throw new Error('Build directory not found. Run `npm run build` first.');
    }
    const low = pageFiles(root)
      .filter((file) => !file.endsWith(`${path.sep}500.html`))
      .map((file) => {
        const html = fs.readFileSync(file, 'utf8');
        return { route: routeFor(root, file), ...measure(html) };
      })
      .filter((page) => page.ratio < 0.12);
    expect(low.map((page) => `${page.route} ${(page.ratio * 100).toFixed(2)}%`)).toEqual([]);
  });
});
