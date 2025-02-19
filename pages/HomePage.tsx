import { Box, Typography, Button, Grid, Card, CardContent, Avatar } from '@mui/material';
import Image from 'next/image';
import PetsIcon from '@mui/icons-material/Pets';
import StarIcon from '@mui/icons-material/Star';
import SpaIcon from '@mui/icons-material/Spa';
import DogImage from '../public/Dog2.png'; // Replace with an optimized hero image
import TestimonialImage from '../public/Dog3.png'; // Replace with a customer testimonial image

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '75vh', md: '80vh' }, 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          bgcolor: '#FAFAFA',
          textAlign: 'center',
        }}
      >
        <Image
          src={DogImage}
          alt="Happy Groomed Dog"
          layout="fill"
          objectFit="cover"
          priority
          style={{ opacity: 0.4 }}
        />
        <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
          <Typography variant="h2" fontWeight="bold" sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, color: '#067C92' }}>
            Luxury Mobile Pet Grooming
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 600, mx: 'auto', mt: 2, color: '#333' }}>
            Bringing stress-free, professional pet grooming straight to your doorstep.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              mt: 3,
              px: 4,
              py: 1.5,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textTransform: 'none',
              background: 'linear-gradient(90deg, #00ADCD, #038B95)',
              '&:hover': { background: 'linear-gradient(90deg, #038B95, #00ADCD)', transform: 'scale(1.05)' },
            }}
            href="#booking"
          >
            Book an Appointment
          </Button>
        </Box>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 8, px: { xs: 3, md: 6 }, textAlign: 'center', bgcolor: '#F8F9FA' }}>
        <Typography variant="h4" fontWeight="bold" mb={4} color="#067C92">
          Why Choose Fluffy Pet Wash?
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { title: "Stress-Free Experience", icon: SpaIcon, desc: "No crowded salons—just a gentle, one-on-one grooming experience." },
            { title: "Top-Tier Grooming", icon: StarIcon, desc: "We use hypoallergenic, organic shampoos to keep your pet’s coat healthy." },
            { title: "Convenient Mobile Service", icon: PetsIcon, desc: "We come to you, saving you time and ensuring your pet’s comfort." },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, padding: 3, borderRadius: '15px', bgcolor: 'white', height: '100%' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <feature.icon sx={{ color: '#038B95', fontSize: 50, mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                  <Typography variant="body2" color="textSecondary" textAlign="center" mt={1}>{feature.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Services Overview */}
      <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#00ADCD', color: 'white' }}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          All-Inclusive Grooming Package
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
          Everything your furry friend needs in one stress-free session.
        </Typography>
        <Button variant="contained" sx={{ bgcolor: 'white', color: '#038B95', fontWeight: 'bold' }} href="/services">
          View Services
        </Button>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 8, px: { xs: 3, md: 6 }, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" mb={4} color="#067C92">
          What Pet Owners Are Saying
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[1, 2, 3].map((review, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, padding: 3, borderRadius: '15px', bgcolor: 'white', height: '100%' }}>
                <CardContent>
                  <Avatar src={TestimonialImage.src} sx={{ width: 60, height: 60, mx: 'auto', mb: 2 }} />
                  <Typography variant="body1" textAlign="center" color="textSecondary">
                    &quot;Fluffy Pet Wash was amazing! My pup has never been this clean and happy.&quot;
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold" color="#067C92" mt={2}>
                    - Sarah J., Las Vegas
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Booking Process */}
      <Box sx={{ py: 8, px: { xs: 3, md: 6 }, textAlign: 'center', bgcolor: '#F8F9FA' }}>
        <Typography variant="h4" fontWeight="bold" mb={4} color="#067C92">
          How It Works
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { step: "Choose Your Breed", desc: "Check if your dog’s breed is eligible before booking." },
            { step: "Book Online", desc: "Pick a date & time that works best for you." },
            { step: "We Show Up", desc: "Our van arrives and takes care of everything!" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography variant="h6" fontWeight="bold">{item.step}</Typography>
              <Typography variant="body2" color="textSecondary">{item.desc}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Final CTA */}
      <Box sx={{ py: 6, textAlign: 'center', bgcolor: '#038B95', color: 'white' }}>
        <Typography variant="h4" fontWeight="bold">
          Ready to Pamper Your Pet?
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 3, bgcolor: 'white', color: '#038B95', fontWeight: 'bold' }} href="#booking">
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default Home;