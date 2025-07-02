import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Autocomplete,
  Skeleton,
} from '@mui/material';
import territories from '../data/territories';
import supportedBreeds from '../data/supportedBreeds.json'; // Importing from JSON file

const PreBookingForm = () => {
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');
  const [error, setError] = useState('');
  const [showIframe, setShowIframe] = useState(false);
  const [iframeUrl, setIframeUrl] = useState('');
  const [iframeLoading, setIframeLoading] = useState(true);

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
      // Add cache-busting param
      const randomQuery = `&nocache=${Date.now()}`;
      setIframeUrl(`${selectedTerritory.bookingUrl}${randomQuery}`);
      setIframeLoading(true);
      setShowIframe(true);
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
      {!showIframe ? (
        <>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Confirm Your Service Area & Breed
          </Typography>

          <Typography variant="body1" color="textSecondary" mb={3}>
            This is a <b>pre-check</b> before booking. Simply select your service area and dog breed to continue.
            The <b>actual booking process</b> happens on the next page.
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

          <Typography variant="body2" color="textSecondary" mt={3}>
            * If your breed is not listed, we are unable to provide service.
          </Typography>
        </>
      ) : (
        <Box sx={{ width: '100%', height: '800px', mt: 4, position: 'relative' }}>
          {iframeLoading && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
            />
          )}
          <iframe
            src={iframeUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Online booking"
            scrolling="no"
            loading="lazy"
            style={{ display: iframeLoading ? 'none' : 'block' }}
            onLoad={() => setIframeLoading(false)}
          />
        </Box>
      )}
    </Box>
  );
};

export default PreBookingForm;
