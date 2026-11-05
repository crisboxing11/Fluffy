import { BlogFaq } from '../data/posted';

/**
 * FAQPage JSON-LD for a blog post.
 *
 * The visible FAQ is the source of truth:
 * - `post.faq` is rendered by BlogFaqSection
 * - an `<h2>FAQ</h2>` block of `Q:` / `A:` paragraphs in the article HTML
 *   is already visible in the post body
 *
 * Schema is emitted only from those visible questions. Answer text taken
 * from HTML is plain text (tags stripped) so it matches what readers see.
 */
export function visibleBlogFaq(post: { faq?: BlogFaq[]; content: string }): BlogFaq[] {
  const fromContent = faqFromContent(post.content);
  const fromField = (post.faq ?? []).filter((item) => item.question.trim() && item.answer.trim());
  if (fromContent.length === 0) return fromField;
  if (fromField.length === 0) return fromContent;

  const seen = new Set(fromContent.map((item) => `${item.question}\n${item.answer}`));
  return [
    ...fromContent,
    ...fromField.filter((item) => !seen.has(`${item.question}\n${item.answer}`)),
  ];
}

/**
 * Reads the visible FAQ at the end of a post:
 * `<h2>FAQ</h2>` then `<p><strong>Q: ...</strong></p><p>A: ...</p>` pairs.
 * Returns nothing when that section is absent, so posts without a visible
 * FAQ do not get FAQPage schema.
 */
export function faqFromContent(html: string): BlogFaq[] {
  const heading = /<h2[^>]*>\s*FAQ\s*<\/h2>/i.exec(html);
  if (!heading) return [];

  const after = html.slice(heading.index + heading[0].length);
  const nextHeading = /<h[1-6][^>]*>/i.exec(after);
  const section = nextHeading ? after.slice(0, nextHeading.index) : after;

  const pair =
    /<p[^>]*>\s*<strong[^>]*>\s*Q:\s*([\s\S]*?)<\/strong>\s*<\/p>\s*<p[^>]*>\s*A:\s*([\s\S]*?)<\/p>/gi;
  const faqs: BlogFaq[] = [];
  for (const match of section.matchAll(pair)) {
    const question = plainText(match[1]);
    const answer = plainText(match[2]);
    if (question && answer) faqs.push({ question, answer });
  }
  return faqs;
}

export function faqPageJsonLd(faq: BlogFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/** JSON for a script tag. `<` is escaped so the payload cannot close the script. */
export function jsonLdScriptContent(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function plainText(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, ''))
    .replace(/\s+/g, ' ')
    .trim();
}

function decodeEntities(text: string): string {
  return text
    .replace(/&nbsp;/gi, ' ')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/gi, '&');
}
