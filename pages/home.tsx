import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import PetsIcon from '@mui/icons-material/Pets';
import StarIcon from '@mui/icons-material/Star';
import SpaIcon from '@mui/icons-material/Spa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import DogImage from '../public/Dog2.png';
import { useEffect, useState } from 'react';
import ReviewDog1 from '../public/ReviewDog1.jpg';
import ReviewDog2 from '../public/ReviewDog2.jpg';
import ReviewDog5 from '../public/ReviewDog5.jpg';
import ReviewDog6 from '../public/ReviewDog6.jpg';
import ReviewDog4 from '../public/ReviewDog4.jpg';
import ReviewDog7 from '../public/ReviewDog7.jpg';


// Testimonial Carousel Settings
const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
};

const testimonials = [
  { name: "Katie Jones, Las Vegas", text: "Fluffy pet wash makes my life super easy when it comes to grooming my crazy frenchie! It’s the best not having to leave my house & drive my dog to the groomers. My dog loves to bark and freak out everytime he sees any other dog so taking him to an actual groomers was always a mission. Fluffy pet wash only takes around 20-30 mins to wash my dog and everytime he smells so good plus feels and looks so clean! The staff are very friendly and I know my dog is in great hands! I definitely recommend fluffy pet for all ur future dog grooming! 🐾🐶"
, image: ReviewDog1 },
  { name: "Toni Robinson, Las Vegas", text: "The service was amazing! They were so patient. My grand dog had never had a professional grooming before and they calmed her nerves and let me know every step of the way how it was going! I’m so grateful and will definitely use them again!", image: ReviewDog2 },
  { name: "David P., North Las Vegas", text: "Highly recommended! Fantastic service, and my dog looked perfect!", image: ReviewDog4 },
   { name: "Linda Creelman, North Las Vegas", text: "Wow! Amazing groomers! Vicente Cared lovingly for my 12 year old shepherd Chloe. Quality service!♥️🏚🐕😊", image: ReviewDog5 },
    { name: "Christie Gribben, Las Vegas", text: "Great same day grooming for my Rottweiler. My dog looked wonderful from top to bottom! Would highly recommend.", image: ReviewDog6 },
       { name: "Chelsea Ortiz, Las Vegas", text: "Always does an amazing job for my husky. Highly recommend!", image: ReviewDog7 },
       
];

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Home = () => {
  const [opacity, setOpacity] = useState(0.9); // Default for desktop

  useEffect(() => {
    const handleResize = () => {
      setOpacity(window.innerWidth < 900 ? 0.3 : 0.9); // ✅ Adjust opacity based on screen width
    };

    handleResize(); // ✅ Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // ✅ Cleanup on unmount
  }, []);
  return (
    <Box>
      {/* Hero Section with Mobile Image Adjustment */}
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
           alt="Happy dog after Fluffy Pet Wash grooming"
            layout="fill"
            objectFit="cover"
            loading="lazy" // ✅ Lazy load for performance
            style={{
              opacity: opacity, // ✅ Adjusted opacity based on screen width
              objectPosition: 'center left', // Default Centered
            }}
          />
          <Box sx={{ position: 'relative', zIndex: 2, px: { xs: 3, md: 10 },textAlign: { xs: 'center', md: 'center' },ml: { xs: 0, md: 'auto' }, }}>
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{
                fontSize: { xs: '2rem', md: '3.5rem' },
                color: '#067C92',
                textAlign: 'center',
              }}
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
            {testimonials.map((review, index) => (
              <Card 
                key={index} 
                sx={{ 
                  boxShadow: 3, 
                  padding: 3, 
                  borderRadius: '15px', 
                  bgcolor: 'white', 
                  maxWidth: 600, 
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                  <CardContent sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* ✅ Dynamic Testimonial Image */}
                   <Box  sx={{
                      width: 200,
                      height: 200,
                      borderRadius: '15px', // Slightly rounded edges
                      overflow: 'hidden',
                      boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', // Soft shadow effect
                      mb: 2, // Space below image
                    }}>
                    <Image 
                      src={review.image} 
                      alt={review.name} 
                      layout="intrinsic" 
                      width={200} 
                      height={200} 
                      objectFit="cover" // Ensures the image fills the frame properly
                    />
                  </Box>

                  
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