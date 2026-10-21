import { Fragment, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { BlogFaq, BlogPost } from '../../data/posted';

/**
 * Shared caption style for hero and inline blog images.
 * Future posts get the same treatment by setting `imageCaption` and by
 * placing a <figure><img width height><figcaption> in `content`.
 */
const captionSx = {
  mt: 1.25,
  mb: 0,
  pl: 1.5,
  borderLeft: '2px solid #A1E0E3',
  color: '#5E7380',
  fontSize: { xs: '0.8125rem', md: '0.875rem' },
  lineHeight: 1.55,
  fontStyle: 'italic',
  letterSpacing: '0.01em',
} as const;

const proseSx = {
  '& h2': {
    color: '#067C92',
    fontSize: { xs: '1.35rem', md: '1.6rem' },
    fontWeight: 700,
    lineHeight: 1.25,
    mt: { xs: 4, md: 5 },
    mb: 1.5,
  },
  '& p': {
    color: '#334155',
    fontSize: { xs: '1rem', md: '1.0625rem' },
    lineHeight: 1.75,
    mb: 2,
  },
  '& ul': {
    pl: 2.5,
    mb: 2,
    color: '#334155',
  },
  '& li': {
    mb: 1,
    lineHeight: 1.65,
  },
  '& a': {
    color: '#038B95',
    fontWeight: 700,
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  },
  '& strong': {
    color: '#0B3C48',
  },
} as const;

export function hasIntrinsicHero(
  post: BlogPost
): post is BlogPost & { imageWidth: number; imageHeight: number } {
  return typeof post.imageWidth === 'number' && typeof post.imageHeight === 'number';
}

export function BlogHero({
  post,
}: {
  post: BlogPost & { imageWidth: number; imageHeight: number };
}) {
  return (
    <Box
      component="figure"
      sx={{
        m: 0,
        // Layout's main padding would leave a gap under the fixed navbar.
        mt: -4,
        pt: { xs: '72px', md: '88px' },
        bgcolor: '#fff',
      }}
    >
      <Image
        src={post.image}
        alt={post.imageAlt || post.title}
        width={post.imageWidth}
        height={post.imageHeight}
        priority
        fetchPriority="high"
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: 'min(62vh, 640px)',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          backgroundColor: '#E7F6F8',
        }}
      />
      {post.imageCaption ? (
        <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 2.5, md: 3 } }}>
          <Typography component="figcaption" sx={captionSx}>
            {post.imageCaption}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
}

type FigureImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

function readAttr(attrs: string, name: string): string | undefined {
  const match = attrs.match(new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'));
  if (!match) return undefined;
  return match[2] ?? match[3];
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function parseFigure(figureHtml: string): FigureImage | null {
  const img = figureHtml.match(/<img\b([^>]*)\/?>/i);
  if (!img) return null;
  const src = readAttr(img[1], 'src');
  const width = Number(readAttr(img[1], 'width'));
  const height = Number(readAttr(img[1], 'height'));
  if (!src || !Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
    return null;
  }
  const alt = decodeEntities(readAttr(img[1], 'alt') ?? '');
  const captionMatch = figureHtml.match(/<figcaption>([\s\S]*?)<\/figcaption>/i);
  const caption = captionMatch ? decodeEntities(captionMatch[1].trim()) : undefined;
  return { src, alt, width, height, caption: caption || undefined };
}

function BlogFigure({ figure }: { figure: FigureImage }) {
  return (
    <Box component="figure" sx={{ m: 0, my: { xs: 3, md: 4 } }}>
      <Box
        sx={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(6, 124, 146, 0.12)',
          bgcolor: '#E7F6F8',
          lineHeight: 0,
        }}
      >
        <Image
          src={figure.src}
          alt={figure.alt}
          width={figure.width}
          height={figure.height}
          loading="lazy"
          sizes="(max-width: 900px) 100vw, 860px"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Box>
      {figure.caption ? (
        <Typography component="figcaption" sx={captionSx}>
          {figure.caption}
        </Typography>
      ) : null}
    </Box>
  );
}

const FIGURE_RE = /<figure\b[^>]*>[\s\S]*?<\/figure>/gi;

/**
 * Renders a post's HTML, upgrading each <figure> to next/image so inline
 * photos keep their width and height and do not shift the layout.
 * Any future post can use the same <figure><img width height><figcaption> markup.
 */
export function BlogContent({ html }: { html: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of html.matchAll(FIGURE_RE)) {
    const index = match.index ?? 0;
    const before = html.slice(lastIndex, index);
    if (before.trim()) {
      nodes.push(
        <Box key={`html-${key}`} dangerouslySetInnerHTML={{ __html: before }} />
      );
      key += 1;
    }
    const figure = parseFigure(match[0]);
    if (figure) {
      nodes.push(<BlogFigure key={`figure-${key}`} figure={figure} />);
    } else if (match[0].trim()) {
      nodes.push(
        <Box key={`html-${key}`} dangerouslySetInnerHTML={{ __html: match[0] }} />
      );
    }
    key += 1;
    lastIndex = index + match[0].length;
  }

  const after = html.slice(lastIndex);
  if (after.trim()) {
    nodes.push(<Box key={`html-${key}`} dangerouslySetInnerHTML={{ __html: after }} />);
  }

  return <Box sx={proseSx}>{nodes}</Box>;
}

const INTERNAL_PATH = /(\/(?:prices|prebook|doodle-grooming-las-vegas|services))/g;

function answerWithLinks(answer: string): ReactNode[] {
  const parts = answer.split(INTERNAL_PATH);
  return parts.map((part, index) =>
    part.startsWith('/') ? (
      <Link key={index} href={part}>
        {part}
      </Link>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );
}

/** Visible FAQ. Questions and answers are the same strings used for FAQPage JSON-LD. */
export function BlogFaqSection({ faq }: { faq: BlogFaq[] }) {
  if (faq.length === 0) return null;
  return (
    <Box component="section" aria-labelledby="post-faq-heading" sx={proseSx}>
      <h2 id="post-faq-heading">FAQ</h2>
      {faq.map((item) => (
        <Box key={item.question}>
          <p>
            <strong>{item.question}</strong>
          </p>
          <p>{answerWithLinks(item.answer)}</p>
        </Box>
      ))}
    </Box>
  );
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
