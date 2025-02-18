import { Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import Dog3Image from '../public/Dog3.png'; // Updated image

const WhyChooseSection = () => {
  return (
    <Box sx={{ bgcolor: '#f9f9f9', py: { xs: 6, md: 10 }, px: 3 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Side: Centered Text */}
        <Grid item xs={12} md={5} sx={{ textAlign: 'center', px: { xs: 2, md: 4 } }}>
          <Typography variant="h4" fontWeight="bold" color="#067C92" mb={3}>
            Why Choose Fluffy Pet Wash?
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="#038B95" mb={1}>
            🛁 Premium Mobile Grooming
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Say goodbye to stressful trips to the salon! Our fully equipped mobile grooming vans bring 
            the best grooming experience right to your doorstep.
          </Typography>

          <Typography variant="h6" fontWeight="bold" color="#038B95" mb={1}>
            ⏳ Save Time & Effort
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            No waiting, no hassle! We provide a seamless, one-on-one experience to give your pet 
            the **best care possible** while saving you time.
          </Typography>

          <Typography variant="h6" fontWeight="bold" color="#038B95" mb={1}>
            🐶 Stress-Free & Safe
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            No crowded salons or loud dryers—just a **gentle, calming** grooming session designed 
            for your pet’s comfort and well-being.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              background: 'linear-gradient(90deg, #00ADCD, #038B95)',
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(90deg, #038B95, #00ADCD)',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease-in-out',
              },
            }}
            href="#services"
          >
            Learn More
          </Button>
        </Grid>

        {/* Right Side: Bigger Image Shifted Right */}
        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 850, // Increased size
              display: 'flex',
              justifyContent: 'center', // Center alignment
              alignItems: 'center',
              pr: { md: 5 }, // Push more to the right on larger screens
            }}
          >
            <Image
              src={Dog3Image}
              alt="Happy Groomed Dog"
              width={750} // Further increased size
              height={750}
              objectFit="cover"
              priority
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseSection;