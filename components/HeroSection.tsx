import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(to right, #0AC3E6, #00ADCD)',
        color: 'white',
        p: 2,
      }}
    >
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Typography variant="h2" fontWeight="bold" mb={2}>
          Professional Mobile Pet Grooming
        </Typography>
        <Typography variant="h5" mb={4}>
          Bringing high-quality grooming to your doorstep!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            textTransform: 'none',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#038B95',
              transform: 'scale(1.1)',
            },
          }}
          href="#booking"
        >
          Book an Appointment
        </Button>
      </motion.div>
    </Box>
  );
};

export default HeroSection;