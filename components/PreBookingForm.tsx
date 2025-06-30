import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, TextField, Button, MenuItem, Autocomplete } from '@mui/material';
import territories from '../data/territories';
import supportedBreeds from '../data/supportedBreeds.json';

const PreBookingForm = () => {
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (!location || !breed) {
      setError('Please select both a location and a dog breed.');
      return;
    }

    if (!supportedBreeds.includes(breed)) {
      setError(
        `We only service the following breeds: ${supportedBreeds.join(', ')}. If your breed is not on this list, we cannot groom them.`
      );
      return;
    }

    setError('');
    const selectedTerritory = territories.find((territory) => territory.name === location);

    if (selectedTerritory) {
      // Redirect to the booking page for the selected territory
      router.push(selectedTerritory.bookingUrl);
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
        Confirm Your Service Area & Breed
      </Typography>

      <Typography variant="body1" color="textSecondary" mb={3}>
        This is a <b>pre-check</b> before booking. Simply select your service area and dog breed to continue.  
        The <b>actual booking process</b> happens on the next page.
      </Typography>

      {/* ❌ Strong Warning Message About Breeds */}
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
        <b>Important:</b> We only service the breeds listed below.  
        If your dog’s breed is <b>not on the list</b>, you <b>will not be able to proceed with booking</b>.  
        <br />
        <b>We do not groom poodles or doodle mixes.</b>
      </Typography>

      {error && (
        <Typography color="error" mb={2}>
          {error}
        </Typography>
      )}

      {/* Location Dropdown */}
      <TextField
        select
        label="Select Service Area"
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

      {/* Breed Selection with Autocomplete (Allows Typing) */}
      <Autocomplete
        freeSolo
        options={supportedBreeds}
        value={breed}
        onInputChange={(_, newValue) => setBreed(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Dog Breed"
            fullWidth
            required
            sx={{ mb: 3 }}
          />
        )}
      />

      {/* Submit Button */}
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
        Confirm & Continue to Booking
      </Button>

      {/* Final Reminder Below */}
      <Typography variant="body2" color="textSecondary" mt={3}>
        * If your breed is not listed, we are unable to provide service.
      </Typography>
    </Box>
  );
};

export default PreBookingForm;