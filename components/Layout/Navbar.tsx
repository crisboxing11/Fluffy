import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary" elevation={4}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4 }}>
        {/* Logo */}
        <Typography variant="h5" fontWeight="bold">
          <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
            Fluffy Pet Wash
          </Link>
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button color="inherit" sx={{ mx: 1, '&:hover': { color: '#93EDF0', transform: 'scale(1.1)' } }} href="/">
            Home
          </Button>
          <Button color="inherit" sx={{ mx: 1, '&:hover': { color: '#93EDF0', transform: 'scale(1.1)' } }} href="/about">
            About
          </Button>
          <Button color="inherit" sx={{ mx: 1, '&:hover': { color: '#93EDF0', transform: 'scale(1.1)' } }} href="/services">
            Services
          </Button>
          <Button variant="contained" color="secondary" sx={{ ml: 2 }} href="#booking">
            Book Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;