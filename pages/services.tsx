import { Box, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PetsIcon from '@mui/icons-material/Pets';
import SpaIcon from '@mui/icons-material/Spa';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BrushIcon from '@mui/icons-material/Brush';
import HealingIcon from '@mui/icons-material/Healing';
import WavesIcon from '@mui/icons-material/Waves';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import Image from 'next/image';
import HeroImage from '../public/Dog1.png'; // Ensure this is inside public/

const services = [
  { text: 'Professional Hypoallergenic Wash / Brush Out / Towel & Blow Out Dryer', icon: WavesIcon },
  { text: 'Nail Trimming & Filing', icon: ContentCutIcon },
  { text: 'Ear Cleaning', icon: HealingIcon },
  { text: 'Professional Organic Conditioner & Moisturizer', icon: SpaIcon },
  { text: 'Mouth Wash & Teeth Brushing', icon: CleanHandsIcon },
  { text: 'Expressed Glands', icon: PetsIcon },
  { text: 'Professional DeShedding', icon: BrushIcon },
  { text: 'Paw Cleaning & Paw Trimming', icon: FavoriteIcon },
  { text: 'Sanitary / Backside Trimming', icon: StarIcon },
  { text: 'Blueberry Facial', icon: CheckCircleIcon },
];

const ServicesPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          bgcolor: '#00ADCD',
        }}
      >
        <Image
          src={HeroImage}
          alt="Dog Grooming Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          style={{ opacity: 0.4 }}
        />
        <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
          <Typography variant="h2" fontWeight="bold" sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}>
            Luxury Mobile Grooming Services
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
            Stress-free, premium pet grooming delivered **right to your doorstep**.
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
            href="/#booking"
          >
            Book an Appointment
          </Button>
        </Box>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 8, px: { xs: 3, md: 6 }, bgcolor: '#F8F9FA' }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#067C92">
          Our All-Inclusive Grooming Package
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center" mb={6}>
          At Fluffy Pet Wash, we provide **everything** your furry friend needs to look and feel their best.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, padding: 3, borderRadius: '15px', bgcolor: 'white', height: '100%' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <ListItemIcon>
                    <service.icon sx={{ color: '#038B95', fontSize: 40 }} />
                  </ListItemIcon>
                  <ListItemText primary={service.text} primaryTypographyProps={{ fontWeight: 'bold', color: 'text.primary' }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ py: 8, px: { xs: 3, md: 6 }, textAlign: 'center', bgcolor: '#00ADCD', color: 'white' }}>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Why Choose Fluffy Pet Wash?
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
          🏡 **Convenience at Your Doorstep** <br />
          No more stressful salon visits—our fully equipped mobile van brings luxury grooming **to you**.
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
          🐶 **Stress-Free Experience** <br />
          One-on-one professional grooming in a **calm, quiet environment** designed for your pet&apos;s comfort.
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
          🌿 **Premium Pet-Safe Products** <br />
          We use **hypoallergenic, organic shampoos** and conditioners to keep your pet’s skin and coat healthy.
        </Typography>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: 8, px: { xs: 3, md: 6 } }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#067C92">
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card sx={{ boxShadow: 3, padding: 3, borderRadius: '15px', bgcolor: 'white' }}>
              <List>
                <ListItem>
                  <ListItemText primary="What breeds do you service?" secondary="We service a variety of dog breeds. Check our booking page for details." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Do I need to provide anything?" secondary="No! Our van is fully equipped with everything needed for grooming." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="How long does a session take?" secondary="On average, sessions take **60-90 minutes** depending on the dog’s size and coat condition." />
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 6, textAlign: 'center', bgcolor: '#038B95', color: 'white' }}>
        <Typography variant="h4" fontWeight="bold">
          Ready to Pamper Your Pet?
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 3, bgcolor: '#fff', color: '#038B95', fontWeight: 'bold' }} href="/#booking">
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default ServicesPage;