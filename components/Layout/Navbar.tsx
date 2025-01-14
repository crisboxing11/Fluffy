import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#004d61', paddingY: 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <Avatar
            src="/fluffy.PNG" // Ensure the logo is in the public directory
            alt="Fluffy Pet Wash Logo"
            sx={{
              width: 56,
              height: 56,
              border: '3px solid #02a7cf',
              bgcolor: '#ffffff',
              marginRight: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#ffffff' }}
          >
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Fluffy Pet Wash
            </Link>
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box>
          <Link href="/" passHref>
            <Typography
              variant="button"
              sx={{
                marginX: 2,
                color: '#ffffff',
                '&:hover': { color: '#a1e0e3' },
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/about" passHref>
            <Typography
              variant="button"
              sx={{
                marginX: 2,
                color: '#ffffff',
                '&:hover': { color: '#a1e0e3' },
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              About
            </Typography>
          </Link>
          <Link href="/franchise" passHref>
            <Typography
              variant="button"
              sx={{
                marginX: 2,
                color: '#ffffff',
                '&:hover': { color: '#a1e0e3' },
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Franchise
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;