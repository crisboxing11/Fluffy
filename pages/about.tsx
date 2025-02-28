import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutHeroImage from '../public/Dog4.jpeg';
import MissionImage from '../public/Dog6.jpeg';
import GroomingVanImage from '../public/Dog5.jpeg';
import HappyDogImage from '../public/Dog7.jpeg';

// **Animations**
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  return (
    <Box>
      {/* Hero Section */}
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
            style={{ filter: 'brightness(40%)' }}
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

      {/* 🚀 Our Mission (Now Loads Immediately) */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Box sx={{ py: { xs: 6, md: 10 }, px: 3, maxWidth: '1200px', mx: 'auto' }}>
          <Grid container spacing={4} alignItems="center">
            {/* Image */}
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" animate="visible" variants={zoomIn}>
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

            {/* Text */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" color="#067C92" mb={3} ml={3}>
                Our Mission
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={3} ml={3}>
                At <b>Fluffy Pet Wash</b>, we believe grooming should be a <b>stress-free, pampering experience</b> for your pets.
                Our professional team provides <b>high-quality, safe, and gentle</b> mobile pet grooming at your convenience.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* Why Mobile Grooming */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false, amount: 0.3 }}>
        <Box sx={{ py: { xs: 6, md: 10 }, px: 3, bgcolor: '#f9f9f9' }}>
          <Grid container spacing={4} alignItems="center">
            {/* Text */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" color="#067C92" mb={3} ml={2}>
                Why Mobile Grooming?
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={3}  ml={2}>
                Unlike traditional grooming salons, <b>Fluffy Pet Wash</b> brings the salon experience <b>right to your home</b>.  
                Our mobile grooming service reduces <b>stress and anxiety</b> for pets while offering unmatched convenience for owners.
              </Typography>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" whileInView="visible" variants={zoomIn} viewport={{ once: false, amount: 0.3 }}>
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
                  <Image src={GroomingVanImage} alt="Fluffy Dog Spa" layout="fill" objectFit="cover" objectPosition='50% 70%' priority />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* Our Commitment */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false, amount: 0.3 }}>
        <Box sx={{ py: { xs: 6, md: 10 }, px: 3, maxWidth: '1200px', mx: 'auto' }}>
          <Grid container spacing={4} alignItems="center">
            {/* Image */}
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" whileInView="visible" variants={zoomIn} viewport={{ once: false, amount: 0.3 }}>
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

            {/* Text */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" color="#067C92" mb={3} ml={3}>
                Our Commitment to Your Pet
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={3} ml={3}>
                We are <b>passionate</b> about making grooming a positive experience for every pet.
                Our team is trained to handle **all breeds with care, patience, and expertise**.
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="#038B95" mb={1} ml={3}>
                ⭐ Top-Notch Grooming Services
              </Typography>
              <Typography variant="body1" color="textSecondary" ml={3}>
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