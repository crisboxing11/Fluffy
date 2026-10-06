import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Chip,
  Alert,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Fade,
  Backdrop,
} from "@mui/material";
import { useRouter } from "next/router";
import territories from "../data/territories";
import { isLasVegasMoeGoBookingUrl, sendLasVegasBookNowConversion } from "../lib/ads";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PreBookingForm = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [showOrlandoModal, setShowOrlandoModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const bookingStarted = useRef(false);

  const steps = ["Select Location", "Confirm Details", "Book Appointment"];

  // Reset state when component mounts to handle navigation back to homepage
  useEffect(() => {
    setCurrentStep(0);
    setIsLoading(false);
    setError("");

    setLocation("");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    if (!location) {
      setError("Please select a service area to continue.");
      return;
    }

    // For Orlando, show the modal instead of proceeding directly
    if (location === "Orlando, Florida") {
      setShowOrlandoModal(true);
      return;
    }

    setError("");
    setIsLoading(true);
    setCurrentStep(1);

    // Simulate brief loading for better UX
    setTimeout(() => {
      proceedToBooking();
    }, 800);
  };

  const proceedToBooking = () => {
    if (bookingStarted.current) return;
    bookingStarted.current = true;

    setCurrentStep(2);
    // Market comes from the selected territory's MoeGo URL, not from the button label.
    // Las Vegas uses /ol/FLUFFYPETWASH. Orlando uses /ol/FluffyPetWashOrlando.
    const territory = territories.find((item) => item.name === location);
    if (territory && isLasVegasMoeGoBookingUrl(territory.bookingUrl)) {
      sendLasVegasBookNowConversion();
    }
    const encodedLocation = encodeURIComponent(location);
    router.push(`/booking?location=${encodedLocation}`);
  };

  const handleOrlandoBookOnline = () => {
    setShowOrlandoModal(false);
    setError("");
    setIsLoading(true);
    setCurrentStep(1);

    // Simulate brief loading for better UX
    setTimeout(() => {
      proceedToBooking();
    }, 800);
  };

  const handleOrlandoRequestAppointment = () => {
    setShowOrlandoModal(false);
    // Open the intake form in a new tab
    window.open(
      "https://form.moego.pet/go/form?formId=4f1eef34a5ed478fb0732d01a8239453",
      "_blank",
    );
  };

  const handleCloseOrlandoModal = () => {
    setShowOrlandoModal(false);
    setLocation(""); // Reset location selection
  };

  return (
    <Box
      component="form"
      aria-label="Pre-booking form"
      onSubmit={handleSubmit}
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 3 },
        textAlign: "center",
        bgcolor: "#ffffff",
        boxShadow: { xs: 1, md: 2 },
        borderRadius: { xs: 3, md: 2 },
        maxWidth: { xs: "100%", md: 600 },
        mx: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Progress Indicator for Mobile */}
      {isMobile && (
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ mb: 1, display: "block" }}
          >
            Step {currentStep + 1} of 3
          </Typography>
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
            {steps.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: index <= currentStep ? "#00ADCD" : "#E0E0E0",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Box>
      )}

      {/* Desktop Stepper */}
      {!isMobile && (
        <Stepper activeStep={currentStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      )}

      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight="bold"
        mb={2}
        sx={{
          background: "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {currentStep === 0
          ? "Select Your Service Area"
          : currentStep === 1
            ? "Ready to Book!"
            : "Redirecting to Booking..."}
      </Typography>

      {currentStep === 0 && (
        <Typography
          variant="body2"
          color="textSecondary"
          mb={3}
          sx={{ px: { xs: 1, md: 0 } }}
        >
          Choose your location to see available appointment times and services
        </Typography>
      )}

      {currentStep === 1 && (
        <Typography
          variant="body2"
          color="textSecondary"
          mb={3}
          sx={{ px: { xs: 1, md: 0 } }}
        >
          Your location has been confirmed. Click below to access your
          personalized booking calendar.
        </Typography>
      )}

      {error && (
        <Alert
          severity="error"
          sx={{
            mb: 3,
            textAlign: "left",
            borderRadius: 2,
            "& .MuiAlert-message": {
              fontSize: { xs: "0.875rem", md: "1rem" },
            },
          }}
          aria-live="assertive"
        >
          {error}
        </Alert>
      )}

      {currentStep === 0 && (
        <>
          <TextField
            select
            label="Service Area"
            name="location"
            value={location}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                fontSize: { xs: "1rem", md: "1.1rem" },
                minHeight: { xs: 56, md: 64 },
              },
              "& .MuiInputLabel-root": {
                fontSize: { xs: "1rem", md: "1.1rem" },
              },
            }}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: {
                    maxHeight: { xs: 200, md: 300 },
                    "& .MuiMenuItem-root": {
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      py: { xs: 1.5, md: 1 },
                    },
                  },
                },
              },
            }}
          >
            {territories.map((territory, index) => (
              <MenuItem key={index} value={territory.name}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationOnIcon
                    sx={{ color: "#00ADCD", fontSize: "1.2rem" }}
                  />
                  {territory.name}
                </Box>
              </MenuItem>
            ))}
          </TextField>

          {/* Service Highlights */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="body2" color="textSecondary" mb={2}>
              What to expect:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "center",
              }}
            >
              <Chip
                icon={<CheckCircleIcon />}
                label="Licensed & Insured"
                size={isMobile ? "small" : "medium"}
                sx={{ bgcolor: "#E8F5E8", color: "#2E7D32" }}
              />
              <Chip
                label="Mobile Service"
                size={isMobile ? "small" : "medium"}
                sx={{ bgcolor: "#FFF3E0", color: "#F57C00" }}
              />
            </Box>
          </Box>
        </>
      )}

      {currentStep === 1 && location && (
        <Box sx={{ py: 3 }}>
          <Chip
            icon={<LocationOnIcon />}
            label={`Selected: ${location}`}
            sx={{
              background: "linear-gradient(135deg, #00ADCD, #0AC3E6)",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "0.875rem", md: "1rem" },
              px: 2,
              py: 1,
              height: "auto",
              mb: 3,
              "& .MuiChip-icon": {
                color: "white",
              },
            }}
          />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Setting up your personalized booking experience...
          </Typography>

          {/* Loading spinner */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                border: "4px solid #E0E0E0",
                borderTop: "4px solid #00ADCD",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                "@keyframes spin": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              }}
            />
          </Box>

          {/* Action button for step 1 */}
          <Button
            variant="contained"
            color="primary"
            onClick={proceedToBooking}
            size={isMobile ? "large" : "large"}
            fullWidth={isMobile}
            sx={{
              textTransform: "none",
              background: "linear-gradient(90deg, #00ADCD, #038B95)",
              px: { xs: 3, md: 4 },
              py: { xs: 1.5, md: 1.5 },
              fontSize: { xs: "1rem", md: "1.1rem" },
              fontWeight: "bold",
              borderRadius: 2,
              minHeight: { xs: 48, md: 56 },
              "&:hover": {
                background: "linear-gradient(90deg, #038B95, #00ADCD)",
                transform: "scale(1.02)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            Continue to Booking →
          </Button>
        </Box>
      )}

      {currentStep === 0 && (
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isLoading}
          aria-label="Continue to booking"
          size={isMobile ? "large" : "large"}
          fullWidth={isMobile}
          sx={{
            textTransform: "none",
            background: isLoading
              ? "#CCCCCC"
              : "linear-gradient(90deg, #00ADCD, #038B95)",
            px: { xs: 3, md: 4 },
            py: { xs: 1.5, md: 1.5 },
            fontSize: { xs: "1rem", md: "1.1rem" },
            fontWeight: "bold",
            borderRadius: 2,
            minHeight: { xs: 48, md: 56 },
            "&:hover": {
              background: isLoading
                ? "#CCCCCC"
                : "linear-gradient(90deg, #038B95, #00ADCD)",
              transform: isLoading ? "none" : "scale(1.02)",
              transition: "all 0.3s ease-in-out",
            },
            "&:disabled": {
              color: "#666666",
            },
          }}
        >
          {isLoading ? "Preparing..." : "Continue to Booking →"}
        </Button>
      )}

      {/* Mobile-optimized important info */}
      {isMobile && currentStep === 0 && (
        <Alert
          severity="info"
          sx={{
            mt: 3,
            textAlign: "left",
            borderRadius: 2,
            bgcolor: "#E3F2FD",
            "& .MuiAlert-message": {
              fontSize: "0.875rem",
            },
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
            Before booking, please note:
          </Typography>
          <Typography variant="body2">
            • Breed restrictions apply
            <br />• No shave downs on double-coated breeds
          </Typography>
        </Alert>
      )}

      {/* Orlando Booking Options Modal */}
      <Dialog
        open={showOrlandoModal}
        onClose={handleCloseOrlandoModal}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Fade}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(8px)",
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: { xs: 3, md: 4 },
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(147, 237, 240, 0.3)",
            boxShadow: "0 24px 80px rgba(6, 124, 146, 0.25)",
            overflow: "visible",
            position: "relative",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            pb: 1,
            pt: 4,
            px: { xs: 3, md: 4 },
            position: "relative",
          }}
        >
          <IconButton
            onClick={handleCloseOrlandoModal}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "#067C92",
              "&:hover": {
                backgroundColor: "rgba(6, 124, 146, 0.1)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box sx={{ mb: 2 }}>
            <Chip
              icon={<LocationOnIcon />}
              label="Orlando, Florida"
              sx={{
                background: "linear-gradient(135deg, #00ADCD, #0AC3E6)",
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "0.875rem", md: "1rem" },
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
            component="div"
            variant={isMobile ? "h5" : "h4"}
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
            }}
          >
            Choose Your Booking Method
          </Typography>

          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.5,
              maxWidth: 400,
              mx: "auto",
            }}
          >
            Select the option that works best for you
          </Typography>
        </DialogTitle>

        <DialogContent
          sx={{
            px: { xs: 3, md: 4 },
            pb: 4,
            pt: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Book Online Option */}
            <Box
              onClick={handleOrlandoBookOnline}
              sx={{
                p: { xs: 3, md: 4 },
                border: "2px solid transparent",
                borderRadius: 3,
                background:
                  "linear-gradient(135deg, rgba(0, 173, 205, 0.08), rgba(10, 195, 230, 0.05))",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 16px 40px rgba(0, 173, 205, 0.2)",
                  borderColor: "rgba(0, 173, 205, 0.3)",
                  "& .arrow-icon": {
                    transform: "translateX(4px)",
                  },
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #00ADCD, #0AC3E6)",
                  borderRadius: "12px 12px 0 0",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #00ADCD, #0AC3E6)",
                    color: "white",
                    mr: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CalendarTodayIcon sx={{ fontSize: "1.5rem" }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#067C92",
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      mb: 0.5,
                    }}
                  >
                    Book Online
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}
                  >
                    Self-service booking
                  </Typography>
                </Box>
                <ArrowForwardIcon
                  className="arrow-icon"
                  sx={{
                    color: "#00ADCD",
                    fontSize: "1.5rem",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "#038B95",
                  lineHeight: 1.5,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                Perfect for returning customers who know exactly what they want.
                Browse available times and book instantly.
              </Typography>

              <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label="Instant Booking"
                  size="small"
                  sx={{
                    bgcolor: "rgba(0, 173, 205, 0.1)",
                    color: "#067C92",
                    fontWeight: 600,
                  }}
                />
                <Chip
                  label="24/7 Available"
                  size="small"
                  sx={{
                    bgcolor: "rgba(0, 173, 205, 0.1)",
                    color: "#067C92",
                    fontWeight: 600,
                  }}
                />
              </Box>
            </Box>

            {/* Request Appointment Option */}
            <Box
              onClick={handleOrlandoRequestAppointment}
              sx={{
                p: { xs: 3, md: 4 },
                border: "2px solid transparent",
                borderRadius: 3,
                background:
                  "linear-gradient(135deg, rgba(147, 237, 240, 0.08), rgba(147, 237, 240, 0.05))",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 16px 40px rgba(147, 237, 240, 0.25)",
                  borderColor: "rgba(147, 237, 240, 0.4)",
                  "& .arrow-icon": {
                    transform: "translateX(4px)",
                  },
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #93EDF0, #67E3E8)",
                  borderRadius: "12px 12px 0 0",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #93EDF0, #67E3E8)",
                    color: "#067C92",
                    mr: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AssignmentIcon sx={{ fontSize: "1.5rem" }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#067C92",
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      mb: 0.5,
                    }}
                  >
                    Request an Appointment
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}
                  >
                    Assisted booking service
                  </Typography>
                </Box>
                <ArrowForwardIcon
                  className="arrow-icon"
                  sx={{
                    color: "#038B95",
                    fontSize: "1.5rem",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "#038B95",
                  lineHeight: 1.5,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                Great for first-time customers or those with special requests.
                Fill out our intake form and we&apos;ll handle the scheduling for
                you.
              </Typography>

              <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label="Personal Service"
                  size="small"
                  sx={{
                    bgcolor: "rgba(147, 237, 240, 0.2)",
                    color: "#067C92",
                    fontWeight: 600,
                  }}
                />
                <Chip
                  label="Custom Scheduling"
                  size="small"
                  sx={{
                    bgcolor: "rgba(147, 237, 240, 0.2)",
                    color: "#067C92",
                    fontWeight: 600,
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Help Text */}
          <Box
            sx={{
              mt: 3,
              p: 2,
              background: "rgba(147, 237, 240, 0.1)",
              borderRadius: 2,
              border: "1px solid rgba(147, 237, 240, 0.2)",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#067C92",
                textAlign: "center",
                fontSize: { xs: "0.85rem", md: "0.9rem" },
                fontWeight: 500,
              }}
            >
              💡 Not sure which option to choose? First-time customers often
              prefer &quot;Request an Appointment&quot; for personalized service.
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PreBookingForm;
