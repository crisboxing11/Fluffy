import {
  Box,
  Typography,
  Paper,
  Link as MuiLink,
  Container,
  Chip,
  useMediaQuery,
  useTheme,
  Alert,
} from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import territories from "../data/territories";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { m } from "framer-motion";

const BookingPage = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [bookingUrl, setBookingUrl] = useState(territories[0].bookingUrl);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // Location comes from the query after hydration. The page itself is
    // rendered on the server so crawlers see the booking copy.
    const { location } = router.query;

    if (location && typeof location === "string") {
      const decodedLocation = decodeURIComponent(location);
      setSelectedLocation(decodedLocation);

      const territory = territories.find((t) => t.name === decodedLocation);
      if (territory) {
        setBookingUrl(territory.bookingUrl);
      }
    }
  }, [router.query]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #93EDF0 0%, rgba(147, 237, 240, 0.8) 30%, rgba(255, 255, 255, 0.9) 70%, #FAFAFA 100%)",
      }}
    >
      <Head>
        <title>Book Now | Fluffy Pet Wash</title>
        <meta
          name="description"
          content="Schedule your mobile grooming appointment online."
        />
        <link rel="canonical" href="https://www.fluffypetwash.com/booking" />
      </Head>

      {/* Hero Header */}
      <m.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Container maxWidth="xl" sx={{ pt: { xs: 8, md: 12 }, pb: 4 }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            {selectedLocation && (
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Chip
                  icon={<LocationOnIcon />}
                  label={`Booking for ${selectedLocation}`}
                  sx={{
                    background: "linear-gradient(135deg, #00ADCD, #0AC3E6)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    px: 3,
                    py: 1.5,
                    height: "auto",
                    mb: 3,
                    boxShadow: "0 8px 32px rgba(0, 173, 205, 0.3)",
                    "& .MuiChip-icon": {
                      color: "white",
                    },
                  }}
                />
              </m.div>
            )}

            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                lineHeight: 1.1,
                mb: 2,
                background:
                  "linear-gradient(135deg, #067C92 0%, #00ADCD 50%, #0AC3E6 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 20px rgba(6, 124, 146, 0.3)",
              }}
            >
              Complete Your Booking
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#038B95",
                fontSize: { xs: "1rem", md: "1.2rem" },
                fontWeight: 600,
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.5,
              }}
            >
              You&apos;re just one step away from booking your luxury mobile
              grooming experience!
            </Typography>
          </Box>
        </Container>
      </m.div>

      {/* Main Booking Content */}
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Container maxWidth="xl" sx={{ pb: 6 }}>
          <Box
            sx={{
              display: { xs: "block", lg: "flex" },
              gap: 4,
              alignItems: "flex-start",
            }}
          >
            {/* Booking Iframe */}
            <Box
              sx={{
                flex: 1,
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))",
                backdropFilter: "blur(20px)",
                borderRadius: { xs: "16px", md: "24px" },
                p: { xs: 1, md: 3 },
                border: "1px solid rgba(147, 237, 240, 0.4)",
                boxShadow: "0 20px 60px rgba(6, 124, 146, 0.15)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Mobile Instructions */}
              {isMobile && (
                <Alert
                  severity="info"
                  sx={{
                    mb: 2,
                    borderRadius: 2,
                    fontSize: "0.875rem",
                    "& .MuiAlert-message": {
                      width: "100%",
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    📱 Mobile Booking Tips:
                  </Typography>
                  <Typography variant="body2">
                    • Scroll within the form below to see all options
                    <br />
                    • Tap fields to select dates and times
                    <br />• Use the back button in your browser to return here
                  </Typography>
                </Alert>
              )}

              {/* Loading Indicator */}
              {!iframeLoaded && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" color="#067C92" mb={2}>
                    Loading your booking form...
                  </Typography>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      border: "4px solid #E0E0E0",
                      borderTop: "4px solid #00ADCD",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                      mx: "auto",
                      "@keyframes spin": {
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" },
                      },
                    }}
                  />
                </Box>
              )}

              <iframe
                src={bookingUrl}
                style={{
                  width: "100%",
                  minHeight: isMobile ? "600px" : "800px",
                  height: isMobile ? "80vh" : "100vh",
                  maxHeight: isMobile ? "800px" : "1000px",
                  border: 0,
                  borderRadius: isMobile ? "12px" : "16px",
                  opacity: iframeLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
                title="Fluffy Pet Wash Booking"
                scrolling="auto"
                onLoad={() => setIframeLoaded(true)}
              />
            </Box>

            {/* Sidebar with Important Info - Desktop */}
            {!isMobile && (
              <Box
                sx={{
                  width: { xs: "100%", lg: "380px" },
                  mt: { xs: 4, lg: 0 },
                  flexShrink: 0,
                }}
              >
                <m.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))",
                      backdropFilter: "blur(20px)",
                      borderRadius: "24px",
                      border: "1px solid rgba(147, 237, 240, 0.4)",
                      boxShadow: "0 20px 60px rgba(6, 124, 146, 0.15)",
                      mb: 3,
                    }}
                    role="complementary"
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        mb: 3,
                        color: "#067C92",
                        fontSize: "1.4rem",
                        textAlign: "center",
                      }}
                    >
                      Important Service Guidelines
                    </Typography>

                    <Box sx={{ space: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 2.5,
                          p: 2,
                          background: "rgba(255, 107, 107, 0.1)",
                          borderRadius: "12px",
                          border: "1px solid rgba(255, 107, 107, 0.3)",
                        }}
                      >
                        <Typography sx={{ fontSize: "1.2rem", mr: 2 }}>
                          🐱
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#067C92",
                            fontWeight: 600,
                            lineHeight: 1.5,
                          }}
                        >
                          Cat grooming available in Las Vegas only - starting at
                          $120
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 2.5,
                          p: 2,
                          background: "rgba(255, 193, 7, 0.1)",
                          borderRadius: "12px",
                          border: "1px solid rgba(255, 193, 7, 0.2)",
                        }}
                      >
                        <Typography sx={{ fontSize: "1.2rem", mr: 2 }}>
                          🧬
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#067C92",
                            fontWeight: 600,
                            lineHeight: 1.5,
                          }}
                        >
                          If your dog&apos;s breed isn&apos;t listed, we
                          don&apos;t service that breed
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 3,
                          p: 2,
                          background: "rgba(33, 150, 243, 0.1)",
                          borderRadius: "12px",
                          border: "1px solid rgba(33, 150, 243, 0.2)",
                        }}
                      >
                        <Typography sx={{ fontSize: "1.2rem", mr: 2 }}>
                          ✂️
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#067C92",
                            fontWeight: 600,
                            lineHeight: 1.5,
                          }}
                        >
                          No shave downs on double-coated or long-coated breeds
                        </Typography>
                      </Box>

                      <Box sx={{ textAlign: "center" }}>
                        <MuiLink
                          href="/blog/why-we-dont-shave"
                          target="_blank"
                          rel="noopener"
                          sx={{
                            color: "#00ADCD",
                            fontWeight: 700,
                            textDecoration: "none",
                            borderBottom: "2px solid #93EDF0",
                            paddingBottom: "2px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              borderBottomColor: "#00ADCD",
                              color: "#067C92",
                            },
                          }}
                        >
                          Why we don&apos;t do shave downs →
                        </MuiLink>
                      </Box>
                    </Box>
                  </Paper>

                  {/* Trust Indicators */}
                  <Paper
                    sx={{
                      p: 3,
                      background: "linear-gradient(135deg, #00ADCD, #0AC3E6)",
                      borderRadius: "20px",
                      color: "white",
                      textAlign: "center",
                      boxShadow: "0 12px 40px rgba(0, 173, 205, 0.3)",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                      🏆 Why Choose Us?
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
                      ✅ Licensed & Insured
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
                      ⭐ 5-Star Reviews
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      🚐 Mobile Convenience
                    </Typography>
                  </Paper>
                </m.div>
              </Box>
            )}

            {/* Mobile Service Guidelines - Always Visible */}
            {isMobile && (
              <Box
                sx={{
                  mt: 3,
                  mb: 2,
                }}
              >
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Paper
                    sx={{
                      p: 2.5,
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))",
                      backdropFilter: "blur(20px)",
                      borderRadius: "16px",
                      border: "1px solid rgba(147, 237, 240, 0.4)",
                      boxShadow: "0 8px 32px rgba(6, 124, 146, 0.1)",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: "#067C92",
                        fontSize: "1rem",
                        textAlign: "center",
                      }}
                    >
                      📋 Service Guidelines
                    </Typography>

                    <Box sx={{ space: 1.5 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 1.5,
                          p: 1.5,
                          background: "rgba(255, 107, 107, 0.08)",
                          borderRadius: "10px",
                          border: "1px solid rgba(255, 107, 107, 0.15)",
                        }}
                      >
                        <Typography sx={{ fontSize: "0.9rem", mr: 1.5 }}>
                          🐱
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#067C92",
                            fontWeight: 500,
                            lineHeight: 1.3,
                            fontSize: "0.85rem",
                          }}
                        >
                          Cat grooming available in Las Vegas only
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 1.5,
                          p: 1.5,
                          background: "rgba(255, 193, 7, 0.08)",
                          borderRadius: "10px",
                          border: "1px solid rgba(255, 193, 7, 0.15)",
                        }}
                      >
                        <Typography sx={{ fontSize: "0.9rem", mr: 1.5 }}>
                          🧬
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#067C92",
                            fontWeight: 500,
                            lineHeight: 1.3,
                            fontSize: "0.85rem",
                          }}
                        >
                          If your dog&apos;s breed isn&apos;t listed, we don&apos;t service
                          that breed
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 1.5,
                          p: 1.5,
                          background: "rgba(33, 150, 243, 0.08)",
                          borderRadius: "10px",
                          border: "1px solid rgba(33, 150, 243, 0.15)",
                        }}
                      >
                        <Typography sx={{ fontSize: "0.9rem", mr: 1.5 }}>
                          ✂️
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#067C92",
                            fontWeight: 500,
                            lineHeight: 1.3,
                            fontSize: "0.85rem",
                          }}
                        >
                          No shave downs on double-coated breeds
                        </Typography>
                      </Box>

                      <Box sx={{ textAlign: "center", mt: 1.5 }}>
                        <MuiLink
                          href="/blog/why-we-dont-shave"
                          target="_blank"
                          rel="noopener"
                          sx={{
                            color: "#00ADCD",
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            textDecoration: "none",
                            borderBottom: "1px solid #93EDF0",
                            paddingBottom: "1px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              borderBottomColor: "#00ADCD",
                              color: "#067C92",
                            },
                          }}
                        >
                          Why we don&apos;t do shave downs →
                        </MuiLink>
                      </Box>
                    </Box>
                  </Paper>
                </m.div>
              </Box>
            )}
          </Box>
        </Container>
      </m.div>
    </Box>
  );
};

export default BookingPage;
