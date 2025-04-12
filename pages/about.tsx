import { Box, Typography, Grid, Button } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';

// Import Images
import PawPattern from '../public/paw-pattern.jpeg'; // ✅ Add a seamless repeating paw print image
import AboutHeroImage from '../public/Dog4.jpeg';
import MissionImage from '../public/Dog6.jpeg';
import FreshlyCLeanedDogImage from '../public/Dog5.jpeg';
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
      {/* 🔥 SEO & Metadata */}
     <Head>
  <title>About Fluffy Pet Wash | Mobile Pet Grooming</title>
  <meta name="description" content="Fluffy Pet Wash offers luxury mobile pet grooming with hypoallergenic shampoos, stress-free treatments, and certified groomers. Serving Las Vegas. Book now!" />
  <meta name="keywords" content="about Fluffy Pet Wash, mobile pet grooming, stress-free grooming, mobile dog groomers, pet grooming Las Vegas, Fluffy Pet Wash company" />
  <meta name="author" content="Fluffy Pet Wash" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://fluffypetwash.com/about" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="About Fluffy Pet Wash | Mobile Pet Grooming" />
  <meta property="og:description" content="Get to know Fluffy Pet Wash – luxury mobile dog grooming serving Las Vegas with love, skill, and stress-free care." />
  <meta property="og:image" content="https://fluffypetwash.com/fluffy-circle.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://fluffypetwash.com/about" />
  <meta property="og:image:alt" content="About Fluffy Pet Wash" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Fluffy Pet Wash | Mobile Pet Grooming" />
  <meta name="twitter:description" content="Meet the team behind Fluffy Pet Wash – passionate mobile pet groomers dedicated to safe, luxurious, and convenient grooming." />
  <meta name="twitter:image" content="https://fluffypetwash.com/fluffy-circle.png" />

  {/* Structured Data (Organization) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Fluffy Pet Wash",
        "url": "https://fluffypetwash.com",
        "logo": "https://fluffypetwash.com/fluffy-circle.png",
        "description": "A premium mobile pet grooming service focused on stress-free, luxury pet care at your doorstep.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-702-508-6248",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.facebook.com/fluffypetwash",
          "https://www.instagram.com/fluffypetwash",
          "https://twitter.com/fluffypetwash"
        ]
      })
    }}
  />
</Head>

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
            loading="lazy"
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

      {/* 🚀 Our Mission */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Box sx={{ py: { xs: 6, md: 10 }, px: 3, maxWidth: '1200px', mx: 'auto' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" animate="visible" variants={zoomIn}>
                <Box sx={{ width: '100%', height: { xs: 250, md: 400 }, position: 'relative', borderRadius: '20px', boxShadow: 3 }}>
                  <Image src={MissionImage} alt="Dog being groomed" layout="fill" objectFit="cover" loading="lazy"  />
                </Box>
              </motion.div>
            </Grid>

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
      
        <Box sx={{ py: { xs: 6, md: 10 }, px: 3, bgcolor: '#f9f9f9' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" color="#067C92" mb={3} ml={2}>
                Why Mobile Grooming?
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={3} ml={2}>
                Unlike traditional grooming salons, <b>Fluffy Pet Wash</b> brings the salon experience <b>right to your home</b>.
                Our mobile grooming service reduces <b>stress and anxiety</b> for pets while offering unmatched convenience for owners.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
             <motion.div initial="hidden" whileInView="visible" variants={zoomIn} viewport={{ once: true }}>
                <Box sx={{ width: '100%', height: { xs: 250, md: 400 }, position: 'relative', borderRadius: '20px', boxShadow: 3 }}>
                  <Image src={FreshlyCLeanedDogImage} alt="Freshly cleaned dog Las Vegas"  layout="fill" objectFit="cover" objectPosition="50% 70%" loading="lazy"  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
   

      {/* Our Commitment */}
        <Box sx={{ py: { xs: 6, md: 10 }, px: 3, maxWidth: '1200px', mx: 'auto' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
               <motion.div initial="hidden" whileInView="visible" variants={zoomIn} viewport={{ once: true }}>
                <Box sx={{ width: '100%', height: { xs: 250, md: 400 }, position: 'relative', borderRadius: '20px', boxShadow: 3 }}>
                  <Image src={HappyDogImage} alt="Happy Dog After Grooming" layout="fill" objectFit="cover" loading="lazy" />
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" color="#067C92" mb={3} ml={3}>
                Our Commitment to Your Pet
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={3} ml={3}>
                We are <b>passionate</b> about making grooming a positive experience for every pet.
                Our team is trained to handle <b>all breeds with care, patience, and expertise</b>.
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
  
      {/* Call-to-Action Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box
          sx={{
            py: 8,
            textAlign: 'center',
            bgcolor: '#026D7C',
            color: 'white',
            backgroundImage: `url(${PawPattern.src})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '120px',
            backgroundBlendMode: 'multiply',
            backgroundPosition: 'center',
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Give Your Pet the Luxury They Deserve!
          </Typography>
          <Typography variant="h6" mb={4}>
            Experience stress-free, top-tier grooming right at your doorstep.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: '#fff', color: '#038B95', fontWeight: 'bold', px: 4, py: 1.5 }}
            href="/#booking"
          >
            Book Now
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AboutUs;