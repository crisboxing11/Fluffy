import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const BookingSection = () => {
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    // Validate phone number (simple validation for a 10-digit number)
    if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setError('');
    setIsSubmitted(true);
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 3,
        textAlign: 'center',
        bgcolor: isSubmitted ? '#f9f9f9' : '#ffffff',
        boxShadow: 2,
        borderRadius: 2,
        maxWidth: 800,
        mx: 'auto',
      }}
    >
      {!isSubmitted ? (
        <>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Book Your Appointment
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={4}>
            Enter your phone number to get started with booking.
          </Typography>
          {error && (
            <Typography color="error" mb={2}>
              {error}
            </Typography>
          )}
          <TextField
            label="Phone Number"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            size="large"
            sx={{ textTransform: 'none' }}
          >
            Start Booking
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Continue Your Booking
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={4}>
            Enter details in the form below to complete your appointment.
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: '800px',
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              border: '1px solid #ddd',
            }}
          >
            <iframe
              src="https://booking.moego.pet/ol/FLUFFYPETWASH/book?utm_medium=embed"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Moego Booking"
            ></iframe>
          </Box>
        </>
      )}
    </Box>
  );
};

export default BookingSection;