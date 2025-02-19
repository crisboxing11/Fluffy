import { Box, Typography, Grid, Button } from '@mui/material';

const AboutUsSection = () => {
  return (
    <Box
      sx={{
        bgcolor: '#00ADCD', // Brand Color
        color: '#FFFFFF',
        textAlign: 'center',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 }, // Adjusted for better spacing
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
        sx={{
          fontSize: { xs: '1.8rem', md: '2.5rem' }, // Responsive font size
          maxWidth: { xs: '90%', md: '70%' },
          mx: 'auto',
        }}
      >
        BOOK AN APPOINTMENT IN 3 EASY STEPS!
      </Typography>

      {/* Steps Grid */}
      <Grid container spacing={4} justifyContent="center">
        {[
          { step: '1', title: 'CHOOSE YOUR BREED', desc: "We only service select breeds. Check if your dog’s breed is eligible before booking." },
          { step: '2', title: 'BOOK ONLINE', desc: 'Choose a date and time that works best for you!' },
          { step: '3', title: 'WE SHOW UP', desc: 'Leave the rest up to us! Our mobile grooming van will arrive at your doorstep.' },
        ].map(({ step, title, desc }) => (
          <Grid item xs={12} sm={6} md={4} key={step}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 55,
                  height: 55,
                  borderRadius: '50%',
                  bgcolor: '#038B95',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  fontWeight: 'bold',
                  mb: 2,
                  color: 'white',
                }}
              >
                {step}
              </Box>
              <Typography variant="h6" fontWeight="bold">
                {title}
              </Typography>
              <Typography variant="body1" maxWidth="250px" color="white">
                {desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Book Button */}
      <Box mt={4}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            textTransform: 'none',
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            fontSize: { xs: '1rem', md: '1.2rem' }, // Adjust button text size
            fontWeight: 'bold',
            bgcolor: '#FFFFFF',
            color: '#00ADCD',
            '&:hover': { bgcolor: '#DCDCDC' },
          }}
          href="#booking"
        >
          BOOK GROOMING
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUsSection;