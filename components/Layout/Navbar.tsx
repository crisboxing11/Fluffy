import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: '#FFFFFF', 
        color: '#067C92', 
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
        zIndex: 10,
        px: { xs: 2, md: 4 }
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Fluffy Logo as Homepage Link */}
        <Link href="/" passHref>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <Image
              src="/Fluffy Logo.svg"
              alt="Fluffy Pet Wash Logo"
              width={120} 
              height={40}
              priority
              style={{
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
              }}
            />
          </Box>
        </Link>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
          {["Home", "About", "Services", "Prices", "FAQ", "Contact"].map((item, index) => (
            <Button key={index} sx={{ color: '#067C92', mx: 1 }} href={`/${item.toLowerCase()}`}>
              {item}
            </Button>
          ))}
          <Button 
            variant="contained" 
            color="secondary" 
            sx={{ 
              ml: 2, 
              background: 'linear-gradient(90deg, #038B95, #00ADCD)', 
              '&:hover': { background: 'linear-gradient(90deg, #00ADCD, #038B95)', transform: 'scale(1.05)' }, 
              transition: 'all 0.3s ease-in-out',
            }} 
            href="/#booking"
          >
           Book Now
          </Button>
        </Box>
        
        {/* Mobile Drawer Menu */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon sx={{ fontSize: '2rem', color: '#067C92' }} />
          </IconButton>
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              '& .MuiDrawer-paper': {
                width: '75vw',
                bgcolor: '#F8F9FA',
                color: '#067C92',
                padding: 3,
                borderRadius: '10px 0 0 10px',
              }
            }}
          >
            <List sx={{ textAlign: 'center', py: 2 }}>
              {["Home", "About", "Services", "Prices", "FAQ", "Contact"].map((item, index) => (
                <ListItem 
                  key={index} 
                  component="button" 
                  onClick={handleDrawerToggle} 
                  sx={{ 
                    py: 2, 
                    px: 3, 
                    borderRadius: '10px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { bgcolor: '#E0F7FA', transform: 'scale(1.05)' }
                  }}
                >
                  <ListItemText 
                    primary={
                      <Link href={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: '#067C92', fontWeight: 'bold' }}>
                        {item}
                      </Link>
                    } 
                  />
                </ListItem>
              ))}
              <Divider sx={{ my: 2 }} />
              <ListItem 
                component="button" 
                onClick={handleDrawerToggle} 
                sx={{ 
                  bgcolor: '#038B95', 
                  borderRadius: '8px', 
                  mt: 1, 
                  py: 2, 
                  transition: 'all 0.3s ease-in-out', 
                  '&:hover': { 
                    background: 'linear-gradient(90deg, #00ADCD, #038B95)', 
                    transform: 'scale(1.05)' 
                  }
                }}
              >
                <ListItemText 
                  primary={
                    <Link href="#booking" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
                      Book Now
                    </Link>
                  } 
                />
              </ListItem>
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;