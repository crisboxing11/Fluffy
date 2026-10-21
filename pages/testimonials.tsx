import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Rating,
  Chip,
  Paper,
  Stack,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star as StarIcon,
  Favorite as HeartIcon,
  Pets as PetsIcon,
  Verified as VerifiedIcon,
  FormatQuote as QuoteIcon,
} from "@mui/icons-material";

// Import Images
import HeroImage from "../public/Dog6.jpeg";
import ReviewDog1 from "../public/ReviewDog1.jpg";
import ReviewDog2 from "../public/ReviewDog2.jpg";
import ReviewDog4 from "../public/ReviewDog4.jpg";
import ReviewDog5 from "../public/ReviewDog5.jpg";
import ReviewDog6 from "../public/ReviewDog6.jpg";
import ReviewDog7 from "../public/ReviewDog7.jpg";

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

const testimonials = [
  {
    name: "Katie Jones",
    location: "Las Vegas, NV",
    rating: 5,
    text: "Fluffy pet wash makes my life super easy when it comes to grooming my crazy frenchie! It's the best not having to leave my house & drive my dog to the groomers. My dog loves to bark and freak out everytime he sees any other dog so taking him to an actual groomers was always a mission. Fluffy pet wash only takes around 20-30 mins to wash my dog and everytime he smells so good plus feels and looks so clean! The staff are very friendly and I know my dog is in great hands! I definitely recommend fluffy pet for all ur future dog grooming! 🐾🐶",
    image: ReviewDog1,
    imageAlt: "Woman in a black shirt holding a small white dog",
    highlight: "Stress-free for anxious dogs",
  },
  {
    name: "Toni Robinson",
    location: "Las Vegas, NV",
    rating: 5,
    text: "The service was amazing! They were so patient. My grand dog had never had a professional grooming before and they calmed her nerves and let me know every step of the way how it was going! I'm so grateful and will definitely use them again!",
    image: ReviewDog2,
    imageAlt: "Woman in a black shirt holding a small white dog indoors",
    highlight: "Perfect for first-time grooming",
  },
  {
    name: "David P.",
    location: "North Las Vegas, NV",
    rating: 5,
    text: "Highly recommended! Fantastic service, and my dog looked perfect!",
    image: ReviewDog4,
    imageAlt: "Small white dog with a red bow against a light background",
    highlight: "Professional results",
  },
  {
    name: "Linda Creelman",
    location: "North Las Vegas, NV",
    rating: 5,
    text: "Wow! Amazing groomers! Vicente Cared lovingly for my 12 year old shepherd Chloe. Quality service!♥️🏚🐕😊",
    image: ReviewDog5,
    imageAlt: "Black and white dog lying on green grass outdoors",
    highlight: "Gentle care for senior pets",
  },
  {
    name: "Christie Gribben",
    location: "Las Vegas, NV",
    rating: 5,
    text: "Great same day grooming for my Rottweiler. My dog looked wonderful from top to bottom! Would highly recommend.",
    image: ReviewDog6,
    imageAlt: "Brown dog being bathed in a tub",
    highlight: "Same-day availability",
  },
  {
    name: "Chelsea Ortiz",
    location: "Las Vegas, NV",
    rating: 5,
    text: "Always does an amazing job for my husky. Highly recommend!",
    image: ReviewDog7,
    imageAlt: "Gray and white dog lying down against a blue-gray background",
    highlight: "Consistent quality service",
  },
];

const stats = [
  { number: "500+", label: "Happy Pets Served", icon: PetsIcon },
  { number: "5.0", label: "Review Rating", icon: StarIcon },
  { number: "100%", label: "Customer Satisfaction", icon: HeartIcon },
  { number: "100%", label: "Licensed & Insured", icon: VerifiedIcon },
];

const TestimonialsPage = () => {
  return (
    <Box sx={{ bgcolor: "#FAFAFA", overflow: "hidden" }}>
      {/* SEO & Metadata */}
      <Head>
        <title>Customer Testimonials | Fluffy Pet Wash - Real Reviews</title>
        <meta
          name="description"
          content="Read authentic customer testimonials and reviews for Fluffy Pet Wash mobile pet grooming services. See why pet owners in Las Vegas and Orlando trust us with their beloved pets."
        />
        <meta
          name="keywords"
          content="Fluffy Pet Wash testimonials, customer reviews, mobile pet grooming reviews, dog groomer reviews, pet grooming Las Vegas reviews, pet grooming Orlando reviews, mobile dog grooming testimonials"
        />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.fluffypetwash.com/testimonials"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Customer Testimonials | Fluffy Pet Wash - Real Reviews"
        />
        <meta
          property="og:description"
          content="Discover what pet owners are saying about our premium mobile grooming services. Read authentic testimonials from satisfied customers."
        />
        <meta
          property="og:image"
          content="https://www.fluffypetwash.com/fluffy-circle.PNG"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.fluffypetwash.com/testimonials"
        />
        <meta property="og:site_name" content="Fluffy Pet Wash" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Customer Testimonials | Fluffy Pet Wash - Real Reviews"
        />
        <meta
          name="twitter:description"
          content="See what customers are saying about our mobile pet grooming services. Real testimonials from happy pet owners."
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
              "@type": "WebPage",
              name: "Fluffy Pet Wash Customer Testimonials",
              description:
                "Customer testimonials and reviews for Fluffy Pet Wash mobile grooming services",
              about: { "@id": "https://www.fluffypetwash.com/#fluffy" },
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
            minHeight: { xs: "100vh", sm: "80vh", md: "80vh" },
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            py: { xs: 4, sm: 6, md: 8 },
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
            src={HeroImage}
            alt="Happy dog after professional grooming"
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
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "4rem",
                    lg: "5rem",
                  },
                  fontWeight: 900,
                  mb: { xs: 2, sm: 3 },
                  textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                  letterSpacing: "-0.02em",
                  lineHeight: { xs: 1.2, md: 1.1 },
                }}
              >
                Happy Paws, Happy Hearts
              </Typography>

              <Box
                sx={{
                  maxWidth: { xs: "90%", sm: 600, md: 700 },
                  mx: "auto",
                  mb: { xs: 3, sm: 4 },
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  p: { xs: 2, sm: 3, md: 4 },
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.5rem" },
                    fontWeight: 600,
                    lineHeight: 1.4,
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                    mb: { xs: 1.5, sm: 2 },
                  }}
                >
                  Real Stories from Real Pet Parents
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    opacity: 0.95,
                    lineHeight: 1.6,
                  }}
                >
                  Discover why hundreds of pet owners trust Fluffy Pet Wash with
                  their beloved companions. Read our 5-star reviews from
                  satisfied customers.
                </Typography>
              </Box>

              {/* Star Rating Display */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  mb: { xs: 2, sm: 3 },
                  flexWrap: "wrap",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    sx={{
                      color: "#FFD700",
                      fontSize: { xs: 28, md: 36 },
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                    }}
                  />
                ))}
                <Typography
                  sx={{
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    fontWeight: 700,
                    ml: 2,
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  5-Star Reviews
                </Typography>
              </Box>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1.5, sm: 2 }}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: { xs: 2, sm: 0 } }}
              >
                <Chip
                  icon={<VerifiedIcon />}
                  label="100% Authentic Reviews"
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
                        transition: "transform 0.15s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
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

      {/* Testimonials Grid Section */}
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
                  What Our Customers Say
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
                  Every review tells a story of trust, care, and exceptional
                  service. Here&apos;s what makes our customers choose us again
                  and again.
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <motion.div variants={scaleIn}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: "24px",
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(0, 173, 205, 0.1)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                        transition: "transform 0.15s ease",
                        position: "relative",
                        overflow: "visible",
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      {/* Quote Icon */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: -12,
                          right: 20,
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 16px rgba(0, 173, 205, 0.3)",
                        }}
                      >
                        <QuoteIcon sx={{ color: "white", fontSize: 24 }} />
                      </Box>

                      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        {/* Customer Image and Info */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 3,
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              mr: 3,
                            }}
                          >
                            <Box
                              sx={{
                                width: 80,
                                height: 80,
                                borderRadius: "50%",
                                overflow: "hidden",
                                border: "3px solid #93EDF0",
                                boxShadow: "0 4px 16px rgba(0, 173, 205, 0.2)",
                              }}
                            >
                              <Image
                                src={testimonial.image}
                                alt={testimonial.imageAlt}
                                width={80}
                                height={80}
                                style={{
                                  objectFit: "cover",
                                  width: "100%",
                                  height: "100%",
                                }}
                                quality={75}
                              />
                            </Box>
                            <Box
                              sx={{
                                position: "absolute",
                                bottom: -4,
                                right: -4,
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                bgcolor: "#00ADCD",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 2px 8px rgba(0, 173, 205, 0.4)",
                              }}
                            >
                              <HeartIcon
                                sx={{ color: "white", fontSize: 16 }}
                              />
                            </Box>
                          </Box>

                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                color: "#067C92",
                                fontSize: "1.1rem",
                                mb: 0.5,
                              }}
                            >
                              {testimonial.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#038B95",
                                fontSize: "0.9rem",
                                mb: 1,
                              }}
                            >
                              {testimonial.location}
                            </Typography>
                            <Rating
                              value={testimonial.rating}
                              readOnly
                              size="small"
                              sx={{
                                "& .MuiRating-iconFilled": {
                                  color: "#FFD700",
                                },
                              }}
                            />
                          </Box>
                        </Box>

                        {/* Highlight Chip */}
                        <Chip
                          label={testimonial.highlight}
                          size="small"
                          sx={{
                            bgcolor: "rgba(0, 173, 205, 0.1)",
                            color: "#00ADCD",
                            fontWeight: 600,
                            fontSize: "0.75rem",
                            mb: 2,
                            border: "1px solid rgba(0, 173, 205, 0.2)",
                          }}
                        />

                        {/* Review Text */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#067C92",
                            lineHeight: 1.6,
                            fontSize: "0.95rem",
                            fontStyle: "italic",
                            position: "relative",
                            pl: 2,
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              left: 0,
                              top: 0,
                              bottom: 0,
                              width: 3,
                              background:
                                "linear-gradient(135deg, #00ADCD, #0AC3E6)",
                              borderRadius: "2px",
                            },
                          }}
                        >
                          &quot;{testimonial.text}&quot;
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

      {/* Trust Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: "linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)",
          }}
        >
          <Container maxWidth="md">
            <Box sx={{ textAlign: "center" }}>
              <motion.div variants={slideInLeft}>
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
                  Why Pet Parents Trust Us
                </Typography>

                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 4, md: 6 },
                    borderRadius: "32px",
                    background:
                      "linear-gradient(135deg, rgba(0, 173, 205, 0.05) 0%, rgba(147, 237, 240, 0.05) 100%)",
                    border: "1px solid rgba(0, 173, 205, 0.1)",
                    mb: 4,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#067C92",
                      fontWeight: 600,
                      fontSize: { xs: "1.2rem", md: "1.4rem" },
                      lineHeight: 1.5,
                      fontStyle: "italic",
                      mb: 3,
                    }}
                  >
                    &quot;Every testimonial represents a pet who received loving
                    care and an owner who experienced the convenience and peace
                    of mind that comes with our mobile grooming service.&quot;
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 2,
                      justifyContent: "center",
                    }}
                  >
                    <Chip
                      icon={<VerifiedIcon />}
                      label="Licensed & Insured"
                      sx={{
                        bgcolor: "#E8F5E8",
                        color: "#2E7D32",
                        fontWeight: 600,
                        border: "1px solid #4CAF50",
                      }}
                    />
                    <Chip
                      icon={<StarIcon />}
                      label="5-Star Reviews"
                      sx={{
                        bgcolor: "#FFF8E1",
                        color: "#F57C00",
                        fontWeight: 600,
                        border: "1px solid #FFB74D",
                      }}
                    />
                    <Chip
                      icon={<PetsIcon />}
                      label="Pet Safety First"
                      sx={{
                        bgcolor: "#E3F2FD",
                        color: "#1976D2",
                        fontWeight: 600,
                        border: "1px solid #42A5F5",
                      }}
                    />
                  </Box>
                </Paper>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#038B95",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  Our commitment to excellence shows in every review. From
                  first-time grooming experiences to regular maintenance for
                  senior pets, we provide consistent, professional care that pet
                  owners can trust.
                </Typography>
              </motion.div>
            </Box>
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
                Ready to Join Our Happy Customers?
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
                Experience the same exceptional service that earned us these
                amazing reviews. Book your appointment today and see why pet
                owners choose Fluffy Pet Wash.
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
                      transition: "transform 0.15s ease",
                      minWidth: 200,
                      "&:hover": {
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    Book Your Appointment
                  </Button>
                </Link>

                <Link href="/services" passHref legacyBehavior>
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
                    View Our Services
                  </Button>
                </Link>

                <Link href="/prices" passHref legacyBehavior>
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
                    View Our Prices
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

export default TestimonialsPage;
