import { Box, Typography, Link, IconButton, Grid, Divider, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation(['common']);
  return (
    <Box
      sx={{
        bgcolor: '#038B95',
        color: 'white',
        py: { xs: 4, md: 5 },
        px: { xs: 3, md: 8 },
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        
        {/* Quick Links */}
        <Grid item xs={12} md={6} textAlign="center">
          <Typography variant="h6" fontWeight="bold">{t('nav.quickLinks')}</Typography>
          <Stack spacing={1.5} mt={1} direction="row" justifyContent="center">
            {[
              { label: t('nav.home'), href: '/' },
              { label: t('nav.about'), href: '/about' },
              { label: t('nav.services'), href: '/services' },
              { label: t('nav.prices'), href: '/prices' },
              { label: t('nav.blog'), href: '/blog' },
              { label: t('nav.bookNow'), href: '/#booking' }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                color="inherit"
                underline="none"
                sx={{ fontSize: '0.9rem', fontWeight: 'bold', transition: 'color 0.2s', '&:hover': { color: '#A1E0E3' } }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4, bgcolor: 'white', opacity: 0.3 }} />

      {/* Social Media & Copyright - Now Side by Side */}
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        flexWrap="wrap"
        gap={3} // ✅ Adds space between elements
      >
        {/* Social Media Links */}
        <Box display="flex" gap={2}>
          <IconButton color="inherit" href="https://facebook.com" target="_blank" sx={{ '&:hover': { color: '#A1E0E3' } }}>
            <FacebookIcon fontSize="medium" />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com/fluffypetwash" target="_blank" sx={{ '&:hover': { color: '#A1E0E3' } }}>
            <InstagramIcon fontSize="medium" />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" sx={{ fontSize: '0.875rem', whiteSpace: 'nowrap', color: '#A1E0E3' }}>
          &copy; {new Date().getFullYear()} Fluffy Pet Wash. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
