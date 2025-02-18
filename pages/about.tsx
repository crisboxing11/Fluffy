import { Typography, Container } from '@mui/material';

const AboutPage = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h2" fontWeight="bold" textAlign="center" mb={4}>
        About Fluffy Pet Wash
      </Typography>
      <Typography variant="body1" textAlign="center" maxWidth="800px" mx="auto">
        At Fluffy Pet Wash, we provide premium mobile pet grooming services with a focus on comfort, 
        care, and convenience. Our highly trained groomers are passionate about keeping your pets 
        happy and healthy. We believe in transparency, reliability, and top-tier service.
      </Typography>
    </Container>
  );
};

export default AboutPage;