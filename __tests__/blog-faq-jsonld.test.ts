import fs from 'fs';
import path from 'path';
import { posted } from '../data/posted';
import { faqFromContent, faqPageJsonLd, jsonLdScriptContent, visibleBlogFaq } from '../lib/blogFaq';

const POODLE_FAQ_HTML = `
      <p>Questions first? Visit our <a href="/faq">FAQ</a>.</p>

      <h2>FAQ</h2>
      <p><strong>Q: How often should a poodle be groomed?</strong></p>
      <p>A: Many owners book every 4 to 6 weeks, but it depends on coat texture, how much you brush at home and the length you like. Your groomer can suggest a rhythm after the first visit.</p>
      <p><strong>Q: Do cut names like "teddy bear" or "lamb" lock in the exact look?</strong></p>
      <p>A: No. Style names and photos are a helpful starting point. The final cut is decided in person with your groomer based on coat condition and what is comfortable for your dog that day.</p>
      <p><strong>Q: How much does poodle grooming cost?</strong></p>
      <p>A: Dog grooming starts at $85 for small dogs, with higher starting tiers by size on our <a href="/prices">prices page</a>. For poodles needing a haircut or dematting, an up-to-$50 specialized breed fee applies and already includes the haircut (example: large with haircut $140 + $50 = $190). The separate haircut add-on does not stack.</p>
      <p><strong>Q: Do you only groom poodles and doodles?</strong></p>
      <p>A: No. We groom all dog breeds, plus cats. Poodles and doodles are welcome alongside every other breed.</p>
      <p><strong>Q: Is deshedding extra?</strong></p>
      <p>A: No. Deshedding is included in every groom. Grooms are all-inclusive; a full haircut is the only add-on.</p>
`;

test('parses a visible HTML FAQ and strips tags from answers', () => {
  const faq = faqFromContent(POODLE_FAQ_HTML);
  expect(faq.map((item) => item.question)).toEqual([
    'How often should a poodle be groomed?',
    'Do cut names like "teddy bear" or "lamb" lock in the exact look?',
    'How much does poodle grooming cost?',
    'Do you only groom poodles and doodles?',
    'Is deshedding extra?',
  ]);
  expect(faq[2].answer).toBe(
    'Dog grooming starts at $85 for small dogs, with higher starting tiers by size on our prices page. For poodles needing a haircut or dematting, an up-to-$50 specialized breed fee applies and already includes the haircut (example: large with haircut $140 + $50 = $190). The separate haircut add-on does not stack.'
  );
  expect(faq[2].answer).not.toContain('<');
  const visible = POODLE_FAQ_HTML.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ');
  for (const item of faq) {
    expect(visible).toContain(item.question);
    expect(visible).toContain(item.answer);
  }
});

test('does not invent an FAQ from a link or from Q and A outside an FAQ heading', () => {
  expect(faqFromContent('<p>Visit our <a href="/faq">FAQ</a>.</p>')).toEqual([]);
  expect(
    faqFromContent('<p><strong>Q: Is this an FAQ?</strong></p><p>A: No heading, so no.</p>')
  ).toEqual([]);
  expect(faqFromContent('<h2>Booking questions</h2><p><strong>Q: When?</strong></p><p>A: Today.</p>')).toEqual(
    []
  );
});

test('posts with a faq array keep that visible copy as the schema text', () => {
  const withFaq = posted.filter((post) => post.faq && post.faq.length > 0);
  expect(withFaq.length).toBeGreaterThan(0);
  for (const post of withFaq) {
    expect(faqFromContent(post.content)).toEqual([]);
    expect(visibleBlogFaq(post)).toEqual(post.faq);
    const data = faqPageJsonLd(visibleBlogFaq(post));
    expect(data['@type']).toBe('FAQPage');
    expect(data.mainEntity.map((item) => item.name)).toEqual(post.faq!.map((item) => item.question));
    expect(data.mainEntity.map((item) => item.acceptedAnswer.text)).toEqual(
      post.faq!.map((item) => item.answer)
    );
    expect(JSON.parse(jsonLdScriptContent(data))).toEqual(data);
  }
});

test('posts with no visible FAQ produce no FAQPage entity', () => {
  const withoutFaq = posted.filter((post) => !post.faq || post.faq.length === 0);
  expect(withoutFaq.length).toBeGreaterThan(0);
  for (const post of withoutFaq) {
    expect(visibleBlogFaq(post)).toEqual([]);
  }
});

function visiblePageText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/gi, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

test('built blog pages emit one FAQPage only when a visible FAQ is on the page', () => {
  const dir = path.join(__dirname, '..', '.next', 'server', 'pages', 'blog');
  if (!fs.existsSync(dir)) {
    throw new Error('Build directory not found. Run `npm run build` first.');
  }
  const files = fs.readdirSync(dir).filter((name) => name.endsWith('.html'));
  expect(files.length).toBe(posted.length);

  for (const file of files) {
    const html = fs.readFileSync(path.join(dir, file), 'utf8');
    const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(
      (match) => JSON.parse(match[1]) as { '@type'?: string; mainEntity?: { name: string; acceptedAnswer: { text: string } }[] }
    );
    const faqs = blocks.filter((block) => block['@type'] === 'FAQPage');
    const hasVisibleFaq = html.includes('id="post-faq-heading"');
    if (!hasVisibleFaq) {
      expect(faqs).toEqual([]);
      continue;
    }
    expect(faqs).toHaveLength(1);
    const visible = visiblePageText(html);
    expect(visible).toContain('Common questions');
    for (const entity of faqs[0].mainEntity ?? []) {
      expect(visible).toContain(entity.name);
      expect(visible).toContain(entity.acceptedAnswer.text);
    }
  }
});

test('HTML FAQ JSON-LD parses and uses Question and Answer pairs', () => {
  const data = faqPageJsonLd(faqFromContent(POODLE_FAQ_HTML));
  const parsed = JSON.parse(jsonLdScriptContent(data));
  expect(parsed['@context']).toBe('https://schema.org');
  expect(parsed['@type']).toBe('FAQPage');
  expect(parsed.mainEntity).toHaveLength(5);
  for (const entity of parsed.mainEntity) {
    expect(entity['@type']).toBe('Question');
    expect(entity.acceptedAnswer['@type']).toBe('Answer');
    expect(entity.acceptedAnswer.text).not.toMatch(/<[^>]+>/);
  }
});
