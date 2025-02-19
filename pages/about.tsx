import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion'; // ✅ Import Framer Motion for animations
import AboutHeroImage from '../public/Dog4.jpeg';
import MissionImage from '../public/Dog6.jpeg';
import GroomingVanImage from '../public/Dog5.jpeg';
import HappyDogImage from '../public/Dog7.jpeg';

// Fade & Slide-Up Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Zoom-In Effect for Images
const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const AboutUs = () => {
  return (
    <Box>
      {/* Hero Section with Background Image */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '50vh', md: '60vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            overflow: 'hidden',
          }}
        >
          <Image
            src={AboutHeroImage}
            alt="Happy Dog Grooming"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority
            style={{ filter: 'brightness(60%)' }}
          />
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              position: 'relative',
              zIndex: 2,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textShadow: '3px 3px 8px rgba(0, 0, 0, 0.4)',
              fontSize: { xs: '2rem', md: '3.5rem' },
            }}
          >
            Let&apos;s Get Fluffy!
          </Typography>
        </Box>
      </motion.div>

      {/* Mission Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: { xs: 6, md: 10 }, px: 3, maxWidth: '1200px', mx: 'auto' }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Side: Image */}
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" whileInView="visible" variants={zoomIn} viewport={{ once: true }}>
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 250, md: 400 },
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: 3,
                  }}
                >
                  <Image src={MissionImage} alt="Dog being groomed" layout="fill" objectFit="cover" priority />
                </Box>
              </motion.div>
            </Grid>

            {/* Right Side: Mission Statement */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" color="#067C92" mb={3}>
                Our Mission
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={3}>
                At **Fluffy Pet Wash**, we believe grooming should be a **stress-free, pampering experience** for your pets.
                Our professional team provides **high-quality, safe, and gentle** mobile pet grooming at your convenience.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* Why Mobile Grooming Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: { xs: 6, md: 10 }, px: 3, bgcolor: '#f9f9f9' }}>
          <Grid container spacing={4} alignItems="center">
            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" color="#067C92" mb={3}>
                Why Mobile Grooming?
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={3}>
                Unlike traditional grooming salons, **Fluffy Pet Wash** brings the salon experience **right to your home**.  
                Our mobile grooming service reduces **stress and anxiety** for pets while offering unmatched convenience for owners.
              </Typography>
            </Grid>

            {/* Right Side: Grooming Van Image */}
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" whileInView="visible" variants={zoomIn} viewport={{ once: true }}>
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 250, md: 400 },
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: 3,
                  }}
                >
                  <Image src={GroomingVanImage} alt="Fluffy Pet Wash Mobile Van" layout="fill" objectFit="cover" priority />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* Our Commitment Section (Fixed Text Visibility) */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: { xs: 6, md: 10 }, px: 3, maxWidth: '1200px', mx: 'auto' }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Side: Image */}
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" whileInView="visible" variants={zoomIn} viewport={{ once: true }}>
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 250, md: 400 },
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: 3,
                  }}
                >
                  <Image src={HappyDogImage} alt="Happy Dog After Grooming" layout="fill" objectFit="cover" priority />
                </Box>
              </motion.div>
            </Grid>

            {/* Right Side: Commitment (Fixed Text Visibility) */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" color="#067C92" mb={3}>
                Our Commitment to Your Pet
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={3}>
                We are **passionate** about making grooming a positive experience for every pet.
                Our team is trained to handle **all breeds with care, patience, and expertise**.
              </Typography>

              <Typography variant="h6" fontWeight="bold" color="#038B95" mb={1}>
                ⭐ Certified Groomers
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Our experienced groomers prioritize safety and quality to ensure your pet receives the best care.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AboutUs;