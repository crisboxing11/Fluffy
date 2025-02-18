import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }} elevation={4}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4 }}>
        <Typography variant="h5" fontWeight="bold">
          <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
            Fluffy Pet Wash
          </Link>
        </Typography>

        <Box>
          <Button color="inherit" href="/" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button color="inherit" href="/about" sx={{ mx: 1 }}>
            About
          </Button>
          <Button color="inherit" href="/services" sx={{ mx: 1 }}>
            Services
          </Button>
          <Button color="inherit" href="/prices" sx={{ mx: 1 }}>
            Prices
          </Button>
          <Button color="inherit" href="/faq" sx={{ mx: 1 }}>
            FAQ
          </Button>
          <Button color="inherit" href="/contact" sx={{ mx: 1 }}>
            Contact
          </Button>
          <Button variant="contained" color="secondary" sx={{ ml: 2 }} href="/apply">
            Apply as a Groomer
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;