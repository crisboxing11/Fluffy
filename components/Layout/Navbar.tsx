import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Fade,
  Slide,
  useScrollTrigger,
  Backdrop,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        component="nav"
        role="navigation"
        position="fixed"
        sx={{
          bgcolor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "#FFFFFF",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          color: "#067C92",
          boxShadow: isScrolled
            ? "0px 2px 20px rgba(6, 124, 146, 0.15)"
            : "0px 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1300,
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          py: { xs: 0.5, md: 1 },
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom: isScrolled
            ? "1px solid rgba(6, 124, 146, 0.1)"
            : "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: "64px", md: "64px", lg: "72px" },
            px: "0 !important",
            maxWidth: { xs: "100%", md: "1200px", lg: "1400px" },
            width: "100%",
            mx: "auto",
          }}
        >
          {/* Fluffy Logo as Homepage Link */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                "&:active": {
                  transform: "scale(0.98)",
                },
              }}
            >
              <Image
                src="/Fluffy Logo.svg"
                alt="Fluffy Pet Wash Logo"
                width={isScrolled ? 110 : 120}
                height={isScrolled ? 36 : 40}
                priority
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.15))",
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </Box>
          </Link>

          {/* Desktop Navigation Links */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {[
              "Home",
              "About",
              "Services",
              "Prices",
              "Blog",
              "Testimonials",
              "FAQ",
              "Contact",
            ].map((item, index) => (
              <Button
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                sx={{
                  color: "#067C92",
                  mx: 0.5,
                  px: 2,
                  py: 1,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  position: "relative",
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    color: "#00ADCD",
                    backgroundColor: "rgba(0, 173, 205, 0.08)",
                    transform: "translateY(-1px)",
                  },
                  "&:active": {
                    transform: "translateY(0px)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: 0,
                    height: "2px",
                    backgroundColor: "#00ADCD",
                    transition: "all 0.3s ease-in-out",
                    transform: "translateX(-50%)",
                  },
                  "&:hover::after": {
                    width: "80%",
                  },
                }}
              >
                {item}
              </Button>
            ))}

            <Box sx={{ display: "flex", gap: 1.5, ml: 2 }}>
              <Button
                variant="contained"
                href="/prebook"
                aria-label="Book grooming appointment"
                sx={{
                  background:
                    "linear-gradient(135deg, #00ADCD 0%, #038B95 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  px: { xs: 3, md: 1.8, lg: 3 },
                  py: { xs: 1.2, md: 0.8, lg: 1.2 },
                  borderRadius: { xs: "25px", md: "16px", lg: "25px" },
                  textTransform: "none",
                  fontSize: { xs: "0.95rem", md: "0.85rem", lg: "0.95rem" },
                  minWidth: { md: "100px", lg: "140px" },
                  boxShadow: "0 4px 15px rgba(0, 173, 205, 0.3)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #038B95 0%, #00ADCD 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(0, 173, 205, 0.4)",
                  },
                  "&:active": {
                    transform: "translateY(0px)",
                  },
                }}
              >
                Book Now
              </Button>

              <Button
                variant="outlined"
                href="https://franchise.fluffypetwash.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Franchise with Fluffy Pet Wash"
                sx={{
                  borderColor: "#00ADCD",
                  color: "#00ADCD",
                  fontWeight: 600,
                  px: { xs: 3, md: 1.8, lg: 3 },
                  py: { xs: 1.2, md: 0.8, lg: 1.2 },
                  borderRadius: { xs: "25px", md: "16px", lg: "25px" },
                  textTransform: "none",
                  fontSize: { xs: "0.95rem", md: "0.85rem", lg: "0.95rem" },
                  minWidth: { md: "120px", lg: "160px" },
                  borderWidth: "2px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    borderColor: "#038B95",
                    backgroundColor: "rgba(0, 173, 205, 0.1)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 15px rgba(0, 173, 205, 0.2)",
                  },
                  "&:active": {
                    transform: "translateY(0px)",
                  },
                }}
              >
                Franchise With Us!
              </Button>
            </Box>
          </Box>

          {/* Mobile Drawer Menu */}
          <Box sx={{ display: { xs: "block", lg: "none" } }}>
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="Open navigation menu"
              sx={{
                p: 1.5,
                borderRadius: "12px",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: "rgba(0, 173, 205, 0.1)",
                  transform: "scale(1.05)",
                },
                "&:active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              <MenuIcon sx={{ fontSize: "1.8rem", color: "#067C92" }} />
            </IconButton>
            <Backdrop
              open={mobileOpen}
              onClick={handleDrawerClose}
              sx={{
                zIndex: 1200,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(4px)",
              }}
            />
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerClose}
              PaperProps={{
                component: "nav",
                "aria-label": "Mobile navigation menu",
                sx: {
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  backdropFilter: "blur(20px)",
                },
              }}
              sx={{
                zIndex: 1300,
                "& .MuiDrawer-paper": {
                  width: { xs: "85vw", sm: "400px" },
                  maxWidth: "400px",
                  height: "100vh",
                  color: "#067C92",
                  padding: 0,
                  borderRadius: "20px 0 0 20px",
                  boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                },
              }}
              transitionDuration={300}
            >
              {/* Mobile Drawer Header */}
              <Box
                sx={{
                  p: 3,
                  pb: 2,
                  background:
                    "linear-gradient(135deg, #00ADCD 0%, #038B95 100%)",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/Fluffy Logo.svg"
                  alt="Fluffy Pet Wash Logo"
                  width={100}
                  height={32}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <IconButton
                  onClick={handleDrawerClose}
                  sx={{
                    color: "white",
                    p: 1,
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  overflow: "auto",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <List sx={{ px: 2, py: 2, flex: 1 }}>
                  {[
                    "Home",
                    "About",
                    "Services",
                    "Prices",
                    "Blog",
                    "Testimonials",
                    "FAQ",
                    "Contact",
                  ].map((item, index) => (
                    <Fade
                      in={mobileOpen}
                      timeout={300 + index * 50}
                      key={index}
                    >
                      <ListItem
                        sx={{
                          py: 1,
                          px: 2,
                          mb: 1,
                          borderRadius: "12px",
                          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            bgcolor: "rgba(0, 173, 205, 0.08)",
                            transform: "translateX(8px)",
                            boxShadow: "0 4px 12px rgba(0, 173, 205, 0.15)",
                          },
                        }}
                      >
                        <Link
                          href={
                            item === "Home" ? "/" : `/${item.toLowerCase()}`
                          }
                          style={{
                            textDecoration: "none",
                            color: "#067C92",
                            fontWeight: "600",
                            width: "100%",
                            display: "block",
                            fontSize: "1.1rem",
                          }}
                          onClick={handleDrawerClose}
                        >
                          <ListItemText
                            primary={item}
                            sx={{
                              textAlign: "left",
                              "& .MuiListItemText-primary": {
                                fontWeight: 600,
                                fontSize: "1.1rem",
                              },
                            }}
                          />
                        </Link>
                      </ListItem>
                    </Fade>
                  ))}
                </List>

                <Box
                  sx={{
                    px: 2,
                    pb: 3,
                    pt: 1,
                    borderTop: "1px solid rgba(6, 124, 146, 0.1)",
                    backgroundColor: "rgba(248, 249, 250, 0.5)",
                  }}
                >
                  <Fade in={mobileOpen} timeout={600}>
                    <Box sx={{ mb: 2 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        href="/prebook"
                        aria-label="Book grooming appointment"
                        onClick={handleDrawerClose}
                        sx={{
                          background:
                            "linear-gradient(135deg, #00ADCD 0%, #038B95 100%)",
                          color: "#fff",
                          fontWeight: 700,
                          borderRadius: "16px",
                          py: 1.5,
                          fontSize: "1rem",
                          textTransform: "none",
                          boxShadow: "0 6px 20px rgba(0, 173, 205, 0.3)",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #038B95 0%, #00ADCD 100%)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(0, 173, 205, 0.4)",
                          },
                        }}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </Fade>

                  <Fade in={mobileOpen} timeout={700}>
                    <Box>
                      <Button
                        fullWidth
                        variant="outlined"
                        href="https://franchise.fluffypetwash.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Franchise with Fluffy Pet Wash"
                        onClick={handleDrawerClose}
                        sx={{
                          borderColor: "#00ADCD",
                          color: "#00ADCD",
                          fontWeight: 600,
                          borderRadius: "16px",
                          py: 1.5,
                          fontSize: "1rem",
                          textTransform: "none",
                          borderWidth: "2px",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            borderColor: "#038B95",
                            backgroundColor: "rgba(0, 173, 205, 0.1)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 6px 20px rgba(0, 173, 205, 0.2)",
                          },
                        }}
                      >
                        Franchise With Us!
                      </Button>
                    </Box>
                  </Fade>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
