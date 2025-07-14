import { GetStaticPaths, GetStaticProps } from 'next';
import { posted, BlogPost } from '../../data/posted';
import Head from 'next/head';
import { Typography, Container, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: BlogPost;
};

const BlogPostPage = ({ post }: Props) => {
  const wordCount = post.content.replace(/<[^>]+>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
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
          content={`https://fluffypetwash.com${post.image}`}
        />
        <meta
          property="og:url"
          content={`https://fluffypetwash.com/blog/${post.slug}`}
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
        <meta name="twitter:image" content={`https://fluffypetwash.com${post.image}`} />
        <meta name="twitter:image:alt" content={post.imageAlt || post.title} />
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
              image: `https://fluffypetwash.com${post.image}`,
              url: `https://fluffypetwash.com/blog/${post.slug}`,
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
                  url: 'https://fluffypetwash.com/fluffy-circle.png',
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
                  item: 'https://fluffypetwash.com/blog',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: post.title,
                  item: `https://fluffypetwash.com/blog/${post.slug}`,
                },
              ],
            }),
          }}
        />
      </Head>

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

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          {`${post.date} • ${readingTime} min read`}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
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