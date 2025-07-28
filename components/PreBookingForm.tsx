import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useRouter } from 'next/router';
import territories from '../data/territories';

const PreBookingForm = () => {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [showOffer, setShowOffer] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    if (!location) {
      setError('Please select a service area.');
      return;
    }

    if (location === 'Orlando, Florida') {
      setShowOffer(true);
      return;
    }

    proceedToBooking();
  };

  const proceedToBooking = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('bookingInfo', JSON.stringify({ location }));
    }
    router.push('/booking');
  };

  return (
    <Box
      component="form"
      aria-label="Pre-booking form"
      onSubmit={handleSubmit}
      sx={{
        py: 6,
        px: 3,
        textAlign: 'center',
        bgcolor: '#ffffff',
        boxShadow: 2,
        borderRadius: 2,
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Start Your Booking
      </Typography>

      {error && (
        <Typography color="error" mb={2} aria-live="assertive">
          {error}
        </Typography>
      )}

      <TextField
        select
        label="Service Area"
        name="location"
        value={location}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 3 }}
      >
        {territories.map((territory, index) => (
          <MenuItem key={index} value={territory.name}>
            {territory.name}
          </MenuItem>
        ))}
      </TextField>

      {/* Additional booking details are collected in the MoeGo form */}

      <Button
        variant="contained"
        color="primary"
        type="submit"
        aria-label="Continue to booking"
        size="large"
        sx={{
          textTransform: 'none',
          background: 'linear-gradient(90deg, #00ADCD, #038B95)',
          px: 4,
          py: 1.5,
          fontWeight: 'bold',
          '&:hover': {
            background: 'linear-gradient(90deg, #038B95, #00ADCD)',
            transform: 'scale(1.05)',
            transition: 'all 0.3s ease-in-out',
          },
        }}
      >
        Continue to Booking
      </Button>
      <Dialog open={showOffer} onClose={() => setShowOffer(false)}>
        <DialogTitle sx={{
          background: 'linear-gradient(90deg, #00ADCD, #038B95)',
          color: '#fff',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
          Special Orlando Offer
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center', p: 3 }}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            10% Off All August Bookings! Use Code: FLUFFY10 before submitting your booking. 

          </Typography>
          <Typography variant="body1">
            Join the Fluffy Preferred Program after your first appointment and keep your membership active to enjoy lifetime perks. Spots are limited, so book now to secure your discount and exclusive benefits!
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button onClick={() => setShowOffer(false)} color="secondary">
            Close
          </Button>
          <Button
            onClick={proceedToBooking}
            variant="contained"
            sx={{ background: 'linear-gradient(90deg, #00ADCD, #038B95)' }}
          >
            Continue to Booking
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PreBookingForm;
