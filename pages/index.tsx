import { Box, Typography } from '@mui/material';
import PreBookingForm from '../components/PreBookingForm';
import HeroSection from '../components/HeroSection';
import ScrollingText from '../components/ScrollingText';
import WhyChooseSection from '../components/WhyChooseSection';
import AboutUsSection from '../components/AboutUsSection'
import ServiceSection from '../components/ServicesSection';
const HomePage = () => {

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection />
      {/* Scrolling Text Banner */}
      <ScrollingText />
      {/* Why Choose Section (Updated for MobisPaw Aesthetic) */}
      <WhyChooseSection />
      {/* About Us Section */}
      <AboutUsSection />
      {/* Services Section */}
      <ServiceSection />

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