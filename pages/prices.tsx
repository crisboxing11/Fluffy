import { Box, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PriceHeroImage from '../public/Dog8.jpg'; // Ensure this is inside public/
import PawPattern from '../public/paw-pattern.jpeg'; // ✅ Add a seamless repeating paw print image

// **Animations**
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// **Price Tiers**
const pricing = [
  { size: "Small Dog", price: "$85", desc: "Depending on Weight & Coat Condition" },
  { size: "Medium Dog", price: "$95 - $125", desc: "Depending on Weight & Coat Condition" },
  { size: "Large Dog", price: "$140 - $185", desc: "Depending on Weight & Coat Condition" },
  { size: "Extra Large Dog", price: "$200 & Up", desc: "Depending on Weight & Coat Condition" },
];

// **All-Inclusive Services List**
const services = [
  "Professional Hypoallergenic Wash / Brush Out / Towel & Blow Out Dryer",
  "Nails trimming & Filing",
  "Ears cleaning",
  "Professional organic conditioner and moisturizer",
  "Mouth Wash and teeth brushing",
  "Expressed Glands",
  "Professional DeShedding",
  "Paws cleaning & Paws Trimming",
  "Sanitary / Backside trimming",
  "Blueberry Facial",
];

const PricesPage = () => {
  return (
    <Box>
      {/* Hero Section with Full-Container Image */}
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
    overflow: 'hidden',
  }}
>
  {/* Background Image */}
  <Image
    src={PriceHeroImage}
    alt="Groomed Dog"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
    priority
  />

  {/* Overlay to Improve Readability */}
  <Box
    sx={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Dark overlay (adjust opacity as needed)
      zIndex: 1, // ✅ Ensures overlay is between image & text
    }}
  />

  {/* Text Content */}
  <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
    <Typography
      variant="h2"
      fontWeight="bold"
      sx={{
        fontSize: { xs: '2rem', md: '3.5rem' },
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)', // ✅ Adds text shadow for better contrast
      }}
    >
      Transparent & Affordable Pricing
    </Typography>
    <Typography
      variant="h6"
      sx={{
        maxWidth: 700,
        mx: 'auto',
        mt: 2,
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)', // ✅ Keeps text readable over image
      }}
    >
      No hidden fees. One all-inclusive package tailored to your pet&apos;s needs.
    </Typography>
  </Box>
</Box>
      </motion.div>

      {/* Pricing Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: 8, px: { xs: 3, md: 6 } }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#067C92">
            Our Pricing Tiers
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {pricing.map((tier, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
                  <Card
                    sx={{
                      boxShadow: 4,
                      borderRadius: '15px',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" fontWeight="bold" color="#038B95" mb={2}>
                        {tier.size}
                      </Typography>
                      <Typography variant="h4" fontWeight="bold" color="#067C92">
                        {tier.price}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" mt={1}>
                        {tier.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Included Services Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: 8, px: { xs: 3, md: 6 }, bgcolor: '#F8F9FA' }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#067C92">
            What’s Included in Every Grooming Session?
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Card sx={{ boxShadow: 3, padding: 3, borderRadius: '15px', bgcolor: 'white' }}>
                <List>
                  {services.map((service, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: '#038B95' }} />
                      </ListItemIcon>
                      {service}
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* CTA Section with PAW PRINTS Background */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
       <Box
  sx={{
    py: 6,
    textAlign: 'center',
    bgcolor: '#026D7C', // ✅ Darker teal for better contrast
    color: 'white',
     backgroundImage: `url(${PawPattern.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '120px', // ✅ Adjust size as needed
    backgroundBlendMode: 'multiply', // ✅ Subtle effect, blending with background color
    backgroundPosition: 'center',
  }}
>
  <Typography variant="h4" fontWeight="bold">
    Ready to Pamper Your Pet?
  </Typography>
  <Button
    variant="contained"
    size="large"
    sx={{ mt: 3, bgcolor: '#fff', color: '#038B95', fontWeight: 'bold' }}
    href="/#booking"
  >
    Book Now
  </Button>
</Box>
      </motion.div>
    </Box>
  );
};

export default PricesPage;