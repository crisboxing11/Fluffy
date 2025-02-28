import { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';
import territories from '../data/territories';
import supportedBreeds from '../data/supportedBreeds';

const PreBookingForm = () => {
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');
  const [error, setError] = useState('');

  // ✅ Future-Proofed Moego URL Mapping for Multiple Locations
  const moegoBookingLinks = {
    "Las Vegas": "https://app.moego.pet/lasvegasbooking",
    "Miami": "https://app.moego.pet/miamibooking", // 🔥 Add new locations easily
    "New York": "https://app.moego.pet/newyorkbooking", // Example for expansion
  };

  const handleSubmit = () => {
    if (!location || !breed) {
      setError('Please select both a location and a dog breed.');
      return;
    }

    if (!supportedBreeds.includes(breed)) {
      setError(
        `We only service the following breeds: ${supportedBreeds.join(', ')}. We do not groom poodles or doodle mixes.`
      );
      return;
    }

    setError('');
    const selectedTerritory = territories.find((territory) => territory.name === location);

    if (selectedTerritory) {
      // ✅ Dynamically set the Moego URL based on the selected location
      const bookingUrl = moegoBookingLinks[location] || "https://app.moego.pet/lasvegasbooking"; // Default fallback
      window.location.href = bookingUrl;
    }
  };

  return (
    <Box
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
        Pre-Booking Form
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={2}>
        Please confirm your dog&apos;s breed and your location to proceed with booking.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
          color: 'error.main',
          backgroundColor: '#ffe6e6',
          border: '1px solid red',
          borderRadius: 2,
          p: 2,
          mb: 4,
        }}
      >
        We only service select breeds and <b>do not groom poodles or doodle mixes</b>.
      </Typography>
      {error && (
        <Typography color="error" mb={2}>
          {error}
        </Typography>
      )}
      <TextField
        select
        label="Select Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
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
      <TextField
        select
        label="Dog Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        fullWidth
        required
        sx={{ mb: 3 }}
      >
        {supportedBreeds.map((breed, index) => (
          <MenuItem key={index} value={breed}>
            {breed}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
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
        Proceed to Booking
      </Button>
    </Box>
  );
};

export default PreBookingForm;