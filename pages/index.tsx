import { Box, Link, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Home from "../components/Home";

// Dynamically load the heavy booking form to keep the initial bundle small
const PreBookingForm = dynamic(() => import("../components/PreBookingForm"), {
  loading: () => (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Typography>Loading booking form...</Typography>
    </Box>
  ),
  ssr: false,
});

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { LAS_VEGAS_AREA_SERVED, LAS_VEGAS_POSTAL_ADDRESS } from "../data/serviceArea";
import { LAS_VEGAS_PHONE_DISPLAY, LAS_VEGAS_TEL_HREF } from "../lib/ads";

const HomePage = () => {
  const router = useRouter();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === "/") {
        setKey((prevKey) => prevKey + 1); // Force re-render of PreBookingForm
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Only run location check after component has mounted on client
    if (
      typeof window === "undefined" ||
      !router.isReady ||
      router.pathname !== "/"
    ) {
      return;
    }

    const checkLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) {
          console.warn("Location service unavailable");
          return;
        }
        const data = await res.json();
        const lat = parseFloat(data.latitude);
        const lon = parseFloat(data.longitude);
        const inOrlandoArea =
          data.region_code === "FL" &&
          !isNaN(lat) &&
          !isNaN(lon) &&
          lat >= 28 &&
          lat <= 29.2 &&
          lon >= -82 &&
          lon <= -80.5;
        if (inOrlandoArea && router.pathname !== "/orlando") {
          router.replace("/orlando");
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        // Silently handle fetch errors - location detection is optional
        console.warn(
          "Location detection failed:",
          e?.message || "Unknown error",
        );
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    const frameId = requestAnimationFrame(() => {
      checkLocation();
    });

    return () => cancelAnimationFrame(frameId);
  }, [router.isReady, router.pathname, router]);

  return (
    <Box>
      {/* 🔥 SEO & Metadata */}
      <Head>
        <title>Mobile Dog Grooming Las Vegas | Fluffy Pet Wash</title>
        <meta
          name="description"
          content="Stress-free mobile dog & cat grooming at your door across Las Vegas & Henderson. One-on-one spa van, licensed & insured. Book online — no upfront payment."
        />
        <meta
          name="keywords"
          content="Fluffy Pet Wash franchise, furryland, Zoomin Groomin, fluffy pet, mobile dog grooming near me, mobile pet grooming near me, pet grooming near me, dog wash near me, dog grooming, mobile dog grooming, dog grooming prices, mobile pet groomer, dog grooming at home, mobile dog grooming las vegas, mobile pet grooming las vegas, dog grooming las vegas, mobile dog groomer las vegas, mobile dog spa Las Vegas, dog groomer las vegas, dog groomer near me, cheap dogs, mobile dog grooming near me, purrfect grooming, mobile pet grooming, dog grooming orlando, mobile dog grooming orlando, mobile pet grooming orlando, mobile groomers near me, purrfect grooming mobile pet dog grooming orlando, mobile dog groomer near me, mobile dog wash near me, low maintenance dogs, pet mobile grooming, mobile pet grooming orlando fl, mobile grooming orlando, mobile grooming for dogs, grooming orlando, dog groomer orlando, mobile dog grooming orlando fl, pet grooming mobile near me, mobile groomers, groomers on orlando fl, dog wash home service, mobile pet bath, mobile dog wash for large dogs, mobile dog grooming henderson, mobile pet grooming henderson, dog grooming henderson"
        />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.fluffypetwash.com/" />
        {/* Favicon Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Mobile Dog Grooming Las Vegas | Fluffy Pet Wash"
        />
        <meta
          property="og:description"
          content="We come to you across Las Vegas, Henderson & Orlando. Climate-controlled spa van. Book online."
        />
        <meta
          property="og:image"
          content="https://www.fluffypetwash.com/fluffy-circle.PNG"
        />
        <meta property="og:image:alt" content="Fluffy Pet Wash Logo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fluffypetwash.com/" />
        <meta property="og:site_name" content="Fluffy Pet Wash" />
        <meta property="og:locale" content="en_US" />
        {/* ✅ Twitter Card Meta Tags (used by iMessage and Discord too) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile Dog Grooming Las Vegas | Fluffy Pet Wash"
        />
        <meta
          name="twitter:description"
          content="We come to you across Las Vegas, Henderson & Orlando. Climate-controlled spa van. Book online."
        />
        <meta
          name="twitter:image"
          content="https://www.fluffypetwash.com/fluffy-circle.PNG"
        />
        <meta name="twitter:image:alt" content="Fluffy Pet Wash Logo" />
        <meta name="twitter:site" content="@fluffypetwash" />
        <meta name="twitter:creator" content="@fluffypetwash" />
        {/* 🚀 Structured Data for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "PetGrooming"],
              "@id": "https://www.fluffypetwash.com/#fluffy",
              name: "Fluffy Pet Wash",
              url: "https://www.fluffypetwash.com/",
              description:
                "Stress-free mobile dog and cat grooming at your door across the Las Vegas Valley, including Henderson, Summerlin, and North Las Vegas, and in Orlando. One-on-one climate-controlled spa van. Licensed and insured.",
              logo: "https://www.fluffypetwash.com/fluffy-circle.PNG",
              image: "https://www.fluffypetwash.com/fluffy-circle.PNG",
              telephone: "+17025086248",
              paymentAccepted: "Card, Cash, Zelle",
              priceRange: "$$",
              address: LAS_VEGAS_POSTAL_ADDRESS,
              // SEO-20261005-05 (folded in): primary business geo = Las Vegas
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.1699,
                longitude: -115.1398,
              },
              areaServed: [
                ...LAS_VEGAS_AREA_SERVED,
                // Orlando market: unchanged (dual-market owner rule)
                {
                  "@type": "Place",
                  name: "Orlando, FL",
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "28.5383",
                    longitude: "-81.3792",
                  },
                },
              ],
              sameAs: [
                "https://www.facebook.com/fluffypetwash",
                "https://www.instagram.com/fluffypetwash",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "07:00",
                closes: "22:00",
              },
            }),
          }}
        />
      </Head>

      <Home />

      {/* 🏆 Redesigned Hero Booking Section */}
      <Box id="booking" sx={{ py: 6, px: 3, bgcolor: "#f9f9f9" }} key={key}>
        {/* Hero Header Section */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 50%, #038B95 100%)",
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            mb: 6,
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0, 173, 205, 0.15)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><pattern id=%22paw%22 x=%220%22 y=%220%22 width=%2220%22 height=%2220%22 patternUnits=%22userSpaceOnUse%22><circle cx=%2210%22 cy=%2210%22 r=%221%22 fill=%22rgba(255,255,255,0.1)%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23paw)%22/></svg>') repeat",
              opacity: 0.3,
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            {/* Main Title with Enhanced Typography */}
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontSize: { xs: "2.2rem", md: "3.5rem" },
                fontWeight: 800,
                color: "#FFFFFF",
                mb: 2,
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Fluffy Pet Wash
            </Typography>

            {/* Subtitle with Icon */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: { xs: 40, md: 50 },
                  height: 2,
                  bgcolor: "rgba(255,255,255,0.6)",
                  mr: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.4rem" },
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.95)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Mobile Pet Grooming & Spa
              </Typography>
              <Box
                sx={{
                  width: { xs: 40, md: 50 },
                  height: 2,
                  bgcolor: "rgba(255,255,255,0.6)",
                  ml: 2,
                }}
              />
            </Box>

            {/* Feature Pills */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                justifyContent: "center",
                mb: 4,
              }}
            >
              {[
                { icon: "🚐", text: "We Come To You" },
                { icon: "🏆", text: "Licensed & Insured" },
                { icon: "⭐", text: "5-Star Rated" },
                { icon: "🐕", text: "Dog Specialists" },
              ].map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)",
                    px: 2,
                    py: 1,
                    borderRadius: 20,
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <Typography sx={{ fontSize: "1.2rem" }}>
                    {feature.icon}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      fontSize: { xs: "0.8rem", md: "0.9rem" },
                    }}
                  >
                    {feature.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Booking CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
            position: "relative",
          }}
        >
          {/* Main CTA Title */}
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontWeight: 700,
              background: "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              letterSpacing: "-0.01em",
            }}
          >
            Book Your Appointment
          </Typography>

          {/* Enhanced Description */}
          <Box
            sx={{
              maxWidth: 600,
              mx: "auto",
              mb: 4,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#067C92",
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              Start by confirming your dog&apos;s eligibility for our premium
              mobile grooming services.
            </Typography>

            {/* Process Steps */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 2, md: 4 },
                justifyContent: "center",
                alignItems: "center",
                mt: 3,
              }}
            >
              {[
                { step: "1", text: "Select Location", icon: "📍" },
                { step: "2", text: "Choose Service", icon: "✨" },
                { step: "3", text: "Pick Time Slot", icon: "📅" },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "#00ADCD",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.step}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      color: "#038B95",
                      fontWeight: 500,
                    }}
                  >
                    {item.icon} {item.text}
                  </Typography>
                  {index < 2 && (
                    <Typography
                      sx={{
                        mx: { xs: 0, md: 2 },
                        color: "#00ADCD",
                        fontSize: "1.2rem",
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      →
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>

            <Typography
              component="p"
              sx={{
                maxWidth: "66ch",
                mx: "auto",
                mt: 3,
                mb: 0,
                textAlign: "left",
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#067C92",
                lineHeight: 1.65,
                textWrap: "pretty",
              }}
            >
              <strong>Why Fluffy Pet Wash?</strong> Your pet gets one-on-one
              grooming in our climate-controlled van, right outside your door
              anywhere in the Las Vegas valley, with no travel fees. We use a
              hypoallergenic wash, organic conditioner and biodegradable,
              plant-based products, and every dog groom includes the bath,
              blowout, nails and ears. Dogs start at $85, and we groom doodles
              and cats too. Open 7 AM–10 PM daily; call{" "}
              <Link
                href={LAS_VEGAS_TEL_HREF}
                color="inherit"
                underline="always"
                sx={{
                  fontWeight: "inherit",
                  textDecorationColor: "rgba(6, 124, 146, 0.55)",
                  textUnderlineOffset: "0.18em",
                  whiteSpace: "nowrap",
                  "&:visited": { color: "inherit" },
                  "&:hover": {
                    color: "#00ADCD",
                    textDecorationColor: "#00ADCD",
                  },
                  "&:focus-visible": {
                    outline: "3px solid #067C92",
                    outlineOffset: "3px",
                    borderRadius: "2px",
                  },
                }}
              >
                {LAS_VEGAS_PHONE_DISPLAY}
              </Link>.
            </Typography>
          </Box>

          {/* Trust Indicators */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              mb: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "#E8F5E8",
                px: 2,
                py: 1,
                borderRadius: 2,
                border: "1px solid #4CAF50",
              }}
            >
              <Typography sx={{ color: "#2E7D32", fontSize: "1.1rem" }}>
                ✓
              </Typography>
              <Typography
                sx={{ color: "#2E7D32", fontWeight: 600, fontSize: "0.9rem" }}
              >
                No Upfront Payment
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "#E3F2FD",
                px: 2,
                py: 1,
                borderRadius: 2,
                border: "1px solid #2196F3",
              }}
            >
              <Typography sx={{ color: "#1976D2", fontSize: "1.1rem" }}>
                🛡️
              </Typography>
              <Typography
                sx={{ color: "#1976D2", fontWeight: 600, fontSize: "0.9rem" }}
              >
                Fully Insured
              </Typography>
            </Box>
          </Box>
        </Box>

        <PreBookingForm />
      </Box>
    </Box>
  );
};

export default HomePage;
