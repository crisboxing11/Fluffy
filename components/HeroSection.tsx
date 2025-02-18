import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DogImage from '../public/Dog2.png'; // ✅ Ensure it's inside `public/`

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '72vh', md: '77vh' }, // ✅ Slightly reduced height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        bgcolor: '#FAFAFA',
        zIndex: 2, // ✅ Ensures it's above the next section
        
      }}
    >
      {/* Grid Layout for Image (Left) & Text (Right) */}
      <Grid container sx={{ height: '100%' }}>
        {/* Left Side: Hero Image */}
        <Grid item xs={12} md={6} sx={{ position: 'relative', height: '100%' }}>
          <Image
            src={DogImage}
            alt="Happy groomed dog"
            layout="fill"
            objectFit="cover"
            objectPosition="left center"
            priority
          />
        </Grid>

        {/* Right Side: Hero Text */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            textAlign: 'left',
            padding: { xs: '40px', md: '60px' },
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
                fontSize: { xs: '2.2rem', md: '3.8rem' },
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
                fontSize: { xs: '1.1rem', md: '1.6rem' },
                fontWeight: 400,
                letterSpacing: '1px',
                maxWidth: '500px',
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
                px: 4,
                py: 1.5,
                fontSize: '1.2rem',
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