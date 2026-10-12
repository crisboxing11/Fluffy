import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
  Chip,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Rating } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import PriceHeroImage from "../public/Dog8.jpg";
import Head from "next/head";
import Link from "next/link";

// **Animations**
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// **Price Tiers**

// **Fluffy Preferred Membership Pricing**
const preferredPricing = [
  {
    size: "Small Dog",
    price: "10% off",
    originalPrice: "$85",
    savings: "10%",
    desc: "Up to 25 lbs",
  },
  {
    size: "Medium Dog",
    price: "10% off",
    originalPrice: "$95-$125",
    savings: "10%",
    desc: "26-60 lbs",
  },
  {
    size: "Large Dog",
    price: "10% off",
    originalPrice: "$140-$185",
    savings: "10%",
    desc: "Up to 120 lbs",
  },
  {
    size: "Extra Large Dog",
    price: "10% off",
    originalPrice: "$200+",
    savings: "10%",
    desc: "Over 120 lbs",
  },
  {
    size: "Cats",
    price: "10% off",
    originalPrice: "$120",
    savings: "10%",
    desc: "All breeds",
  },
];

// **All-Inclusive Services List**
const services = [
  "Professional Brush Out",
  "Hypoallergenic Wash + Organic Conditioner",
  "Towel & Blow Dry",
  "Nail Trimming & Filing",
  "Ear Cleaning",
  "Teeth Brushing & Mouth Wash",
  "Gland Expression (Optional)",
  "Professional De-Shedding",
  "Paw Cleaning & Trimming",
  "Sanitary Area Trimming",
  "Facial Treatment",
  "Final Brush Out",
];

const PricesPage = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff" }}>
      {/* SEO & Metadata */}
      <Head>
        <title>Mobile Dog Grooming Prices | Fluffy Pet Wash</title>
        <meta
          name="description"
          content="Mobile dog grooming from $85, priced by breed at booking. No travel fees in Las Vegas, Henderson & Summerlin. Cash & Zelle with no card fee. Book online."
        />
        <meta
          name="keywords"
          content="dog grooming prices, mobile pet grooming cost, luxury pet wash pricing, affordable mobile grooming, mobile dog grooming orlando, mobile pet grooming las vegas, mobile dog grooming las vegas, mobile dog grooming henderson, mobile pet grooming henderson"
        />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.fluffypetwash.com/prices" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Mobile Dog Grooming Prices | Fluffy Pet Wash" />
        <meta
          property="og:description"
          content="Transparent site-listed prices. Exact cost calculated at booking by breed. No travel fees across Las Vegas, Henderson, Summerlin & Orlando."
        />
        <meta
          property="og:image"
          content="https://fluffypetwash.com/fluffy-circle.PNG"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fluffypetwash.com/prices" />
        <meta property="og:site_name" content="Fluffy Pet Wash" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile Dog Grooming Prices | Fluffy Pet Wash" />
        <meta
          name="twitter:description"
          content="Transparent site-listed prices. Exact cost calculated at booking by breed. No travel fees across Las Vegas, Henderson, Summerlin & Orlando."
        />
        <meta
          name="twitter:image"
          content="https://fluffypetwash.com/fluffy-circle.PNG"
        />
        <meta name="twitter:image:alt" content="Fluffy Pet Wash Pricing" />
        <meta name="twitter:site" content="@fluffypetwash" />
        <meta name="twitter:creator" content="@fluffypetwash" />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "60vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src={PriceHeroImage}
          alt="Black and white dog standing on pavement outdoors in Henderson, NV"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(3, 139, 149, 0.85) 0%, rgba(2, 107, 115, 0.9) 100%)",
          }}
        />
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 800,
                mb: 2,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Transparent Pricing
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                fontWeight: 400,
                mb: 4,
                color: "#A1E0E3",
              }}
            >
              Premium mobile grooming with no hidden fees
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              flexWrap="wrap"
            >
              <Chip
                icon={<SecurityIcon />}
                label="All-Inclusive Packages"
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<AccessTimeIcon />}
                label="Mobile Convenience"
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<StarIcon />}
                label="Premium Quality"
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: 600,
                }}
              />
              <Chip
                label="No travel fees ever"
                sx={{
                  bgcolor: "rgba(255,215,0,0.9)",
                  color: "#000",
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                }}
              />
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Pricing Overview Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography variant="h2" fontWeight="bold" color="#067C92" mb={2}>
              Pricing Overview
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              maxWidth={700}
              mx="auto"
              mb={3}
            >
              Your exact price is automatically calculated during booking based
              on your dog&apos;s breed and specific needs
            </Typography>
            
            {/* Clear Pricing Structure Notice */}
            <Paper
              elevation={3}
              sx={{
                maxWidth: 800,
                mx: "auto",
                p: 3,
                mb: 4,
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(3,139,149,0.1), rgba(0,173,205,0.1))",
                border: "2px solid #038B95",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#067C92"
                mb={2}
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}
              >
                💡 Important Pricing Information
              </Typography>
              <Typography variant="body1" color="#067C92" mb={2} fontWeight="600">
                The prices listed below are for our{" "}
                <Link href="/services" style={{ color: "#038B95", textDecoration: "underline", fontWeight: "bold" }}>
                  All-Inclusive Dog Wash Service
                </Link>
              </Typography>
              <Box sx={{ bgcolor: "rgba(255,255,255,0.8)", p: 2, borderRadius: "12px", mb: 2 }}>
                <Typography variant="body1" color="#067C92" fontWeight="700" mb={1}>
                  ✂️ Full Haircut & Styling - Additional Cost:
                </Typography>
                <Typography variant="body1" color="#067C92" mb={0.5}>
                  • Small & Medium Dogs: <strong>+$35</strong>
                </Typography>
                <Typography variant="body1" color="#067C92">
                  • Large Dogs: <strong>+$50</strong>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontStyle="italic"
                  sx={{ mt: 1.5 }}
                >
                  For breeds with a specialized breed fee (like poodles and
                  doodles), the fee includes the haircut, so the haircut add-on
                  isn&apos;t charged on top.
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" fontStyle="italic">
                * Prices may vary between Orlando and Las Vegas locations
              </Typography>
            </Paper>
          </Box>

          {/* Pricing Categories */}
          <Paper
            elevation={8}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: "30px",
              background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
              border: "1px solid rgba(3,139,149,0.1)",
              mb: 2,
            }}
          >
            <Grid container spacing={4} alignItems="stretch">
              {[
                {
                  size: "Small Dogs",
                  weight: "0-25 lbs",
                  price: "$85",
                  examples: [
                    "Chihuahua (Short-Haired)",
                    "Boston Terrier",
                    "French Bulldog",
                    "Pug",
                    "Miniature Pinscher",
                    "Italian Greyhound",
                  ],
                  icon: "🐕",
                  color: "#4CAF50",
                },
                {
                  size: "Medium Dogs",
                  weight: "26-60 lbs or Short Coat",
                  price: "$95-$125",
                  examples: [
                    "Beagle",
                    "Boxer",
                    "Great Dane (Short Coat)",
                    "Doberman",
                    "Basset Hound",
                    "Bulldog",
                  ],
                  icon: "🐶",
                  color: "#FF9800",
                },
                {
                  size: "Large Dogs",
                  weight: "61-120 lbs with Long/Double Coat",
                  price: "$140-$185",
                  examples: [
                    "Border Collie (No Shave Down)",
                    "Golden Retriever (No Shave Down)",
                    "German Shepherd (No Shave Down)",
                    "Labrador Retriever",
                    "Siberian Husky (No Shave Down)",
                    "Australian Shepherd (No Shave Down)",
                  ],
                  icon: "🦮",
                  color: "#2196F3",
                },
                {
                  size: "Extra Large Dogs",
                  weight: "120+ lbs",
                  price: "$200+",
                  examples: [
                    "English Mastiff",
                    "St Bernard",
                    "Great Pyrenees (No Shave Down)",
                    "Mastiff (Including Neapolitan and Bullmastiff)",
                    "Bernese Mountain Dog",
                    "Newfoundland",
                  ],
                  icon: "🐕‍🦺",
                  color: "#9C27B0",
                },
                {
                  size: "Cats",
                  weight: "All Locations",
                  price: "$120",
                  examples: [
                    "Persian",
                    "Maine Coon",
                    "Ragdoll",
                    "British Shorthair",
                    "Siamese",
                    "Domestic Shorthair/Longhair",
                  ],
                  icon: "🐱",
                  color: "#E91E63",
                  isAvailable: true,
                },
              ].map((category, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={category.isAvailable ? 12 : 3}
                  key={index}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        textAlign: "center",
                        borderRadius: "20px",
                        border: `2px solid ${category.color}`,
                        background: category.isAvailable
                          ? "linear-gradient(135deg, rgba(233, 30, 99, 0.05), rgba(255, 255, 255, 1))"
                          : "white",
                        position: "relative",
                        overflow: "visible",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: `0 15px 30px ${category.color}30`,
                        },
                      }}
                    >
                      {category.isAvailable && (
                        <Chip
                          label="NOW AVAILABLE"
                          sx={{
                            position: "absolute",
                            top: -12,
                            left: "50%",
                            transform: "translateX(-50%)",
                            bgcolor: "#4CAF50",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "0.75rem",
                            animation: "pulse 2s infinite",
                            "@keyframes pulse": {
                              "0%": { transform: "translateX(-50%) scale(1)" },
                              "50%": {
                                transform: "translateX(-50%) scale(1.05)",
                              },
                              "100%": {
                                transform: "translateX(-50%) scale(1)",
                              },
                            },
                          }}
                        />
                      )}
                      <CardContent sx={{ p: 3 }}>
                        {/* Pet Icon */}
                        <Box
                          sx={{
                            fontSize: "3rem",
                            mb: 2,
                            height: 80,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {category.icon}
                        </Box>

                        {/* Size Category */}
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          sx={{ color: category.color, mb: 1 }}
                        >
                          {category.size}
                        </Typography>

                        {/* Weight Range */}
                        <Typography
                          variant="body1"
                          color={
                            category.isAvailable ? "#4CAF50" : "text.secondary"
                          }
                          fontWeight={category.isAvailable ? "800" : "600"}
                          mb={2}
                          sx={{
                            fontSize: category.isAvailable ? "1rem" : "0.9rem",
                            lineHeight: 1.3,
                            textTransform: category.isAvailable
                              ? "uppercase"
                              : "none",
                            letterSpacing: category.isAvailable
                              ? "0.5px"
                              : "normal",
                          }}
                        >
                          {category.weight}
                        </Typography>

                        {/* Price */}
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          color={category.isAvailable ? "#4CAF50" : "#038B95"}
                          mb={1}
                        >
                          {category.price}
                        </Typography>
                        
                        {/* Base Service Label */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#067C92",
                            fontWeight: 600,
                            mb: 1,
                            fontSize: "0.85rem",
                            background: "rgba(3,139,149,0.1)",
                            px: 2,
                            py: 0.5,
                            borderRadius: "8px",
                          }}
                        >
                          All-Inclusive Wash
                        </Typography>
                        
                        {/* Haircut Add-On Pricing. Cats have no fixed haircut add-on. */}
                        {category.size === "Cats" ? (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            fontStyle="italic"
                            sx={{ mb: category.isAvailable ? 2 : 3 }}
                          >
                            Starting at $120. The price can go up with coat
                            condition and temperament.
                          </Typography>
                        ) : (
                          <>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#F57C00",
                                fontWeight: 700,
                                mb: 0.75,
                                fontSize: "0.9rem",
                                background: "rgba(255,193,7,0.15)",
                                px: 2,
                                py: 1,
                                borderRadius: "8px",
                                border: "2px solid rgba(255,193,7,0.4)",
                              }}
                            >
                              ✂️ Haircut & Styling: {category.size === "Small Dogs" || category.size === "Medium Dogs" ? "+$35" : "+$50"}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              fontStyle="italic"
                              sx={{ mb: category.isAvailable ? 2 : 3 }}
                            >
                              * For poodles and doodles, included in the breed fee.
                            </Typography>
                          </>
                        )}

                        {category.isAvailable && (
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#4CAF50",
                              fontWeight: 600,
                              mb: 3,
                              fontSize: "0.85rem",
                              background: "rgba(76, 175, 80, 0.1)",
                              px: 2,
                              py: 0.5,
                              borderRadius: "12px",
                              border: "1px solid rgba(76, 175, 80, 0.2)",
                            }}
                          >
                            Fluffy Preferred: 10% off after the first visit
                          </Typography>
                        )}

                        {/* Breed Examples */}
                        <Box>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            fontWeight="600"
                            mb={1}
                          >
                            Example Breeds:
                          </Typography>
                          <Box sx={{ textAlign: "left" }}>
                            {category.examples.map((breed, breedIndex) => (
                              <Typography
                                key={breedIndex}
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                  fontSize: "0.85rem",
                                  lineHeight: 1.4,
                                  mb: 0.3,
                                  "&:before": {
                                    content: '"•"',
                                    color: category.color,
                                    fontWeight: "bold",
                                    marginRight: "8px",
                                  },
                                }}
                              >
                                {breed}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Automatic Pricing Info */}
            <Box textAlign="center" mt={6}>
              <Paper
                elevation={0}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  px: 4,
                  py: 2,
                  bgcolor: "rgba(76, 175, 80, 0.1)",
                  borderRadius: "50px",
                  border: "1px solid rgba(76, 175, 80, 0.3)",
                }}
              >
                <Typography variant="body1" color="#4CAF50" fontWeight="600">
                  💡 Your exact price is automatically calculated when you book
                  based on your dog&apos;s breed!
                </Typography>
              </Paper>
            </Box>
            
            {/* Haircut Add-On Pricing - PROMINENT */}
            <Box mt={6}>
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,193,7,0.1))",
                  border: "3px solid #FFD700",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="#F57C00"
                  mb={3}
                  textAlign="center"
                  sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}
                >
                  ✂️ Full Haircut & Styling Add-On
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 3,
                        bgcolor: "white",
                        borderRadius: "16px",
                        border: "2px solid #4CAF50",
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold" color="#4CAF50" mb={1}>
                        Small & Medium Dogs
                      </Typography>
                      <Typography variant="h3" fontWeight="bold" color="#038B95" mb={1}>
                        +$35
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Added to base wash price
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 3,
                        bgcolor: "white",
                        borderRadius: "16px",
                        border: "2px solid #2196F3",
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold" color="#2196F3" mb={1}>
                        Large Dogs
                      </Typography>
                      <Typography variant="h3" fontWeight="bold" color="#038B95" mb={1}>
                        +$50
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Added to base wash price
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box textAlign="center" mt={3}>
                  <Typography variant="body1" color="#067C92" fontWeight="600">
                    💡 Example: Small dog wash ($85) + haircut ($35) = <strong>$120 total</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontStyle="italic"
                    sx={{ mt: 1.5, maxWidth: 720, mx: "auto" }}
                  >
                    For breeds with a specialized breed fee (like poodles and
                    doodles), the fee includes the haircut, so the haircut
                    add-on isn&apos;t charged on top.
                  </Typography>
                </Box>
              </Paper>
            </Box>

            {/* Important Pricing Disclaimers */}
            <Box mt={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: "16px",
                      background: "rgba(156, 39, 176, 0.1)",
                      border: "1px solid rgba(156, 39, 176, 0.3)",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="#9C27B0"
                      mb={2}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      📍 Location Pricing
                    </Typography>
                    <Typography variant="body2" color="#067C92" mb={1}>
                      Prices may vary between our Orlando and Las Vegas locations
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#067C92"
                      fontWeight="600"
                    >
                      Your exact price will be confirmed during booking based on your location
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: "16px",
                      background: "rgba(255, 193, 7, 0.1)",
                      border: "1px solid rgba(255, 193, 7, 0.3)",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="#F57C00"
                      mb={2}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      ⚠️ Breed Restrictions Apply
                    </Typography>
                    <Typography variant="body2" color="#067C92" mb={2}>
                      We only service breeds on our approved list. Your breed
                      will be verified during the booking process.
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#067C92"
                      fontWeight="600"
                    >
                      Note: Breeds marked &quot;(No Shave Down)&quot; cannot
                      receive full shave services to protect their coat health.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: "16px",
                      background: "rgba(33, 150, 243, 0.1)",
                      border: "1px solid rgba(33, 150, 243, 0.3)",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="#1976D2"
                      mb={2}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      💳 Payment Information
                    </Typography>
                    <Typography variant="body2" color="#067C92" mb={1}>
                      • 3.4% + 30¢ service charge applies to credit/debit cards
                    </Typography>
                    <Typography variant="body2" color="#067C92" mb={1}>
                      • Cash and Zelle payments accepted with no additional fees
                    </Typography>
                    <Typography variant="body2" color="#067C92" mb={1}>
                      • Surcharge may apply for severe matting and aggressive pets
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#067C92"
                      fontWeight="600"
                    >
                      • No travel fees ever - mobile service included
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: "16px",
                      background: "rgba(76, 175, 80, 0.1)",
                      border: "1px solid rgba(76, 175, 80, 0.3)",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="#4CAF50"
                      mb={2}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      🎯 Pricing Factors
                    </Typography>
                    <Typography variant="body2" color="#067C92" mb={1}>
                      • Dog size and coat type
                    </Typography>
                    <Typography variant="body2" color="#067C92" mb={1}>
                      • Coat condition and matting
                    </Typography>
                    <Typography variant="body2" color="#067C92" mb={1}>
                      • Cat pricing varies based on temperament and coat condition
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#067C92"
                      fontWeight="600"
                    >
                      • Additional services requested
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </motion.div>
      </Container>

      {/* Fluffy Preferred Membership - Premium Section */}
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Paper
            elevation={8}
            sx={{
              p: 6,
              borderRadius: "30px",
              background: "linear-gradient(135deg, #038B95 0%, #026B73 100%)",
              color: "white",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background Pattern */}
            <Box
              sx={{
                position: "absolute",
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -30,
                left: -30,
                width: 150,
                height: 150,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
              }}
            />

            <Box textAlign="center" mb={6} position="relative" zIndex={1}>
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Chip
                  label="LIMITED SPOTS"
                  sx={{
                    position: "absolute",
                    top: { xs: -20, md: -25 },
                    right: { xs: -10, md: 0 },
                    bgcolor: "#FFD700",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    px: 2,
                    borderRadius: "20px",
                    animation: "pulse 2s infinite",
                    zIndex: 1,
                    "@keyframes pulse": {
                      "0%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.05)" },
                      "100%": { transform: "scale(1)" },
                    },
                  }}
                />
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    background: "linear-gradient(45deg, #FFD700, #FFF)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                    pt: { xs: 2, md: 0 },
                  }}
                >
                  Fluffy Preferred Membership
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: "#A1E0E3", mb: 2 }}>
                10% off services after your first appointment
              </Typography>
              <Chip
                icon={<LocalOfferIcon />}
                label="Available after your first appointment"
                sx={{
                  bgcolor: "rgba(255,215,0,0.2)",
                  color: "#FFD700",
                  fontWeight: "bold",
                  border: "1px solid #FFD700",
                  fontSize: { xs: "0.75rem", md: "0.875rem" },
                  height: "auto",
                  "& .MuiChip-label": {
                    px: { xs: 1, md: 2 },
                    py: 1,
                    whiteSpace: "normal",
                    textAlign: "center",
                  },
                }}
              />
            </Box>

            <Grid container spacing={3} justifyContent="center">
              {preferredPricing.map((tier, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      bgcolor: "rgba(255,255,255,0.95)",
                      borderRadius: "20px",
                      border: "2px solid #FFD700",
                      position: "relative",
                      overflow: "visible",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 30px rgba(255,215,0,0.3)",
                      },
                    }}
                  >
                    <Chip
                      label={`Save ${tier.savings}`}
                      sx={{
                        position: "absolute",
                        top: -12,
                        right: 16,
                        bgcolor: "#FFD700",
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "0.75rem",
                      }}
                    />
                    <CardContent sx={{ p: 3, textAlign: "center" }}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="#067C92"
                        mb={1}
                      >
                        {tier.size}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={2}>
                        {tier.desc}
                      </Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                        mb={2}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            textDecoration: "line-through",
                            color: "text.disabled",
                          }}
                        >
                          {tier.originalPrice}
                        </Typography>
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          color="#038B95"
                        >
                          {tier.price}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box textAlign="center" mt={6}>
              <Typography variant="body1" sx={{ color: "#A1E0E3", mb: 2 }}>
                Membership is available after your first appointment
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}
              >
                Speak with your groomer or technician to join our exclusive
                program
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}
              >
                Members save 10% on services. The first appointment is full
                price.
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>

      {/* What's Included Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" fontWeight="bold" color="#067C92" mb={2}>
              What&apos;s Included in Every Session
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              maxWidth={700}
              mx="auto"
            >
              Our comprehensive grooming package includes everything your pet
              needs for a premium spa experience
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8} mx="auto">
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  bgcolor: "#f8f9fa",
                }}
              >
                <Grid container spacing={2}>
                  {services.map((service, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box display="flex" alignItems="center" gap={2} py={1}>
                        <CheckCircleIcon
                          sx={{ color: "#038B95", fontSize: 20 }}
                        />
                        <Typography variant="body1" color="#067C92">
                          {service}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          {/* Service Limitations Notice */}
          <Box mt={6}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 152, 0, 0.1))",
                border: "2px solid rgba(255, 193, 7, 0.3)",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#F57C00"
                mb={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                ⚠️ Important Service Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      color="#067C92"
                      fontWeight="bold"
                      mb={1}
                    >
                      🐕 Dogs & Cats
                    </Typography>
                    <Typography variant="body2" color="#067C92">
                      We now service both dogs and cats with professional grooming
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      color="#067C92"
                      fontWeight="bold"
                      mb={1}
                    >
                      🚫 No Shave Downs
                    </Typography>
                    <Typography variant="body2" color="#067C92">
                      We don&apos;t provide shave downs on double-coated breeds
                      to protect their coat health
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      color="#067C92"
                      fontWeight="bold"
                      mb={1}
                    >
                      📋 Breed List Only
                    </Typography>
                    <Typography variant="body2" color="#067C92">
                      Service limited to breeds on our approved list for safety
                      and expertise
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>

          <Box textAlign="center" mt={4}>
            <Typography variant="body1" color="text.secondary">
              Learn more about our{" "}
              <Link
                href="/services"
                style={{ color: "#038B95", fontWeight: "bold" }}
              >
                complete grooming services
              </Link>
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* Service Information */}
      <Box mt={6}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1))",
            border: "2px solid rgba(76, 175, 80, 0.3)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#4CAF50"
            mb={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            🌟 All Services Available at Every Location
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  color="#067C92"
                  fontWeight="bold"
                  mb={2}
                >
                  ✂️ Full Body Haircuts Available
                </Typography>
                <Typography variant="body2" color="#067C92" mb={2}>
                  Subject to approval based on coat condition and matting
                  level
                </Typography>
                <Typography
                  variant="body2"
                  color="#067C92"
                  fontWeight="600"
                >
                  Up to $50 specialized breed fee may apply
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontStyle="italic"
                  sx={{ mt: 1 }}
                >
                  For breeds with a specialized breed fee (like poodles and
                  doodles), the fee includes the haircut, so the haircut add-on
                  isn&apos;t charged on top.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  color="#067C92"
                  fontWeight="bold"
                  mb={2}
                  sx={{
                    background:
                      "linear-gradient(135deg, #4CAF50, #66BB6A)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  🐱 Cat Grooming Services
                </Typography>
                <Chip
                  label="NOW AVAILABLE"
                  sx={{
                    bgcolor: "#4CAF50",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    mb: 2,
                    animation: "pulse 2s infinite",
                    "@keyframes pulse": {
                      "0%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.05)" },
                      "100%": { transform: "scale(1)" },
                    },
                  }}
                />
                <Typography variant="body2" color="#067C92" mb={2}>
                  Professional cat grooming starting at $120
                </Typography>
                <Typography
                  variant="body2"
                  color="#067C92"
                  fontWeight="600"
                >
                  Fluffy Preferred members save 10% after the first visit
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  color="#067C92"
                  fontWeight="bold"
                  mb={2}
                >
                  💎 Fluffy Preferred Benefits
                </Typography>
                <Typography variant="body2" color="#067C92" mb={2}>
                  10% off services after your first appointment
                </Typography>
                <Typography variant="body2" color="#067C92" mb={2}>
                  Same discount for dogs and cats
                </Typography>
                <Typography
                  variant="body2"
                  color="#067C92"
                  fontWeight="600"
                >
                  First appointment always full price
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Customer Testimonials - Enhanced Design */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f0f8ff 100%)",
          py: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,173,205,0.1) 0%, transparent 70%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -150,
            right: -150,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(3,139,149,0.08) 0%, transparent 70%)",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            {/* Enhanced Header */}
            <Box textAlign="center" mb={8}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                    px: 3,
                    py: 1,
                    bgcolor: "rgba(3,139,149,0.1)",
                    borderRadius: "50px",
                    border: "1px solid rgba(3,139,149,0.2)",
                  }}
                >
                  <StarIcon sx={{ color: "#FFD700", fontSize: 24 }} />
                  <Typography variant="body1" color="#067C92" fontWeight="600">
                    5-Star Reviews
                  </Typography>
                  <StarIcon sx={{ color: "#FFD700", fontSize: 24 }} />
                </Box>
              </motion.div>

              <Typography
                variant="h2"
                fontWeight="800"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  background:
                    "linear-gradient(135deg, #067C92 0%, #038B95 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                  letterSpacing: "-0.02em",
                }}
              >
                What Our Customers Say
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  maxWidth: 600,
                  mx: "auto",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Real experiences from pet parents who trust us with their furry
                family members
              </Typography>
            </Box>

            {/* Enhanced Testimonials Grid */}
            <Grid container spacing={4} justifyContent="center">
              {[
                {
                  name: "Katie Jones",
                  rating: 5,
                  quote:
                    "Fluffy Pet Wash makes my life super easy. They treat my frenchie like royalty!",
                  avatar: "🐕",
                  location: "Las Vegas, NV",
                },
                {
                  name: "Toni Robinson",
                  rating: 5,
                  quote:
                    "The service was amazing! They kept me updated and calmed my nervous pup.",
                  avatar: "🐶",
                  location: "Las Vegas, NV",
                },
                {
                  name: "David P.",
                  rating: 5,
                  quote:
                    "Highly recommended! Fantastic service and my dog looked perfect.",
                  avatar: "🦮",
                  location: "North Las Vegas, NV",
                },
              ].map((review, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        background:
                          "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                        borderRadius: "24px",
                        border: "1px solid rgba(3,139,149,0.1)",
                        boxShadow: "0 8px 32px rgba(3,139,149,0.12)",
                        position: "relative",
                        overflow: "visible",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          transform: "translateY(-12px)",
                          boxShadow: "0 20px 48px rgba(3,139,149,0.2)",
                          "& .quote-icon": {
                            transform: "scale(1.1) rotate(5deg)",
                          },
                        },
                      }}
                    >
                      {/* Decorative top accent */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background:
                            "linear-gradient(90deg, #038B95, #00ADCD, #FFD700)",
                          borderRadius: "24px 24px 0 0",
                        }}
                      />

                      {/* Floating quote icon */}
                      <Box
                        className="quote-icon"
                        sx={{
                          position: "absolute",
                          top: -16,
                          right: 24,
                          width: 48,
                          height: 48,
                          bgcolor: "#038B95",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 16px rgba(3,139,149,0.3)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <FormatQuoteIcon
                          sx={{ color: "white", fontSize: 24 }}
                        />
                      </Box>

                      <CardContent sx={{ p: 4, pt: 5 }}>
                        {/* Avatar and rating */}
                        <Box display="flex" alignItems="center" gap={2} mb={3}>
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: "50%",
                              background:
                                "linear-gradient(135deg, #038B95, #00ADCD)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "24px",
                              boxShadow: "0 4px 12px rgba(3,139,149,0.2)",
                            }}
                          >
                            {review.avatar}
                          </Box>
                          <Box flex={1}>
                            <Typography
                              variant="h6"
                              fontWeight="700"
                              color="#067C92"
                              mb={0.5}
                            >
                              {review.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              mb={1}
                            >
                              {review.location}
                            </Typography>
                            <Rating
                              value={review.rating}
                              readOnly
                              size="small"
                              sx={{
                                color: "#FFD700",
                                "& .MuiRating-iconFilled": {
                                  color: "#FFD700",
                                },
                              }}
                            />
                          </Box>
                        </Box>

                        {/* Quote */}
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#2c3e50",
                            fontStyle: "italic",
                            lineHeight: 1.7,
                            fontSize: "1.1rem",
                            position: "relative",
                            pl: 2,
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: 3,
                              height: "100%",
                              background:
                                "linear-gradient(135deg, #038B95, #00ADCD)",
                              borderRadius: "2px",
                            },
                          }}
                        >
                          &quot;{review.quote}&quot;
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Trust indicators */}
            <Box textAlign="center" mt={8}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    px: 4,
                    py: 2,
                    bgcolor: "rgba(255,255,255,0.8)",
                    borderRadius: "50px",
                    border: "1px solid rgba(3,139,149,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Box textAlign="center">
                    <Typography variant="h4" fontWeight="800" color="#038B95">
                      1000+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Happy Pets
                    </Typography>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ bgcolor: "rgba(3,139,149,0.2)" }}
                  />

                  <Box textAlign="center">
                    <Typography variant="h4" fontWeight="800" color="#038B95">
                      500+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Satisfied Clients
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #038B95 0%, #026B73 100%)",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              mb={2}
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: { xs: 1.2, md: 1.1 },
                color: "#ffffff",
              }}
            >
              Ready to Pamper Your Pet?
            </Typography>
            <Typography variant="h6" sx={{ color: "#A1E0E3", mb: 4 }}>
              Book your appointment today and experience the Fluffy Pet Wash
              difference
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#FFD700",
                  color: "#1a1a1a",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  borderRadius: "25px",
                  "&:hover": {
                    bgcolor: "#FFC107",
                    transform: "scale(1.05)",
                  },
                }}
                href="/prebook"
              >
                Book Appointment
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "white",
                  color: "white",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  borderRadius: "25px",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderColor: "white",
                  },
                }}
                href="/contact"
              >
                Contact Us
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default PricesPage;