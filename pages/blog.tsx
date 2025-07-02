import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const posts = [
  {
    title: '5 Tips for Stress-Free Grooming',
    excerpt:
      'Discover simple ways to make grooming a relaxing experience for your furry friend.',
    image: '/Dog5.jpeg',
    link: '#',
  },
  {
    title: 'Why Mobile Grooming Works',
    excerpt:
      'Learn about the benefits of having a professional groomer come right to your door.',
    image: '/Dog6.jpeg',
    link: '#',
  },
  {
    title: 'Choosing the Right Shampoo',
    excerpt:
      'We break down hypoallergenic options to keep your pet’s coat shiny and healthy.',
    image: '/Dog7.jpeg',
    link: '#',
  },
];

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
        <link rel="canonical" href="https://fluffypetwash.com/blog" />
        <meta property="og:title" content="Fluffy Pet Wash Blog" />
        <meta
          property="og:description"
          content="Insights and updates from the Fluffy Pet Wash team."
        />
        <meta property="og:image" content="https://fluffypetwash.com/fluffy-circle.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluffypetwash.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fluffy Pet Wash Blog" />
        <meta
          name="twitter:description"
          content="Insights and updates from the Fluffy Pet Wash team."
        />
        <meta name="twitter:image" content="https://fluffypetwash.com/fluffy-circle.png" />
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
            src="/Dog3.png"
            alt="Fluffy dog enjoying spa"
            layout="fill"
            objectFit="cover"
            loading="lazy"
            style={{ opacity: 0.4 }}
          />
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{ position: 'relative', zIndex: 2 }}
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
                <Card sx={{ boxShadow: 3, borderRadius: '15px', height: '100%' }}>
                  <Box sx={{ position: 'relative', height: 200 }}>
                    <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                  </Box>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" mb={2}>
                      {post.excerpt}
                    </Typography>
                    <Button variant="contained" href={post.link} sx={{ mt: 'auto' }}>
                      Read More
                    </Button>
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
