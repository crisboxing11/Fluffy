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
import PetsIcon from "@mui/icons-material/Pets";
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

// **Price Tiers**
const pricing = [
  {
    size: "Small Dog",
    price: "$85",
    originalPrice: null,
    desc: "Up to 25 lbs",
    features: [
      "Full grooming service",
      "Nail trimming",
      "Ear cleaning",
      "Teeth brushing",
    ],
  },
  {
    size: "Medium Dog",
    price: "$95-$125",
    originalPrice: null,
    desc: "26-60 lbs",
    features: [
      "Full grooming service",
      "De-shedding treatment",
      "Nail trimming",
      "Ear cleaning",
      "Teeth brushing",
    ],
  },
  {
    size: "Large Dog",
    price: "$140-$185",
    originalPrice: null,
    desc: "Up to 120 lbs",
    features: [
      "Full grooming service",
      "Premium de-shedding",
      "Nail trimming",
      "Ear cleaning",
      "Teeth brushing",
    ],
  },
  {
    size: "Extra Large Dog",
    price: "$200+",
    originalPrice: null,
    desc: "Over 120 lbs",
    features: [
      "Full grooming service",
      "Premium care",
      "Extended session",
      "All standard services",
    ],
  },
];

// **Fluffy Preferred Membership Pricing**
const preferredPricing = [
  {
    size: "Small Dog",
    price: "$75",
    originalPrice: "$85",
    savings: "$10",
    desc: "Up to 25 lbs",
  },
  {
    size: "Medium Dog",
    price: "$85-$115",
    originalPrice: "$95-$125",
    savings: "$10",
    desc: "26-60 lbs",
  },
  {
    size: "Large Dog",
    price: "$125-$165",
    originalPrice: "$140-$185",
    savings: "$15-$20",
    desc: "Up to 120 lbs",
  },
  {
    size: "Extra Large Dog",
    price: "$185",
    originalPrice: "$200+",
    savings: "$15+",
    desc: "Over 120 lbs",
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
          content="Transparent pricing for luxury mobile pet grooming. All-inclusive packages with no hidden fees. Limited Fluffy Preferred membership spots available."
        />
        <meta
          name="keywords"
          content="dog grooming prices, mobile pet grooming cost, luxury pet wash pricing, affordable mobile grooming, mobile dog grooming orlando, mobile pet grooming las vegas"
        />
        <link rel="canonical" href="https://www.fluffypetwash.com/prices" />
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
          alt="Professional dog grooming"
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
              <Chip
                label="1000+ Happy Pets Served"
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                }}
              />
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Standard Pricing Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" fontWeight="bold" color="#067C92" mb={2}>
              Standard Pricing
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              maxWidth={600}
              mx="auto"
            >
              All-inclusive grooming packages tailored to your pet&apos;s size and
              needs
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {pricing.map((tier, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={scaleIn}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      position: "relative",
                      border: "1px solid #e0e0e0",
                      borderRadius: "20px",
                      overflow: "visible",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(3, 139, 149, 0.15)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: "center" }}>
                      <PetsIcon
                        sx={{ fontSize: 40, color: "#038B95", mb: 2 }}
                      />
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="#067C92"
                        mb={1}
                      >
                        {tier.size}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={3}>
                        {tier.desc}
                      </Typography>
                      <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="#038B95"
                        mb={3}
                        sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                      >
                        {tier.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={4}>
            <Typography variant="body2" color="text.secondary">
              * 3.4% service charge applies to credit/debit card transactions
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* Fluffy Preferred Membership - Premium Section */}
      <Box
        sx={{
          bgcolor: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
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
                  Exclusive pricing for recurring clients • Save up to $20 per
                  visit
                </Typography>
                <Chip
                  icon={<LocalOfferIcon />}
                  label="Only for clients who groom at least every 6 weeks"
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
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          mb={2}
                        >
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
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Speak with your groomer or technician to join our exclusive
                  program
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>

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
                  location: "Orlando, FL",
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
                  location: "Orlando, FL",
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
                      100%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Happy Pets
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
