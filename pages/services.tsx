import { Box, Typography, Grid, Card, CardContent, Button, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PetsIcon from '@mui/icons-material/Pets';
import SpaIcon from '@mui/icons-material/Spa';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BrushIcon from '@mui/icons-material/Brush';
import HealingIcon from '@mui/icons-material/Healing';
import WavesIcon from '@mui/icons-material/Waves';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import Image from 'next/image';
import { motion } from 'framer-motion'; // ✅ Import Framer Motion for animations
import HeroImage from '../public/Dog1.png'; // Ensure this is inside public/

// Fade & Slide-Up Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Zoom-In Effect for Cards
const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

// Services List
const services = [
  { text: 'Professional Hypoallergenic Wash / Brush Out / Towel & Blow Out Dryer', icon: WavesIcon },
  { text: 'Nail Trimming & Filing', icon: ContentCutIcon },
  { text: 'Ear Cleaning', icon: HealingIcon },
  { text: 'Professional Organic Conditioner & Moisturizer', icon: SpaIcon },
  { text: 'Mouth Wash & Teeth Brushing', icon: CleanHandsIcon },
  { text: 'Expressed Glands', icon: PetsIcon },
  { text: 'Professional DeShedding', icon: BrushIcon },
  { text: 'Paw Cleaning & Paw Trimming', icon: FavoriteIcon },
  { text: 'Sanitary / Backside Trimming', icon: StarIcon },
  { text: 'Blueberry Facial', icon: CheckCircleIcon },
];

const ServicesPage = () => {
  return (
    <Box>
      {/* Hero Section with Animated Title */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '60vh', md: '70vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            bgcolor: '#00ADCD',
          }}
        >
          <Image
            src={HeroImage}
            alt="Dog Grooming Hero"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            style={{ opacity: 0.4 }}
          />
          <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
            <Typography variant="h2" fontWeight="bold" sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}>
              Luxury Mobile Grooming Services
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
              Stress-free, premium pet grooming delivered **right to your doorstep**.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                mt: 3,
                px: 4,
                py: 1.5,
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textTransform: 'none',
                background: 'linear-gradient(90deg, #00ADCD, #038B95)',
                '&:hover': { background: 'linear-gradient(90deg, #038B95, #00ADCD)', transform: 'scale(1.05)' },
              }}
              href="/#booking"
            >
              Book an Appointment
            </Button>
          </Box>
        </Box>
      </motion.div>

      {/* Services Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box id="services" sx={{ py: 8, px: { xs: 3, md: 6 }, bgcolor: '#F8F9FA' }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#067C92">
            Our All-Inclusive Grooming Package
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div initial="hidden" whileInView="visible" variants={zoomIn} viewport={{ once: true }}>
                  <Card sx={{ boxShadow: 3, padding: 3, borderRadius: '15px', bgcolor: 'white', height: '100%' }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <ListItemIcon>
                        <service.icon sx={{ color: '#038B95', fontSize: 40 }} />
                      </ListItemIcon>
                      <ListItemText primary={service.text} primaryTypographyProps={{ fontWeight: 'bold', color: 'text.primary' }} />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: 8, px: { xs: 3, md: 6 }, textAlign: 'center', bgcolor: '#00ADCD', color: 'white' }}>
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Why Choose Fluffy Pet Wash?
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
            🏡 <b>Convenience at Your Doorstep</b> <br />
            No more stressful salon visits—our fully equipped mobile van brings luxury grooming <b>to you</b>.
          </Typography>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
             <Button variant="contained" size="large" sx={{ mt: 3, bgcolor: '#fff', color: '#038B95', fontWeight: 'bold' }} href="/#booking">
            Book Now
          </Button>
          </motion.div>
          
        </Box>
      </motion.div>
    </Box>
  );
};

export default ServicesPage;