import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Fluffy Pet Wash. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Follow us on{' '}
        <Link href="https://facebook.com" target="_blank" color="secondary.main">
          Facebook
        </Link>{' '}
        |{' '}
        <Link href="https://instagram.com" target="_blank" color="secondary.main">
          Instagram
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;