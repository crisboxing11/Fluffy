import { Box, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
      <Typography variant="h6" fontWeight="bold">
        Fluffy Pet Wash
      </Typography>
      <Typography variant="body2" mt={1} mb={3}>
        &copy; {new Date().getFullYear()} All rights reserved.
      </Typography>

      {/* Social Media Links */}
      <Box>
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

      {/* Quick Links */}
      <Box mt={3}>
        <Link href="/" color="inherit" underline="hover" sx={{ mx: 2 }}>
          Home
        </Link>
        <Link href="/about" color="inherit" underline="hover" sx={{ mx: 2 }}>
          About
        </Link>
        <Link href="/services" color="inherit" underline="hover" sx={{ mx: 2 }}>
          Services
        </Link>
        <Link href="#booking" color="inherit" underline="hover" sx={{ mx: 2 }}>
          Book Now
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;