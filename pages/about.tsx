import { Box, Typography, Grid,} from '@mui/material';
import Image from 'next/image';
import AboutHeroImage from '../public/Dog4.jpeg'; // Ensure this exists in /public
import MissionImage from '../public/Dog6.jpeg'; // Ensure this exists in /public
import GroomingVanImage from '../public/Dog5.jpeg'; // New image for mobile van section
import HappyDogImage from '../public/Dog7.jpeg'

const AboutUs = () => {
  return (
    <Box>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '50vh', md: '60vh' }, // Adjust height for different screens
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
          src={AboutHeroImage}
          alt="Happy Dog Grooming"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
          style={{ filter: 'brightness(60%)' }} // Darkens image slightly for text readability
        />

        {/* Text Overlay */}
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

      {/* Mission Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: 3, maxWidth: '1200px', mx: 'auto' }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Image */}
          <Grid item xs={12} md={6}>
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
              <Image
                src={MissionImage}
                alt="Dog being groomed"
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>
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

            <Typography variant="h6" fontWeight="bold" color="#038B95" mb={1}>
              🛁 Luxury Mobile Grooming
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={3}>
              Our **fully-equipped mobile spa** ensures your furry friend gets top-tier care **right at your doorstep.**
            </Typography>

            <Typography variant="h6" fontWeight="bold" color="#038B95" mb={1}>
              ⏳ Stress-Free & Time-Saving
            </Typography>
            <Typography variant="body1" color="textSecondary">
              No more crowded salons or long wait times! We bring **convenience and care** straight to your home, 
              making the grooming process seamless and relaxing for both pets and owners.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Why Mobile Grooming Section */}
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

            <Typography variant="h6" fontWeight="bold" color="#038B95" mb={1}>
              🚐 Convenience at Your Doorstep
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={3}>
              No more stressful car rides or long waits at the salon! We arrive at your home, saving you time and effort.
            </Typography>

            <Typography variant="h6" fontWeight="bold" color="#038B95" mb={1}>
              🐾 One-on-One Attention
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Each pet receives **individualized care** with no distractions, ensuring a **calm and comfortable experience**.
            </Typography>
          </Grid>

          {/* Right Side: Grooming Van Image */}
          <Grid item xs={12} md={6}>
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
              <Image
                src={GroomingVanImage}
                alt="Fluffy Pet Wash Mobile Van"
                layout="fill"
                objectFit="cover"
                priority
                 objectPosition="center bottom"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Our Commitment Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: 3, maxWidth: '1200px', mx: 'auto' }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Image */}
          <Grid item xs={12} md={6}>
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
              <Image
                src={HappyDogImage}
                alt="Happy Dog After Grooming"
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>
          </Grid>

          {/* Right Side: Commitment */}
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
    </Box>
  );
};

export default AboutUs;