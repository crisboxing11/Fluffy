import { Box, Typography, Button } from '@mui/material';
import BookingEmbed from '../components/BookingEmbed';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          color: '#ffffff',
          background: 'linear-gradient(90deg, #02a7cf, #a1e0e3)',
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to Fluffy Pet Wash!
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Premium Mobile Pet Grooming, Now Franchising Nationwide!
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#ff6f61',
            color: '#ffffff',
            '&:hover': { bgcolor: '#d9e1e8', color: '#004d61' },
          }}
          href="/book"
        >
          Book Now
        </Button>
      </Box>

      {/* Booking Section */}
      <Box sx={{ py: 4, bgcolor: '#ffffff' }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Book an Appointment
        </Typography>
        <BookingEmbed />
      </Box>
    </>
  );
};

export default HomePage;