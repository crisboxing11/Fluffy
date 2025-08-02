import { Box, Typography, Chip, Button } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

const PreBookingForm = dynamic(() => import("../components/PreBookingForm"), {
  loading: () => (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Typography>Loading booking form...</Typography>
    </Box>
  ),
  ssr: false,
});

const PrebookPage = () => {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById("booking-form");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Box
      sx={{ bgcolor: "#ffffff" }}
      role="main"
      aria-label="Book appointment page"
    >
      <Head>
        <title>Book Mobile Pet Grooming Appointment | Fluffy Pet Wash</title>
        <meta
          name="description"
          content="Book your mobile pet grooming appointment in 1 minute. Premium dog grooming service that comes to you. Licensed, insured professionals. No upfront payment required."
        />
        <meta
          name="keywords"
          content="mobile pet grooming, dog grooming appointment, pet grooming booking, mobile dog wash, professional pet grooming, licensed pet groomer"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.fluffypetwash.com/prebook"
        />
        <meta
          property="og:title"
          content="Book Mobile Pet Grooming Appointment | Fluffy Pet Wash"
        />
        <meta
          property="og:description"
          content="Book your mobile pet grooming appointment in 1 minute. Premium dog grooming service that comes to you. Licensed, insured professionals."
        />
        <meta
          property="og:image"
          content="https://www.fluffypetwash.com/Fluffy%20Pet%20Wash%20LOGO%20V3.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Fluffy Pet Wash - Mobile Pet Grooming Service"
        />
        <meta property="og:site_name" content="Fluffy Pet Wash" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.fluffypetwash.com/prebook"
        />
        <meta
          name="twitter:title"
          content="Book Mobile Pet Grooming Appointment | Fluffy Pet Wash"
        />
        <meta
          name="twitter:description"
          content="Book your mobile pet grooming appointment in 1 minute. Premium dog grooming service that comes to you. Licensed, insured professionals."
        />
        <meta
          name="twitter:image"
          content="https://www.fluffypetwash.com/Fluffy%20Pet%20Wash%20LOGO%20V3.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Fluffy Pet Wash - Mobile Pet Grooming Service"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#00ADCD" />
        <meta name="msapplication-TileColor" content="#00ADCD" />
        <meta name="application-name" content="Fluffy Pet Wash" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.fluffypetwash.com/prebook" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.fluffypetwash.com/#business",
              name: "Fluffy Pet Wash",
              description:
                "Premium mobile pet grooming service that comes to your location. Professional dog grooming with licensed and insured groomers.",
              url: "https://www.fluffypetwash.com",
              telephone: "+1-XXX-XXX-XXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Orlando",
                addressRegion: "FL",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.5383",
                longitude: "-81.3792",
              },
              openingHours: "Mo-Su 08:00-18:00",
              priceRange: "$",
              image:
                "https://www.fluffypetwash.com/Fluffy%20Pet%20Wash%20LOGO%20V3.jpg",
              logo: "https://www.fluffypetwash.com/Fluffy%20Pet%20Wash%20LOGO%20V3.jpg",
              sameAs: [
                "https://www.facebook.com/fluffypetwash",
                "https://www.instagram.com/fluffypetwash",
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "28.5383",
                  longitude: "-81.3792",
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Pet Grooming Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile Dog Grooming",
                      description:
                        "Complete mobile dog grooming service at your location",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Structured Data - WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.fluffypetwash.com/prebook#webpage",
              url: "https://www.fluffypetwash.com/prebook",
              name: "Book Mobile Pet Grooming Appointment | Fluffy Pet Wash",
              description:
                "Book your mobile pet grooming appointment in 1 minute. Premium dog grooming service that comes to you. Licensed, insured professionals.",
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.fluffypetwash.com/#website",
                name: "Fluffy Pet Wash",
                url: "https://www.fluffypetwash.com",
              },
              about: {
                "@type": "Service",
                name: "Mobile Pet Grooming Booking",
                description:
                  "Online booking system for mobile pet grooming appointments",
              },
              mainEntity: {
                "@type": "Service",
                name: "Mobile Pet Grooming",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Fluffy Pet Wash",
                },
              },
            }),
          }}
        />

        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.fluffypetwash.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Book Appointment",
                  item: "https://www.fluffypetwash.com/prebook",
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Streamlined Hero Section */}
      <Box
        component="section"
        aria-labelledby="hero-heading"
        sx={{
          background:
            "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 50%, #038B95 100%)",
          py: { xs: 4, md: 6 },
          px: { xs: 3, md: 6 },
          pt: { xs: 6, md: 8 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          <Typography
            id="hero-heading"
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              fontWeight: 800,
              color: "#FFFFFF",
              mb: 2,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Book in 1 Minute
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              fontWeight: 400,
              color: "rgba(255,255,255,0.95)",
              mb: 4,
              lineHeight: 1.5,
            }}
          >
            Premium mobile grooming • We come to you • No upfront payment
          </Typography>

          {/* Quick Action Button */}
          <Button
            onClick={scrollToBooking}
            variant="contained"
            size="large"
            aria-label="Scroll to booking form to start appointment booking"
            sx={{
              bgcolor: "rgba(255,255,255,0.9)",
              color: "#00ADCD",
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", md: "1.2rem" },
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 2 },
              borderRadius: 3,
              textTransform: "none",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              "&:hover": {
                bgcolor: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Start Booking Now ↓
          </Button>
        </Box>
      </Box>

      {/* Simplified Content Section */}
      <Box
        component="section"
        sx={{ py: { xs: 4, md: 6 }, px: { xs: 3, md: 6 } }}
      >
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          {/* Quick Benefits - Above the fold */}
          <Box
            component="section"
            aria-labelledby="benefits-heading"
            sx={{ mb: 6, textAlign: "center" }}
          >
            <Typography
              id="benefits-heading"
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "1.6rem", md: "2rem" },
                fontWeight: 700,
                background: "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3,
              }}
            >
              Why Choose Fluffy Pet Wash?
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 3,
                mb: 4,
              }}
            >
              {[
                {
                  icon: "📅",
                  title: "Guaranteed Times",
                  desc: "Book your preferred time slot",
                },
                {
                  icon: "🚐",
                  title: "We Come to You",
                  desc: "No travel, no waiting rooms",
                },
                {
                  icon: "⭐",
                  title: "5-Star Service",
                  desc: "Licensed, insured professionals",
                },
              ].map((benefit, index) => (
                <Box
                  key={index}
                  sx={{
                    bgcolor: "#f8f9fa",
                    p: 3,
                    borderRadius: 3,
                    textAlign: "center",
                    border: "2px solid transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#00ADCD",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "2.5rem", mb: 1 }}>
                    {benefit.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#067C92",
                      mb: 1,
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      color: "#666",
                    }}
                  >
                    {benefit.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Trust Indicators - Moved up for visibility */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              mb: 6,
            }}
          >
            <Chip
              icon={<Typography sx={{ fontSize: "1.1rem" }}>✓</Typography>}
              label="No Upfront Payment"
              sx={{
                bgcolor: "#E8F5E8",
                color: "#2E7D32",
                fontWeight: 600,
                fontSize: "1rem",
                px: 1,
                py: 2,
                height: "auto",
                border: "2px solid #4CAF50",
                "& .MuiChip-icon": { color: "#2E7D32" },
              }}
            />
            <Chip
              icon={<Typography sx={{ fontSize: "1.1rem" }}>🛡️</Typography>}
              label="Fully Insured"
              sx={{
                bgcolor: "#E3F2FD",
                color: "#1976D2",
                fontWeight: 600,
                fontSize: "1rem",
                px: 1,
                py: 2,
                height: "auto",
                border: "2px solid #2196F3",
              }}
            />
            <Chip
              icon={<Typography sx={{ fontSize: "1.1rem" }}>⚡</Typography>}
              label="Same Day Available"
              sx={{
                bgcolor: "#FFF3E0",
                color: "#F57C00",
                fontWeight: 600,
                fontSize: "1rem",
                px: 1,
                py: 2,
                height: "auto",
                border: "2px solid #FF9800",
              }}
            />
          </Box>

          {/* Booking Form - Main Focus */}
          <Box
            component="section"
            id="booking-form"
            aria-labelledby="booking-heading"
            sx={{ mb: 6 }}
          >
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                id="booking-heading"
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.4rem" },
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                Select Your Location
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "#067C92",
                  maxWidth: 500,
                  mx: "auto",
                }}
              >
                Choose your area to see available appointment times
              </Typography>
            </Box>
            <PreBookingForm />
          </Box>

          {/* Condensed Information Section */}
          <Box
            component="section"
            aria-labelledby="questions-heading"
            sx={{
              bgcolor: "#f8f9fa",
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: "1px solid #e9ecef",
              textAlign: "center",
            }}
          >
            <Typography
              id="questions-heading"
              variant="h3"
              component="h3"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.4rem" },
                fontWeight: 600,
                color: "#067C92",
                mb: 2,
              }}
            >
              Questions? We&apos;ve Got Answers
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", md: "1rem" },
                color: "#666",
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Check our{" "}
              <Link
                href="/services"
                style={{
                  color: "#038B95",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                services
              </Link>
              ,{" "}
              <Link
                href="/prices"
                style={{
                  color: "#038B95",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                pricing
              </Link>
              , or{" "}
              <Link
                href="/faq"
                style={{
                  color: "#038B95",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                FAQ
              </Link>{" "}
              pages for details, or{" "}
              <Link
                href="/contact"
                style={{
                  color: "#038B95",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                contact us
              </Link>{" "}
              directly.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PrebookPage;
