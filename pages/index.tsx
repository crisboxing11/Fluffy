import { Box, Typography,  Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PreBookingForm from '../components/PreBookingForm';
import HeroSection from '../components/HeroSection';
import ScrollingText from '../components/ScrollingText';
import WhyChooseSection from '../components/WhyChooseSection';

const HomePage = () => {
  const services = [
    'Professional Hypoallergenic Wash / Brush Out / Towel & Blow Out Dryer',
    'Nails trimming & Filing',
    'Ears cleaning',
    'Professional organic conditioner and moisturizer',
    'Mouth Wash and teeth brushing',
    'Expressed Glands',
    'Professional DeShedding',
    'Paws cleaning & Paws Trimming',
    'Sanitary/backside trimming',
    'Blueberry Facial',
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection />

      {/* Scrolling Text Banner */}
      <ScrollingText />

      {/* Why Choose Section (Updated for MobisPaw Aesthetic) */}
      <WhyChooseSection />

      {/* About Section */}
      <Box sx={{ textAlign: 'center', py: 6, px: 3, bgcolor: '#f9f9f9' }}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          About Us
        </Typography>
        <Typography variant="body1" color="textSecondary" maxWidth="700px" mx="auto" mb={4}>
          At Fluffy Pet Wash, we bring professional grooming services right to your door. Our mission
          is to make your pets look and feel their best while providing unparalleled convenience and care.
        </Typography>
        <img
          src="/about-image.jpg"
          alt="About Fluffy Pet Wash"
          style={{
            maxWidth: '100%',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        />
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 6, px: 3 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Our All-Inclusive Grooming Package
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center" mb={6}>
          At Fluffy Pet Wash, we provide everything your furry friend needs to look and feel their best.
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card sx={{ boxShadow: 3, padding: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color="primary" mb={3}>
                  What&apos;s Included:
                </Typography>
                <List>
                  {services.map((service, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={service} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Booking Section */}
      <Box id="booking" sx={{ py: 6, px: 3, bgcolor: '#f9f9f9' }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Book Your Appointment
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
          Before proceeding to booking, confirm your dog&apos;s eligibility for our services.
        </Typography>
        <PreBookingForm />
      </Box>
    </Box>
  );
};

export default HomePage;