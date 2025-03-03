import { Box, Typography } from '@mui/material';
import PreBookingForm from '../components/PreBookingForm';
import Home from './home';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const router = useRouter();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/') {
        setKey((prevKey) => prevKey + 1); // Force re-render of PreBookingForm
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Box>
      <Home />
      {/* Booking Section */}
      <Box id="booking" sx={{ py: 6, px: 3, bgcolor: '#f9f9f9' }} key={key}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Book Your Appointment
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
          Before proceeding to booking, confirm your dog&apos;s eligibility for our services.
        </Typography>
        <PreBookingForm />
      </Box>
    </Box>
  );
};

export default HomePage;