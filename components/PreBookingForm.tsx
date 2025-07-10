import { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import territories from '../data/territories';

const PreBookingForm = () => {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'location':
        setLocation(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    if (!location) {
      setError('Please select a service area.');
      return;
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('serviceArea', location);
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
    </Box>
  );
};

export default PreBookingForm;
