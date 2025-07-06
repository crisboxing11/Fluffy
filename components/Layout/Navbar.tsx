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
      component="nav"
      role="navigation"
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
        <Link href="/">
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
          {["Home", "About", "Services", "Prices", "Blog", "FAQ", "Contact"].map((item, index) => (
            <Button 
              key={index} 
              sx={{ color: '#067C92', mx: 1 }} 
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            >
              {item}
            </Button>
          ))}

          {/* ✨ Franchise Button */}
          <Button
            variant="contained"
            href="https://franchise.fluffypetwash.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Franchise with Fluffy Pet Wash"
            sx={{
              ml: 2,
              background: 'linear-gradient(90deg, #00ADCD, #038B95)',
              color: '#fff',
              fontWeight: 'bold',
              px: 3,
              py: 1,
              borderRadius: '20px',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(90deg, #038B95, #00ADCD)',
              },
            }}
          >
            Franchise With Us!
          </Button>
        </Box>
        
        {/* Mobile Drawer Menu */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton onClick={handleDrawerToggle} aria-label="Open navigation menu">
            <MenuIcon sx={{ fontSize: '2rem', color: '#067C92' }} />
          </IconButton>
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            PaperProps={{ component: 'nav', 'aria-label': 'Mobile navigation menu' }}
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
              {["Home", "About", "Services", "Prices", "Blog", "FAQ", "Contact"].map((item, index) => (
                <ListItem 
                  key={index} 
                  sx={{ 
                    py: 2, 
                    px: 3, 
                    borderRadius: '10px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { bgcolor: '#E0F7FA', transform: 'scale(1.05)' }
                  }}
                >
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    style={{ textDecoration: 'none', color: '#067C92', fontWeight: 'bold', width: '100%', display: 'block', textAlign: 'center' }}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary={item} />
                  </Link>
                </ListItem>
              ))}
              <Divider sx={{ my: 2 }} />
              {/* Franchise Button - Mobile */}
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  href="https://franchise.fluffypetwash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Franchise with Fluffy Pet Wash"
                  sx={{
                    background: 'linear-gradient(90deg, #00ADCD, #038B95)',
                    color: '#fff',
                    fontWeight: 'bold',
                    borderRadius: '30px',
                    py: 1.2,
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #038B95, #00ADCD)',
                    },
                  }}
                >
                  Franchise With Us!
                </Button>
              </ListItem>
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
