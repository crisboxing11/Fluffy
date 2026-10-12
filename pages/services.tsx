import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Paper,
  Stack,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Pets as PetsIcon,
  Spa as SpaIcon,
  ContentCut as ContentCutIcon,
  Brush as BrushIcon,
  Healing as HealingIcon,
  Waves as WavesIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
  CleanHands as CleanHandsIcon,
  EmojiNature as EmojiNatureIcon,
  DryCleaning as DryCleaningIcon,
  FaceRetouchingNatural as FaceRetouchingNaturalIcon,
  ExpandMore as ExpandMoreIcon,
  Schedule as ScheduleIcon,
  LocalShipping as LocalShippingIcon,
  VerifiedUser as VerifiedUserIcon,
  LocationOn as LocationOnIcon,
  FormatQuote as FormatQuoteIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { LAS_VEGAS_AREA_SERVED, LAS_VEGAS_POSTAL_ADDRESS } from "../data/serviceArea";

import { useState } from "react";
import ScrollingText from "../components/ScrollingText";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// Complete All-Inclusive Service Package - Everything Included!
const serviceCategories = {
  complete: {
    title: "🌟 COMPLETE ALL-INCLUSIVE PACKAGE 🌟",
    description:
      "Every single service included - No hidden fees, No add-ons, Just complete luxury care!",
    color: "#00ADCD",
    services: [
      {
        text: "✨ Professional Hypoallergenic Wash",
        icon: SpaIcon,
        description:
          "Premium hypoallergenic shampoo treatment - gentle on sensitive skin, tough on dirt and odors!",
      },
      {
        text: "🪮 Complete Brush Out Service",
        icon: BrushIcon,
        description:
          "Thorough de-tangling and mat removal for a silky smooth, professional finish",
      },
      {
        text: "💨 Professional Towel & Blow Dry",
        icon: DryCleaningIcon,
        description:
          "High-velocity dryer for that perfect fluffy finish - no wet dog smell, salon-quality results!",
      },
      {
        text: "🌿 Professional Organic Conditioner & Moisturizer",
        icon: EmojiNatureIcon,
        description:
          "Deep conditioning with premium organic products for ultimate coat health and shine",
      },
      {
        text: "💅 Precision Nail Trimming & Filing",
        icon: ContentCutIcon,
        description:
          "Expert nail care with professional filing to prevent scratching and maintain healthy paws",
      },
    ],
  },
  wellness: {
    title: "🏥 HEALTH & WELLNESS CARE",
    description:
      "Professional health maintenance - typically $60+ at vet clinics!",
    color: "#038B95",
    services: [
      {
        text: "👂 Professional Ear Cleaning",
        icon: HealingIcon,
        description:
          "Thorough ear cleaning to prevent infections, remove buildup, and maintain ear health",
      },
      {
        text: "🦷 Complete Dental Care Package",
        icon: CleanHandsIcon,
        description:
          "Professional mouth wash and teeth brushing for fresh breath and optimal dental health",
      },
      {
        text: "🩺 Professional Gland Expression",
        icon: PetsIcon,
        description:
          "Expert anal gland expression service for your pet's comfort, health, and hygiene",
      },
    ],
  },
  grooming: {
    title: "✂️ PREMIUM GROOMING & SPA SERVICES",
    description:
      "Professional styling and luxury treatments - salon-quality results!",
    color: "#067C92",
    services: [
      {
        text: "🌊 Advanced Professional DeShedding",
        icon: WavesIcon,
        description:
          "Specialized technique removes up to 90% of loose undercoat - dramatically reduces shedding!",
      },
      {
        text: "🐾 Complete Paw Care & Trimming",
        icon: FavoriteIcon,
        description:
          "Thorough paw cleaning plus precision trimming between pads for ultimate hygiene and comfort",
      },
      {
        text: "✨ Sanitary Area Precision Trimming",
        icon: StarIcon,
        description:
          "Professional hygienic trimming of sensitive backside areas for maximum cleanliness",
      },
      {
        text: "🫐 Signature Blueberry Facial",
        icon: FaceRetouchingNaturalIcon,
        description:
          "Luxurious antioxidant facial treatment for face and eye area - brightening and refreshing!",
      },
    ],
  },
};

const processSteps = [
  {
    step: "1",
    title: "Book Online",
    description: "Schedule your appointment through our easy booking system",
    icon: ScheduleIcon,
  },
  {
    step: "2",
    title: "We Come to You",
    description: "Our mobile grooming van arrives at your doorstep",
    icon: LocalShippingIcon,
  },
  {
    step: "3",
    title: "Professional Service",
    description: "Expert grooming in our fully-equipped mobile salon",
    icon: VerifiedUserIcon,
  },
  {
    step: "4",
    title: "Happy, Clean Pet",
    description: "Your furry friend returns refreshed and beautiful",
    icon: PetsIcon,
  },
];

const faqs = [
  {
    question: "How long does a grooming session take?",
    answer:
      "Most grooming sessions take 60-90 minutes, depending on your dog's size, coat condition, and selected services. We never rush the process to ensure your pet's comfort.",
  },
  {
    question: "What if my dog is anxious or aggressive?",
    answer:
      "Our experienced groomers are trained to work with anxious pets. We use gentle techniques and take breaks as needed. For aggressive dogs, we may recommend a consultation first.",
  },
  {
    question: "Do you provide your own water and electricity?",
    answer:
      "Yes! Our mobile grooming vans are fully self-contained with their own water supply, heating system, and electrical power. We only need a parking space.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use only premium, hypoallergenic, and eco-friendly grooming products that are safe for all skin types. All products are specifically formulated for pets.",
  },
  {
    question: "How often should I book grooming services?",
    answer:
      "Most dogs benefit from grooming every 4-6 weeks. However, this varies based on breed, coat type, and lifestyle. We'll provide personalized recommendations.",
  },
];

const ServicesPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | false>(false);

  const handleFaqChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFaq(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ bgcolor: "#ffffff" }}>
      {/* SEO & Metadata */}
      <Head>
        <title>Premium Mobile Pet Grooming Services | Fluffy Pet Wash</title>
        <meta
          name="description"
          content="Mobile dog grooming at your door in Las Vegas, Henderson & Summerlin. All-inclusive spa package: bath, blow dry, nails, ears, teeth & facial. Book online."
        />
        <meta
          name="keywords"
          content="mobile dog grooming, pet grooming services, dog wash, luxury pet grooming, mobile pet salon, professional dog grooming, pet spa services, dog grooming Las Vegas, dog grooming Orlando"
        />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.fluffypetwash.com/services" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Premium Mobile Pet Grooming Services | Fluffy Pet Wash"
        />
        <meta
          property="og:description"
          content="All-inclusive mobile grooming at your door across Las Vegas, Henderson & Orlando. Bath, blow dry, nails, ears, teeth & blueberry facial."
        />
        <meta
          property="og:image"
          content="https://fluffypetwash.com/fluffy-circle.PNG"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluffypetwash.com/services" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Premium Mobile Pet Grooming Services | Fluffy Pet Wash"
        />
        <meta
          name="twitter:description"
          content="All-inclusive mobile grooming at your door across Las Vegas, Henderson & Orlando. Bath, blow dry, nails, ears, teeth & blueberry facial."
        />
        <meta
          name="twitter:image"
          content="https://fluffypetwash.com/fluffy-circle.PNG"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Mobile Pet Grooming",
              description:
                "All-inclusive mobile dog grooming at your door across the Las Vegas Valley, including Henderson, Summerlin, and North Las Vegas, NV, and in Orlando, FL.",
              provider: {
                "@type": "Organization",
                name: "Fluffy Pet Wash",
                url: "https://fluffypetwash.com",
                logo: "https://fluffypetwash.com/fluffy-circle.PNG",
                address: LAS_VEGAS_POSTAL_ADDRESS,
              },
              areaServed: [
                ...LAS_VEGAS_AREA_SERVED,
                { "@type": "Place", name: "Orlando, FL" },
              ],
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "82vh", md: "92vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background:
          "linear-gradient(135deg, #00ADCD 0%, #038B95 50%, #067C92 100%)",
        pt: { xs: "80px", md: "90px" },
        }}
      >
        <Image
          src="/Dog1.png"
          alt=""
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.12,
          }}
          priority
          sizes="100vw"
        />
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.8rem", md: "4.5rem", lg: "5rem" },
                fontWeight: 800,
                color: "white",
                mb: 3,
                textShadow: "3px 3px 12px rgba(0,0,0,0.4)",
                lineHeight: 1.1,
              }}
            >
              Complete Mobile
              <br />
              <Box component="span" sx={{ color: "#A1E0E3" }}>
                Pet Spa Experience
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.95)",
                mb: 4,
                maxWidth: 700,
                mx: "auto",
                fontWeight: 400,
                textShadow: "1px 1px 6px rgba(0,0,0,0.3)",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              From health assessment to luxury finishing - every service
              included.
              <br />
              Professional care delivered to your doorstep.
            </Typography>

            {/* Service Count Highlight */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
                mb: 4,
                flexWrap: "wrap",
              }}
            >
              {[
                { number: "10", label: "Services Included" },
                { number: "100%", label: "All-Inclusive" },
                { number: "0", label: "Hidden Fees" },
              ].map((stat, index) => (
                <Box key={index} sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 800,
                      color: "#A1E0E3",
                      mb: 0.5,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                href="/prebook"
                sx={{
                  bgcolor: "white",
                  color: "#038B95",
                  px: 5,
                  py: 2,
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  borderRadius: "50px",
                  textTransform: "none",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Book Complete Service
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#services"
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 5,
                  py: 2,
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  borderRadius: "50px",
                  textTransform: "none",
                  borderWidth: "2px",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.15)",
                    borderColor: "#A1E0E3",
                    color: "#A1E0E3",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Explore All Services
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Scrolling Text */}
      <ScrollingText />

      {/* Service Categories */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }} id="services">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                color: "#067C92",
                mb: 2,
              }}
            >
              Complete All-Inclusive Grooming Service
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#038B95",
                maxWidth: 800,
                mx: "auto",
                fontWeight: 400,
                mb: 1.5,
              }}
            >
              Every appointment includes our comprehensive range of professional
              services - from health assessment to luxury finishing touches. No
              hidden fees, no add-ons, just complete care for your furry family
              member.
            </Typography>
            <Typography variant="body1" sx={{ color: "#038B95", mb: 4 }}>
              Have a cat? See our{" "}
              <Link href="/cat-grooming-las-vegas" style={{ color: "#00ADCD", fontWeight: 700 }}>
                mobile cat grooming in Las Vegas
              </Link>
              .
            </Typography>

            {/* Value Proposition Highlights */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
                mb: 4,
              }}
            >
              {[
                { icon: "💰", text: "Premium Value Package", color: "#00ADCD" },
                { icon: "🎯", text: "10 Premium Services", color: "#038B95" },
                { icon: "✨", text: "All-Inclusive Package", color: "#067C92" },
                { icon: "🚫", text: "Zero Hidden Fees", color: "#00A86B" },
              ].map((highlight, index) => (
                <Chip
                  key={index}
                  icon={
                    <Typography sx={{ fontSize: "1.2rem" }}>
                      {highlight.icon}
                    </Typography>
                  }
                  label={highlight.text}
                  sx={{
                    bgcolor: `${highlight.color}15`,
                    color: highlight.color,
                    fontWeight: 700,
                    fontSize: "1rem",
                    px: 3,
                    py: 1.5,
                    height: "auto",
                    border: `2px solid ${highlight.color}`,
                    "&:hover": {
                      bgcolor: `${highlight.color}25`,
                    },
                  }}
                />
              ))}
            </Box>

            {/* Total Value Banner */}
            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                color: "#333",
                p: 3,
                borderRadius: "15px",
                textAlign: "center",
                mb: 6,
                border: "3px solid #FF6B35",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
                  pointerEvents: "none",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  mb: 1,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                🎉 COMPLETE GROOMING PACKAGE - ALL SERVICES INCLUDED! 🎉
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  opacity: 0.9,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Pay One Price, Get Everything - No Surprises, No Add-Ons!
              </Typography>
            </Paper>
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {Object.entries(serviceCategories).map(([key, category]) => (
              <Grid item xs={12} md={6} key={key}>
                <motion.div variants={fadeInUp}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
                      border: `3px solid ${category.color}`,
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                        color: "white",
                        p: 3,
                        textAlign: "center",
                        position: "relative",
                        zIndex: 1,
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "6px",
                          background: `linear-gradient(90deg, #FFD700, #FFA500)`,
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={800}
                        mb={1}
                        sx={{
                          fontSize: { xs: "1.2rem", md: "1.4rem" },
                          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        {category.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          opacity: 0.95,
                          fontSize: "1rem",
                          fontWeight: 600,
                          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                        }}
                      >
                        {category.description}
                      </Typography>
                    </Box>
                    <CardContent
                      sx={{
                        p: 3,
                        position: "relative",
                        zIndex: 1,
                        bgcolor: "rgba(255,255,255,0.98)",
                      }}
                    >
                      <List sx={{ p: 0 }}>
                        {category.services.map((service, serviceIndex) => (
                          <ListItem
                            key={serviceIndex}
                            sx={{
                              px: 0,
                              py: 2,
                              alignItems: "flex-start",
                              borderBottom:
                                serviceIndex < category.services.length - 1
                                  ? "1px solid #f0f0f0"
                                  : "none",
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 45, mt: 0.5 }}>
                              <service.icon
                                sx={{ color: category.color, fontSize: 26 }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    mb: 0.5,
                                  }}
                                >
                                  <Typography
                                    variant="subtitle1"
                                    fontWeight={700}
                                    color="#067C92"
                                    sx={{
                                      fontSize: "1.05rem",
                                      lineHeight: 1.3,
                                      flex: 1,
                                    }}
                                  >
                                    {service.text}
                                  </Typography>
                                </Box>
                              }
                              secondary={
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{
                                    fontSize: "0.9rem",
                                    lineHeight: 1.5,
                                    fontWeight: 500,
                                  }}
                                >
                                  {service.description}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>

                      {/* Category Value Summary */}
                      <Box
                        sx={{
                          mt: 3,
                          p: 2,
                          bgcolor: `${category.color}10`,
                          borderRadius: "10px",
                          border: `1px solid ${category.color}30`,
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          variant="body2"
                          fontWeight={700}
                          color={category.color}
                          sx={{ fontSize: "0.9rem" }}
                        >
                          {category.services.length} Premium Services • All
                          Included in Package
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Process Section */}
      <Box sx={{ bgcolor: "#F8F9FA", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Box textAlign="center" mb={8}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 700,
                  color: "#067C92",
                  mb: 2,
                }}
              >
                How It Works
              </Typography>
              <Typography
                variant="h6"
                color="#038B95"
                sx={{ maxWidth: 500, mx: "auto" }}
              >
                Simple, convenient, and stress-free grooming in 4 easy steps
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {processSteps.map((step, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Box textAlign="center">
                      <Paper
                        elevation={0}
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "#00ADCD",
                          color: "white",
                          mx: "auto",
                          mb: 3,
                          position: "relative",
                          "&::after": {
                            content: `"${step.step}"`,
                            position: "absolute",
                            top: -10,
                            right: -10,
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            bgcolor: "#038B95",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                          },
                        }}
                      >
                        <step.icon sx={{ fontSize: 32 }} />
                      </Paper>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        color="#067C92"
                        mb={1}
                      >
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {step.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInLeft}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 700,
                  color: "#067C92",
                  mb: 3,
                }}
              >
                Why Choose Fluffy Pet Wash?
              </Typography>
              <Stack spacing={3}>
                {[
                  {
                    icon: LocalShippingIcon,
                    title: "Mobile Convenience",
                    description:
                      "We come to you! No stressful car rides or waiting in salons.",
                  },
                  {
                    icon: VerifiedUserIcon,
                    title: "Professional Expertise",
                    description:
                      "Certified groomers with years of experience and ongoing training.",
                  },
                  {
                    icon: SpaIcon,
                    title: "Premium Products",
                    description:
                      "Only the finest, hypoallergenic, and eco-friendly grooming products.",
                  },
                  {
                    icon: FavoriteIcon,
                    title: "Stress-Free Experience",
                    description:
                      "One-on-one attention in a calm, familiar environment.",
                  },
                ].map((benefit, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="flex-start"
                    gap={2}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#00ADCD",
                        width: 50,
                        height: 50,
                      }}
                    >
                      <benefit.icon sx={{ color: "white" }} />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        color="#067C92"
                        mb={1}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  height: { xs: 300, md: 400 },
                }}
              >
                <Image
                  src="/Dog3.png"
                  alt="Small white dog with a pink bow on a black background in Summerlin, NV"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Premium Testimonials Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #F8FDFF 0%, #E8F8FB 50%, #F0FAFE 100%)",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><pattern id=%22paw%22 x=%220%22 y=%220%22 width=%2220%22 height=%2220%22 patternUnits=%22userSpaceOnUse%22><circle cx=%2210%22 cy=%2210%22 r=%221%22 fill=%22%2300ADCD%22 opacity=%220.05%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23paw)%22/></svg>')",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            {/* Premium Header Section */}
            <Box textAlign="center" mb={8}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                  px: 4,
                  py: 1.5,
                  bgcolor: "rgba(0, 173, 205, 0.1)",
                  borderRadius: "50px",
                  border: "2px solid rgba(0, 173, 205, 0.2)",
                }}
              >
                <StarIcon sx={{ color: "#FFD700", fontSize: 24 }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#00ADCD",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                >
                  5-Star Reviews
                </Typography>
                <StarIcon sx={{ color: "#FFD700", fontSize: 24 }} />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem", lg: "4.5rem" },
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #067C92 0%, #00ADCD 50%, #038B95 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 3,
                  lineHeight: 1.1,
                  textShadow: "0 4px 20px rgba(0, 173, 205, 0.15)",
                }}
              >
                Loved by Pet Parents
                <br />
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Everywhere
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "#038B95",
                  maxWidth: 700,
                  mx: "auto",
                  fontWeight: 400,
                  mb: 4,
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  lineHeight: 1.6,
                }}
              >
                Real stories from real customers who trust us with their furry
                family members
              </Typography>

              {/* Trust Indicators */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 3,
                  justifyContent: "center",
                  mb: 6,
                }}
              >
                {[
                  { icon: "⭐", number: "100+", label: "5-Star Reviews" },
                  { icon: "🐕", number: "2000+", label: "Happy Pets" },
                ].map((stat, index) => (
                  <Box
                    key={index}
                    sx={{
                      textAlign: "center",
                      px: 3,
                      py: 2,
                      bgcolor: "rgba(255, 255, 255, 0.8)",
                      borderRadius: "15px",
                      border: "1px solid rgba(0, 173, 205, 0.2)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 8px 32px rgba(0, 173, 205, 0.1)",
                    }}
                  >
                    <Typography sx={{ fontSize: "1.5rem", mb: 0.5 }}>
                      {stat.icon}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        fontWeight: 800,
                        color: "#067C92",
                        mb: 0.5,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#038B95",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Premium Testimonials Grid */}
            <Grid container spacing={4} sx={{ mb: 6 }}>
              {[
                {
                  name: "Katie Jones",
                  rating: 5,
                  quote:
                    "Fluffy Pet Wash makes my life super easy. They treat my frenchie like royalty!",
                  avatar: "/ReviewDog1.jpg",
                  location: "Las Vegas, NV",
                  petName: "Bella",
                  service: "Complete Grooming Package",
                  imageAlt: "Woman in a black shirt holding a small white dog",
                },
                {
                  name: "Toni Robinson",
                  rating: 5,
                  quote:
                    "The service was amazing! They kept me updated and calmed my nervous pup.",
                  avatar: "/ReviewDog2.jpg",
                  location: "Orlando, FL",
                  petName: "Max",
                  service: "Premium Spa Treatment",
                  imageAlt: "Woman in a black shirt holding a small white dog indoors",
                },
                {
                  name: "David P.",
                  rating: 5,
                  quote:
                    "Highly recommended! Fantastic service and my dog looked perfect.",
                  avatar: "/ReviewDog3.jpg",
                  location: "Las Vegas, NV",
                  petName: "Charlie",
                  service: "Full Service Grooming",
                  imageAlt: "Small white dog in front of a dark red wall",
                },
              ].map((review, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: "25px",
                        overflow: "hidden",
                        background:
                          "linear-gradient(145deg, #ffffff 0%, #fafbfc 100%)",
                        border: "1px solid rgba(0, 173, 205, 0.1)",
                        boxShadow: "0 20px 60px rgba(0, 173, 205, 0.15)",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background:
                            "linear-gradient(90deg, #FFD700, #FFA500, #00ADCD)",
                        },
                      }}
                    >
                      <CardContent sx={{ p: 4, position: "relative" }}>
                        {/* Quote Icon */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: -15,
                            right: 20,
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            bgcolor: "#00ADCD",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 8px 25px rgba(0, 173, 205, 0.3)",
                          }}
                        >
                          <FormatQuoteIcon
                            sx={{ color: "white", fontSize: 20 }}
                          />
                        </Box>

                        {/* Rating Stars */}
                        <Box sx={{ display: "flex", gap: 0.5, mb: 3 }}>
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              sx={{
                                color: "#FFD700",
                                fontSize: 24,
                                filter:
                                  "drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))",
                              }}
                            />
                          ))}
                        </Box>

                        {/* Review Text */}
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1.1rem",
                            lineHeight: 1.7,
                            color: "#2c3e50",
                            mb: 4,
                            fontStyle: "italic",
                            position: "relative",
                          }}
                        >
                          &quot;{review.quote}&quot;
                        </Typography>

                        {/* Customer Info */}
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Avatar
                            src={review.avatar}
                            alt={review.imageAlt}
                            sx={{
                              width: 60,
                              height: 60,
                              border: "3px solid #00ADCD",
                              boxShadow: "0 4px 15px rgba(0, 173, 205, 0.2)",
                            }}
                          />
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                color: "#067C92",
                                mb: 0.5,
                                fontSize: "1.1rem",
                              }}
                            >
                              {review.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#038B95",
                                fontWeight: 600,
                                mb: 0.5,
                              }}
                            >
                              Pet Parent to {review.petName}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#666",
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              <LocationOnIcon sx={{ fontSize: 14 }} />
                              {review.location}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Service Badge */}
                        <Box
                          sx={{
                            mt: 2,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              bgcolor: "rgba(0, 173, 205, 0.1)",
                              color: "#00ADCD",
                              px: 2,
                              py: 0.5,
                              borderRadius: "20px",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              border: "1px solid rgba(0, 173, 205, 0.2)",
                              textAlign: "center",
                              maxWidth: "fit-content",
                            }}
                          >
                            {review.service}
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Additional Reviews Showcase */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: "center",
                mb: 6,
              }}
            >
              {[
                {
                  name: "Linda C.",
                  quote:
                    "Amazing groomers who cared lovingly for my senior shepherd.",
                },
                {
                  name: "Chelsea O.",
                  quote:
                    "Always does an amazing job for my husky. Highly recommend!",
                },
              ].map((review, index) => (
                <Box
                  key={index}
                  sx={{
                    maxWidth: 400,
                    p: 3,
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "20px",
                    border: "1px solid rgba(0, 173, 205, 0.15)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 10px 30px rgba(0, 173, 205, 0.1)",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 0.5,
                      mb: 2,
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        sx={{ color: "#FFD700", fontSize: 18 }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      color: "#2c3e50",
                      mb: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    &quot;{review.quote}&quot;
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      color: "#067C92",
                    }}
                  >
                    - {review.name}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Call to Action */}
            <Box textAlign="center">
              <Paper
                elevation={0}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  px: 4,
                  py: 2,
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "50px",
                  border: "2px solid rgba(0, 173, 205, 0.2)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 30px rgba(0, 173, 205, 0.15)",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#067C92",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  Join hundreds of happy pet parents
                </Typography>
                <Button
                  variant="contained"
                  href="/prebook"
                  sx={{
                    bgcolor: "#00ADCD",
                    color: "white",
                    px: 3,
                    py: 1,
                    borderRadius: "25px",
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "0 4px 15px rgba(0, 173, 205, 0.3)",
                    "&:hover": {
                      bgcolor: "#038B95",
                    },
                  }}
                >
                  Book Now
                </Button>
              </Paper>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                color: "#067C92",
                mb: 2,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography variant="h6" color="#038B95">
              Everything you need to know about our services
            </Typography>
          </Box>

          <Stack spacing={2}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expandedFaq === `panel${index}`}
                onChange={handleFaqChange(`panel${index}`)}
                sx={{
                  borderRadius: "12px !important",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  "&:before": { display: "none" },
                  mb: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#00ADCD" }} />}
                  sx={{
                    bgcolor:
                      expandedFaq === `panel${index}` ? "#F8F9FA" : "white",
                    borderRadius: "12px",
                    "& .MuiAccordionSummary-content": {
                      margin: "16px 0",
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight={600} color="#067C92">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 3 }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    lineHeight={1.7}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </motion.div>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #00ADCD 0%, #038B95 100%)",
          color: "white",
          py: { xs: 6, md: 8 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Box textAlign="center">
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Ready to Pamper Your Pet?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: 600,
                  mx: "auto",
                }}
              >
                Book your mobile grooming appointment today and give your furry
                friend the luxury treatment they deserve.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  href="/prebook"
                  sx={{
                    bgcolor: "white",
                    color: "#038B95",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    borderRadius: "50px",
                    textTransform: "none",
                    minWidth: 200,
                    "&:hover": {
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  Book Appointment
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="/contact"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderRadius: "50px",
                    textTransform: "none",
                    borderWidth: "2px",
                    minWidth: 200,
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;