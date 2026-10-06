import Head from "next/head";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { LAS_VEGAS_AREA_SERVED } from "../data/serviceArea";

// SEO-20261005-07: Las Vegas cat grooming landing page.
// Owner rule: visible copy names "Las Vegas" only. Sub-areas live in the meta
// description and in JSON-LD areaServed (data/serviceArea.ts) only.
// Every price and policy below comes from pages/prices.tsx, pages/faq.tsx,
// pages/services.tsx or pages/contact.tsx. Update this page if those change.

const SITE_URL = "https://www.fluffypetwash.com";
const PAGE_URL = `${SITE_URL}/cat-grooming-las-vegas`;
const BOOKING_URL = "https://booking.moego.pet/ol/FLUFFYPETWASH/book";
const PHONE_DISPLAY = "702-508-6248";
const PHONE_TEL = "tel:+17025086248";
const EMAIL = "contact@fluffypetwash.com";

const TITLE = "Mobile Cat Grooming Las Vegas | Fluffy Pet Wash";
const META_DESCRIPTION =
  "Mobile cat grooming at your door in Las Vegas, Henderson & Summerlin. One-on-one care in a climate-controlled van, starting at $120. Book online.";
const SOCIAL_DESCRIPTION =
  "Cat grooming at your door in Las Vegas. One-on-one care in a climate-controlled spa van, starting at $120. Book online or call 702-508-6248.";
const OG_IMAGE = `${SITE_URL}/fluffy-circle.PNG`;

const brandColors = {
  dark: "#067C92",
  main: "#038B95",
  bright: "#00ADCD",
  light: "#A1E0E3",
};

const whyMobile = [
  {
    title: "No car ride, no waiting room",
    text: "Your cat stays close to home. There is no drive across town, no lobby full of barking dogs, and no long wait at a salon before pickup.",
  },
  {
    title: "One cat, one groomer",
    text: "Your cat is the only animal in the van. The same groomer handles the whole visit from start to finish, with no cages and no other pets nearby.",
  },
  {
    title: "Climate-controlled and clean",
    text: "Our spa van is climate-controlled for Las Vegas weather and sanitized between appointments.",
  },
  {
    title: "Gentle, patient handling",
    text: "Our groomers use gentle handling, take breaks as needed, and never sedate. If a cat shows extreme distress or aggression, we may stop the session for safety.",
  },
  {
    title: "Back to normal right away",
    text: "When the visit is over, your cat goes straight back to their own space instead of riding home in a carrier.",
  },
];

// Mirrors the "What's Included in Every Session" list in pages/prices.tsx (L75-L88).
// Owner to confirm every item applies to cats (see ticket, owner question 1).
const included = [
  "Professional brush out",
  "Hypoallergenic wash with organic conditioner",
  "Towel and blow dry",
  "Nail trimming and filing",
  "Ear cleaning",
  "Teeth brushing and mouth wash",
  "Gland expression (optional)",
  "Professional de-shedding",
  "Paw cleaning and trimming",
  "Sanitary area trimming",
  "Facial treatment",
  "Final brush out",
];

// pages/prices.tsx: L384-L386 + L526 ($120 All-Inclusive Wash), L1280 ("starting at $120"),
// L544 (Cats haircut & styling +$35), L66-L70 / L562 / L1287 / L1306 ($105 member flat price).
const priceCards = [
  {
    price: "$120",
    label: "All-Inclusive Wash",
    note: "Starting price for cat grooming",
  },
  {
    price: "+$35",
    label: "Full haircut & styling",
    note: "Added to the wash price",
  },
  {
    price: "$105",
    label: "Fluffy Preferred members",
    note: "Flat price per cat visit for clients who groom at least every 6 weeks",
  },
];

const steps = [
  {
    title: "Book online",
    text: `Pick a time on our online booking page, or call or text ${PHONE_DISPLAY} between 7 AM and 10 PM. You'll get an email after booking and a text once we accept your appointment.`,
  },
  {
    title: "Get your cat ready",
    text: "Shortly before we arrive, keep your cat in a quiet room so they're easy to find. When you book, tell us about any matting, health concerns, or past grooming reactions.",
  },
  {
    title: "We park outside",
    text: "Our van arrives at your home with its own water supply and all the tools needed for a complete grooming session.",
  },
  {
    title: "One-on-one grooming",
    text: "One groomer cares for your cat in the van from start to finish. A typical session takes 40 to 90 minutes, depending on size, coat condition, and behavior.",
  },
  {
    title: "Straight back home",
    text: "Your cat returns to familiar surroundings as soon as the visit ends. Need to change plans? You can reschedule or cancel up to 24 hours in advance.",
  },
];

// Visible FAQ and FAQPage JSON-LD both read from this array, so they always match.
const catFaqs = [
  {
    question: "How much does cat grooming cost in Las Vegas?",
    answer:
      "Cat grooming starts at $120 for our All-Inclusive Wash. A full haircut and styling adds $35. Fluffy Preferred members, who groom at least every 6 weeks, pay a flat $105 per cat visit after their first full-price appointment. Cat pricing varies based on temperament and coat condition, and your exact price is confirmed when you book.",
  },
  {
    question: "What breeds of cats do you groom?",
    answer:
      "We groom cats of all breeds, including Persians, Maine Coons, Ragdolls, British Shorthairs, Siamese, and domestic shorthair and longhair cats.",
  },
  {
    question: "Do you sedate cats for grooming?",
    answer:
      "No. We do not sedate pets. If your cat needs sedation to be groomed, please talk with your veterinarian before booking.",
  },
  {
    question: "What if my cat is nervous or doesn't like being handled?",
    answer:
      "Our groomers use gentle handling and take breaks as needed, and your cat is the only animal in the van. If a cat shows extreme distress or aggression, we may stop the session for safety. Let us know about past grooming reactions when you book.",
  },
  {
    question: "How long does a cat grooming appointment take?",
    answer:
      "A typical session takes 40 to 90 minutes, depending on your cat's size, coat condition, and behavior.",
  },
  {
    question: "How do I book mobile cat grooming?",
    answer: `Book online through our booking page, or call or text ${PHONE_DISPLAY} between 7 AM and 10 PM, any day of the week. You'll receive an email after booking and a text once we accept your appointment. You can reschedule or cancel up to 24 hours in advance.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Mobile Cat Grooming in Las Vegas",
      serviceType: "Cat grooming",
      url: PAGE_URL,
      description:
        "Mobile cat grooming at your door in Las Vegas: a one-on-one All-Inclusive Wash in a climate-controlled spa van, with optional full haircut and styling.",
      provider: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#fluffy`,
        name: "Fluffy Pet Wash",
        url: `${SITE_URL}/`,
        telephone: "+17025086248",
      },
      areaServed: LAS_VEGAS_AREA_SERVED,
      offers: {
        "@type": "Offer",
        url: `${SITE_URL}/prices`,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 120,
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: catFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cat Grooming",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const linkStyle = {
  color: brandColors.main,
  fontWeight: 700,
  textDecoration: "underline",
};

const sectionTitleSx = {
  fontSize: { xs: "1.8rem", md: "2.4rem" },
  fontWeight: 700,
  color: brandColors.dark,
  mb: 2,
};

const bodySx = {
  color: "text.secondary",
  fontSize: { xs: "1rem", md: "1.1rem" },
  lineHeight: 1.7,
};

const CatGroomingLasVegasPage = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff" }}>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={SOCIAL_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Fluffy Pet Wash logo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="Fluffy Pet Wash" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={SOCIAL_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Fluffy Pet Wash logo" />

        {/* Structured Data: Service + FAQPage + BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Hero */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #00ADCD 0%, #038B95 50%, #067C92 100%)",
          color: "white",
          pt: { xs: 12, md: 14 },
          pb: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Box
            component="nav"
            aria-label="Breadcrumb"
            sx={{ mb: 3, fontSize: "0.95rem", color: brandColors.light }}
          >
            <Link href="/" style={{ color: "white", textDecoration: "underline" }}>
              Home
            </Link>
            <Box component="span" sx={{ mx: 1 }} aria-hidden="true">
              /
            </Box>
            <Box component="span" aria-current="page">
              Cat Grooming
            </Box>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.4rem", md: "3.8rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 3,
              textShadow: "2px 2px 8px rgba(0,0,0,0.25)",
            }}
          >
            Mobile Cat Grooming in Las Vegas
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.15rem", md: "1.4rem" },
              color: "rgba(255,255,255,0.95)",
              maxWidth: 760,
              mx: "auto",
              mb: 4,
            }}
          >
            A professional cat groomer comes to your door in a climate-controlled
            spa van, so your cat skips the car ride and the busy salon and gets
            calm, one-on-one care right outside your home.
          </Typography>

          <Stack
            direction="row"
            spacing={1.5}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
            sx={{ mb: 4 }}
          >
            {[
              "One-on-One Care",
              "Climate-Controlled Van",
              "Licensed & Insured",
              "Open 7 AM–10 PM Daily",
            ].map((label) => (
              <Chip
                key={label}
                label={label}
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: 600,
                }}
              />
            ))}
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              size="large"
              href={BOOKING_URL}
              sx={{
                bgcolor: "white",
                color: brandColors.main,
                px: 5,
                py: 1.75,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderRadius: "50px",
                textTransform: "none",
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              Book Cat Grooming
            </Button>
            <Button
              variant="outlined"
              size="large"
              href={PHONE_TEL}
              startIcon={<PhoneIcon />}
              sx={{
                borderColor: "white",
                borderWidth: "2px",
                color: "white",
                px: 5,
                py: 1.75,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: "50px",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.15)",
                  borderColor: brandColors.light,
                },
              }}
            >
              Call {PHONE_DISPLAY}
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Intro */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography sx={bodySx}>
          Fluffy Pet Wash brings cat grooming at home to Las Vegas. Instead of
          loading your cat into the car and leaving them at a salon, you book a
          time, our van parks outside, and your cat gets a full spa visit with
          one groomer from start to finish. We groom cats of all breeds, from
          short-coated domestic cats to long-haired Persians and Maine Coons.
        </Typography>
      </Container>

      {/* Why mobile */}
      <Box sx={{ bgcolor: "#F8F9FA", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ ...sectionTitleSx, textAlign: "center" }}>
            Why Mobile Grooming Is Easier on Cats
          </Typography>
          <Typography
            sx={{ ...bodySx, maxWidth: 800, mx: "auto", textAlign: "center", mb: 6 }}
          >
            Cats are creatures of territory and routine. A car ride, a strange
            building, the smell of other animals, and the sound of barking dogs
            can turn a simple bath into a stressful day. Mobile grooming removes
            most of those triggers.
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {whyMobile.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: "20px",
                    borderTop: `4px solid ${brandColors.bright}`,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: brandColors.dark,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* What's included */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h2" sx={{ ...sectionTitleSx, textAlign: "center" }}>
          What&apos;s Included in a Cat Grooming Visit
        </Typography>
        <Typography
          sx={{ ...bodySx, maxWidth: 800, mx: "auto", textAlign: "center", mb: 5 }}
        >
          Every visit is our All-Inclusive Wash. Your groomer works through the
          same full checklist we use for every session:
        </Typography>
        <Paper
          elevation={4}
          sx={{ p: { xs: 3, md: 4 }, borderRadius: "20px", bgcolor: "#f8f9fa", maxWidth: 900, mx: "auto" }}
        >
          <Grid container spacing={2} component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
            {included.map((service) => (
              <Grid item xs={12} sm={6} key={service} component="li">
                <Box display="flex" alignItems="center" gap={2} py={0.5}>
                  <CheckCircleIcon sx={{ color: brandColors.main, fontSize: 20 }} />
                  <Typography sx={{ color: brandColors.dark }}>{service}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
        <Typography sx={{ ...bodySx, maxWidth: 800, mx: "auto", mt: 5 }}>
          The brush out includes de-tangling and mat removal. Want a shorter
          style? A full haircut and styling can be added to the wash. Full
          haircuts depend on coat condition and matting, so your groomer will
          confirm what&apos;s possible for your cat. See every step in detail on
          our{" "}
          <Link href="/services" style={linkStyle}>
            grooming services page
          </Link>
          .
        </Typography>
      </Container>

      {/* Prices */}
      <Box sx={{ bgcolor: "#F8F9FA", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ ...sectionTitleSx, textAlign: "center" }}>
            Cat Grooming Prices
          </Typography>
          <Typography
            sx={{ ...bodySx, maxWidth: 800, mx: "auto", textAlign: "center", mb: 5 }}
          >
            Cat grooming starts at $120 for the All-Inclusive Wash. Clients who
            groom at least every 6 weeks can join Fluffy Preferred. Membership
            opens after your first appointment, which is always full price.
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {priceCards.map((card) => (
              <Grid item xs={12} md={4} key={card.label}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: "100%",
                    textAlign: "center",
                    borderRadius: "20px",
                    border: `2px solid ${brandColors.light}`,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "2.4rem", fontWeight: 800, color: brandColors.main }}
                  >
                    {card.price}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "1.2rem", fontWeight: 700, color: brandColors.dark, mb: 1 }}
                  >
                    {card.label}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>{card.note}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Typography
            sx={{ ...bodySx, maxWidth: 800, mx: "auto", textAlign: "center", mt: 5 }}
          >
            Cat pricing varies based on temperament and coat condition, and your
            exact price is confirmed when you book. Compare every service on our{" "}
            <Link href="/prices" style={linkStyle}>
              prices page
            </Link>
            .
          </Typography>
        </Container>
      </Box>

      {/* How it works */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h2" sx={{ ...sectionTitleSx, textAlign: "center", mb: 5 }}>
          How a Mobile Cat Grooming Visit Works
        </Typography>
        <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0 }}>
          {steps.map((step, index) => (
            <Box
              component="li"
              key={step.title}
              sx={{ display: "flex", gap: 3, alignItems: "flex-start", mb: 4 }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  bgcolor: brandColors.bright,
                  color: "white",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {index + 1}
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "1.2rem", fontWeight: 700, color: brandColors.dark, mb: 0.5 }}
                >
                  {step.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  {step.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* FAQ */}
      <Box sx={{ bgcolor: "#F8F9FA", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ ...sectionTitleSx, textAlign: "center", mb: 5 }}>
            Cat Grooming FAQ
          </Typography>
          {catFaqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              disableGutters
              sx={{
                mb: 2,
                borderRadius: "12px !important",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: brandColors.main }} />}
                aria-controls={`cat-faq-${index}-content`}
                id={`cat-faq-${index}-header`}
              >
                {/* MUI v6 Accordion already wraps the summary in an <h3>. */}
                <Typography
                  component="span"
                  sx={{ fontWeight: 700, color: brandColors.dark, fontSize: "1.05rem" }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          <Typography sx={{ ...bodySx, textAlign: "center", mt: 4 }}>
            Have a question about booking, payment, or our van? Visit our{" "}
            <Link href="/faq" style={linkStyle}>
              full FAQ
            </Link>
            .
          </Typography>
        </Container>
      </Box>

      {/* Final CTA */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}>
        <Typography variant="h2" sx={sectionTitleSx}>
          Book Cat Grooming in Las Vegas
        </Typography>
        <Typography sx={{ ...bodySx, mb: 4 }}>
          Ready to skip the drive to the groomer? Book online in a few
          minutes, or reach us directly.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href={BOOKING_URL}
          sx={{
            background: "linear-gradient(135deg, #00ADCD 0%, #038B95 100%)",
            color: "#fff",
            px: 6,
            py: 1.75,
            fontSize: "1.1rem",
            fontWeight: 700,
            borderRadius: "50px",
            textTransform: "none",
            mb: 4,
          }}
        >
          Book Cat Grooming
        </Button>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.5, sm: 4 }}
          justifyContent="center"
          alignItems="center"
          sx={{ color: brandColors.dark, mb: 4 }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <PhoneIcon fontSize="small" />
            <a href={PHONE_TEL} style={{ color: brandColors.dark, fontWeight: 600 }}>
              {PHONE_DISPLAY}
            </a>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <EmailIcon fontSize="small" />
            <a href={`mailto:${EMAIL}`} style={{ color: brandColors.dark, fontWeight: 600 }}>
              {EMAIL}
            </a>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <AccessTimeIcon fontSize="small" />
            <Typography component="span" sx={{ fontWeight: 600 }}>
              7 AM–10 PM daily
            </Typography>
          </Box>
        </Stack>
        <Typography sx={{ color: "text.secondary" }}>
          Grooming a dog too? Start at the{" "}
          <Link href="/" style={linkStyle}>
            Fluffy Pet Wash homepage
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  );
};

export default CatGroomingLasVegasPage;
