import { useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem } from '@mui/material';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    address: '',
    date: '',
  });
  const [availableSlots, setAvailableSlots] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchAvailableSlots = async () => {
    const { address, date } = formData;

    // Geocode address
    const geocodeRes = await fetch('/api/geocode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address }),
    });
    const { lat, lng } = await geocodeRes.json();

    // Check availability
    const availabilityRes = await fetch('/api/check-availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lat, lng, date }),
    });
    const { availableSlots } = await availabilityRes.json();

    setAvailableSlots(availableSlots);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4, bgcolor: '#fff', boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Book Your Appointment
      </Typography>
      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 3 }}
      />
      <TextField
        label="Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        fullWidth
        sx={{ mb: 3 }}
      />
      <Button variant="contained" onClick={fetchAvailableSlots} fullWidth sx={{ mb: 3 }}>
        Check Availability
      </Button>
      {availableSlots.length > 0 && (
        <TextField
          select
          label="Available Time Slots"
          fullWidth
          sx={{ mb: 3 }}
        >
          {availableSlots.map((slot, index) => (
            <MenuItem key={index} value={slot.time}>
              {slot.time} - {slot.travelTime} mins away
            </MenuItem>
          ))}
        </TextField>
      )}
    </Box>
  );
};

export default BookingForm;