import { GetStaticPaths, GetStaticProps } from 'next';
import { posted, BlogPost } from '../data/posted';
import Head from 'next/head';
import { Typography, Container } from '@mui/material';

type Props = {
  post: BlogPost;
};

const BlogPostPage = ({ post }: Props) => {
  return (
    <>
      <Head>
        <title>{post.title} | Fluffy Pet Wash Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={`https://fluffypetwash.com${post.image}`} />
        <meta property="og:url" content={`https://fluffypetwash.com/blog/${post.slug}`} />
      </Head>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>{post.title}</Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>{post.date}</Typography>
        <img
          src={post.image}
          alt={post.title}
          style={{ width: '100%', borderRadius: '15px', marginBottom: '24px' }}
        />
        <Typography
          variant="body1"
          component="div"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
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