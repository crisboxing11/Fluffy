import { useState } from "react";
import { Box, TextField, Button, Typography, MenuItem } from "@mui/material";

// Define the type for available slots
type AvailableSlot = {
  time: string; // Time of the available slot
  travelTime: string; // Travel time to the appointment (optional)
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    date: "",
  });

  // Explicitly define the state type
  const [availableSlots, setAvailableSlots] = useState<AvailableSlot[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchAvailableSlots = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { address, date } = formData;

    try {
      // Mocking API response for now
      const mockResponse = [
        { time: "10:00 AM", travelTime: "15 minutes" },
        { time: "2:00 PM", travelTime: "20 minutes" },
      ];
      setAvailableSlots(mockResponse);
    } catch (error) {
      console.error("Error fetching available slots:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 4, bgcolor: "#fff", boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Book Your Appointment
      </Typography>

      {/* Address */}
      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 3 }}
      />

      {/* Date */}
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

      {/* Fetch Availability Button */}
      <Button variant="contained" onClick={fetchAvailableSlots} fullWidth sx={{ mb: 3 }}>
        Check Availability
      </Button>

      {/* Available Time Slots */}
      {availableSlots.length > 0 && (
        <TextField
          select
          label="Available Time Slots"
          fullWidth
          sx={{ mb: 3 }}
        >
          {availableSlots.map((slot, index) => (
            <MenuItem key={index} value={slot.time}>
              {slot.time} - {slot.travelTime}
            </MenuItem>
          ))}
        </TextField>
      )}
    </Box>
  );
};

export default BookingForm;