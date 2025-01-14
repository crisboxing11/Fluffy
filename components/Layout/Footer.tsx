import { Box, Avatar, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#002f4b', color: '#d9e1e8', py: 4, textAlign: 'center' }}>
      {/* Logo */}
      <Avatar
        src="/fluffy.PNG"
        alt="Fluffy Pet Wash Logo"
        sx={{
          width: 80,
          height: 80,
          margin: '0 auto 16px',
          border: '4px solid #02a7cf',
          bgcolor: '#ffffff',
        }}
      />

      {/* Copyright */}
      <Typography variant="subtitle1" gutterBottom>
        &copy; {new Date().getFullYear()} Fluffy Pet Wash. All rights reserved.
      </Typography>

      {/* Social Media Links */}
      <Typography variant="body2">
        Follow us on{' '}
        <Link
          href="https://facebook.com"
          target="_blank"
          sx={{ color: '#02a7cf', textDecoration: 'none', '&:hover': { color: '#a1e0e3' } }}
        >
          Facebook
        </Link>{' '}
        |{' '}
        <Link
          href="https://instagram.com"
          target="_blank"
          sx={{ color: '#02a7cf', textDecoration: 'none', '&:hover': { color: '#a1e0e3' } }}
        >
          Instagram
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;