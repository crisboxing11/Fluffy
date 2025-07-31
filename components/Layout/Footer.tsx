import {
  Box,
  Typography,
  Link,
  IconButton,
  Grid,
  Divider,
  Stack,
  Container,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const navigationLinks = {
    Services: [
      { name: "Pet Grooming", href: "/services" },
      { name: "Mobile Wash", href: "/services" },
      { name: "Nail Trimming", href: "/services" },
      { name: "Blow Dry", href: "/services" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
    ],
    Booking: [
      { name: "Book Now", href: "/booking" },
      { name: "Pre-Book", href: "/prebook" },
      { name: "Pricing", href: "/prices" },
      { name: "Orlando Service", href: "/orlando" },
    ],
  };

  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        background: "linear-gradient(135deg, #038B95 0%, #026B73 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #A1E0E3, #038B95, #A1E0E3)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Main Footer Content */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          justifyContent="space-between"
        >
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: "linear-gradient(45deg, #A1E0E3, #ffffff)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "1.75rem", md: "2.125rem" },
                }}
              >
                Fluffy Pet Wash
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#A1E0E3",
                  lineHeight: 1.6,
                  mb: 3,
                  fontSize: "1.1rem",
                }}
              >
                Premium mobile pet grooming services bringing professional care
                directly to your doorstep.
              </Typography>

              {/* Contact Info */}
              <Stack spacing={2}>
                <Box display="flex" alignItems="center" gap={2}>
                  <PhoneIcon sx={{ color: "#A1E0E3", fontSize: "1.25rem" }} />
                  <Link
                    href="/contact"
                    color="inherit"
                    underline="none"
                    sx={{
                      fontSize: "1rem",
                      transition: "color 0.3s ease",
                      "&:hover": { color: "#A1E0E3" },
                    }}
                  >
                    Contact Us for Phone Numbers
                  </Link>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <EmailIcon sx={{ color: "#A1E0E3", fontSize: "1.25rem" }} />
                  <Link
                    href="mailto:contact@fluffypetwash.com"
                    color="inherit"
                    underline="none"
                    sx={{
                      fontSize: "1rem",
                      transition: "color 0.3s ease",
                      "&:hover": { color: "#A1E0E3" },
                    }}
                  >
                    contact@fluffypetwash.com
                  </Link>
                </Box>
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <LocationOnIcon
                    sx={{ color: "#A1E0E3", fontSize: "1.25rem", mt: 0.25 }}
                  />
                  <Typography sx={{ fontSize: "1rem", color: "white" }}>
                    Serving Multiple Locations
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Navigation Links */}
          {Object.entries(navigationLinks).map(([category, links]) => (
            <Grid item xs={6} sm={4} md={2.5} key={category}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: "#A1E0E3",
                  fontSize: "1.125rem",
                  letterSpacing: "0.5px",
                }}
              >
                {category}
              </Typography>
              <Stack spacing={2}>
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    color="inherit"
                    underline="none"
                    sx={{
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      transition: "all 0.3s ease",
                      position: "relative",
                      display: "inline-block",
                      "&:hover": {
                        color: "#A1E0E3",
                        transform: "translateX(4px)",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-2px",
                        left: 0,
                        width: 0,
                        height: "2px",
                        background: "#A1E0E3",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Elegant Divider */}
        <Box sx={{ my: 6, position: "relative" }}>
          <Divider
            sx={{
              bgcolor: "rgba(161, 224, 227, 0.3)",
              height: "1px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60px",
              height: "3px",
              background:
                "linear-gradient(90deg, transparent, #A1E0E3, transparent)",
              borderRadius: "2px",
            }}
          />
        </Box>

        {/* Bottom Section */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={3}
        >
          {/* Social Media */}
          <Box display="flex" alignItems="center" gap={1}>
            <Typography
              variant="body2"
              sx={{
                mr: 2,
                color: "#A1E0E3",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              Follow Us:
            </Typography>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              aria-label="Follow Fluffy Pet Wash on Facebook"
              sx={{
                color: "white",
                bgcolor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(161, 224, 227, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#A1E0E3",
                  color: "#038B95",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(161, 224, 227, 0.3)",
                },
              }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://instagram.com/fluffypetwash"
              target="_blank"
              aria-label="Follow Fluffy Pet Wash on Instagram"
              sx={{
                color: "white",
                bgcolor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(161, 224, 227, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#A1E0E3",
                  color: "#038B95",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(161, 224, 227, 0.3)",
                },
              }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Legal Links & Copyright */}
          <Box display="flex" alignItems="center" gap={3} flexWrap="wrap">
            <Link
              href="/privacy-policy"
              color="inherit"
              underline="none"
              sx={{
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "color 0.3s ease",
                "&:hover": { color: "#A1E0E3" },
              }}
            >
              Privacy Policy
            </Link>
            <Box
              sx={{
                width: "1px",
                height: "16px",
                bgcolor: "rgba(161, 224, 227, 0.5)",
              }}
            />
            <Link
              href="/contact"
              color="inherit"
              underline="none"
              sx={{
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "color 0.3s ease",
                "&:hover": { color: "#A1E0E3" },
              }}
            >
              Contact Us
            </Link>
            <Box
              sx={{
                width: "1px",
                height: "16px",
                bgcolor: "rgba(161, 224, 227, 0.5)",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.875rem",
                color: "#A1E0E3",
                fontWeight: 500,
              }}
            >
              &copy; {new Date().getFullYear()} Fluffy Pet Wash. All rights
              reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};//footer

export default Footer;
