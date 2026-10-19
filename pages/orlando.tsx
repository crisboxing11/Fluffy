import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PetsIcon from "@mui/icons-material/Pets";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import OrlandoVanImage from "../public/Orlando Van .png";

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

const OrlandoPage = () => {
  const serviceAreas = [
    "Orlando",
    "Winter Park",
    "Winter Garden",
    "Windermere",
    "Lake Buena Vista",
    "Kissimmee",
    "Saint Cloud",
    "Altamonte Springs",
    "Sanford",
    "Lake Mary",
    "Oviedo",
    "Apopka",
    "Ocoee",
    "Clermont",
    "Leesburg",
  ];

  const features = [
    {
      icon: PetsIcon,
      title: "Large Breed Friendly",
      description: "Our spacious van accommodates dogs of all sizes",
      color: "#00ADCD",
    },
    {
      icon: LocationOnIcon,
      title: "Convenient Locations",
      description: "Serving all major Orlando neighborhoods",
      color: "#0AC3E6",
    },
    {
      icon: StarIcon,
      title: "Premium Service",
      description: "Same luxury experience trusted in Las Vegas",
      color: "#038B95",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#FAFAFA", minHeight: "100vh" }}>
      <Head>
        <title>Mobile Pet Grooming Orlando, FL | Fluffy Pet Wash</title>
        <meta
          name="description"
          content="Learn about Fluffy Pet Wash's mobile dog grooming services in Orlando. Explore benefits, FAQs, and how to book your appointment."
        />
        <link rel="canonical" href="https://www.fluffypetwash.com/orlando" />
      </Head>

      {/* Hero Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: "80vh", md: "90vh" },
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, #93EDF0 0%, rgba(147, 237, 240, 0.8) 30%, rgba(255, 255, 255, 0.9) 70%, #FAFAFA 100%)",
          }}
        >
          {/* Background Image - Hidden on mobile */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: "3%",
              right: "1%",
              width: "58%",
              height: "94%",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "48px",
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(147, 237, 240, 0.05))",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                boxShadow: `
                  0 25px 50px rgba(6, 124, 146, 0.25),
                  0 12px 24px rgba(0, 173, 205, 0.15),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `,
                transform: "perspective(1000px) rotateY(-2deg) rotateX(1deg)",
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform:
                    "perspective(1000px) rotateY(-1deg) rotateX(0.5deg) scale(1.02)",
                  boxShadow: `
                    0 35px 70px rgba(6, 124, 146, 0.3),
                    0 15px 30px rgba(0, 173, 205, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.4)
                  `,
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(147, 237, 240, 0.1) 0%, transparent 50%, rgba(0, 173, 205, 0.05) 100%)",
                  borderRadius: "48px",
                  zIndex: 1,
                  pointerEvents: "none",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  right: "-2px",
                  bottom: "-2px",
                  background:
                    "linear-gradient(135deg, #93EDF0, #00ADCD, #0AC3E6, #067C92)",
                  borderRadius: "50px",
                  zIndex: -1,
                  opacity: 0.6,
                  filter: "blur(8px)",
                },
              }}
            >
              <Image
                src={OrlandoVanImage}
                alt="Fluffy Pet Wash mobile grooming van in Orlando"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center center",
                  zIndex: 2,
                }}
                priority
                quality={100}
              />
            </Box>
          </Box>

          {/* Content */}
          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              zIndex: 2,
              py: { xs: 8, md: 12 },
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Chip
                      icon={<LocationOnIcon />}
                      label="Now Serving Orlando"
                      sx={{
                        background: "linear-gradient(135deg, #00ADCD, #0AC3E6)",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        px: 2,
                        py: 1,
                        height: "auto",
                        "& .MuiChip-icon": {
                          color: "white",
                        },
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                      fontWeight: 900,
                      lineHeight: 1.1,
                      mb: 3,
                      background:
                        "linear-gradient(135deg, #067C92 0%, #00ADCD 50%, #0AC3E6 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 4px 20px rgba(6, 124, 146, 0.3)",
                    }}
                  >
                    Mobile Grooming
                    <br />
                    Comes to
                    <Box
                      component="span"
                      sx={{
                        background: "linear-gradient(135deg, #038B95, #067C92)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {" "}
                      Orlando
                    </Box>
                  </Typography>

                  <Box
                    sx={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))",
                      backdropFilter: "blur(20px)",
                      borderRadius: "20px",
                      p: { xs: 3, md: 4 },
                      mb: 4,
                      border: "1px solid rgba(147, 237, 240, 0.4)",
                      boxShadow: "0 12px 40px rgba(6, 124, 146, 0.15)",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#067C92",
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      Luxury Mobile Spa Experience
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#038B95",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        lineHeight: 1.6,
                        fontWeight: 500,
                      }}
                    >
                      We bring our fully equipped grooming van directly to your
                      driveway, delivering the same stress-free, professional
                      service that Orlando pet parents are raving about. No
                      travel, no waiting rooms, just pure comfort for your furry
                      family member.
                    </Typography>
                  </Box>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Link href="/prebook" passHref legacyBehavior>
                      <Button
                        component="a"
                        variant="contained"
                        size="large"
                        sx={{
                          px: { xs: 4, md: 6 },
                          py: { xs: 2, md: 2.5 },
                          fontSize: { xs: "1.1rem", md: "1.3rem" },
                          fontWeight: 800,
                          textTransform: "none",
                          borderRadius: "50px",
                          background:
                            "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 50%, #038B95 100%)",
                          boxShadow: "0 12px 40px rgba(0, 173, 205, 0.4)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          position: "relative",
                          overflow: "hidden",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
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
                            boxShadow: "0 16px 50px rgba(0, 173, 205, 0.5)",
                            "&::before": {
                              left: "100%",
                            },
                          },
                        }}
                      >
                        Book Now!
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Service Areas Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 2, md: 4 },
            background: "linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)",
          }}
        >
          <Container maxWidth="lg">
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontWeight: 800,
                  mb: 2,
                  color: "#067C92",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Orlando Service Areas
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "#038B95",
                  mb: 6,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  maxWidth: 600,
                  mx: "auto",
                }}
              >
                We proudly serve these Orlando neighborhoods and surrounding
                areas
              </Typography>
            </motion.div>

            <Grid container spacing={2} justifyContent="center">
              {serviceAreas.map((area, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <motion.div variants={scaleIn}>
                    <Box
                      sx={{
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))",
                        backdropFilter: "blur(15px)",
                        borderRadius: "16px",
                        p: 2,
                        textAlign: "center",
                        border: "1px solid rgba(147, 237, 240, 0.3)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 12px 40px rgba(0, 173, 205, 0.15)",
                          borderColor: "#00ADCD",
                        },
                      }}
                    >
                      <LocationOnIcon
                        sx={{
                          color: "#00ADCD",
                          fontSize: 24,
                          mb: 1,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#067C92",
                          fontWeight: 600,
                          fontSize: { xs: "0.85rem", md: "0.95rem" },
                        }}
                      >
                        {area}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 2, md: 4 },
            background: "linear-gradient(135deg, #FAFAFA 0%, #F0F8FF 100%)",
          }}
        >
          <Container maxWidth="lg">
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontWeight: 800,
                  mb: 6,
                  color: "#067C92",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Why Choose Us in Orlando?
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={scaleIn}>
                    <Card
                      sx={{
                        height: "100%",
                        background:
                          "linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)",
                        borderRadius: "24px",
                        p: 3,
                        border: "1px solid rgba(147, 237, 240, 0.3)",
                        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 60px rgba(0, 173, 205, 0.15)",
                          borderColor: feature.color,
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: "center", p: 0 }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mx: "auto",
                            mb: 3,
                            border: `2px solid ${feature.color}30`,
                          }}
                        >
                          <feature.icon
                            sx={{
                              color: feature.color,
                              fontSize: 36,
                            }}
                          />
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: "#067C92",
                            fontSize: "1.3rem",
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#038B95",
                            lineHeight: 1.6,
                            fontSize: "1rem",
                          }}
                        >
                          {feature.description}
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

      {/* Content Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 2, md: 4 },
            background: "linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))",
                    backdropFilter: "blur(20px)",
                    borderRadius: "24px",
                    p: { xs: 3, md: 5 },
                    border: "1px solid rgba(147, 237, 240, 0.3)",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "#067C92",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    We are excited to bring our{" "}
                    <Link
                      href="/blog/orlando-grand-opening"
                      style={{
                        color: "#00ADCD",
                        fontWeight: "bold",
                        textDecoration: "none",
                        borderBottom: "2px solid #93EDF0",
                        paddingBottom: "2px",
                      }}
                    >
                      luxurious grooming van
                    </Link>{" "}
                    to the neighborhoods of Orlando. Our team delivers stress-free
                    baths, blowouts, and paw treatments right to your driveway,
                    so your pup stays relaxed in familiar surroundings. From
                    Park Lake to Lake Nona, we service most Orlando communities
                    with the same gentle touch that pet parents already love in
                    Las Vegas.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "#067C92",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    Each appointment includes our all-inclusive{" "}
                    <Link
                      href="/services"
                      style={{
                        color: "#00ADCD",
                        fontWeight: "bold",
                        textDecoration: "none",
                        borderBottom: "2px solid #93EDF0",
                        paddingBottom: "2px",
                      }}
                    >
                      service package
                    </Link>{" "}
                    with hypoallergenic shampoo, nail trimming, ear cleaning,
                    teeth brushing, and stylish finishing touches. Pricing is
                    transparent—see the latest rates on our{" "}
                    <Link
                      href="/prices"
                      style={{
                        color: "#00ADCD",
                        fontWeight: "bold",
                        textDecoration: "none",
                        borderBottom: "2px solid #93EDF0",
                        paddingBottom: "2px",
                      }}
                    >
                      prices page
                    </Link>
                    .
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    Ready to reserve your slot? Use our simple booking form to
                    confirm that we service your part of Orlando, then continue
                    to secure your preferred appointment time. You can always
                    reach out through our{" "}
                    <Link
                      href="/contact"
                      style={{
                        color: "#00ADCD",
                        fontWeight: "bold",
                        textDecoration: "none",
                        borderBottom: "2px solid #93EDF0",
                        paddingBottom: "2px",
                      }}
                    >
                      contact page
                    </Link>{" "}
                    if you need assistance.
                  </Typography>
                </Box>
              </Grid>

            
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 2, md: 4 },
            background: "linear-gradient(135deg, #F0F8FF 0%, #FAFAFA 100%)",
          }}
        >
          <Container maxWidth="lg">
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontWeight: 800,
                  mb: 6,
                  color: "#067C92",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Orlando FAQ
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              {[
                {
                  question: "Which areas do you serve?",
                  answer:
                    "We currently cover downtown Orlando, Winter Park, Lake Nona, Dr. Phillips, Windermere, and surrounding neighborhoods.",
                },
                {
                  question: "Do you groom large breeds?",
                  answer:
                    "Yes, our spacious van accommodates most breeds up to 120 pounds with specialized equipment for larger dogs.",
                },
                {
                  question: "How do I book?",
                  answer:
                    'Select "Orlando" in the pre-booking form and follow the prompts to confirm your appointment. It\'s that simple!',
                },
              ].map((faq, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={scaleIn}>
                    <Card
                      sx={{
                        height: "100%",
                        background:
                          "linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)",
                        borderRadius: "20px",
                        p: 3,
                        border: "1px solid rgba(147, 237, 240, 0.3)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 12px 40px rgba(0, 173, 205, 0.12)",
                        },
                      }}
                    >
                      <CardContent sx={{ p: 0 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            mb: 2,
                          }}
                        >
                          <CheckCircleIcon
                            sx={{
                              color: "#00ADCD",
                              fontSize: 24,
                              mr: 2,
                              mt: 0.5,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: "#067C92",
                              fontSize: "1.1rem",
                              lineHeight: 1.3,
                            }}
                          >
                            {faq.question}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#038B95",
                            lineHeight: 1.6,
                            fontSize: "0.95rem",
                            pl: 5,
                          }}
                        >
                          {faq.answer}
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

      {/* Final CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 2, md: 4 },
            background:
              "linear-gradient(135deg, #93EDF0 0%, rgba(147, 237, 240, 0.8) 30%, rgba(255, 255, 255, 0.9) 70%, #FAFAFA 100%)",
            textAlign: "center",
            color: "#067C92",
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                background:
                  "linear-gradient(135deg, #067C92 0%, #00ADCD 50%, #0AC3E6 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 20px rgba(6, 124, 146, 0.3)",
              }}
            >
              Ready to Pamper Your Pup?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: 600,
                mx: "auto",
                color: "#038B95",
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              Join hundreds of satisfied Orlando pet parents who trust Fluffy
              Pet Wash for their mobile grooming needs.
            </Typography>
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
                  textTransform: "none",
                  borderRadius: "50px",
                  background:
                    "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 50%, #038B95 100%)",
                  color: "white",
                  boxShadow: "0 12px 40px rgba(0, 173, 205, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
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
                    boxShadow: "0 16px 50px rgba(0, 173, 205, 0.5)",
                    "&::before": {
                      left: "100%",
                    },
                  },
                }}
              >
                Book Your Orlando Appointment
              </Button>
            </Link>
          </Container>
        </Box>
      </motion.div>
    </Box>
  );
};

export default OrlandoPage;
