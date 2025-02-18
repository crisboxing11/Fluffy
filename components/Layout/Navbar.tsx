import { AppBar, Toolbar, Box, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: '#FFFFFF', // ✅ Makes the navbar pure white
        color: '#067C92', // ✅ Adjusts text color for visibility
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // ✅ Adds subtle shadow for depth
        zIndex: 10
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4 }}>
        
        {/* Fluffy Logo as Homepage Link */}
        <Link href="/" passHref>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <Image
              src="/Fluffy Logo.svg" // ✅ Ensure this file is inside `/public/`
              alt="Fluffy Pet Wash Logo"
              width={140} 
              height={50}
              priority
              style={{
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))', // ✅ Keeps visibility strong
              }}
            />
          </Box>
        </Link>

        {/* Navigation Links */}
        <Box>
          <Button sx={{ color: '#067C92', mx: 1 }} href="/">
            Home
          </Button>
          <Button sx={{ color: '#067C92', mx: 1 }} href="/about">
            About
          </Button>
          <Button sx={{ color: '#067C92', mx: 1 }} href="/services">
            Services
          </Button>
          <Button sx={{ color: '#067C92', mx: 1 }} href="/prices">
            Prices
          </Button>
          <Button sx={{ color: '#067C92', mx: 1 }} href="/faq">
            FAQ
          </Button>
          <Button sx={{ color: '#067C92', mx: 1 }} href="/contact">
            Contact
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            sx={{ ml: 2, backgroundColor: '#038B95', '&:hover': { backgroundColor: '#00ADCD' } }} 
            href="/apply"
          >
            Apply as a Groomer
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;