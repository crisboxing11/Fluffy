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
  Fab,
  Collapse,
  Dialog,
  DialogContent,
  Button,
  Divider,
} from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import territories from "../data/territories";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import SpaIcon from "@mui/icons-material/Spa";
import PetsIcon from "@mui/icons-material/Pets";

import { motion } from "framer-motion";

const BookingPage = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [bookingUrl, setBookingUrl] = useState(territories[0].bookingUrl);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showMobileInfo, setShowMobileInfo] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showOrlandoPopup, setShowOrlandoPopup] = useState(false);
  const [orlandoAcknowledged, setOrlandoAcknowledged] = useState(false);

  useEffect(() => {
    // Get location from URL parameter
    const { location } = router.query;

    if (location && typeof location === "string") {
      const decodedLocation = decodeURIComponent(location);
      setSelectedLocation(decodedLocation);

      const territory = territories.find((t) => t.name === decodedLocation);
      if (territory) {
        setBookingUrl(territory.bookingUrl);
      }

      // Show Orlando popup if location is Orlando and not yet acknowledged
      if (decodedLocation === "Orlando, Florida" && !orlandoAcknowledged) {
        setShowOrlandoPopup(true);
      }
    }

    setIsLoading(false);
  }, [router.query]);

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #93EDF0 0%, rgba(147, 237, 240, 0.8) 30%, rgba(255, 255, 255, 0.9) 70%, #FAFAFA 100%)",
        }}
      >
        <Typography variant="h6" color="#067C92">
          Loading your booking...
        </Typography>
      </Box>
    );
  }

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
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('event', 'ads_conversion_Book_appointment_1');`,
          }}
        />
      </Head>

      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Container maxWidth="xl" sx={{ pt: { xs: 8, md: 12 }, pb: 4 }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            {selectedLocation && (
              <motion.div
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
              </motion.div>
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
      </motion.div>

      {/* Main Booking Content */}
      <motion.div
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
                <motion.div
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
                          Cat grooming available in Orlando only - starting at
                          $140
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
                </motion.div>
              </Box>
            )}

            {/* Mobile Floating Info Button */}
            {isMobile && (
              <>
                <Fab
                  color="primary"
                  sx={{
                    position: "fixed",
                    bottom: 20,
                    right: 20,
                    zIndex: 1000,
                    background: "linear-gradient(135deg, #00ADCD, #0AC3E6)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #038B95, #00ADCD)",
                    },
                  }}
                  onClick={() => setShowMobileInfo(!showMobileInfo)}
                >
                  <InfoIcon />
                </Fab>

                <Collapse in={showMobileInfo}>
                  <Box
                    sx={{
                      position: "fixed",
                      bottom: 90,
                      right: 20,
                      left: 20,
                      zIndex: 999,
                      maxWidth: 350,
                      ml: "auto",
                    }}
                  >
                    <Paper
                      sx={{
                        p: 3,
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))",
                        backdropFilter: "blur(20px)",
                        borderRadius: 3,
                        border: "1px solid rgba(147, 237, 240, 0.4)",
                        boxShadow: "0 20px 60px rgba(6, 124, 146, 0.25)",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 800,
                            color: "#067C92",
                            fontSize: "1.1rem",
                          }}
                        >
                          Important Guidelines
                        </Typography>
                        <Box
                          onClick={() => setShowMobileInfo(false)}
                          sx={{ cursor: "pointer", p: 0.5 }}
                        >
                          <ExpandLessIcon sx={{ color: "#067C92" }} />
                        </Box>
                      </Box>

                      <Box sx={{ space: 1.5 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            mb: 1.5,
                            p: 1.5,
                            background: "rgba(76, 175, 80, 0.1)",
                            borderRadius: 2,
                          }}
                        >
                          <Typography sx={{ fontSize: "1rem", mr: 1.5 }}>
                            🐱
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#067C92",
                              fontWeight: 600,
                              lineHeight: 1.4,
                            }}
                          >
                            Cat grooming available in Orlando only
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            mb: 1.5,
                            p: 1.5,
                            background: "rgba(255, 193, 7, 0.1)",
                            borderRadius: 2,
                          }}
                        >
                          <Typography sx={{ fontSize: "1rem", mr: 1.5 }}>
                            🧬
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#067C92",
                              fontWeight: 600,
                              lineHeight: 1.4,
                            }}
                          >
                            Breed restrictions apply
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            mb: 2,
                            p: 1.5,
                            background: "rgba(33, 150, 243, 0.1)",
                            borderRadius: 2,
                          }}
                        >
                          <Typography sx={{ fontSize: "1rem", mr: 1.5 }}>
                            ✂️
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#067C92",
                              fontWeight: 600,
                              lineHeight: 1.4,
                            }}
                          >
                            No shave downs on double-coated breeds
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
                              fontSize: "0.875rem",
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
                  </Box>
                </Collapse>
              </>
            )}

            {/* Mobile Bottom Info Bar */}
            {isMobile && (
              <Box
                sx={{
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(135deg, #00ADCD, #0AC3E6)",
                  color: "white",
                  p: 1,
                  textAlign: "center",
                  zIndex: 998,
                  boxShadow: "0 -4px 20px rgba(0, 173, 205, 0.3)",
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  🏆 Licensed & Insured • ⭐ 5-Star Reviews • 🚐 Mobile
                  Convenience
                </Typography>
              </Box>
            )}
          </Box>
        </Container>
      </motion.div>

      {/* Orlando Service Guidelines Popup */}
      <Dialog
        open={showOrlandoPopup}
        onClose={() => {}} // Prevent closing without acknowledgment
        maxWidth="sm"
        fullWidth
        fullScreen={isMobile}
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : 4,
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(147, 237, 240, 0.3)",
            boxShadow: "0 25px 80px rgba(6, 124, 146, 0.25)",
            overflow: "hidden",
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(6, 124, 146, 0.4)",
            backdropFilter: "blur(8px)",
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          {/* Header */}
          <Box
            sx={{
              background: "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 100%)",
              color: "white",
              p: { xs: 3, md: 4 },
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
                background:
                  "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%222%22/></svg>') repeat",
                backgroundSize: "60px 60px",
                opacity: 0.3,
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <PetsIcon sx={{ fontSize: { xs: 28, md: 32 }, mr: 1.5 }} />
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                  }}
                >
                  Orlando Service Guidelines
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.95,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  fontWeight: 500,
                }}
              >
                Important information about our Orlando services
              </Typography>
            </Box>
          </Box>

          {/* Instructions */}
          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              background: "rgba(0, 173, 205, 0.08)",
              borderBottom: "1px solid rgba(0, 173, 205, 0.15)",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#067C92",
                fontWeight: 600,
                textAlign: "center",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.5,
                mb: 1,
              }}
            >
              📋 Please read the following information carefully
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#038B95",
                textAlign: "center",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: 500,
                opacity: 0.9,
              }}
            >
              Scroll down to review all details, then click &quot;I Understand &
              Continue&quot; to proceed
            </Typography>
          </Box>

          {/* Content */}
          <Box sx={{ p: { xs: 3, md: 4 } }}>
            {/* What We Don't Provide */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#067C92",
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#FF6B6B",
                    mr: 2,
                  }}
                />
                Service Limitations
              </Typography>

              <Box sx={{ pl: 3, space: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 2,
                    p: 2,
                    background: "rgba(255, 107, 107, 0.08)",
                    borderRadius: 3,
                    border: "1px solid rgba(255, 107, 107, 0.15)",
                  }}
                >
                  <Typography sx={{ fontSize: "1.2rem", mr: 2, mt: 0.2 }}>
                    🚫
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    <strong>No shave downs</strong> or detailed full-body
                    haircuts
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 2,
                    p: 2,
                    background: "rgba(255, 107, 107, 0.08)",
                    borderRadius: 3,
                    border: "1px solid rgba(255, 107, 107, 0.15)",
                  }}
                >
                  <Typography sx={{ fontSize: "1.2rem", mr: 2, mt: 0.2 }}>
                    🐕
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    <strong>
                      No shave downs under any circumstances for large breeds
                    </strong>{" "}
                    due to health concerns for the dog
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 2,
                    p: 2,
                    background: "rgba(255, 193, 7, 0.08)",
                    borderRadius: 3,
                    border: "1px solid rgba(255, 193, 7, 0.15)",
                  }}
                >
                  <Typography sx={{ fontSize: "1.2rem", mr: 2, mt: 0.2 }}>
                    ⚠️
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    Service may be{" "}
                    <strong>denied for severely matted dogs</strong>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 2,
                    p: 2,
                    background: "rgba(156, 39, 176, 0.08)",
                    borderRadius: 3,
                    border: "1px solid rgba(156, 39, 176, 0.15)",
                  }}
                >
                  <Typography sx={{ fontSize: "1.2rem", mr: 2, mt: 0.2 }}>
                    ✂️
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    <strong>Limited styling services</strong> available
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    p: 2,
                    background: "rgba(33, 150, 243, 0.08)",
                    borderRadius: 3,
                    border: "1px solid rgba(33, 150, 243, 0.15)",
                  }}
                >
                  <Typography sx={{ fontSize: "1.2rem", mr: 2, mt: 0.2 }}>
                    🐕
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    <strong>Only breeds on our breed list</strong> are serviced
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    p: 2,
                    background: "rgba(76, 175, 80, 0.08)",
                    borderRadius: 3,
                    border: "1px solid rgba(76, 175, 80, 0.15)",
                  }}
                >
                  <Typography sx={{ fontSize: "1.2rem", mr: 2, mt: 0.2 }}>
                    🐱
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    <strong>Cat grooming available in Orlando only</strong> -
                    starting at $140, flat fee of $125 for Fluffy Preferred
                    members
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider sx={{ my: 3, bgcolor: "rgba(147, 237, 240, 0.3)" }} />

            {/* Pricing Information */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#067C92",
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#00ADCD",
                    mr: 2,
                  }}
                />
                Pricing Information
              </Typography>

              <Box sx={{ pl: 3, mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    p: 2,
                    background: "rgba(0, 173, 205, 0.08)",
                    borderRadius: 3,
                    border: "1px solid rgba(0, 173, 205, 0.15)",
                  }}
                >
                  <Typography sx={{ fontSize: "1.2rem", mr: 2, mt: 0.2 }}>
                    💰
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    <strong>Pricing is automatically calculated</strong> during
                    the booking process based on your dog&apos;s breed and size
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider sx={{ my: 3, bgcolor: "rgba(147, 237, 240, 0.3)" }} />

            {/* Haircut Approval Disclaimer */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#067C92",
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#FF9800",
                    mr: 2,
                  }}
                />
                Haircut Approval Policy
              </Typography>

              <Box sx={{ pl: 3, mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    p: 2,
                    background: "rgba(255, 152, 0, 0.08)",
                    borderRadius: 3,
                    border: "1px solid rgba(255, 152, 0, 0.15)",
                  }}
                >
                  <Typography sx={{ fontSize: "1.2rem", mr: 2, mt: 0.2 }}>
                    ⚠️
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    <strong>
                      Breeds that require haircuts are subject to final approval
                    </strong>{" "}
                    and may be denied based on how matted the coat is and the
                    overall coat condition. Fluffy Preferred members receive 50%
                    off the specialized breed fee.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider sx={{ my: 3, bgcolor: "rgba(147, 237, 240, 0.3)" }} />

            {/* What We Do Provide */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#067C92",
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#4CAF50",
                    mr: 2,
                  }}
                />
                What We Excel At
              </Typography>

              <Box sx={{ pl: 3, space: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 2,
                    p: 2,
                    background: "rgba(76, 175, 80, 0.08)",
                    borderRadius: 3,
                    border: "1px solid rgba(76, 175, 80, 0.15)",
                  }}
                >
                  <ContentCutIcon
                    sx={{
                      color: "#4CAF50",
                      mr: 2,
                      mt: 0.2,
                      fontSize: "1.3rem",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    <strong>Professional trims</strong> and coat maintenance
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 2,
                    p: 2,
                    background: "rgba(0, 173, 205, 0.08)",
                    borderRadius: 3,
                    border: "1px solid rgba(0, 173, 205, 0.15)",
                  }}
                >
                  <SpaIcon
                    sx={{
                      color: "#00ADCD",
                      mr: 2,
                      mt: 0.2,
                      fontSize: "1.3rem",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    <strong>Premium spa experience</strong> with luxury care
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    p: 2,
                    background: "rgba(255, 152, 0, 0.08)",
                    borderRadius: 3,
                    border: "1px solid rgba(255, 152, 0, 0.15)",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#FF9800",
                      mr: 2,
                      mt: 0.2,
                      fontSize: "1.3rem",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#067C92",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    <strong>Expert coat care</strong> to bring out your
                    dog&apos;s best look
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Acknowledgment Button */}
            <Box sx={{ textAlign: "center", pt: 2 }}>
              <Button
                onClick={() => {
                  setOrlandoAcknowledged(true);
                  setShowOrlandoPopup(false);
                }}
                variant="contained"
                size="large"
                fullWidth={isMobile}
                sx={{
                  background:
                    "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 100%)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  py: { xs: 1.8, md: 2 },
                  px: { xs: 4, md: 6 },
                  borderRadius: 3,
                  textTransform: "none",
                  boxShadow: "0 8px 32px rgba(0, 173, 205, 0.3)",
                  minWidth: { xs: "auto", md: 280 },
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #038B95 0%, #00ADCD 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 40px rgba(0, 173, 205, 0.4)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  },
                  "&:active": {
                    transform: "translateY(0px)",
                  },
                }}
              >
                I Understand & Continue
              </Button>

              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 2,
                  color: "#038B95",
                  fontSize: { xs: "0.8rem", md: "0.85rem" },
                  fontWeight: 500,
                  opacity: 0.8,
                }}
              >
                By continuing, you acknowledge our service guidelines
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default BookingPage;
