import {
  Box,
  Typography,
  Grid,
  Button,
  Container,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  Paper,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import { LAS_VEGAS_POSTAL_ADDRESS } from "../data/serviceArea";
import Link from "next/link";
import {
  Pets as PetsIcon,
  Star as StarIcon,
  Verified as VerifiedIcon,
  LocalShipping as MobileIcon,
  Favorite as HeartIcon,
  Security as ShieldIcon,
  EmojiEvents as TrophyIcon,
  Schedule as ClockIcon,
  CheckCircle as CheckIcon,
} from "@mui/icons-material";

// Import Images
import AboutHeroImage from "../public/Dog4.jpeg";
import MissionImage from "../public/Dog6.jpeg";
import FreshlyCleanedDogImage from "../public/Dog5.jpeg";
import HappyDogImage from "../public/Dog7.jpeg";

// Enhanced Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const AboutUs = () => {
  const stats = [
    { number: "500+", label: "Happy Pets Served", icon: PetsIcon },
    { number: "100%", label: "Satisfied Customers", icon: StarIcon },
    { number: "100%", label: "Licensed & Insured", icon: ShieldIcon },
    { number: "24/7", label: "Customer Support", icon: ClockIcon },
  ];

  const values = [
    {
      icon: HeartIcon,
      title: "Compassionate Care",
      description:
        "Every pet receives individualized attention with love, patience, and understanding.",
      color: "#FF6B6B",
    },
    {
      icon: TrophyIcon,
      title: "Excellence in Service",
      description:
        "We maintain the highest standards in grooming techniques and customer satisfaction.",
      color: "#FFD93D",
    },
    {
      icon: ShieldIcon,
      title: "Safety First",
      description:
        "Your pet's safety and comfort are our top priorities in every grooming session.",
      color: "#6BCF7F",
    },
    {
      icon: MobileIcon,
      title: "Ultimate Convenience",
      description:
        "Professional grooming services delivered right to your doorstep on your schedule.",
      color: "#4ECDC4",
    },
  ];

  const features = [
    "Stress-free mobile grooming",
    "Premium organic products",
    "Certified professional groomers",
    "Full-service spa treatments",
    "Flexible scheduling",
    "Competitive pricing",
  ];

  return (
    <Box sx={{ bgcolor: "#FAFAFA", overflow: "hidden" }}>
      {/* SEO & Metadata */}
      <Head>
        <title>About Fluffy Pet Wash | Mobile Pet Grooming Excellence</title>
        <meta
          name="description"
          content="Discover Fluffy Pet Wash - your trusted mobile pet grooming service. Learn about our mission, values, and commitment to providing stress-free, luxury grooming experiences for your beloved pets."
        />
        <meta
          name="keywords"
          content="about Fluffy Pet Wash, mobile pet grooming company, professional pet groomers, mobile dog grooming service, pet grooming Las Vegas, pet grooming Orlando, luxury pet care, stress-free grooming"
        />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.fluffypetwash.com/about" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="About Fluffy Pet Wash | Mobile Pet Grooming Excellence"
        />
        <meta
          property="og:description"
          content="Learn about Fluffy Pet Wash - the premier mobile pet grooming service dedicated to providing stress-free, professional care for your pets."
        />
        <meta
          property="og:image"
          content="https://www.fluffypetwash.com/fluffy-circle.PNG"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fluffypetwash.com/about" />
        <meta property="og:site_name" content="Fluffy Pet Wash" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Fluffy Pet Wash | Mobile Pet Grooming Excellence"
        />
        <meta
          name="twitter:description"
          content="Discover the story behind Fluffy Pet Wash and our commitment to exceptional mobile pet grooming services."
        />
        <meta
          name="twitter:image"
          content="https://www.fluffypetwash.com/fluffy-circle.PNG"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fluffy Pet Wash",
              url: "https://www.fluffypetwash.com",
              logo: "https://www.fluffypetwash.com/fluffy-circle.PNG",
              description:
                "Premium mobile pet grooming service providing stress-free, professional care at your doorstep.",
              address: LAS_VEGAS_POSTAL_ADDRESS,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-702-508-6248",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.facebook.com/fluffypetwash",
                "https://www.instagram.com/fluffypetwash",
              ],
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "60vh", md: "80vh" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(6, 124, 146, 0.8) 0%, rgba(0, 173, 205, 0.6) 50%, rgba(147, 237, 240, 0.4) 100%)",
              zIndex: 2,
            },
          }}
        >
          <Image
            src={AboutHeroImage}
            alt="Happy dog representing Fluffy Pet Wash quality"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority
            quality={90}
          />

          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              zIndex: 3,
              textAlign: "center",
              color: "white",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                  fontWeight: 900,
                  mb: 3,
                  textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                About Fluffy Pet Wash
              </Typography>

              <Box
                sx={{
                  maxWidth: 600,
                  mx: "auto",
                  mb: 4,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  p: { xs: 3, md: 4 },
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    fontWeight: 600,
                    lineHeight: 1.4,
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Transforming pet grooming with luxury mobile services that
                  prioritize comfort, convenience, and exceptional care.
                </Typography>
              </Box>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Chip
                  icon={<VerifiedIcon />}
                  label="Licensed & Insured"
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1rem",
                    py: 2,
                    px: 1,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                />

                <Chip
                  icon={<PetsIcon />}
                  label="500+ Happy Pets"
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1rem",
                    py: 2,
                    px: 1,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                />
              </Stack>
            </motion.div>
          </Container>
        </Box>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            background: "linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)",
            position: "relative",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div variants={scaleIn}>
                    <Paper
                      elevation={0}
                      sx={{
                        textAlign: "center",
                        p: { xs: 3, md: 4 },
                        borderRadius: "24px",
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(0, 173, 205, 0.1)",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 12px 24px rgba(0, 173, 205, 0.12)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 60, md: 80 },
                          height: { xs: 60, md: 80 },
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                          boxShadow: "0 8px 32px rgba(0, 173, 205, 0.3)",
                        }}
                      >
                        <stat.icon
                          sx={{
                            color: "white",
                            fontSize: { xs: 28, md: 36 },
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "2rem", md: "3rem" },
                          fontWeight: 900,
                          color: "#067C92",
                          mb: 1,
                          background:
                            "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#038B95",
                          fontWeight: 600,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div variants={slideInLeft}>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "32px",
                      overflow: "hidden",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(135deg, rgba(0, 173, 205, 0.1) 0%, transparent 50%)",
                        zIndex: 1,
                      },
                    }}
                  >
                    <Image
                      src={MissionImage}
                      alt="Professional pet grooming in action"
                      width={600}
                      height={400}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "32px",
                      }}
                      quality={85}
                    />
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={slideInRight}>
                  <Box sx={{ pl: { xs: 0, md: 4 } }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "2rem", md: "3rem" },
                        fontWeight: 800,
                        mb: 3,
                        background:
                          "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        lineHeight: 1.2,
                      }}
                    >
                      Our Mission
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        color: "#067C92",
                        fontWeight: 600,
                        mb: 3,
                        fontSize: { xs: "1.2rem", md: "1.4rem" },
                        lineHeight: 1.4,
                      }}
                    >
                      Revolutionizing pet care through stress-free, luxury
                      mobile grooming experiences.
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#038B95",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        lineHeight: 1.7,
                        mb: 4,
                      }}
                    >
                      At Fluffy Pet Wash, we believe every pet deserves to be
                      pampered in the comfort of their own environment. Our
                      mission is to eliminate the stress and anxiety often
                      associated with traditional grooming by bringing
                      professional, high-quality services directly to your
                      doorstep.
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      <Grid container spacing={2}>
                        {features.slice(0, 3).map((feature, index) => (
                          <Grid item xs={12} key={index}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                              }}
                            >
                              <CheckIcon
                                sx={{
                                  color: "#4CAF50",
                                  fontSize: 24,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                sx={{
                                  color: "#067C92",
                                  fontWeight: 500,
                                  fontSize: "1rem",
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    <Link href="/services" passHref legacyBehavior>
                      <Button
                        component="a"
                        variant="contained"
                        size="large"
                        sx={{
                          px: 4,
                          py: 2,
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          borderRadius: "50px",
                          background:
                            "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 100%)",
                          boxShadow: "0 8px 32px rgba(0, 173, 205, 0.3)",
                          transition: "transform 0.2s ease",
                          "&:hover": {
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        Explore Our Services
                      </Button>
                    </Link>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: "linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "radial-gradient(circle at 20% 80%, rgba(0, 173, 205, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 237, 240, 0.05) 0%, transparent 50%)",
            },
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <motion.div variants={fadeInUp}>
              <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontWeight: 800,
                    mb: 3,
                    background:
                      "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Our Core Values
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#038B95",
                    maxWidth: 600,
                    mx: "auto",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    lineHeight: 1.6,
                  }}
                >
                  The principles that guide everything we do and define who we
                  are as a company.
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={4}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={scaleIn}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: "24px",
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                        backdropFilter: "blur(20px)",
                        border: `1px solid ${value.color}30`,
                        boxShadow: `0 8px 32px ${value.color}15`,
                        transition: "transform 0.2s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          p: { xs: 3, md: 4 },
                          textAlign: "center",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${value.color} 0%, ${value.color}CC 100%)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mx: "auto",
                            mb: 3,
                            boxShadow: `0 8px 32px ${value.color}30`,
                          }}
                        >
                          <value.icon
                            sx={{
                              color: "white",
                              fontSize: 36,
                            }}
                          />
                        </Box>

                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: "#067C92",
                            fontSize: { xs: "1.1rem", md: "1.3rem" },
                          }}
                        >
                          {value.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "#038B95",
                            lineHeight: 1.6,
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            flexGrow: 1,
                          }}
                        >
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Why Choose Mobile Grooming */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <motion.div variants={slideInLeft}>
                  <Box sx={{ pr: { xs: 0, md: 4 } }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "2rem", md: "3rem" },
                        fontWeight: 800,
                        mb: 3,
                        background:
                          "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        lineHeight: 1.2,
                      }}
                    >
                      Why Mobile Grooming?
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#038B95",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        lineHeight: 1.7,
                        mb: 4,
                      }}
                    >
                      Traditional grooming salons can be overwhelming for pets
                      with crowded waiting areas, unfamiliar sounds, and other
                      anxious animals. Our mobile approach creates a calm,
                      personalized environment where your pet can relax and
                      enjoy their spa day.
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      <Grid container spacing={2}>
                        {features.slice(3).map((feature, index) => (
                          <Grid item xs={12} key={index}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                              }}
                            >
                              <CheckIcon
                                sx={{
                                  color: "#4CAF50",
                                  fontSize: 24,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                sx={{
                                  color: "#067C92",
                                  fontWeight: 500,
                                  fontSize: "1rem",
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: "16px",
                        background:
                          "linear-gradient(135deg, #E3F2FD 0%, #F0F8FF 100%)",
                        border: "1px solid rgba(0, 173, 205, 0.2)",
                        mb: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#067C92",
                          fontWeight: 600,
                          fontSize: "1rem",
                          fontStyle: "italic",
                        }}
                      >
                        &quot;We create a stress-free environment inside our
                        fully-equipped mobile grooming van, allowing your pet to
                        feel comfortable and secure throughout their grooming
                        experience.&quot;
                      </Typography>
                    </Paper>

                    <Link href="/prices" passHref legacyBehavior>
                      <Button
                        component="a"
                        variant="contained"
                        size="large"
                        sx={{
                          px: 4,
                          py: 2,
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          borderRadius: "50px",
                          background:
                            "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 100%)",
                          boxShadow: "0 8px 32px rgba(0, 173, 205, 0.3)",
                          transition: "transform 0.2s ease",
                          "&:hover": {
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        Check Our Prices
                      </Button>
                    </Link>
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <motion.div variants={slideInRight}>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "32px",
                      overflow: "hidden",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(135deg, rgba(0, 173, 205, 0.1) 0%, transparent 50%)",
                        zIndex: 1,
                      },
                    }}
                  >
                    <Image
                      src={FreshlyCleanedDogImage}
                      alt="Happy dog after mobile grooming service"
                      width={600}
                      height={400}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "32px",
                      }}
                      quality={85}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: "linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div variants={slideInLeft}>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "32px",
                      overflow: "hidden",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Image
                      src={HappyDogImage}
                      alt="Professional groomer with happy pet"
                      width={600}
                      height={400}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "32px",
                      }}
                      quality={85}
                    />
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={slideInRight}>
                  <Box sx={{ pl: { xs: 0, md: 4 } }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "2rem", md: "3rem" },
                        fontWeight: 800,
                        mb: 3,
                        background:
                          "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        lineHeight: 1.2,
                      }}
                    >
                      Our Expert Team
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#038B95",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        lineHeight: 1.7,
                        mb: 4,
                      }}
                    >
                      Our certified professional groomers are passionate about
                      animal care and trained in the latest grooming techniques.
                      Each team member undergoes extensive training in pet
                      handling, safety protocols, and stress-reduction methods
                      to ensure your pet receives the best possible care.
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      <Stack spacing={3}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: "#00ADCD",
                              width: 48,
                              height: 48,
                            }}
                          >
                            <VerifiedIcon />
                          </Avatar>
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: 700,
                                color: "#067C92",
                                fontSize: "1.1rem",
                              }}
                            >
                              Certified Professionals
                            </Typography>
                            <Typography
                              sx={{ color: "#038B95", fontSize: "0.9rem" }}
                            >
                              Licensed and insured groomers with years of
                              experience
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: "#0AC3E6",
                              width: 48,
                              height: 48,
                            }}
                          >
                            <HeartIcon />
                          </Avatar>
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: 700,
                                color: "#067C92",
                                fontSize: "1.1rem",
                              }}
                            >
                              Compassionate Care
                            </Typography>
                            <Typography
                              sx={{ color: "#038B95", fontSize: "0.9rem" }}
                            >
                              Gentle handling with patience and understanding
                              for every pet
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: "#038B95",
                              width: 48,
                              height: 48,
                            }}
                          >
                            <TrophyIcon />
                          </Avatar>
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: 700,
                                color: "#067C92",
                                fontSize: "1.1rem",
                              }}
                            >
                              Continuous Training
                            </Typography>
                            <Typography
                              sx={{ color: "#038B95", fontSize: "0.9rem" }}
                            >
                              Regular updates on latest techniques and safety
                              protocols
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background:
              "linear-gradient(135deg, #067C92 0%, #00ADCD 50%, #0AC3E6 100%)",
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            },
          }}
        >
          <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  fontWeight: 900,
                  mb: 3,
                  textShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  lineHeight: 1.1,
                }}
              >
                Ready to Pamper Your Pet?
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  mb: 4,
                  opacity: 0.95,
                  maxWidth: 600,
                  mx: "auto",
                  lineHeight: 1.5,
                }}
              >
                Experience the convenience and luxury of professional mobile pet
                grooming. Book your appointment today and see why pet owners
                trust Fluffy Pet Wash.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
              >
                <Link href="/prebook" passHref legacyBehavior>
                  <Button
                    component="a"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 6,
                      py: 2.5,
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      borderRadius: "50px",
                      bgcolor: "white",
                      color: "#067C92",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.2s ease",
                      minWidth: 200,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        bgcolor: "#F8F9FA",
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </Link>

                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    component="a"
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 6,
                      py: 2.5,
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      borderRadius: "50px",
                      borderColor: "white",
                      color: "white",
                      borderWidth: 2,
                      minWidth: 200,
                      transition:
                        "transform 0.2s ease, background-color 0.2s ease",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </Stack>
            </motion.div>
          </Container>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AboutUs;
