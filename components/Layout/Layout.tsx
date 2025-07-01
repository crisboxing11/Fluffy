import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ bgcolor: '#ffffff' }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
