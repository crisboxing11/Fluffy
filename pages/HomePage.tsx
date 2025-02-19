import { Box, Typography, Button, Grid, Card, CardContent, Avatar } from '@mui/material';
import Image from 'next/image';
import PetsIcon from '@mui/icons-material/Pets';
import StarIcon from '@mui/icons-material/Star';
import SpaIcon from '@mui/icons-material/Spa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion'; // ✅ Import Framer Motion for animations
import DogImage from '../public/Dog2.png';
import TestimonialImage from '../public/Dog3.png';

// Testimonial Carousel Settings
const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
};

// Fade-In & Slide-Up Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Home = () => {
  return (
    <Box>
      {/* Hero Section with Fade & Slide Effect */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '75vh', md: '80vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            bgcolor: '#FAFAFA',
            textAlign: 'center',
          }}
        >
          <Image
            src={DogImage}
            alt="Happy Groomed Dog"
            layout="fill"
            objectFit="cover"
            priority
            style={{ opacity: 0.5 }}
          />
          <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, color: '#067C92' }}
            >
              Luxury Mobile Pet Grooming
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: 600, mx: 'auto', mt: 2, color: '#333' }}>
              Bringing stress-free, professional pet grooming straight to your doorstep.
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
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
                  '&:hover': { background: 'linear-gradient(90deg, #038B95, #00ADCD)' },
                }}
                href="#booking"
              >
                Book an Appointment
              </Button>
            </motion.div>
          </Box>
        </Box>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: 8, px: { xs: 3, md: 6 }, textAlign: 'center', bgcolor: '#F8F9FA' }}>
          <Typography variant="h4" fontWeight="bold" mb={4} color="#067C92">
            Why Choose Fluffy Pet Wash?
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {[
              { title: "Stress-Free Experience", icon: SpaIcon, desc: "No crowded salons—just a gentle, one-on-one grooming experience." },
              { title: "Top-Tier Grooming", icon: StarIcon, desc: "We use hypoallergenic, organic shampoos to keep your pet’s coat healthy." },
              { title: "Convenient Mobile Service", icon: PetsIcon, desc: "We come to you, saving you time and ensuring your pet’s comfort." },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Card sx={{ boxShadow: 3, padding: 3, borderRadius: '15px', bgcolor: 'white', height: '100%' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <feature.icon sx={{ color: '#038B95', fontSize: 50, mb: 2 }} />
                      <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                      <Typography variant="body2" color="textSecondary" textAlign="center" mt={1}>{feature.desc}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Testimonials with Carousel */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: 8, px: { xs: 3, md: 6 }, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="bold" mb={4} color="#067C92">
            What Pet Owners Are Saying
          </Typography>
          
          <Slider {...testimonialSettings}>
            {[
              { name: "Sarah J., Las Vegas", text: "Fluffy Pet Wash was amazing! My pup has never been this clean and happy." },
              { name: "Michael R., Henderson", text: "Such an easy experience! Booking was simple, and my dog smelled incredible!" },
              { name: "Jessica W., Summerlin", text: "The groomers were so gentle, and my dog absolutely loved it!" },
            ].map((review, index) => (
              <Card 
                key={index} 
                sx={{ 
                  boxShadow: 3, 
                  padding: 3, 
                  borderRadius: '15px', 
                  bgcolor: 'white', 
                  maxWidth: 600, 
                  mx: 'auto' 
                }}
              >
                <CardContent>
                  <Avatar src={TestimonialImage.src} sx={{ width: 60, height: 60, mx: 'auto', mb: 2 }} />
                  <Typography variant="body1" textAlign="center" color="textSecondary">
                    &quot;{review.text}&quot;
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold" color="#067C92" mt={2}>
                    - {review.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Home;