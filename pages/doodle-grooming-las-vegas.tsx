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
import { LAS_VEGAS_AREA_SERVED, LAS_VEGAS_POSTAL_ADDRESS } from "../data/serviceArea";

// SEO-20261005-08: Las Vegas doodle & poodle grooming landing page.
// Owner rule: visible copy names "Las Vegas" only. Sub-areas live in the meta
// description and in JSON-LD areaServed (data/serviceArea.ts) only.
// Owner confirmed Oct 5, 2026 that we groom poodles and doodles (pages/faq.tsx L72, PR #123).
// Pricing, owner Oct 8, 2026: large doodles start at $140 (prices.tsx Large Dogs,
// $140–$185). If a haircut or matting is needed, a specialized breed fee of up
// to $50 applies and already includes the haircut. A large doodle with a
// haircut is $140 + $50 = $190. The haircut add-on does not stack.

const SITE_URL = "https://www.fluffypetwash.com";
const PAGE_URL = `${SITE_URL}/doodle-grooming-las-vegas`;
const BOOKING_URL = "https://booking.moego.pet/ol/FLUFFYPETWASH/book";
const PHONE_DISPLAY = "702-508-6248";
const PHONE_TEL = "tel:+17025086248";
const EMAIL = "contact@fluffypetwash.com";

const TITLE = "Mobile Doodle Grooming Las Vegas | Fluffy Pet Wash";
const META_DESCRIPTION =
  "Mobile doodle & poodle grooming at your door in Las Vegas, Henderson & Summerlin. Brush out, bath and haircut in a climate-controlled van. Book online.";
const SOCIAL_DESCRIPTION =
  "Doodle and poodle grooming at your door in Las Vegas. One-on-one care in a climate-controlled spa van. Book online or call 702-508-6248.";
const OG_IMAGE = `${SITE_URL}/fluffy-circle.PNG`;

const brandColors = {
  dark: "#067C92",
  main: "#038B95",
  bright: "#00ADCD",
  light: "#A1E0E3",
};

// General coat-care education (not business claims). The poodle line follows
// data/posted.ts ("why-we-dont-shave": poodle hair grows continuously).
const coatTypes = [
  {
    title: "Curly coats",
    text: "Tight, poodle-like curls shed very little, but loose hair gets caught in the curls instead of falling out. That trapped hair is why curly coats can mat quickly.",
  },
  {
    title: "Wavy coats",
    text: "The classic shaggy doodle look. Wavy coats tangle most where something rubs: behind the ears, under the collar, in the armpits, and on the legs.",
  },
  {
    title: "Straight coats",
    text: "Flatter, retriever-style coats tend to shed more than curly ones, so a thorough brush out and de-shedding make the biggest difference.",
  },
  {
    title: "Poodles",
    text: "Poodle hair keeps growing, so standard, miniature, and toy poodles need regular trims to stay comfortable, clean, and easy to brush.",
  },
];

// Mirrors the "What's Included in Every Session" list in pages/prices.tsx (L75-L88).
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

// pages/prices.tsx L354–L356: Large Dogs $140–$185. L1242 and L1302–L1303: breed fee.
// Do not put +$35 or +$50 haircut add-ons back on this page.
const priceCards = [
  {
    price: "$140",
    label: "Large doodles",
    note: "Starting price",
  },
  {
    price: "Up to $50",
    label: "Specialized breed fee",
    note: "Includes the haircut. No separate haircut charge.",
  },
];

// General at-home advice, framed as tips (not Fluffy policies).
const brushingTips = [
  "Brush a few times a week, or daily for curly coats. Work in small sections and reach all the way down to the skin.",
  "Follow the brush with a metal comb. If the comb snags, there is still a tangle to work out.",
  "Give extra attention to friction spots: behind the ears, the collar line, armpits, legs, and tail.",
  "Dry your dog completely after baths and swims. Damp curls tighten into mats.",
  "Try not to bathe over mats, because water tends to tighten them. Brush first, or leave it to your groomer.",
];

// Visible FAQ and FAQPage JSON-LD both read from this array, so they always match.
const doodleFaqs = [
  {
    question: "Do you groom poodles and doodles?",
    answer:
      "Yes. We groom poodles and doodles, including Goldendoodles, Labradoodles, and Bernedoodles. Book online the same way you would for any other dog.",
  },
  {
    question: "How much does doodle grooming cost in Las Vegas?",
    answer:
      "Large doodles start at $140. If your doodle needs a haircut or has matting, a specialized breed fee of up to $50 applies, and that fee includes the haircut, so there's no separate haircut charge. Example: a large doodle with a haircut is $140 + $50 = $190 total. After your first appointment, Fluffy Preferred members save 10% on services.",
  },
  {
    question: "How often should my doodle be groomed?",
    answer:
      "Most dogs benefit from grooming every 4 to 6 weeks, but it varies by breed, coat type, and lifestyle. We'll give you a personalized recommendation. Brushing at home between visits helps prevent mats.",
  },
  {
    question: "Can you groom a matted doodle?",
    answer:
      "Every visit includes a brush out with de-tangling and mat removal. Full haircuts are subject to approval based on coat condition and matting level, so please tell us about any matting when you book. If a haircut is needed or the coat is matted, a specialized breed fee of up to $50 applies, and that fee includes the haircut.",
  },
  {
    question: "How long does a doodle grooming appointment take?",
    answer:
      "Visit length depends on your dog's size, coat condition, and behavior.",
  },
  {
    question: "How do I book mobile doodle grooming?",
    answer: `Book online through our booking page, or call or text ${PHONE_DISPLAY} between 7 AM and 10 PM, any day of the week. You'll receive an email after booking and a text once we accept your appointment. If you need to change or cancel, please let us know as early as you can.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Mobile Doodle & Poodle Grooming in Las Vegas",
      serviceType: "Doodle and poodle grooming",
      url: PAGE_URL,
      description:
        "Mobile doodle and poodle grooming at your door in Las Vegas: a one-on-one All-Inclusive Wash in a climate-controlled spa van, with optional full haircut and styling.",
      provider: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#fluffy`,
        name: "Fluffy Pet Wash",
        url: `${SITE_URL}/`,
        telephone: "+17025086248",
        address: LAS_VEGAS_POSTAL_ADDRESS,
      },
      areaServed: LAS_VEGAS_AREA_SERVED,
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: doodleFaqs.map((faq) => ({
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
          name: "Doodle & Poodle Grooming",
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

const DoodleGroomingLasVegasPage = () => {
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
              Doodle &amp; Poodle Grooming
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
            Mobile Doodle &amp; Poodle Grooming in Las Vegas
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
            Yes, we groom doodles and poodles. A professional groomer comes to
            your door in a climate-controlled spa van and gives your curly,
            wavy, or straight-coated dog calm, one-on-one care right outside
            your home.
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
              "Doodles & Poodles Welcome",
              "One-on-One Care",
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
              Book Doodle Grooming
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
          Fluffy Pet Wash offers doodle grooming in Las Vegas without the trip
          to a salon. Whether you have a Goldendoodle, Labradoodle,
          Bernedoodle, another doodle mix, or a standard, miniature, or toy
          poodle, you book online the same way as any other dog. Our van
          parks outside, and one groomer handles your dog from start to
          finish. No cages, no other animals, and no waiting for pickup.
        </Typography>
      </Container>

      {/* Coat types */}
      <Box sx={{ bgcolor: "#F8F9FA", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ ...sectionTitleSx, textAlign: "center" }}>
            Doodle and Poodle Coats We Groom
          </Typography>
          <Typography
            sx={{ ...bodySx, maxWidth: 800, mx: "auto", textAlign: "center", mb: 6 }}
          >
            Doodle coats vary, even within one litter. Knowing your dog&apos;s
            coat type tells you how it tangles and how much care it needs.
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {coatTypes.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
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
          What&apos;s Included in a Doodle Grooming Visit
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
          look? A full haircut and styling can be added to the wash, including
          a teddy bear cut or a puppy cut. The final cut is decided in person,
          between you and your groomer. Full haircuts are subject to approval
          based on coat condition and matting. See every step in detail on
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
            Doodle and Poodle Grooming Prices
          </Typography>
          <Typography
            sx={{ ...bodySx, maxWidth: 800, mx: "auto", textAlign: "center", mb: 5 }}
          >
            Large doodles start at $140. If your doodle needs a haircut or has
            matting, a specialized breed fee of up to $50 applies, and that
            fee includes the haircut, so there&apos;s no separate haircut
            charge. Example: a large doodle with a haircut is $140 + $50 =
            $190 total.
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
            After your first appointment, Fluffy Preferred members save 10%
            on services. See the wash price for each dog size on our{" "}
            <Link href="/prices" style={linkStyle}>
              prices page
            </Link>
            .
          </Typography>
        </Container>
      </Box>

      {/* Coat care */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h2" sx={{ ...sectionTitleSx, textAlign: "center" }}>
          Keeping Your Doodle&apos;s Coat Mat-Free
        </Typography>
        <Typography sx={{ ...bodySx, textAlign: "center", mb: 4 }}>
          Mats start close to the skin, where they are easy to miss. A few
          habits between appointments make every groom easier on your dog:
        </Typography>
        <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, mb: 5 }}>
          {brushingTips.map((tip) => (
            <Box
              component="li"
              key={tip}
              sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}
            >
              <CheckCircleIcon sx={{ color: brandColors.bright, fontSize: 22, mt: "3px" }} />
              <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                {tip}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          variant="h3"
          sx={{ fontSize: "1.4rem", fontWeight: 700, color: brandColors.dark, mb: 1.5 }}
        >
          How often should a doodle be groomed?
        </Typography>
        <Typography sx={bodySx}>
          Most dogs benefit from professional grooming every 4 to 6 weeks,
          though the right schedule depends on breed, coat type, and lifestyle.
          Your groomer will give you a personalized recommendation.
        </Typography>
      </Container>

      {/* FAQ */}
      <Box sx={{ bgcolor: "#F8F9FA", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ ...sectionTitleSx, textAlign: "center", mb: 5 }}>
            Doodle Grooming FAQ
          </Typography>
          {doodleFaqs.map((faq, index) => (
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
                aria-controls={`doodle-faq-${index}-content`}
                id={`doodle-faq-${index}-header`}
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
          Book Doodle Grooming in Las Vegas
        </Typography>
        <Typography sx={{ ...bodySx, mb: 4 }}>
          Ready for a fresh, tangle-free doodle without leaving home? Book
          online in a few minutes, or reach us directly.
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
          Book Doodle Grooming
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
          All breeds welcome. Grooming another breed? Start at the{" "}
          <Link href="/" style={linkStyle}>
            Fluffy Pet Wash homepage
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  );
};

export default DoodleGroomingLasVegasPage;
