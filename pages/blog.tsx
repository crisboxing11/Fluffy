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
        <meta property="og:image" content="https://fluffypetwash.com/fluffy-circle.PNG" />
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
        <meta name="twitter:image" content="https://fluffypetwash.com/fluffy-circle.PNG" />
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
                image: `https://fluffypetwash.com${p.image}`,
                url: `https://fluffypetwash.com/blog/${p.slug}`,
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

      <Box
        component="section"
        id="blog-intro"
        aria-labelledby="blog-intro-heading"
        sx={{ py: { xs: 5, md: 7 }, px: { xs: 3, md: 6 }, maxWidth: '800px', mx: 'auto' }}
      >
        <Typography
          id="blog-intro-heading"
          variant="h2"
          component="h2"
          fontWeight="bold"
          textAlign="center"
          mb={3}
          color="#067C92"
          sx={{ fontSize: { xs: '1.6rem', md: '2.1rem' } }}
        >
          From the grooming van
        </Typography>
        <Typography variant="body1" sx={{ color: '#334155', fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.75, mb: 2 }}>
          These notes are the same subjects our groomers talk through at the
          driveway: how to keep a bath calm, why a van visit is easier than a
          salon, which shampoo belongs on a dog, and why shaving a double coat
          is not a way to cool a dog. The posts are for owners in Las Vegas and
          Orlando.
        </Typography>
        <Typography variant="body1" sx={{ color: '#334155', fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.75, mb: 2 }}>
          <Link href="/blog/stress-free-grooming" style={{ color: '#038B95', fontWeight: 700 }}>
            Stress-free grooming
          </Link>{' '}
          walks through a quieter setup, treats, short first sessions, and a
          steady schedule.{' '}
          <Link href="/blog/why-mobile-grooming-works" style={{ color: '#038B95', fontWeight: 700 }}>
            Why mobile grooming works
          </Link>{' '}
          covers one-on-one care and skipping the car ride. Visit length
          depends on your pet&apos;s size and coat.{' '}
          <Link href="/blog/choosing-the-right-shampoo" style={{ color: '#038B95', fontWeight: 700 }}>
            Choosing the right shampoo
          </Link>{' '}
          explains why human shampoo is a poor match for a dog&apos;s skin, and
          how coat type changes the product.
        </Typography>
        <Typography variant="body1" sx={{ color: '#334155', fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.75, mb: 2 }}>
          <Link href="/blog/why-we-dont-shave" style={{ color: '#038B95', fontWeight: 700 }}>
            Why we don&apos;t shave dogs
          </Link>{' '}
          explains double coats, sunburn, and what we do instead: de-shedding,
          sanitary trims, and paw and ear tidying. The{' '}
          <Link href="/blog/orlando-grand-opening" style={{ color: '#038B95', fontWeight: 700 }}>
            Orlando post
          </Link>{' '}
          is the story of taking the same van service from Las Vegas to Orlando.
        </Typography>
        <Typography variant="body1" sx={{ color: '#334155', fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.75 }}>
          Most dogs do well with a groom every 4 to 6 weeks. The{' '}
          <Link href="/services" style={{ color: '#038B95', fontWeight: 700 }}>
            services page
          </Link>{' '}
          describes what each visit includes, and the{' '}
          <Link href="/prebook" style={{ color: '#038B95', fontWeight: 700 }}>
            pre-book page
          </Link>{' '}
          starts the appointment. These notes do not reserve a time or set a
          price. Check the services and prices pages for what a visit includes
          and what it costs today.
        </Typography>
      </Box>

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