import { Box, Typography, Paper, Link as MuiLink } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import territories from '../data/territories';

const BookingPage = () => {
  const [bookingUrl, setBookingUrl] = useState(territories[0].bookingUrl);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('bookingInfo');
      if (stored) {
        try {
          const info = JSON.parse(stored);
          const territory = territories.find(t => t.name === info.location);
          if (territory) {
            setBookingUrl(territory.bookingUrl);
          }
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  return (
    <Box>
      <Head>
        <title>Book Now | Fluffy Pet Wash</title>
        <meta name="description" content="Schedule your mobile grooming appointment online." />
      </Head>
      <Typography variant="h1" fontWeight="bold" textAlign="center" mt={4} mb={2}>
        Book Your Appointment
      </Typography>
      <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
        Select your location below to continue to our secure booking form.
      </Typography>
      <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: 4, py: 6, px: 3 }}>
        <Box sx={{ flex: 1 }}>
          <iframe
            src={bookingUrl}
            style={{ width: '100%', minHeight: '700px', border: 0 }}
            title="Fluffy Pet Wash Booking"
            scrolling="auto"
          />
        </Box>
        <Paper
          sx={{ p: 3, mt: { xs: 4, md: 0 }, maxWidth: 350, height: 'fit-content' }}
          role="complementary"
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Important Notices
          </Typography>
          <Typography variant="body2" mb={1}>🚫 We do not groom cats.</Typography>
          <Typography variant="body2" mb={1}>
            🧬 If your dog’s breed is not listed in our booking system, we do not service that breed.
          </Typography>
          <Typography variant="body2" mb={2}>
            ✂️ We do not conduct shave downs on double-coated or long-coated breeds.
          </Typography>
          <MuiLink href="/blog/why-we-dont-shave" target="_blank" rel="noopener" underline="hover">
            Why we don’t do shave downs →
          </MuiLink>
        </Paper>
      </Box>
    </Box>
  );
};

export default BookingPage;
