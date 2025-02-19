import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
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
          <Button sx={{ color: '#067C92', mx: 1 }} href="/">Home</Button>
          <Button sx={{ color: '#067C92', mx: 1 }} href="/about">About</Button>
          <Button sx={{ color: '#067C92', mx: 1 }} href="/services">Services</Button>
          <Button sx={{ color: '#067C92', mx: 1 }} href="/prices">Prices</Button>
          <Button sx={{ color: '#067C92', mx: 1 }} href="/faq">FAQ</Button>
          <Button sx={{ color: '#067C92', mx: 1 }} href="/contact">Contact</Button>
          <Button 
            variant="contained" 
            color="secondary" 
            sx={{ ml: 2, backgroundColor: '#038B95', '&:hover': { backgroundColor: '#00ADCD' } }} 
            href="/apply"
          >
            Apply as a Groomer
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
                bgcolor: '#FFFFFF',
                color: '#067C92',
                padding: 2,
              }
            }}
          >
            <List>
              <ListItem component="div" button onClick={handleDrawerToggle}>
                <ListItemText primary={<Link href="/">Home</Link>} />
              </ListItem>
              <ListItem component="div" button onClick={handleDrawerToggle}>
                <ListItemText primary={<Link href="/about">About</Link>} />
              </ListItem>
              <ListItem component="div" button onClick={handleDrawerToggle}>
                <ListItemText primary={<Link href="/services">Services</Link>} />
              </ListItem>
              <ListItem component="div" button onClick={handleDrawerToggle}>
                <ListItemText primary={<Link href="/prices">Prices</Link>} />
              </ListItem>
              <ListItem component="div" button onClick={handleDrawerToggle}>
                <ListItemText primary={<Link href="/faq">FAQ</Link>} />
              </ListItem>
              <ListItem component="div" button onClick={handleDrawerToggle}>
                <ListItemText primary={<Link href="/contact">Contact</Link>} />
              </ListItem>
              <ListItem component="div" button onClick={handleDrawerToggle} sx={{ bgcolor: '#038B95', borderRadius: '5px', mt: 1 }}>
                <ListItemText primary={<Link href="/apply" style={{ color: '#FFFFFF' }}>Apply as a Groomer</Link>} />
              </ListItem>
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
