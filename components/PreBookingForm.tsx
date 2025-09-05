import { useState, useEffect } from "react";
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
} from "@mui/material";
import { useRouter } from "next/router";
import territories from "../data/territories";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PetsIcon from "@mui/icons-material/Pets";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PreBookingForm = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Select Location", "Confirm Details", "Book Appointment"];

  // Reset state when component mounts to handle navigation back to homepage
  useEffect(() => {
    setCurrentStep(0);
    setIsLoading(false);
    setError("");

    setLocation("");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    if (!location) {
      setError("Please select a service area to continue.");
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
    setCurrentStep(2);
    // Use URL parameter instead of localStorage for better UX
    const encodedLocation = encodeURIComponent(location);
    router.push(`/booking?location=${encodedLocation}`);
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
              {location === "Las Vegas, Nevada" && (
                <Chip
                  icon={<PetsIcon />}
                  label="Dogs Only"
                  size={isMobile ? "small" : "medium"}
                  sx={{ bgcolor: "#E3F2FD", color: "#1976D2" }}
                />
              )}
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
            • Dogs only (no cats)
            <br />
            • Breed restrictions apply
            <br />• No shave downs on double-coated breeds
            {location === "Orlando, Florida" && (
              <>
                <br />• Extra breeds available in Orlando
                <br />• Full body haircuts subject to approval
                <br />• Haircuts subject to final approval based on coat
                condition
              </>
            )}
          </Typography>
        </Alert>
      )}

      {/* Orlando-specific information for desktop */}
      {!isMobile && currentStep === 0 && location === "Orlando, Florida" && (
        <Alert
          severity="success"
          sx={{
            mt: 3,
            textAlign: "left",
            borderRadius: 2,
            bgcolor: "#E8F5E8",
            "& .MuiAlert-message": {
              fontSize: "0.875rem",
            },
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
            Orlando Exclusive Services:
          </Typography>
          <Typography variant="body2">
            • Extra breeds available in our breed list
            <br />
            • Full body haircuts available subject to approval
            <br />• Fluffy Pet Wash reserves the right to deny service if
            guidelines are not met
          </Typography>
        </Alert>
      )}
    </Box>
  );
};

export default PreBookingForm;
