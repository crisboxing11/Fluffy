import { Box, Typography } from '@mui/material';
import PreBookingForm from '../components/PreBookingForm';

import Home from './home';
const HomePage = () => {

  return (
    <Box>
      <Home />
      {/* Booking Section */}
      <Box id="booking" sx={{ py: 6, px: 3, bgcolor: '#f9f9f9' }}>
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