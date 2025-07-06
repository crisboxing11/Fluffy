import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const TestimonialsPage = () => (
  <Box sx={{ py: 8, px: { xs: 3, md: 6 }, textAlign: 'center' }}>
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
    <Typography variant="h3" fontWeight="bold" color="#067C92" mb={4}>
      What Our Customers Say
    </Typography>
    <TestimonialsCarousel />
  </Box>
);

export default TestimonialsPage;
