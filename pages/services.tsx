import { Box, Typography, Grid, Card, CardContent, Button, ListItemIcon, ListItemText } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import SpaIcon from '@mui/icons-material/Spa';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BrushIcon from '@mui/icons-material/Brush';
import HealingIcon from '@mui/icons-material/Healing';
import WavesIcon from '@mui/icons-material/Waves';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import Image from 'next/image';
import { motion } from 'framer-motion'; // ✅ Import Framer Motion for animations
import HeroImage from '../public/Dog1.png'; // Ensure this is inside public/
import Head from 'next/head';
import Link from 'next/link'

// **Animations**
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

// **Updated Services List with Unique Icons**
const services = [
  { text: 'Professional Brush Out', icon: BrushIcon },
  { text: 'Professional Hypoallergenic Wash + Organic Conditioner & Moisturizer', icon: SpaIcon },
  { text: 'Towel & Blow Out Dryer', icon: DryCleaningIcon },
  { text: 'Nails Trimming & Filing', icon: ContentCutIcon },
  { text: 'Ears Cleaning', icon: HealingIcon },
  { text: 'Mouth Wash & Teeth Brushing', icon: CleanHandsIcon },
  { text: 'Expressed Glands (Optional)', icon: PetsIcon },
  { text: 'Professional DeShedding (Undercoat Removal) If Needed', icon: WavesIcon },
  { text: 'Paws Cleaning & Paws Trimming If Needed', icon: FavoriteIcon },
  { text: 'Sanitary/Backside/Ears Trimming If Needed (“Dog Tidy”)', icon: StarIcon },
  { text: 'Facial + Fresh & Clean Treatment', icon: FaceRetouchingNaturalIcon },
  { text: 'Final Brush Out', icon: EmojiNatureIcon },
];

const ServicesPage = () => {
  return (
    <Box>
      {/* 🔥 SEO & Metadata */}
      <Head>
        <title>Mobile Pet Grooming Services | Fluffy Pet Wash</title>
        <meta name="description" content="Discover Fluffy Pet Wash's premium mobile pet grooming services. From hypoallergenic washes to teeth brushing, we bring luxury grooming to your doorstep!" />
        <meta name="keywords" content="mobile pet grooming, dog grooming, luxury pet grooming, pet wash, Fluffy Pet Wash services, mobile dog wash" />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
          loading="lazy"
            style={{ opacity: 0.4 }}
          />
          <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
            <Typography variant="h1" fontWeight="bold" sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}>
              Luxury Mobile Grooming Services
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
              Stress-free, premium pet grooming delivered <b>right to your doorstep</b>.
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

          {/* From Nose to Tail Text */}
          <Typography variant="h5" textAlign="center" fontWeight="bold" mt={4} color="#067C92">
            From Nose to Tail, We Never Fail! 🐾
          </Typography>
         <Typography variant="body1" textAlign="center" mt={4} color="#067C92">
  We offer a stress-free, luxury mobile grooming experience. See our{' '}
  <Link href="/prices" passHref legacyBehavior>
    <a style={{ color: '#038B95', fontWeight: 'bold' }}>transparent pricing</a>
  </Link>{' '}
  or{' '}
  <Link href="/contact" passHref legacyBehavior>
    <a style={{ color: '#038B95', fontWeight: 'bold' }}>contact us</a>
  </Link>{' '}
  for more details.
</Typography>
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
            No more stressful salon visits, our fully equipped mobile van brings luxury grooming <b>to you</b>.
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