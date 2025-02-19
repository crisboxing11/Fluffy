import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DogImage from '../public/Dog2.png'; // ✅ Ensure it's inside public/

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '90vh', md: '77vh' }, // ✅ Adjusts mobile height while keeping desktop intact
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        bgcolor: '#FAFAFA',
        zIndex: 2, // ✅ Ensures it's above the next section
      }}
    >
      <Grid container sx={{ height: '100%' }}>
        {/* Left Side: Hero Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: 'relative',
            height: { xs: '50vh', md: '100%' }, // ✅ Full height for desktop, adjusts for mobile
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' }, // ✅ Centered for mobile, left-aligned for desktop
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: '100%' }, // ✅ Ensures full width on all devices
              height: { xs: '100%', md: '100%' }, // ✅ Responsive height
            }}
          >
            <Image
              src={DogImage}
              alt="Happy groomed dog"
              layout="fill"
              objectFit="cover"
              objectPosition="left center" // ✅ Keeps image centered across all screens
              priority
            />
          </Box>
        </Grid>

        {/* Right Side: Hero Text */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' }, // ✅ Center text on mobile, left-align on desktop
            justifyContent: 'center',
            textAlign: { xs: 'center', md: 'left' },
            px: { xs: 3, md: 6 }, // ✅ Adjusted for better mobile spacing
            py: { xs: 6, md: 0 },
            zIndex: 3, // ✅ Ensures text is always visible
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.8rem' }, // ✅ Adjusted dynamically for best readability
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textShadow: '3px 3px 8px rgba(0, 0, 0, 0.4)',
                color: '#067C92',
                mb: 2,
              }}
            >
              Luxury Mobile Pet Grooming
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.6rem' }, // ✅ Ensures readability on mobile
                fontWeight: 400,
                letterSpacing: '1px',
                maxWidth: { xs: '90%', md: '500px' }, // ✅ Prevents text from overflowing
                color: '#333',
                mb: 4,
              }}
            >
              Bringing professional, stress-free pet grooming straight to your doorstep.
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: { xs: 3, md: 4 },
                py: { xs: 1, md: 1.5 },
                fontSize: { xs: '1rem', md: '1.2rem' }, // ✅ Adjusts button size dynamically
                fontWeight: 'bold',
                textTransform: 'none',
                background: 'linear-gradient(90deg, #00ADCD, #038B95)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #038B95, #00ADCD)',
                  transform: 'scale(1.05)',
                },
              }}
              href="#booking"
            >
              Book an Appointment
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;