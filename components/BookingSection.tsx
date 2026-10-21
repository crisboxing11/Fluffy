import { Box, Typography, Paper } from '@mui/material';
import PreBookingForm from './PreBookingForm';
import { motion } from 'framer-motion';

const BookingSection = () => {
  return (
    <Box id="booking" sx={{ py: 6, px: 3, bgcolor: '#f9f9f9' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h3" fontWeight="bold" textAlign="center" mb={4}>
          Book Your Appointment
        </Typography>
      </motion.div>
      <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
        All breeds welcome. Pick your location to continue.
      </Typography>

      <Paper sx={{ maxWidth: 600, mx: 'auto', p: 4, boxShadow: 3 }}>
        <PreBookingForm />
      </Paper>

      {/* Moego Booking Embed */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Ready to choose a time? Book now.
        </Typography>
        <Box sx={{ width: '100%', height: 800, mt: 2 }}>
          <iframe
            src="https://booking.moego.pet/ol/FLUFFYPETWASH/book?utm_medium=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Online booking"
            scrolling="no"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default BookingSection;
