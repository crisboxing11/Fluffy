import { Box, Typography, Grid, Button } from '@mui/material';

const AboutUsSection = () => {
  return (
    <Box
      sx={{
        bgcolor: '#00ADCD', // Brand Color Instead of Purple
        color: '#FFFFFF',
        textAlign: 'center',
        py: { xs: 6, md: 10 },
        px: 3,
      }}
    >
      {/* Section Title */}
      <Typography variant="h4" fontWeight="bold" mb={3}>
        BOOK AN APPOINTMENT IN 3 EASY STEPS!
      </Typography>

      {/* Steps Grid */}
      <Grid container spacing={4} justifyContent="center">
        {/* Step 1 */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                bgcolor: '#038B95', // Slightly Darker for Contrast
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              1
            </Box>
            <Typography variant="h6" fontWeight="bold">
              CHOOSE YOUR BREED
            </Typography>
            <Typography variant="body1" maxWidth="250px" color="white">
              We only service select breeds. Check if your dog&apos;s breed is eligible before booking.
            </Typography>
          </Box>
        </Grid>

        {/* Step 2 */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                bgcolor: '#038B95',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              2
            </Box>
            <Typography variant="h6" fontWeight="bold">
              BOOK ONLINE
            </Typography>
            <Typography variant="body1" maxWidth="250px" color="white">
              Choose a date and time that works best for you!
            </Typography>
          </Box>
        </Grid>

        {/* Step 3 */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                bgcolor: '#038B95',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              3
            </Box>
            <Typography variant="h6" fontWeight="bold">
              WE SHOW UP
            </Typography>
            <Typography variant="body1" maxWidth="250px" color="white">
              Leave the rest up to us! Our mobile grooming van will arrive at your doorstep.
            </Typography>
          </Box>
        </Grid>
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
            fontSize: '18px',
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