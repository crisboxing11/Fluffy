import { Box, Typography, Button } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import PawPattern from '../public/paw-pattern.jpeg';
import HeroImage from '../public/Dog6.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const TestimonialsPage = () => (
  <Box>
    <Head>
      <title>Customer Testimonials | Fluffy Pet Wash</title>
      <meta
        name="description"
        content="See what our customers are saying about our mobile pet grooming services."
      />
      <meta
        name="keywords"
        content="Fluffy Pet Wash testimonials, customer reviews, mobile pet grooming reviews"
      />
      <meta name="author" content="Fluffy Pet Wash" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://fluffypetwash.com/testimonials" />
      <meta property="og:title" content="Customer Testimonials | Fluffy Pet Wash" />
      <meta
        property="og:description"
        content="See what our customers are saying about our mobile pet grooming services."
      />
      <meta property="og:image" content="https://fluffypetwash.com/fluffy-circle.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fluffypetwash.com/testimonials" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Customer Testimonials | Fluffy Pet Wash" />
      <meta
        name="twitter:description"
        content="See what our customers are saying about our mobile pet grooming services."
      />
      <meta name="twitter:image" content="https://fluffypetwash.com/fluffy-circle.png" />
    </Head>

    {/* Hero Section */}
    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '50vh', md: '60vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          overflow: 'hidden',
        }}
      >
        <Image src={HeroImage} alt="Happy dog after grooming" layout="fill" objectFit="cover" loading="lazy" />
        <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ position: 'relative', zIndex: 2, textShadow: '2px 2px 6px rgba(0,0,0,0.6)', fontSize: { xs: '2rem', md: '3.5rem' } }}
        >
          Happy Paws, Happy Parents
        </Typography>
      </Box>
    </motion.div>

    <Box sx={{ py: 8, px: { xs: 3, md: 6 }, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" color="#067C92" mb={4}>
        What Our Customers Say
      </Typography>
      <TestimonialsCarousel />
    </Box>

    {/* CTA */}
    <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
      <Box
        sx={{
          py: 6,
          textAlign: 'center',
          bgcolor: '#026D7C',
          color: 'white',
          backgroundImage: `url(${PawPattern.src})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '120px',
          backgroundBlendMode: 'multiply',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Ready to Pamper Your Pet?
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 3, bgcolor: '#fff', color: '#038B95', fontWeight: 'bold' }}
          href="/#booking"
        >
          Book Now
        </Button>
      </Box>
    </motion.div>
  </Box>
);

export default TestimonialsPage;
