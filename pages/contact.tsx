import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Card,
  CardContent,
  Container,
  Snackbar,
  Alert,
  Chip,
  Divider,
  Paper,
  Stack,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { LAS_VEGAS_AREA_SERVED, LAS_VEGAS_POSTAL_ADDRESS } from "../data/serviceArea";
import { LAS_VEGAS_TEL_HREF } from "../lib/ads";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PetsIcon from "@mui/icons-material/Pets";
import BusinessIcon from "@mui/icons-material/Business";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// Enhanced animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
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
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "General Inquiry",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all required fields.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccessMessage(true);
      setForm({ name: "", email: "", message: "", subject: "General Inquiry" });
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    if (!isClient) return; // Prevent SSR issues
    
    const emailAddress = "contact@fluffypetwash.com";

    // Try modern clipboard API first (only if available and not blocked)
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailAddress);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
        return;
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (clipboardErr) {
      console.log("Clipboard API blocked, using fallback");
    }

    // Fallback method using textarea and execCommand
    try {
      const textArea = document.createElement("textarea");
      textArea.value = emailAddress;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, 99999); // For mobile devices

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        throw new Error("execCommand failed");
      }
    } catch (fallbackErr) {
      console.error("All copy methods failed: ", fallbackErr);
      // Final fallback: show prompt for manual copy
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent,
        );

      if (isMobile) {
        alert(`Please copy this email address:\n\n${emailAddress}`);
      } else {
        // For desktop, try to select text in a visible element
        const tempDiv = document.createElement("div");
        tempDiv.style.position = "fixed";
        tempDiv.style.top = "50%";
        tempDiv.style.left = "50%";
        tempDiv.style.transform = "translate(-50%, -50%)";
        tempDiv.style.background = "white";
        tempDiv.style.padding = "20px";
        tempDiv.style.border = "2px solid #038B95";
        tempDiv.style.borderRadius = "8px";
        tempDiv.style.zIndex = "9999";
        tempDiv.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
        tempDiv.innerHTML = `
          <p style="margin: 0 0 10px 0; font-family: Arial, sans-serif;">Please select and copy this email:</p>
          <input type="text" value="${emailAddress}" readonly style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-family: Arial, sans-serif;" id="email-copy-input">
          <button onclick="this.parentElement.remove()" style="margin-top: 10px; padding: 8px 16px; background: #038B95; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
        `;
        document.body.appendChild(tempDiv);

        const input = document.getElementById(
          "email-copy-input",
        ) as HTMLInputElement;
        if (input) {
          input.focus();
          input.select();
        }
      }
    }
  };

  const contactReasons = [
    {
      icon: <PetsIcon />,
      title: "Book a Grooming",
      description: "Schedule your pet's next spa day",
    },
    {
      icon: <BusinessIcon />,
      title: "Franchise Inquiry",
      description: "Join our growing family of entrepreneurs",
    },
    {
      icon: <SupportAgentIcon />,
      title: "Customer Support",
      description: "Get help with existing bookings",
    },
  ];

  const contactMethods = [
    {
      icon: <PhoneIcon sx={{ fontSize: 28 }} />,
      title: "Call Us",
      primary: "Las Vegas: (702) 508-6248",
      secondary: "Orlando: (407) 513-2935",
      description: "Available daily, 7AM-10PM",
      action: "",
      actionText: "",
    },
    {
      icon: <EmailIcon sx={{ fontSize: 28 }} />,
      title: "Email Us",
      primary: "contact@fluffypetwash.com",
      secondary: "We respond within 24 hours",
      description: "Copy and paste into your email client",
      action: "",
      actionText: "",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 28 }} />,
      title: "Service Areas",
      primary: "Las Vegas: Fully Covered",
      secondary: "Orlando: Limited Coverage",
      description: "Mobile service to your location",
      action: "/orlando",
      actionText: "View Orlando Coverage",
    },
  ];

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fluffy Pet Wash",
    url: "https://fluffypetwash.com",
    description:
      "Mobile pet grooming service offering luxury grooming for dogs at your doorstep.",
    image: "https://fluffypetwash.com/fluffy-circle.png",
    email: "contact@fluffypetwash.com",
    telephone: "+1-702-508-6248",
    address: LAS_VEGAS_POSTAL_ADDRESS,
    areaServed: [
      ...LAS_VEGAS_AREA_SERVED,
      {
        "@type": "Place",
        name: "Orlando, FL",
      },
    ],
    sameAs: [
      "https://www.instagram.com/fluffypetwash",
      "https://www.facebook.com/fluffypetwash",
    ],
  };

  // Don't render dynamic content until client-side
  if (!isClient) {
    return (
      <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh" }}>
        <Head>
          <title>Contact Us | Fluffy Pet Wash</title>
          <meta
            name="description"
            content="Have questions? Contact Fluffy Pet Wash for mobile grooming appointments, franchising info, or general inquiries. Call, email, or fill out our contact form."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index,follow" />
          <link rel="canonical" href="https://www.fluffypetwash.com/contact" />
          <link rel="icon" href="/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(contactJsonLd),
            }}
          />
        </Head>
        <Container maxWidth="lg" sx={{ py: { xs: 2, md: 8 }, pt: { xs: 12, md: 8 } }}>
          <Box textAlign="center" mb={{ xs: 4, md: 8 }}>
            <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: 800, color: "#067C92" }}>
              Loading Contact Page...
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <Head>
        <title>Contact Us | Fluffy Pet Wash</title>
        <meta
          name="description"
          content="Have questions? Contact Fluffy Pet Wash for mobile grooming appointments, franchising info, or general inquiries. Call, email, or fill out our contact form."
        />
        <meta
          name="keywords"
          content="contact mobile pet grooming, fluffy pet wash contact, dog grooming questions, mobile pet grooming franchise, mobile dog grooming questions, should I do mobile grooming, mobile grooming prices, how much for mobile grooming, mobile grooming questions, mobile dog grooming questions, mobile pet grooming questions, Is mobile grooming right for me, dog groomer near me, mobile dog groomer near me, mobile groomers near me, mobile dog grooming orlando, mobile pet grooming orlando, mobile dog grooming las vegas, mobile pet grooming las vegas"
        />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.fluffypetwash.com/contact" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Contact Us | Fluffy Pet Wash" />
        <meta
          property="og:description"
          content="Contact Fluffy Pet Wash for mobile grooming, questions, or franchise inquiries. Call, email, or fill out our quick form."
        />
        <meta
          property="og:image"
          content="https://fluffypetwash.com/fluffy-circle.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluffypetwash.com/contact" />
        <meta property="og:site_name" content="Fluffy Pet Wash" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Fluffy Pet Wash" />
        <meta
          name="twitter:description"
          content="Reach out to Fluffy Pet Wash for mobile dog grooming appointments, franchising, or general questions."
        />
        <meta
          name="twitter:image"
          content="https://fluffypetwash.com/fluffy-circle.png"
        />
        <meta name="twitter:image:alt" content="Contact Fluffy Pet Wash" />
        <meta name="twitter:site" content="@fluffypetwash" />
        <meta name="twitter:creator" content="@fluffypetwash" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactJsonLd),
          }}
        />
      </Head>

      {/* Success Snackbar */}
      <Snackbar
        open={successMessage}
        autoHideDuration={6000}
        onClose={() => setSuccessMessage(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccessMessage(false)}
          severity="success"
          icon={<CheckCircleIcon />}
          sx={{
            width: "100%",
            fontSize: "1.1rem",
            fontWeight: 600,
            backgroundColor: "#038B95",
            color: "white",
            boxShadow: "0 8px 32px rgba(3, 139, 149, 0.3)",
            borderRadius: "12px",
            "& .MuiAlert-icon": {
              color: "white",
            },
          }}
        >
          ✨ Message sent successfully! We&apos;ll get back to you within 24 hours.
        </Alert>
      </Snackbar>

      <Container
        maxWidth="lg"
        sx={{ py: { xs: 2, md: 8 }, pt: { xs: 12, md: 8 } }}
      >
        {/* Hero Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Box textAlign="center" mb={{ xs: 4, md: 8 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3.5rem",
                  lg: "4rem",
                },
                fontWeight: 800,
                background: "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: { xs: 2, md: 3 },
                lineHeight: { xs: 1.0, md: 1.1 },
              }}
            >
              Let&apos;s Connect!
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                color: "#64748b",
                fontWeight: 400,
                maxWidth: "600px",
                mx: "auto",
                mb: { xs: 3, md: 4 },
                lineHeight: 1.6,
                px: { xs: 1, md: 0 },
              }}
            >
              Ready to pamper your pet or explore franchise opportunities? We&apos;re
              here to help make it happen.
            </Typography>

            {/* Important Notice */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 4,
                borderRadius: "16px",
                bgcolor: "rgba(255, 193, 7, 0.1)",
                border: "2px solid #FFC107",
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#F57C00",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                ⚠️ Important Notice
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#E65100",
                  fontWeight: 500,
                  mb: 2,
                  textAlign: "center",
                }}
              >
                This contact form is NOT for booking appointments or pricing inquiries.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body2" color="#BF360C" fontWeight={500}>
                  For appointments:
                </Typography>
                <Link href="/prebook" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      bgcolor: "#038B95",
                      color: "white",
                      fontWeight: 600,
                      px: 3,
                      py: 1,
                      borderRadius: "20px",
                      "&:hover": {
                        bgcolor: "#026B73",
                        transform: "translateY(-1px)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    Book Now
                  </Button>
                </Link>
                <Typography variant="body2" color="#BF360C" fontWeight={500}>
                  For pricing:
                </Typography>
                <Link href="/prices" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: "#038B95",
                      color: "#038B95",
                      fontWeight: 600,
                      px: 3,
                      py: 1,
                      borderRadius: "20px",
                      "&:hover": {
                        bgcolor: "rgba(3, 139, 149, 0.1)",
                        transform: "translateY(-1px)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    View Prices
                  </Button>
                </Link>
              </Stack>
            </Paper>

            {/* Quick Action Chips */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Link href="/prebook" style={{ textDecoration: "none" }}>
                <Chip
                  label="Book Grooming Now"
                  icon={<PetsIcon />}
                  clickable
                  sx={{
                    bgcolor: "#038B95",
                    color: "white",
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    fontSize: "1rem",
                    "&:hover": {
                      bgcolor: "#026B73",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                />
              </Link>
              <Link
                href="#"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Chip
                  label="Franchise Inquiry"
                  icon={<BusinessIcon />}
                  variant="outlined"
                  clickable
                  sx={{
                    borderColor: "#038B95",
                    color: "#038B95",
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    fontSize: "1rem",
                    "&:hover": {
                      bgcolor: "rgba(3, 139, 149, 0.1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                />
              </Link>
            </Stack>
          </Box>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} mb={{ xs: 6, md: 8 }}>
            {contactMethods.map((method, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={scaleIn}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "20px",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                      border: "1px solid rgba(3, 139, 149, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(3, 139, 149, 0.15)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: "center" }}>
                      <Avatar
                        sx={{
                          bgcolor: "rgba(3, 139, 149, 0.1)",
                          color: "#038B95",
                          width: 64,
                          height: 64,
                          mx: "auto",
                          mb: 3,
                        }}
                      >
                        {method.icon}
                      </Avatar>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        color="#067C92"
                        mb={2}
                      >
                        {method.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        color="#038B95"
                        mb={1}
                      >
                        {method.title === "Call Us" ? (
                          <Box
                            component="a"
                            href={LAS_VEGAS_TEL_HREF}
                            sx={{
                              color: "inherit",
                              font: "inherit",
                              fontWeight: "inherit",
                              lineHeight: "inherit",
                              letterSpacing: "inherit",
                              textDecoration: "none",
                              display: "inline",
                              cursor: "inherit",
                              "&:hover, &:visited, &:active, &:focus": {
                                color: "inherit",
                                textDecoration: "none",
                              },
                            }}
                          >
                            {method.primary}
                          </Box>
                        ) : (
                          method.primary
                        )}
                      </Typography>
                      <Typography variant="body2" color="#64748b" mb={1}>
                        {method.secondary}
                      </Typography>
                      <Typography variant="body2" color="#94a3b8" mb={3}>
                        {method.description}
                      </Typography>
                      {method.actionText ? (
                        <Button
                          variant="outlined"
                          href={method.action}
                          target={
                            method.action.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          sx={{
                            borderColor: "#038B95",
                            color: "#038B95",
                            fontWeight: 600,
                            borderRadius: "12px",
                            px: 3,
                            "&:hover": {
                              bgcolor: "rgba(3, 139, 149, 0.1)",
                              borderColor: "#026B73",
                            },
                          }}
                        >
                          {method.actionText}
                        </Button>
                      ) : method.title === "Email Us" ? (
                        <Button
                          variant="outlined"
                          onClick={handleCopyEmail}
                          startIcon={<ContentCopyIcon />}
                          sx={{
                            borderColor: emailCopied ? "#4caf50" : "#038B95",
                            color: emailCopied ? "#4caf50" : "#038B95",
                            fontWeight: 600,
                            borderRadius: "12px",
                            px: 3,
                            "&:hover": {
                              bgcolor: emailCopied
                                ? "rgba(76, 175, 80, 0.1)"
                                : "rgba(3, 139, 149, 0.1)",
                              borderColor: emailCopied ? "#388e3c" : "#026B73",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          {emailCopied ? "Copied!" : "Copy Email"}
                        </Button>
                      ) : null}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Main Content Grid */}
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Contact Form */}
          <Grid item xs={12} lg={8}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: "24px",
                  bgcolor: "white",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(3, 139, 149, 0.1)",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={700}
                  color="#067C92"
                  mb={2}
                >
                  Send us a Message
                </Typography>
                <Typography variant="body1" color="#64748b" mb={4}>
                  Fill out the form below and we&apos;ll get back to you as soon as
                  possible. For urgent matters, please call us directly.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  {error && (
                    <Alert
                      severity="error"
                      sx={{
                        mb: 3,
                        borderRadius: "12px",
                        "& .MuiAlert-message": { fontWeight: 500 },
                      }}
                    >
                      {error}
                    </Alert>
                  )}

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            "&:hover fieldset": {
                              borderColor: "#00ADCD",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#038B95",
                              borderWidth: "2px",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            "&:hover fieldset": {
                              borderColor: "#00ADCD",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#038B95",
                              borderWidth: "2px",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        label="Subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        SelectProps={{ native: true }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            "&:hover fieldset": {
                              borderColor: "#00ADCD",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#038B95",
                              borderWidth: "2px",
                            },
                          },
                        }}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Booking Question">
                          Booking Question
                        </option>
                        <option value="Franchise Interest">
                          Franchise Interest
                        </option>
                        <option value="Customer Support">
                          Customer Support
                        </option>
                        <option value="Feedback">Feedback</option>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us how we can help you..."
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            "&:hover fieldset": {
                              borderColor: "#00ADCD",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#038B95",
                              borderWidth: "2px",
                            },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Box mt={4}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      endIcon={isSubmitting ? null : <SendIcon />}
                      sx={{
                        background:
                          "linear-gradient(135deg, #00ADCD 0%, #038B95 100%)",
                        color: "white",
                        fontWeight: 700,
                        px: 4,
                        py: 1.5,
                        borderRadius: "12px",
                        fontSize: "1.1rem",
                        boxShadow: "0 8px 24px rgba(0, 173, 205, 0.3)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #038B95 0%, #026B73 100%)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 12px 32px rgba(0, 173, 205, 0.4)",
                        },
                        "&:disabled": {
                          background: "#94a3b8",
                          transform: "none",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Sidebar Information */}
          <Grid item xs={12} lg={4}>
            <Stack spacing={4}>
              {/* Why Contact Us */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    bgcolor: "white",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(3, 139, 149, 0.1)",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#067C92"
                    mb={3}
                  >
                    Why Contact Us?
                  </Typography>
                  <Stack spacing={3}>
                    {contactReasons.map((reason, index) => (
                      <Box
                        key={index}
                        display="flex"
                        alignItems="flex-start"
                        gap={2}
                      >
                        <Avatar
                          sx={{
                            bgcolor: "rgba(3, 139, 149, 0.1)",
                            color: "#038B95",
                            width: 40,
                            height: 40,
                          }}
                        >
                          {reason.icon}
                        </Avatar>
                        <Box>
                          <Typography
                            variant="subtitle2"
                            fontWeight={600}
                            color="#067C92"
                          >
                            {reason.title}
                          </Typography>
                          <Typography variant="body2" color="#64748b">
                            {reason.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    bgcolor: "white",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(3, 139, 149, 0.1)",
                  }}
                >
                  <Box display="flex" alignItems="center" gap={2} mb={3}>
                    <Avatar
                      sx={{
                        bgcolor: "rgba(3, 139, 149, 0.1)",
                        color: "#038B95",
                        width: 48,
                        height: 48,
                      }}
                    >
                      <AccessTimeIcon />
                    </Avatar>
                    <Typography variant="h6" fontWeight={700} color="#067C92">
                      Business Hours
                    </Typography>
                  </Box>
                  <Stack spacing={2}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body2" color="#64748b">
                        Every day
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        color="#038B95"
                      >
                        7:00 AM - 10:00 PM
                      </Typography>
                    </Box>
                  </Stack>
                  <Divider sx={{ my: 3 }} />
                  <Typography
                    variant="body2"
                    color="#64748b"
                    textAlign="center"
                  >
                    Emergency grooming available by appointment
                  </Typography>
                </Paper>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    bgcolor: "white",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(3, 139, 149, 0.1)",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#067C92"
                    mb={3}
                  >
                    Helpful Links
                  </Typography>
                  <Stack spacing={2}>
                    <Link href="/services" style={{ textDecoration: "none" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#038B95",
                          fontWeight: 500,
                          "&:hover": {
                            color: "#026B73",
                            textDecoration: "underline",
                          },
                          transition: "color 0.2s ease",
                        }}
                      >
                        → View Our Services
                      </Typography>
                    </Link>
                    <Link href="/prices" style={{ textDecoration: "none" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#038B95",
                          fontWeight: 500,
                          "&:hover": {
                            color: "#026B73",
                            textDecoration: "underline",
                          },
                          transition: "color 0.2s ease",
                        }}
                      >
                        → Check Pricing
                      </Typography>
                    </Link>
                    <Link href="/faq" style={{ textDecoration: "none" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#038B95",
                          fontWeight: 500,
                          "&:hover": {
                            color: "#026B73",
                            textDecoration: "underline",
                          },
                          transition: "color 0.2s ease",
                        }}
                      >
                        → Frequently Asked Questions
                      </Typography>
                    </Link>
                    <Link
                      href="/testimonials"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#038B95",
                          fontWeight: 500,
                          "&:hover": {
                            color: "#026B73",
                            textDecoration: "underline",
                          },
                          transition: "color 0.2s ease",
                        }}
                      >
                        → Read Customer Reviews
                      </Typography>
                    </Link>
                  </Stack>
                </Paper>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;