const fs = require('fs');
const path = require('path');

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
