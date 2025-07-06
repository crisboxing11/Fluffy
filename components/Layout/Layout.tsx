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
      <Box component="header" role="banner">
        <Navbar />
      </Box>

      {/* Main Content */}
      <Box component="main" role="main" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Box>

      {/* Footer */}
      <Box component="footer" role="contentinfo">
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
