import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fluffy Pet Wash
        </Typography>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
        <Button color="inherit" href="/services">
          Services
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;