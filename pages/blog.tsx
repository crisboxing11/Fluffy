import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { posted } from '../data/posted';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

// Build the blog post cards from posted
const posts = posted.map((post) => ({
  title: post.title,
  excerpt: post.excerpt,
  image: post.image,
  imageAlt: post.imageAlt,
  link: `/blog/${post.slug}`,
}));

const BlogPage = () => {
  return (
    <Box>
      <Head>
        <title>Fluffy Pet Wash Blog | Grooming Tips & News</title>
        <meta
          name="description"
          content="Read the latest grooming tips and company news from Fluffy Pet Wash."
        />
        <meta
          name="keywords"
          content="pet grooming blog, dog grooming tips, mobile pet grooming articles"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.fluffypetwash.com/blog" />
        <meta property="og:title" content="Fluffy Pet Wash Blog" />
        <meta
          property="og:description"
          content="Insights and updates from the Fluffy Pet Wash team."
        />
        <meta property="og:image" content="https://fluffypetwash.com/fluffy-circle.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluffypetwash.com/blog" />
        <meta property="og:site_name" content="Fluffy Pet Wash" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fluffy Pet Wash Blog" />
        <meta
          name="twitter:description"
          content="Insights and updates from the Fluffy Pet Wash team."
        />
        <meta name="twitter:image" content="https://fluffypetwash.com/fluffy-circle.png" />
        <meta name="twitter:image:alt" content="Fluffy Pet Wash Blog" />
        <meta name="twitter:site" content="@fluffypetwash" />
        <meta name="twitter:creator" content="@fluffypetwash" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Blog',
              name: 'Fluffy Pet Wash Blog',
              description: 'Insights and updates from the Fluffy Pet Wash team.',
              url: 'https://fluffypetwash.com/blog',
              blogPost: posted.map((p) => ({
                '@type': 'BlogPosting',
                headline: p.title,
                description: p.excerpt,
                image: `https://www.fluffypetwash.com${p.image}`,
                url: `https://www.fluffypetwash.com/blog/${p.slug}`,
                datePublished: p.date,
                author: {
                  '@type': 'Organization',
                  name: 'Fluffy Pet Wash',
                },
              })),
            }),
          }}
        />
      </Head>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
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
            overflow: 'hidden',
            bgcolor: '#00ADCD',
          }}
        >
          <Image
            src="/Four Dogs.png"
            alt="Fluffy dog enjoying spa"
            layout="fill"
            objectFit="cover"
            priority
            sizes="100vw"
            style={{ opacity: 0.4 }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.2)',
            }}
          />
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{ position: 'relative', zIndex: 2, textShadow: '2px 2px 6px rgba(0,0,0,0.6)' }}
          >
            Fluffy Pet Wash Blog
          </Typography>
        </Box>
      </motion.div>

      <Box sx={{ py: 8, px: { xs: 3, md: 6 }, maxWidth: '1200px', mx: 'auto' }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6} color="#067C92">
          Latest Articles
        </Typography>
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div initial="hidden" whileInView="visible" variants={zoomIn} viewport={{ once: true }}>
                <Card
                  sx={{
                    boxShadow: 3,
                    borderRadius: '15px',
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.03)' },
                  }}
                >
                  <Box sx={{ position: 'relative', height: 200 }}>
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                      {post.excerpt}
                    </Typography>
                    <Box mt="auto">
                      <Button component={Link} href={post.link} variant="contained" aria-label={`Read more about ${post.title}`}>
                        Read More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BlogPage;