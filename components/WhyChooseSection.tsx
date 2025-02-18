import { Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import Dog3Image from '../public/Dog3.png'; // Updated image

const WhyChooseSection = () => {
  return (
    <Box sx={{ bgcolor: '#f9f9f9', py: { xs: 6, md: 10 }, px: 3 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" color='#067C92' mb={3}>
            Why Choose Fluffy Pet Wash?
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            We specialize in providing a luxurious mobile pet grooming experience right at your doorstep.
            Our expert groomers use high-quality, pet-safe products and techniques to ensure your furry
            friend looks and feels their best.
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ background: 'linear-gradient(90deg, #00ADCD, #038B95)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #038B95, #00ADCD)',
                  transform: 'scale(1.05)',
                }, }} href="#services">
            Learn More
          </Button>
        </Grid>

        {/* Right Side: Styled Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: { xs: 250, md: 400 },
              position: 'relative',
              overflow: 'hidden',
   
              borderRadius: '50px', // Soft rounded edges
       
            }}
          >
            <Image
              src={Dog3Image}
              alt="Happy Groomed Dog"
              layout="fill"
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