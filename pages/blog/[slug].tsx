import { GetStaticPaths, GetStaticProps } from 'next';
import type { ReactNode } from 'react';
import { posted, BlogFaq, BlogImage, BlogPost } from '../../data/posted';
import Head from 'next/head';
import { Typography, Container, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { BlogFaqSection, faqPageJsonLd } from '../../components/blog/faq';

type Props = {
  post: BlogPost;
};

function readAttr(html: string, name: string): string {
  const match = html.match(new RegExp(`${name}="([^"]*)"`));
  return match?.[1] ?? '';
}

function BlogFigure({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
}: BlogImage & { priority?: boolean }) {
  return (
    <Box component="figure" sx={{ m: 0 }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 900px) 100vw, 800px"
        style={{ width: '100%', height: 'auto', borderRadius: 12 }}
        {...(priority ? { priority: true } : { loading: 'lazy' as const })}
      />
      {caption ? (
        <Typography
          component="figcaption"
          sx={{
            mt: 1,
            color: '#5f7378',
            fontSize: '0.875rem',
            fontStyle: 'italic',
            lineHeight: 1.5,
          }}
        >
          {caption}
        </Typography>
      ) : null}
    </Box>
  );
}

function BlogContent({ html }: { html: string }) {
  const matches = [...html.matchAll(/<figure>([\s\S]*?)<\/figure>/g)];
  if (matches.length === 0) {
    return (
      <Typography
        variant="body1"
        component="div"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  const nodes: ReactNode[] = [];
  let last = 0;
  matches.forEach((match, index) => {
    const start = match.index ?? 0;
    const before = html.slice(last, start);
    if (before.trim()) {
      nodes.push(
        <Typography
          key={`copy-${index}`}
          variant="body1"
          component="div"
          dangerouslySetInnerHTML={{ __html: before }}
        />
      );
    }
    const figure = match[1];
    const src = readAttr(figure, 'src');
    const alt = readAttr(figure, 'alt');
    const width = Number(readAttr(figure, 'width'));
    const height = Number(readAttr(figure, 'height'));
    const caption = figure.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1]?.trim();
    if (!src || !width || !height) {
      nodes.push(
        <Typography
          key={`figure-${index}`}
          variant="body1"
          component="div"
          dangerouslySetInnerHTML={{ __html: match[0] }}
        />
      );
    } else {
      nodes.push(
        <Box key={`figure-${index}`} sx={{ my: 4 }}>
          <BlogFigure
            src={src}
            alt={alt}
            width={width}
            height={height}
            caption={caption}
          />
        </Box>
      );
    }
    last = start + match[0].length;
  });

  const after = html.slice(last);
  if (after.trim()) {
    nodes.push(
      <Typography
        key="copy-end"
        variant="body1"
        component="div"
        dangerouslySetInnerHTML={{ __html: after }}
      />
    );
  }

  return <>{nodes}</>;
}

function BlogFaqSection({ faq }: { faq: BlogFaq[] }) {
  if (faq.length === 0) return null;
  return (
    <Box component="section" aria-labelledby="post-faq-heading" sx={{ mt: 4 }}>
      <Typography id="post-faq-heading" variant="h2" component="h2" gutterBottom>
        Common questions
      </Typography>
      {faq.map((item) => (
        <Box key={item.question}>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            <strong>{item.question}</strong>
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            {item.answer}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function faqPageJsonLd(faq: BlogFaq[]) {
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

const BlogPostPage = ({ post }: Props) => {
  const faqText = (post.faq ?? []).map((item) => `${item.question} ${item.answer}`).join(' ');
  const wordCount = `${post.content} ${faqText}`.replace(/<[^>]+>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  const shareImage = post.heroImage?.src ?? post.image;
  const shareImageAlt = post.heroImage?.alt || post.imageAlt || post.title;
  return (
    <>
      <Head>
        <title>
          {post.metaTitle ? post.metaTitle : `${post.title} | Fluffy Pet Wash`}
        </title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content="dog grooming tips, mobile pet grooming, pet care advice, mobile dog grooming orlando, mobile pet grooming orlando, mobile dog grooming las vegas, mobile pet grooming las vegas, dog groomer near me"
        />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:title"
          content={post.metaTitle ? post.metaTitle : post.title}
        />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content={`https://www.fluffypetwash.com${shareImage}`}
        />
        <meta
          property="og:url"
          content={`https://www.fluffypetwash.com/blog/${post.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Fluffy Pet Wash" />
        <meta property="og:locale" content="en_US" />
        <link
          rel="canonical"
          href={`https://www.fluffypetwash.com/blog/${post.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={post.metaTitle ? post.metaTitle : post.title}
        />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={`https://www.fluffypetwash.com${shareImage}`} />
        <meta name="twitter:image:alt" content={shareImageAlt} />
        <meta name="twitter:site" content="@fluffypetwash" />
        <meta name="twitter:creator" content="@fluffypetwash" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Fluffy Pet Wash" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              image: `https://www.fluffypetwash.com${shareImage}`,
              url: `https://www.fluffypetwash.com/blog/${post.slug}`,
              datePublished: post.date,
              dateModified: post.date,
              timeRequired: `PT${readingTime}M`,
              author: {
                '@type': 'Organization',
                name: 'Fluffy Pet Wash',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Fluffy Pet Wash',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.fluffypetwash.com/fluffy-circle.PNG',
                },
              },
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Blog',
                  item: 'https://www.fluffypetwash.com/blog',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: post.title,
                  item: `https://www.fluffypetwash.com/blog/${post.slug}`,
                },
              ],
            }),
          }}
        />
        {post.faq && post.faq.length > 0 ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(post.faq)) }}
          />
        ) : null}
      </Head>

      {post.heroImage ? null : (
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '40vh', md: '50vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            overflow: 'hidden'
          }}
        >
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <Box
            sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)' }}
          />
          <Typography variant="h1" fontWeight="bold" sx={{ position: 'relative', zIndex: 1 }}>
            {post.title}
          </Typography>
        </Box>
      )}

      <Container
        maxWidth="md"
        sx={post.heroImage ? { pt: { xs: '88px', lg: '104px' }, pb: 6 } : { py: 6 }}
      >
        {post.heroImage ? (
          <>
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{
                mb: 3,
                textAlign: 'center',
                fontSize: { xs: '1.85rem', md: '2.6rem' },
                lineHeight: 1.15,
              }}
            >
              {post.title}
            </Typography>
            <Box sx={{ mb: 4 }}>
              <BlogFigure {...post.heroImage} priority />
            </Box>
          </>
        ) : null}
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          {`${post.date} • ${readingTime} min read`}
        </Typography>
        <BlogContent html={post.content} />
        {post.faq && post.faq.length > 0 ? <BlogFaqSection faq={post.faq} /> : null}
        <Box mt={4}>
          <Typography>
            Learn more on our{' '}
            <Link href="/prices">pricing</Link> and{' '}
            <Link href="/services">services</Link> pages.
          </Typography>
        </Box>
        <Box component="aside" mt={6}>
          <Typography variant="h5" gutterBottom>
            Related Posts
          </Typography>
          <ul>
            {posted
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
          </ul>
        </Box>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posted.map((post) => ({
    params: { slug: post.slug }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posted.find((p) => p.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default BlogPostPage;