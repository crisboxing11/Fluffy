import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Container,
  Chip,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PaymentIcon from "@mui/icons-material/Payment";
import PetsIcon from "@mui/icons-material/Pets";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

// FAQ Data with enhanced categorization
const faqData = [
  {
    category: "Booking & Scheduling",
    icon: BookOnlineIcon,
    color: "#00ADCD",
    description: "Everything about appointments and scheduling",
    questions: [
      {
        question: "How do I book an appointment?",
        answer:
          "Simply visit our booking page, select your service area and dog breed and press the Confirm & Continue Booking button. This will take you to the actual booking and just simply follow the steps. You'll receive an email after booking and a text once we have accepted your booking.",
        tags: ["booking", "appointment", "schedule"],
      },
      {
        question: "Can I reschedule or cancel my appointment?",
        answer:
          "Yes! You can reschedule or cancel up to 24 hours in advance through your booking confirmation text or by contacting us directly.",
        tags: ["reschedule", "cancel", "change"],
      },
      {
        question: "Do you accept same-day bookings?",
        answer:
          "We operate by appointment only, but if there's an opening, we may accommodate same-day requests. Call or text us to check availability!",
        tags: ["same-day", "urgent", "availability"],
      },
    ],
  },
  {
    category: "Grooming & Services",
    icon: ContentCutIcon,
    color: "#0AC3E6",
    description: "Details about our grooming services and what's included",
    questions: [
      {
        question:
          "What should I look for in a mobile dog grooming service in Las Vegas?",
        answer:
          "Fluffy Pet Wash is a mobile grooming service that brings a one-on-one, climate-controlled spa van to your door anywhere in the Las Vegas valley. Every dog groom is all-inclusive: hypoallergenic wash, organic conditioner, brushing, blowout drying, nail trimming and filing, ear cleaning, teeth brushing, deshedding, paw and sanitary trims, and a blueberry facial. We're licensed and insured, open 7 AM–10 PM daily (closed Thanksgiving and Christmas), and you can book online.",
        tags: ["mobile grooming", "las vegas", "what to look for", "all-inclusive"],
      },
      {
        question: "What is included in the grooming package?",
        answer:
          "Our all-inclusive package includes a hypoallergenic wash, brushing, blowout drying, nail trimming & filing, ear cleaning, organic conditioner, teeth brushing, expressed glands, professional deshedding, paw trimming, sanitary trimming, and a blueberry facial.",
        tags: ["package", "services", "included", "wash", "nails"],
      },
      {
        question: "Do you groom all breeds?",
        answer:
          "Yes! We groom poodles and doodles, including doodle mixes. We service most breeds, so check our breed list before booking! Mobile cat grooming in Las Vegas is available at your door.",
        tags: ["breeds", "poodles", "doodles"],
      },
      {
        question: "Do you groom doodles, and how much does it cost?",
        answer:
          "Yes, we groom poodles, doodles and doodle mixes at your door in Las Vegas. As an example, a large doodle with a haircut is $190: the $140 large-dog groom plus a $50 specialized breed fee. That breed fee already includes the haircut, so the separate haircut add-on isn't charged on top. Coat condition and matting can change what's possible, so we confirm before we start.",
        tags: ["doodles", "poodles", "doodle price", "breed fee", "haircut"],
      },
      {
        question: "Is mobile grooming an eco-friendly option in Las Vegas?",
        answer:
          "Yes, Fluffy Pet Wash is an eco-friendly mobile grooming option in Las Vegas. We use biodegradable, plant-based products, including a hypoallergenic wash and organic conditioner. Because one van comes to you, you skip the car trip to a salon. The van carries its own water, so all we need from you is an electrical outlet. Questions about our products? Call 702-508-6248 or email contact@fluffypetwash.com.",
        tags: ["eco-friendly", "biodegradable", "plant-based", "organic conditioner", "hypoallergenic", "mobile"],
      },
      {
        question: "How long does a grooming session take?",
        answer:
          "A typical session takes between 40-90 minutes, depending on your pet's size, coat condition, and behavior.",
        tags: ["duration", "time", "session"],
      },
      {
        question:
          "Do you need to connect to water or electricity at my location?",
        answer:
          "Just to electricity! Our mobile grooming van is fully equipped with water, electricity, and all the tools needed for a complete grooming session.",
        tags: ["mobile", "van", "electricity", "water", "equipment"],
      },
    ],
  },
  {
    category: "Pricing & Payments",
    icon: PaymentIcon,
    color: "#038B95",
    description: "Information about costs and payment methods",
    questions: [
      {
        question: "How much does grooming cost?",
        answer:
          "Pricing varies by dog size and coat condition: Small ($85), Medium ($95-$125), Large ($140-$185), Extra Large ($200+). All services are included!",
        tags: ["pricing", "cost", "small", "medium", "large", "size"],
      },
      {
        question: "How should I compare mobile pet grooming prices in Las Vegas?",
        answer:
          "Compare the all-in price for your pet's size, not just the starting number. At Fluffy Pet Wash, an all-inclusive dog groom is $85 for small dogs, $95–$125 for medium, $140–$185 for large and $200+ for extra-large, with no travel fees in Las Vegas. Haircuts add $35 (small/medium) or $50 (large). Fluffy Preferred members save 10% after their first appointment.",
        tags: ["compare", "pricing", "travel fees", "fluffy preferred", "haircut"],
      },
      {
        question: "Do you offer mobile cat grooming, and what does it cost?",
        answer:
          "Yes. Mobile cat grooming starts at $120, and the final price can go up with coat condition and temperament. A lion cut is usually about $35 extra. Cat grooms take place in the same one-on-one, climate-controlled van at your home, so your cat stays close to home instead of riding in a carrier to a salon. Book online or call 702-508-6248.",
        tags: ["cats", "cat grooming", "lion cut", "cat price"],
      },
      {
        question: "Do you accept card, cash, or Zelle?",
        answer:
          "Yes. We accept card, cash, and Zelle. A 3.4% + 30¢ service charge applies to credit and debit cards. Cash and Zelle have no additional fees. No personal checks.",
        tags: ["payment", "credit card", "cash", "zelle", "methods"],
      },
      {
        question: "Are there any additional fees?",
        answer:
          "Our pricing is all-inclusive. However, heavily matted coats or extremely aggressive dogs may incur an additional handling fee.",
        tags: ["fees", "additional", "matted", "aggressive"],
      },
    ],
  },
  {
    category: "Pet Safety & Comfort",
    icon: PetsIcon,
    color: "#067C92",
    description: "Your pet's safety and well-being is our priority",
    questions: [
      {
        question: "Is mobile grooming safe for my pet?",
        answer:
          "Absolutely! Our mobile grooming van is climate-controlled, sanitized between appointments, and designed for a stress-free one-on-one experience.",
        tags: ["safety", "mobile", "sanitized", "climate"],
      },
      {
        question: "What if my pet is anxious or aggressive?",
        answer:
          "We use gentle handling techniques, but if your pet shows extreme distress or aggression, we may need to stop the session for safety reasons.",
        tags: ["anxious", "aggressive", "gentle", "handling"],
      },
      {
        question: "Do you sedate pets?",
        answer:
          "No, we do not sedate pets. If your pet requires sedation, please consult your veterinarian before scheduling a grooming session.",
        tags: ["sedation", "veterinarian", "medication"],
      },
    ],
  },
];

// Enhanced animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const FAQ_INLINE_LINK_STYLE = {
  color: "#00ADCD",
  fontWeight: 600,
  textDecoration: "none",
} as const;

const FAQ_INLINE_LINKS = [
  {
    phrase: "Mobile cat grooming in Las Vegas",
    href: "/cat-grooming-las-vegas",
  },
  {
    phrase: "doodles",
    href: "/doodle-grooming-las-vegas",
  },
] as const;

const DOODLE_GROOMING_URL =
  "https://www.fluffypetwash.com/doodle-grooming-las-vegas";

function renderFaqAnswer(answer: string): React.ReactNode {
  let earliest: { at: number; phrase: string; href: string } | null = null;
  for (const link of FAQ_INLINE_LINKS) {
    const at = answer.indexOf(link.phrase);
    if (at === -1) continue;
    if (!earliest || at < earliest.at) {
      earliest = { at, phrase: link.phrase, href: link.href };
    }
  }
  if (!earliest) return answer;
  return (
    <>
      {answer.slice(0, earliest.at)}
      <Link href={earliest.href} style={FAQ_INLINE_LINK_STYLE}>
        {earliest.phrase}
      </Link>
      {renderFaqAnswer(answer.slice(earliest.at + earliest.phrase.length))}
    </>
  );
}

function faqAnswerForJsonLd(question: string, answer: string) {
  if (question !== "Do you groom all breeds?") return answer;
  const phrase = "doodles";
  const at = answer.indexOf(phrase);
  if (at === -1) return answer;
  return `${answer.slice(0, at)}<a href="${DOODLE_GROOMING_URL}">${phrase}</a>${answer.slice(at + phrase.length)}`;
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const FAQPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(
    false,
  );

  // Enhanced search functionality
  const filteredFAQs = useMemo(() => {
    return faqData
      .map((section) => ({
        ...section,
        questions: section.questions.filter((q) => {
          const searchLower = search.toLowerCase();
          const matchesSearch =
            q.question.toLowerCase().includes(searchLower) ||
            q.answer.toLowerCase().includes(searchLower) ||
            q.tags.some((tag) => tag.toLowerCase().includes(searchLower));

          const matchesCategory =
            !selectedCategory || section.category === selectedCategory;

          return matchesSearch && matchesCategory;
        }),
      }))
      .filter((section) => section.questions.length > 0);
  }, [search, selectedCategory]);

  const clearSearch = () => {
    setSearch("");
    setSelectedCategory(null);
  };

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedAccordion(isExpanded ? panel : false);
    };

  const totalQuestions = faqData.reduce(
    (acc, section) => acc + section.questions.length,
    0,
  );
  const filteredQuestions = filteredFAQs.reduce(
    (acc, section) => acc + section.questions.length,
    0,
  );

  return (
    <Box sx={{ bgcolor: "#FAFAFA", minHeight: "100vh" }}>
      {/* SEO & Metadata */}
      <Head>
        <title>Mobile Pet Grooming FAQ | Fluffy Pet Wash</title>
        <meta
          name="description"
          content="Mobile dog grooming FAQ: booking, cancellations, pricing, breeds we groom & what we need at your home (just an outlet). Las Vegas, Henderson & Summerlin."
        />
        <meta
          name="keywords"
          content="dog grooming FAQ, mobile pet grooming questions, pet grooming pricing, dog grooming services"
        />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.fluffypetwash.com/faq" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Mobile Pet Grooming FAQ | Fluffy Pet Wash"
        />
        <meta
          property="og:description"
          content="How our mobile grooming works, policies & what to expect in Las Vegas, Henderson & Summerlin."
        />
        <meta
          property="og:image"
          content="https://www.fluffypetwash.com/fluffy-circle.PNG"
        />
        <meta property="og:image:alt" content="Fluffy Pet Wash Questions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fluffypetwash.com/faq" />
        <meta property="og:site_name" content="Fluffy Pet Wash" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile Pet Grooming FAQ | Fluffy Pet Wash"
        />
        <meta
          name="twitter:description"
          content="How our mobile grooming works, policies & what to expect in Las Vegas, Henderson & Summerlin."
        />
        <meta
          name="twitter:image"
          content="https://www.fluffypetwash.com/fluffy-circle.PNG"
        />
        <meta name="twitter:image:alt" content="Fluffy Pet Wash FAQ" />
        <meta name="twitter:site" content="@fluffypetwash" />
        <meta name="twitter:creator" content="@fluffypetwash" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqData.flatMap((section) =>
                section.questions.map((q) => ({
                  "@type": "Question",
                  name: q.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faqAnswerForJsonLd(q.question, q.answer),
                  },
                })),
              ),
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #93EDF0 0%, rgba(147, 237, 240, 0.8) 30%, rgba(255, 255, 255, 0.9) 70%, #FAFAFA 100%)",
          py: { xs: 8, sm: 10, md: 12 },
          px: { xs: 2, sm: 3, md: 4 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: "absolute",
            top: -50,
            right: -50,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 173, 205, 0.1) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(58, 139, 149, 0.08) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Box
              sx={{
                textAlign: "center",
                mb: 6,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(20px)",
                  px: 4,
                  py: 2,
                  borderRadius: "50px",
                  border: "1px solid rgba(147, 237, 240, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 173, 205, 0.1)",
                }}
              >
                <HelpOutlineIcon
                  sx={{ color: "#00ADCD", fontSize: { xs: 28, md: 36 } }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    background:
                      "linear-gradient(135deg, #067C92 0%, #00ADCD 50%, #0AC3E6 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Frequently Asked Questions
                </Typography>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  color: "#067C92",
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                  maxWidth: 800,
                  mx: "auto",
                  lineHeight: 1.4,
                }}
              >
                Everything you need to know about our premium mobile pet
                grooming services
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#038B95",
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                  maxWidth: 600,
                  mx: "auto",
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                Can&apos;t find what you&apos;re looking for?{" "}
                <Link
                  href="/contact"
                  style={{
                    color: "#00ADCD",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Contact us directly
                </Link>{" "}
                and we&apos;ll be happy to help!
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}
      >
        {/* Enhanced Search Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Card
            sx={{
              mb: 6,
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(147, 237, 240, 0.3)",
              borderRadius: { xs: "16px", sm: "20px", md: "24px" },
              boxShadow: "0 12px 40px rgba(0, 173, 205, 0.08)",
              overflow: "visible",
            }}
          >
            <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#067C92",
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
                    textAlign: "center",
                  }}
                >
                  Search {totalQuestions} Questions
                </Typography>

                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search questions, answers, or topics..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "#00ADCD" }} />
                      </InputAdornment>
                    ),
                    endAdornment: search && (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={clearSearch}
                          size="small"
                          sx={{ color: "#038B95" }}
                        >
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      "& fieldset": {
                        borderColor: "rgba(147, 237, 240, 0.5)",
                        borderWidth: 2,
                      },
                      "&:hover fieldset": {
                        borderColor: "#00ADCD",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#0AC3E6",
                        borderWidth: 2,
                      },
                    },
                  }}
                />
              </Box>

              {/* Category Filter Chips */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: "center",
                }}
              >
                <Chip
                  label="All Categories"
                  onClick={() => setSelectedCategory(null)}
                  variant={selectedCategory === null ? "filled" : "outlined"}
                  sx={{
                    borderRadius: "20px",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    backgroundColor:
                      selectedCategory === null ? "#00ADCD" : "transparent",
                    color: selectedCategory === null ? "white" : "#067C92",
                    borderColor: "#00ADCD",
                    "&:hover": {
                      backgroundColor:
                        selectedCategory === null
                          ? "#038B95"
                          : "rgba(0, 173, 205, 0.1)",
                    },
                  }}
                />
                {faqData.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <Chip
                      key={section.category}
                      icon={<IconComponent sx={{ fontSize: 16 }} />}
                      label={section.category}
                      onClick={() => setSelectedCategory(section.category)}
                      variant={
                        selectedCategory === section.category
                          ? "filled"
                          : "outlined"
                      }
                      sx={{
                        borderRadius: "20px",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        backgroundColor:
                          selectedCategory === section.category
                            ? section.color
                            : "transparent",
                        color:
                          selectedCategory === section.category
                            ? "white"
                            : section.color,
                        borderColor: section.color,
                        "&:hover": {
                          backgroundColor:
                            selectedCategory === section.category
                              ? section.color
                              : `${section.color}15`,
                        },
                      }}
                    />
                  );
                })}
              </Box>

              {/* Search Results Summary */}
              {(search || selectedCategory) && (
                <Box sx={{ mt: 3, textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#038B95",
                      fontWeight: 500,
                      background: "rgba(147, 237, 240, 0.1)",
                      px: 3,
                      py: 1,
                      borderRadius: "20px",
                      display: "inline-block",
                    }}
                  >
                    Showing {filteredQuestions} of {totalQuestions} questions
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Categories and Questions */}
        <AnimatePresence mode="wait">
          {filteredFAQs.length > 0 ? (
            <motion.div
              key="faq-content"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
            >
              <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                {filteredFAQs.map((section, sectionIndex) => {
                  const IconComponent = section.icon;
                  return (
                    <Grid item xs={12} key={sectionIndex}>
                      <motion.div variants={scaleIn}>
                        <Card
                          sx={{
                            background:
                              "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)",
                            backdropFilter: "blur(20px)",
                            border: `2px solid ${section.color}20`,
                            borderRadius: {
                              xs: "16px",
                              sm: "20px",
                              md: "24px",
                            },
                            boxShadow: `0 12px 40px ${section.color}10`,
                            overflow: "hidden",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                              transform: "translateY(-2px)",
                              boxShadow: `0 16px 50px ${section.color}15`,
                              borderColor: `${section.color}40`,
                            },
                          }}
                        >
                          {/* Category Header */}
                          <Box
                            sx={{
                              background: `linear-gradient(135deg, ${section.color} 0%, ${section.color}CC 100%)`,
                              p: { xs: 3, sm: 4 },
                              color: "white",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                mb: 1,
                              }}
                            >
                              <Box
                                sx={{
                                  width: { xs: 40, sm: 48 },
                                  height: { xs: 40, sm: 48 },
                                  borderRadius: "50%",
                                  background: "rgba(255, 255, 255, 0.2)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  backdropFilter: "blur(10px)",
                                }}
                              >
                                <IconComponent
                                  sx={{ fontSize: { xs: 20, sm: 24 } }}
                                />
                              </Box>
                              <Typography
                                variant="h5"
                                sx={{
                                  fontWeight: 800,
                                  fontSize: {
                                    xs: "1.3rem",
                                    sm: "1.5rem",
                                    md: "1.7rem",
                                  },
                                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                }}
                              >
                                {section.category}
                              </Typography>
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                opacity: 0.9,
                                fontSize: { xs: "0.9rem", sm: "1rem" },
                                fontWeight: 500,
                              }}
                            >
                              {section.description}
                            </Typography>
                          </Box>

                          {/* Questions */}
                          <CardContent sx={{ p: 0 }}>
                            {section.questions.map((faq, faqIndex) => {
                              const panelId = `${sectionIndex}-${faqIndex}`;
                              return (
                                <Accordion
                                  key={faqIndex}
                                  expanded={expandedAccordion === panelId}
                                  onChange={handleAccordionChange(panelId)}
                                  sx={{
                                    boxShadow: "none",
                                    border: "none",
                                    borderBottom:
                                      faqIndex < section.questions.length - 1
                                        ? `1px solid ${section.color}15`
                                        : "none",
                                    borderRadius: 0,
                                    "&:before": {
                                      display: "none",
                                    },
                                    "&.Mui-expanded": {
                                      margin: 0,
                                      background: `${section.color}05`,
                                    },
                                  }}
                                >
                                  <AccordionSummary
                                    expandIcon={
                                      <ExpandMoreIcon
                                        sx={{
                                          color: section.color,
                                          fontSize: 28,
                                          transition: "transform 0.3s ease",
                                        }}
                                      />
                                    }
                                    sx={{
                                      px: { xs: 3, sm: 4 },
                                      py: { xs: 2, sm: 2.5 },
                                      "&:hover": {
                                        background: `${section.color}08`,
                                      },
                                      "& .MuiAccordionSummary-content": {
                                        margin: "12px 0",
                                      },
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontWeight: 700,
                                        color: "#067C92",
                                        fontSize: {
                                          xs: "1rem",
                                          sm: "1.1rem",
                                          md: "1.2rem",
                                        },
                                        lineHeight: 1.4,
                                        pr: 2,
                                      }}
                                    >
                                      {faq.question}
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails
                                    sx={{
                                      px: { xs: 3, sm: 4 },
                                      pb: { xs: 3, sm: 4 },
                                      pt: 0,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        background: "rgba(255, 255, 255, 0.7)",
                                        borderRadius: "12px",
                                        p: { xs: 2.5, sm: 3 },
                                        border: `1px solid ${section.color}20`,
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          color: "#067C92",
                                          lineHeight: 1.7,
                                          fontSize: {
                                            xs: "0.95rem",
                                            sm: "1rem",
                                            md: "1.05rem",
                                          },
                                          fontWeight: 500,
                                          mb: 2,
                                        }}
                                      >
                                        {renderFaqAnswer(faq.answer)}
                                      </Typography>

                                      {/* Tags */}
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexWrap: "wrap",
                                          gap: 1,
                                        }}
                                      >
                                        {faq.tags.map((tag, tagIndex) => (
                                          <Chip
                                            key={tagIndex}
                                            label={tag}
                                            size="small"
                                            sx={{
                                              backgroundColor: `${section.color}15`,
                                              color: section.color,
                                              fontWeight: 600,
                                              fontSize: "0.75rem",
                                              borderRadius: "12px",
                                              height: 24,
                                            }}
                                          />
                                        ))}
                                      </Box>
                                    </Box>
                                  </AccordionDetails>
                                </Accordion>
                              );
                            })}
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Card
                sx={{
                  textAlign: "center",
                  p: { xs: 4, sm: 6, md: 8 },
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "2px solid rgba(147, 237, 240, 0.3)",
                  borderRadius: { xs: "16px", sm: "20px", md: "24px" },
                  boxShadow: "0 12px 40px rgba(0, 173, 205, 0.08)",
                }}
              >
                <HelpOutlineIcon
                  sx={{
                    fontSize: { xs: 48, sm: 64 },
                    color: "#93EDF0",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: "#067C92",
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: "1.3rem", sm: "1.5rem" },
                  }}
                >
                  No results found
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#038B95",
                    mb: 3,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    maxWidth: 400,
                    mx: "auto",
                  }}
                >
                  Try adjusting your search terms or browse all categories to
                  find what you&apos;re looking for.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link href="/contact" passHref legacyBehavior>
                    <Box
                      component="a"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        px: 3,
                        py: 1.5,
                        background:
                          "linear-gradient(135deg, #00ADCD 0%, #0AC3E6 100%)",
                        color: "white",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(0, 173, 205, 0.3)",
                        },
                      }}
                    >
                      Contact Us
                    </Box>
                  </Link>
                  <Box
                    component="button"
                    onClick={clearSearch}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      px: 3,
                      py: 1.5,
                      background: "transparent",
                      color: "#067C92",
                      border: "2px solid #067C92",
                      borderRadius: "25px",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "#067C92",
                        color: "white",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Clear Search
                  </Box>
                </Box>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card
            sx={{
              mt: { xs: 6, sm: 8 },
              background:
                "linear-gradient(135deg, #067C92 0%, #00ADCD 50%, #0AC3E6 100%)",
              color: "white",
              borderRadius: { xs: "16px", sm: "20px", md: "24px" },
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Background decoration */}
            <Box
              sx={{
                position: "absolute",
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
              }}
            />

            <CardContent
              sx={{
                textAlign: "center",
                p: { xs: 4, sm: 6, md: 8 },
                position: "relative",
                zIndex: 1,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem" },
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                Still Have Questions?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  opacity: 1,
                  color: "white",
                  maxWidth: 600,
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Our friendly team is here to help! Contact us directly or book
                your appointment to experience the Fluffy Pet Wash difference.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/prebook" passHref legacyBehavior>
                  <Box
                    component="a"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      px: 4,
                      py: 2,
                      background: "rgba(255, 255, 255, 0.95)",
                      color: "#067C92",
                      borderRadius: "30px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                        background: "white",
                      },
                    }}
                  >
                    Book Appointment
                  </Box>
                </Link>
                <Link href="/contact" passHref legacyBehavior>
                  <Box
                    component="a"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      px: 4,
                      py: 2,
                      background: "transparent",
                      color: "white",
                      border: "2px solid rgba(255, 255, 255, 0.8)",
                      borderRadius: "30px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.1)",
                        borderColor: "white",
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    Contact Us
                  </Box>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQPage;
