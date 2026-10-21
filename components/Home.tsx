import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import Image from "next/image";
import PetsIcon from "@mui/icons-material/Pets";
import StarIcon from "@mui/icons-material/Star";
import SpaIcon from "@mui/icons-material/Spa";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneIcon from "@mui/icons-material/Phone";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import DogImage from "../public/Dog2.png";
import { useEffect, useState, useMemo, useCallback } from "react";
import ReviewDog1 from "../public/ReviewDog1.jpg";
import ReviewDog2 from "../public/ReviewDog2.jpg";
import ReviewDog5 from "../public/ReviewDog5.jpg";
import ReviewDog6 from "../public/ReviewDog6.jpg";
import ReviewDog4 from "../public/ReviewDog4.jpg";
import ReviewDog7 from "../public/ReviewDog7.jpg";
import Link from "next/link";
import {
  LAS_VEGAS_PHONE_DISPLAY,
  LAS_VEGAS_TEL_HREF,
} from "../lib/ads";

// Testimonial Carousel Settings - Memoized for performance
const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  adaptiveHeight: true,
  pauseOnHover: true,
  fade: true,
  cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  lazyLoad: "ondemand" as const,
};

const testimonials = [
  {
    name: "Katie Jones, Las Vegas",
    text: "Fluffy pet wash makes my life super easy when it comes to grooming my crazy frenchie! It's the best not having to leave my house & drive my dog to the groomers. My dog loves to bark and freak out everytime he sees any other dog so taking him to an actual groomers was always a mission. Fluffy pet wash only takes around 20-30 mins to wash my dog and everytime he smells so good plus feels and looks so clean! The staff are very friendly and I know my dog is in great hands! I definitely recommend fluffy pet for all ur future dog grooming! 🐾🐶",
    image: ReviewDog1,
    imageAlt: "Woman in a black shirt holding a small white dog",
  },
  {
    name: "Toni Robinson, Las Vegas",
    text: "The service was amazing! They were so patient. My grand dog had never had a professional grooming before and they calmed her nerves and let me know every step of the way how it was going! I'm so grateful and will definitely use them again!",
    image: ReviewDog2,
    imageAlt: "Woman in a black shirt holding a small white dog indoors",
  },
  {
    name: "David P., North Las Vegas",
    text: "Highly recommended! Fantastic service, and my dog looked perfect!",
    image: ReviewDog4,
    imageAlt:
      "Small white dog with a red bow against a light background in North Las Vegas, NV",
  },
  {
    name: "Linda Creelman, North Las Vegas",
    text: "Wow! Amazing groomers! Vicente Cared lovingly for my 12 year old shepherd Chloe. Quality service!♥️🏚🐕😊",
    image: ReviewDog5,
    imageAlt: "Black and white dog lying on green grass outdoors",
  },
  {
    name: "Christie Gribben, Las Vegas",
    text: "Great same day grooming for my Rottweiler. My dog looked wonderful from top to bottom! Would highly recommend.",
    image: ReviewDog6,
    imageAlt: "Brown dog being bathed in a tub",
  },
  {
    name: "Chelsea Ortiz, Las Vegas",
    text: "Always does an amazing job for my husky. Highly recommend!",
    image: ReviewDog7,
    imageAlt: "Gray and white dog lying down against a blue-gray background",
  },
];

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
      staggerChildren: 0.2,
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

const Home = () => {
  const [opacity, setOpacity] = useState(0.9); // Default for desktop
  const [objectPosition, setObjectPosition] = useState("center center");
  const [objectFit, setObjectFit] = useState<"cover" | "contain">("contain");
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width < 600) {
      setOpacity(0.25);
      setObjectPosition("30% center"); // Show more of the left side on mobile
      setObjectFit("cover");
    } else if (width < 900) {
      setOpacity(0.35);
      setObjectPosition("40% center"); // Show more of the left side on tablet
      setObjectFit("cover");
    } else {
      setOpacity(0.7); // Reduced opacity for desktop
      setObjectPosition("center bottom"); // Position towards bottom on desktop
      setObjectFit("contain"); // Use contain for desktop to make image smaller
    }
  }, []);

  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Memoize feature data to prevent re-creation on every render
  const features = useMemo(
    () => [
      {
        title: "Stress-Free Experience",
        icon: SpaIcon,
        desc: "No crowded salons or anxious waiting rooms—just a gentle, personalized one-on-one grooming experience in familiar surroundings.",
        color: "#0AC3E6",
      },
      {
        title: "Premium Care & Products",
        icon: StarIcon,
        desc: "We use only the finest hypoallergenic, organic shampoos and conditioners to keep your pet's coat healthy, shiny, and beautiful.",
        color: "#00ADCD",
      },
      {
        title: "Ultimate Convenience",
        icon: PetsIcon,
        desc: "We come directly to you, saving precious time while ensuring your pet stays comfortable in their own environment.",
        color: "#038B95",
      },
    ],
    [],
  );

  // Memoize trust indicators
  const trustIndicators = useMemo(
    () => [
      {
        icon: VerifiedIcon,
        text: "Licensed & Insured",
        color: "#00ADCD",
      },
      {
        icon: StarIcon,
        text: "5 Star Reviews",
        color: "#0AC3E6",
      },
      {
        icon: PetsIcon,
        text: "Mobile Convenience",
        color: "#038B95",
      },
    ],
    [],
  );
  return (
    <Box sx={{ bgcolor: "#FAFAFA", minHeight: "100vh" }}>
      {/* Revolutionary Hero Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: { xs: "70vh", md: "100vh" },
            display: "flex",
            alignItems: { xs: "center", md: "center" },
            justifyContent: "center",
            overflow: "hidden",
            pt: { xs: "70px", sm: "80px", md: "100px" },
            pb: { xs: 2, sm: 3, md: 0 },
          }}
        >
          {/* Dynamic Gradient Background */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: {
                xs: "linear-gradient(135deg, rgba(147, 237, 240, 0.95) 0%, rgba(147, 237, 240, 0.85) 25%, rgba(255, 255, 255, 0.92) 60%, rgba(250, 250, 250, 0.98) 100%)",
                sm: "linear-gradient(135deg, rgba(147, 237, 240, 0.9) 0%, rgba(147, 237, 240, 0.75) 30%, rgba(255, 255, 255, 0.85) 65%, rgba(250, 250, 250, 0.95) 100%)",
                md: "linear-gradient(135deg, #93EDF0 0%, rgba(147, 237, 240, 0.6) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(220, 220, 220, 0.3) 75%, #FAFAFA 100%)",
              },
              zIndex: 1,
            }}
          />

          {/* Enhanced Dog Image with Creative Positioning */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <Image
              src={DogImage}
              alt="Close-up of a small white dog with its tongue out against a pale blue background in Las Vegas"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw, 100vw"
              priority
              quality={80}
              placeholder="blur"
              style={{
                objectFit: objectFit,
                objectPosition: objectPosition,
                opacity: opacity,
                pointerEvents: "none",
                filter: "brightness(1.05) contrast(1.02)",
                willChange: "opacity",
              }}
            />
          </Box>

          {/* Content Container with Asymmetric Layout */}
          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              zIndex: 3,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-end" },
              px: { xs: 1.5, sm: 2, md: 4, lg: 8 },
              py: { xs: 1, sm: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "92%", sm: "88%", md: "880px", lg: "960px" },
                textAlign: { xs: "center", md: "left" },
                width: "100%",
                maxHeight: {
                  xs: "calc(100svh - 140px)",
                  sm: "calc(100vh - 160px)",
                  md: "none",
                },
                overflow: { xs: "visible", md: "visible" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                px: { xs: 1, sm: 0 },
              }}
            >
              {/* Hero Title with Creative Typography */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "1.75rem",
                      sm: "2.4rem",
                      md: "4.5rem",
                      lg: "5.8rem",
                    },
                    fontWeight: 900,
                    lineHeight: { xs: 1.08, sm: 1.12, md: 1.05 },
                    mb: { xs: 1.2, sm: 1.8, md: 3 },
                    background:
                      "linear-gradient(135deg, #067C92 0%, #00ADCD 30%, #0AC3E6 60%, #93EDF0 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 4px 20px rgba(6, 124, 146, 0.3)",
                    position: "relative",
                    letterSpacing: { xs: "-0.02em", md: "-0.01em" },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: { xs: -6, sm: -7, md: -8 },
                      left: { xs: "50%", md: 0 },
                      transform: { xs: "translateX(-50%)", md: "none" },
                      width: { xs: 90, sm: 130, md: 150 },
                      height: { xs: 3, sm: 3.5, md: 4 },
                      background:
                        "linear-gradient(90deg, #00ADCD, #0AC3E6, #93EDF0)",
                      borderRadius: "2px",
                      boxShadow: "0 2px 8px rgba(0, 173, 205, 0.4)",
                    },
                  }}
                >
                  Luxury Mobile
                  <br />
                  <Box
                    component="span"
                    sx={{
                      position: "relative",
                      "&::before": {
                        content: '"Pet Grooming"',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        background:
                          "linear-gradient(135deg, #038B95 0%, #067C92 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1))",
                      },
                    }}
                  >
                    Pet Grooming
                  </Box>
                </Typography>
              </motion.div>

              {/* Enhanced Value Proposition */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Box
                  sx={{
                    background: {
                      xs: "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))",
                      md: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))",
                    },
                    backdropFilter: "blur(25px)",
                    borderRadius: { xs: "18px", sm: "22px", md: "28px" },
                    p: { xs: 2, sm: 3, md: 5 },
                    mb: { xs: 2, sm: 3, md: 5 },
                    mx: { xs: 0, sm: 0 },
                    border: "1px solid rgba(147, 237, 240, 0.4)",
                    boxShadow: {
                      xs: "0 8px 32px rgba(6, 124, 146, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
                      md: "0 12px 40px rgba(6, 124, 146, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                    },
                    position: "relative",
                    overflow: "hidden",
                    maxWidth: { md: 640 },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, #00ADCD, #0AC3E6, #93EDF0)",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: { xs: 1.8, sm: 2.2, md: 3 },
                      color: "#067C92",
                      fontWeight: 800,
                      fontSize: { xs: "1rem", sm: "1.2rem", md: "1.8rem" },
                      lineHeight: { xs: 1.25, sm: 1.28, md: 1.3 },
                      textAlign: { xs: "center", md: "left" },
                      letterSpacing: { xs: "-0.01em", md: "normal" },
                    }}
                  >
                    Bringing stress-free, professional pet grooming{" "}
                    <Box
                      component="span"
                      sx={{
                        background: "linear-gradient(135deg, #00ADCD, #0AC3E6)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 900,
                      }}
                    >
                      straight to your doorstep
                    </Box>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#038B95",
                      fontSize: { xs: "0.88rem", sm: "1rem", md: "1.25rem" },
                      lineHeight: { xs: 1.5, sm: 1.55, md: 1.6 },
                      textAlign: { xs: "center", md: "left" },
                      fontWeight: 500,
                      opacity: 0.95,
                      letterSpacing: { xs: "0.01em", md: "normal" },
                    }}
                  >
                    Our full-service mobile spa pampers your pup in a calm,
                    stress-free environment on wheels — no travel, no waiting,
                    just pure comfort.
                  </Typography>
                </Box>
              </motion.div>

              {/* Book stays the filled primary. Call is the outlined secondary. */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    flexWrap: { xs: "wrap", md: "nowrap" },
                    alignItems: { xs: "stretch", sm: "center", md: "stretch" },
                    justifyContent: { xs: "center", md: "flex-start" },
                    gap: { xs: 1.25, sm: 2, lg: 2.5 },
                    width: { xs: "100%", sm: "auto" },
                    maxWidth: { xs: 280, sm: "none" },
                    mx: { xs: "auto", md: 0 },
                    mb: { xs: 2, sm: 3.5, md: 5 },
                  }}
                >
                  <Link href="/prebook" passHref legacyBehavior>
                    <Button
                      component="a"
                      variant="contained"
                      size="large"
                      aria-label="Book a grooming appointment"
                      sx={{
                        px: { xs: 4, sm: 5, md: 7, lg: 8 },
                        py: { xs: 2.2, sm: 2.8, md: 0 },
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.65rem", lg: "1.9rem" },
                        fontWeight: 800,
                        textTransform: "none",
                        borderRadius: "50px",
                        background:
                          "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 50%, #038B95 100%)",
                        boxShadow:
                          "0 12px 40px rgba(0, 173, 205, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        position: "relative",
                        overflow: "hidden",
                        transition:
                          "background 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        width: { xs: "100%", sm: "auto" },
                        flexShrink: 0,
                        boxSizing: "border-box",
                        height: { md: 88, lg: 104 },
                        minHeight: { xs: "52px", sm: "56px", md: 88, lg: 104 },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: "-100%",
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                          transition: "left 0.6s ease",
                        },
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #038B95 0%, #00ADCD 50%, #0AC3E6 100%)",
                          transform: "translateY(-3px) scale(1.02)",
                          boxShadow:
                            "0 16px 50px rgba(0, 173, 205, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                          "&::before": {
                            left: "100%",
                          },
                        },
                        "&&:focus-visible, &&.Mui-focusVisible": {
                          outline: "3px solid #067C92 !important",
                          outlineOffset: "3px !important",
                        },
                      }}
                    >
                      Book Your Appointment
                    </Button>
                  </Link>
                  <Button
                    component="a"
                    href={LAS_VEGAS_TEL_HREF}
                    variant="outlined"
                    startIcon={
                      <PhoneIcon
                        aria-hidden="true"
                        sx={{ fontSize: { xs: 20, md: 28, lg: 32 } }}
                      />
                    }
                    aria-label={`Call ${LAS_VEGAS_PHONE_DISPLAY}`}
                    sx={{
                      px: { xs: 2.5, sm: 3, md: 5, lg: 6.5 },
                      py: { xs: 1.25, sm: 1.35, md: 0 },
                      boxSizing: "border-box",
                      height: { md: 88, lg: 104 },
                      minHeight: { xs: 48, sm: 48, md: 88, lg: 104 },
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.35rem", lg: "1.55rem" },
                      fontWeight: 700,
                      textTransform: "none",
                      borderRadius: "50px",
                      border: "2px solid #067C92",
                      color: "#067C92",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0 6px 18px rgba(6, 124, 146, 0.12)",
                      width: { xs: "100%", sm: "auto" },
                      flexShrink: 0,
                      transition:
                        "background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease",
                      "&:hover": {
                        border: "2px solid #038B95",
                        backgroundColor: "#F4FBFB",
                        color: "#067C92",
                      },
                      "&&:focus-visible, &&.Mui-focusVisible": {
                        outline: "3px solid #067C92 !important",
                        outlineOffset: "3px !important",
                      },
                    }}
                  >
                    Call {LAS_VEGAS_PHONE_DISPLAY}
                  </Button>
                </Box>
              </motion.div>

              {/* Redesigned Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Grid
                  container
                  spacing={{ xs: 0.5, sm: 1, md: 2 }}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  {trustIndicators.map((item, index) => (
                    <Grid item xs={4} sm={4} md={12} lg={4} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row", md: "row" },
                          alignItems: "center",
                          justifyContent: { xs: "center", md: "flex-start" },
                          gap: { xs: 0.5, sm: 1, md: 2 },
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))",
                          backdropFilter: "blur(15px)",
                          px: { xs: 1, sm: 2, md: 3 },
                          py: { xs: 1.5, sm: 2, md: 2.5 },
                          borderRadius: { xs: "12px", sm: "16px", md: "20px" },
                          border: `1px solid ${item.color}30`,
                          boxShadow: `0 6px 20px ${item.color}15`,
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          mx: { xs: 0.5, sm: 0 },
                          minHeight: { xs: "auto", sm: "auto" },
                          "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: `0 8px 25px ${item.color}25`,
                            borderColor: `${item.color}50`,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 24, sm: 28, md: 36 },
                            height: { xs: 24, sm: 28, md: 36 },
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${item.color}, ${item.color}CC)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: `0 4px 12px ${item.color}30`,
                            flexShrink: 0,
                          }}
                        >
                          <item.icon
                            sx={{
                              color: "white",
                              fontSize: { xs: 14, sm: 16, md: 20 },
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            color: "#067C92",
                            fontWeight: 700,
                            fontSize: {
                              xs: "0.65rem",
                              sm: "0.8rem",
                              md: "1rem",
                            },
                            letterSpacing: "0.3px",
                            textAlign: "center",
                            lineHeight: 1.2,
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Box>
          </Container>
        </Box>
      </motion.div>


      {/* Enhanced Why Choose Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Box
          sx={{
            py: { xs: 4, sm: 6, md: 12 },
            px: { xs: 2, sm: 3, md: 6 },
            textAlign: "center",
            background: "linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative Background Elements */}
          <Box
            sx={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(147, 237, 240, 0.3) 0%, transparent 70%)",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -100,
              left: -100,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0, 173, 205, 0.2) 0%, transparent 70%)",
              zIndex: 0,
            }}
          />

          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: { xs: 1.5, sm: 2 },
                  color: "#067C92",
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.8rem" },
                  lineHeight: 1.2,
                  px: { xs: 1, sm: 0 },
                }}
              >
                Why Choose Fluffy Pet Wash?
              </Typography>

              <Box
                sx={{
                  maxWidth: { xs: "95%", sm: 800 },
                  mx: "auto",
                  mb: { xs: 3, sm: 4, md: 6 },
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(15px)",
                  borderRadius: { xs: "12px", sm: "16px", md: "20px" },
                  p: { xs: 2, sm: 2.5, md: 4 },
                  border: "1px solid rgba(147, 237, 240, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#067C92",
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.3rem" },
                    lineHeight: 1.5,
                    textAlign: "center",
                  }}
                >
                  We provide{" "}
                  <Link
                    href="/services"
                    style={{
                      color: "#00ADCD",
                      fontWeight: 700,
                      textDecoration: "none",
                      borderBottom: "3px solid #93EDF0",
                      transition: "all 0.3s ease",
                      padding: "2px 4px",
                      borderRadius: "4px",
                    }}
                  >
                    premium mobile grooming services
                  </Link>{" "}
                  directly to your home with unmatched care and convenience.
                </Typography>
              </Box>
            </motion.div>

            <Grid
              container
              spacing={{ xs: 1.5, sm: 2, md: 4 }}
              justifyContent="center"
            >
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div variants={scaleIn}>
                    <Card
                      sx={{
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                        p: { xs: 2, sm: 3, md: 4 },
                        borderRadius: { xs: "16px", sm: "20px", md: "24px" },
                        bgcolor: "white",
                        height: "100%",
                        border: "1px solid rgba(147, 237, 240, 0.3)",
                        transition:
                          "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                        mx: { xs: 0.5, sm: 0 },
                        cursor: "default",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 12px 40px rgba(0, 173, 205, 0.12)",
                          borderColor: feature.color,
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          p: 0,
                          "&:last-child": { pb: 0 },
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 50, sm: 60, md: 80 },
                            height: { xs: 50, sm: 60, md: 80 },
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: { xs: 1.5, sm: 2, md: 3 },
                            border: `2px solid ${feature.color}30`,
                          }}
                        >
                          <feature.icon
                            sx={{
                              color: feature.color,
                              fontSize: { xs: 24, sm: 28, md: 36 },
                            }}
                          />
                        </Box>

                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 800,
                            mb: { xs: 1, sm: 1.5, md: 2 },
                            color: "#067C92",
                            fontSize: {
                              xs: "1rem",
                              sm: "1.1rem",
                              md: "1.4rem",
                            },
                            textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                            lineHeight: 1.3,
                          }}
                        >
                          {feature.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            color: "#067C92",
                            lineHeight: 1.6,
                            fontSize: {
                              xs: "0.85rem",
                              sm: "0.9rem",
                              md: "1.05rem",
                            },
                            fontWeight: 500,
                            opacity: 0.9,
                          }}
                        >
                          {feature.desc}
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

      <Box
        component="section"
        id="home-visit"
        aria-labelledby="home-visit-heading"
        sx={{
          py: { xs: 5, md: 8 },
          px: { xs: 2, sm: 3, md: 6 },
          bgcolor: "#ffffff",
        }}
      >
        <Container maxWidth="md">
          <Typography
            id="home-visit-heading"
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              color: "#067C92",
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              mb: 3,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            What to expect at your door
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#334155",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.75,
              mb: 2,
            }}
          >
            Fluffy Pet Wash brings a grooming van to your home in Las Vegas and
            in Orlando. Your dog is the only pet in the van for that visit.
            There is no salon lobby, no cage beside other dogs, and no car ride
            before the bath. The van is climate-controlled, and the groomer
            stays with your dog from the first brush to the last.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#334155",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.75,
              mb: 2,
            }}
          >
            Visit length depends on your pet&apos;s size and coat. Temperament
            can change the visit too. We do not sedate dogs. If a dog becomes
            extremely distressed or aggressive, the groomer may stop so
            everyone stays safe.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#334155",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.75,
              mb: 2,
            }}
          >
            The groom includes a hypoallergenic wash, organic conditioner, a
            full brush-out, towel and blow dry, nail trim and file, ear
            cleaning, teeth brushing, paw care, a sanitary trim, and a
            blueberry facial. De-shedding is part of the same visit. Prices
            follow the breed and the coat, and nothing is due when you reserve
            the time. Card, cash, and Zelle are accepted. The{" "}
            <Link
              href="/prices"
              style={{ color: "#00ADCD", fontWeight: 700, textDecoration: "none" }}
            >
              prices page
            </Link>{" "}
            lists the card service charge.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#334155",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.75,
            }}
          >
            Booking starts on this page or on the{" "}
            <Link
              href="/prebook"
              style={{ color: "#00ADCD", fontWeight: 700, textDecoration: "none" }}
            >
              pre-book page
            </Link>
            . Choose Las Vegas or Orlando, confirm your dog is on the breed
            list, and continue to the calendar. You get an email after you book
            and a text when the appointment is accepted. Please let us know as
            early as you can if you need to change or cancel. Phone hours are
            listed on the contact page. If you need a same-day visit, call to
            ask whether a slot is open. Details on what is included are on the{" "}
            <Link
              href="/services"
              style={{ color: "#00ADCD", fontWeight: 700, textDecoration: "none" }}
            >
              services page
            </Link>{" "}
            and in the{" "}
            <Link
              href="/faq"
              style={{ color: "#00ADCD", fontWeight: 700, textDecoration: "none" }}
            >
              FAQ
            </Link>
            .
          </Typography>
        </Container>
      </Box>

      {/* Enhanced Testimonials Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box
          sx={{
            py: { xs: 4, sm: 6, md: 12 },
            px: { xs: 2, sm: 3, md: 6 },
            textAlign: "center",
            background: "linear-gradient(135deg, #FAFAFA 0%, #F0F8FF 100%)",
            position: "relative",
          }}
        >
          {/* Background Pattern */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "radial-gradient(circle at 20% 80%, rgba(0, 173, 205, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(58, 139, 149, 0.05) 0%, transparent 50%)",
              zIndex: 0,
            }}
          />

          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: { xs: 1.5, sm: 2 },
                  color: "#067C92",
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.8rem" },
                  lineHeight: 1.2,
                  px: { xs: 1, sm: 0 },
                }}
              >
                What Pet Owners Are Saying
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  mb: 6,
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#FFD700", fontSize: 24 }} />
                ))}
              </Box>
            </motion.div>

            <Box
              sx={{
                maxWidth: { xs: "95%", sm: 900 },
                mx: "auto",
                mt: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Slider
                {...testimonialSettings}
                aria-label="Testimonials carousel"
              >
                {testimonials.map((review, index) => (
                  <Box key={index} sx={{ px: 2 }}>
                    <Card
                      sx={{
                        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
                        p: { xs: 2.5, sm: 3, md: 6 },
                        borderRadius: { xs: "20px", sm: "24px", md: "32px" },
                        bgcolor: "white",
                        mx: { xs: 0.5, sm: "auto" },
                        border: "1px solid rgba(147, 237, 240, 0.3)",
                        background:
                          "linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)",
                      }}
                    >
                      <CardContent
                        sx={{
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          p: 0,
                          "&:last-child": { pb: 0 },
                        }}
                      >
                        {/* Enhanced Pet Image */}
                        <Box
                          sx={{
                            position: "relative",
                            mb: { xs: 2.5, sm: 3, md: 4 },
                          }}
                        >
                          <Box
                            sx={{
                              width: { xs: 80, sm: 100, md: 150 },
                              height: { xs: 80, sm: 100, md: 150 },
                              borderRadius: "50%",
                              overflow: "hidden",
                              border: {
                                xs: "2px solid #93EDF0",
                                sm: "3px solid #93EDF0",
                                md: "4px solid #93EDF0",
                              },
                              boxShadow: "0 8px 32px rgba(0, 173, 205, 0.2)",
                              position: "relative",
                            }}
                          >
                            <Image
                              src={review.image}
                              alt={review.imageAlt}
                              fill
                              style={{ objectFit: "cover", filter:
                                "brightness(1.1) contrast(1.05) saturate(1.1)", }}
                              quality={75}
                              loading="lazy"
                             
                            />
                          </Box>

                          {/* Heart Icon Overlay */}
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: { xs: -4, sm: -6, md: -8 },
                              right: { xs: -4, sm: -6, md: -8 },
                              width: { xs: 24, sm: 28, md: 40 },
                              height: { xs: 24, sm: 28, md: 40 },
                              borderRadius: "50%",
                              bgcolor: "#00ADCD",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 4px 16px rgba(0, 173, 205, 0.4)",
                            }}
                          >
                            <FavoriteIcon
                              sx={{
                                color: "white",
                                fontSize: { xs: 12, sm: 14, md: 20 },
                              }}
                            />
                          </Box>
                        </Box>

                        {/* Star Rating */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 0.5,
                            mb: { xs: 2, sm: 2.5, md: 3 },
                          }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              sx={{
                                color: "#FFD700",
                                fontSize: { xs: 16, sm: 18, md: 20 },
                              }}
                            />
                          ))}
                        </Box>

                        {/* Review Text */}
                        <Box
                          sx={{
                            background:
                              "linear-gradient(135deg, rgba(147, 237, 240, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%)",
                            borderRadius: {
                              xs: "10px",
                              sm: "12px",
                              md: "16px",
                            },
                            p: { xs: 2, sm: 2.5, md: 3 },
                            mb: { xs: 1.5, sm: 2, md: 3 },
                            border: "1px solid rgba(147, 237, 240, 0.3)",
                            position: "relative",
                            maxWidth: { xs: "100%", sm: 650 },
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#067C92",
                              lineHeight: 1.6,
                              fontSize: {
                                xs: "0.8rem",
                                sm: "0.9rem",
                                md: "1.15rem",
                              },
                              fontWeight: 500,
                              fontStyle: "italic",
                              position: "relative",
                              "&::before": {
                                content: '""',
                                fontSize: {
                                  xs: "1.5rem",
                                  sm: "2rem",
                                  md: "3rem",
                                },
                                color: "#93EDF0",
                                position: "absolute",
                                top: { xs: -8, sm: -10, md: -15 },
                                left: { xs: -8, sm: -10, md: -15 },
                                fontFamily: "serif",
                                lineHeight: 1,
                                opacity: 0.7,
                              },
                            }}
                          >
                            {review.text}
                          </Typography>
                        </Box>

                        {/* Customer Name */}
                        <Box
                          sx={{
                            background:
                              "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
                            borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                            px: { xs: 2, sm: 2.5, md: 3 },
                            py: { xs: 0.8, sm: 1 },
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: "#FFFFFF",
                              fontSize: {
                                xs: "0.85rem",
                                sm: "0.95rem",
                                md: "1.1rem",
                              },
                              textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                              lineHeight: 1.2,
                            }}
                          >
                            {review.name}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Container>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Home;
