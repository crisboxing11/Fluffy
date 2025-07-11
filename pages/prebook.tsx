import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const PreBookingForm = dynamic(() => import('../components/PreBookingForm'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const PrebookPage = () => (
  <Box>
    <Head>
      <title>Pre-Book | Fluffy Pet Wash</title>
      <meta name="description" content="Select your service area to start booking mobile grooming services." />
    </Head>
    <Box sx={{ py: 6, px: 3 }}>
      <Typography variant="h3" fontWeight="bold" textAlign="center" mb={4}>
        Book Your Appointment
      </Typography>
      <PreBookingForm />
     
    </Box>
  </Box>
);

export default PrebookPage;
