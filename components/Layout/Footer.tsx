import { Box, Typography, Link, IconButton, Grid, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#038B95', color: 'white', py: 6, px: { xs: 3, md: 6 } }}>
      <Grid container spacing={4} justifyContent="space-between" alignItems="center">
        
        {/* Column 1: Brand & Description */}
        <Grid item xs={12} md={4} textAlign={{ xs: 'center', md: 'left' }}>
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Fluffy Pet Wash
          </Typography>
          <Typography variant="body2" color="white" maxWidth={300}>
            Convenient & stress-free mobile pet grooming that ensures **top-tier care** for your furry friend.
          </Typography>
        </Grid>

        {/* Column 2: Quick Links */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Quick Links
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Link href="/" color="inherit" underline="none" sx={{ my: 0.5 }}>
              Home
            </Link>
            <Link href="/about" color="inherit" underline="none" sx={{ my: 0.5 }}>
              About
            </Link>
            <Link href="/services" color="inherit" underline="none" sx={{ my: 0.5 }}>
              Services
            </Link>
            <Link href="#booking" color="inherit" underline="none" sx={{ my: 0.5 }}>
              Book Now
            </Link>
          </Box>
        </Grid>

        {/* Column 3: Contact Info */}
        <Grid item xs={12} md={4} textAlign={{ xs: 'center', md: 'right' }}>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Contact Us
          </Typography>
          <Box display="flex" flexDirection="column" alignItems={{ xs: 'center', md: 'flex-end' }}>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOnIcon sx={{ mr: 1 }} /> <Typography variant="body2">Las Vegas, NV</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon sx={{ mr: 1 }} /> <Typography variant="body2">(123) 456-7890</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <EmailIcon sx={{ mr: 1 }} /> <Typography variant="body2">info@fluffypetwash.com</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4, bgcolor: 'white', opacity: 0.3 }} />

      {/* Social Media & Copyright */}
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* Social Media Links */}
        <Box display="flex" gap={2} mb={2}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton color="inherit" href="https://facebook.com" target="_blank">
              <FacebookIcon />
            </IconButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <IconButton color="inherit" href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </IconButton>
          </motion.div>
        </Box>

        {/* Copyright */}
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Fluffy Pet Wash. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
