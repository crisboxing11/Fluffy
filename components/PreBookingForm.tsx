import { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';

const PreBookingForm = () => {
  const [breed, setBreed] = useState('');
  const [error, setError] = useState('');

  const supportedBreeds = [
    'Golden Retriever',
    'Labrador Retriever',
    'German Shepherd',
    'Bulldog',
    'Beagle',
    'Chihuahua',
    'Shih Tzu',
    'Yorkshire Terrier',
  ];

  const handleSubmit = () => {
    if (!supportedBreeds.includes(breed)) {
      setError(
        `We only service the following breeds: ${supportedBreeds.join(', ')}. We do not groom poodles or doodle mixes.`
      );
    } else {
      setError('');
      window.location.href = 'https://booking.moego.pet/ol/FLUFFYPETWASH/book?utm_medium=embed';
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', py: 6, px: 3, textAlign: 'center', bgcolor: 'background.paper', boxShadow: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Pre-Booking Form
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
      <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
        Proceed to Booking
      </Button>
    </Box>
  );
};

export default PreBookingForm;