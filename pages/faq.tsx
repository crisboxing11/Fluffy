import { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import Head from 'next/head';


// FAQ Data
const faqData = [
  {
    category: "Booking & Scheduling",
    questions: [
      { 
        question: "How do I book an appointment?", 
        answer: "Simply visit our booking page, select your service area and dog breed and press the Confirm & Continue Booking button. This will take you to the actual booking and just simply follow the steps. You'll receive an email after booking and a text once we have accepted your booking."
      },
      { 
        question: "Can I reschedule or cancel my appointment?", 
        answer: "Yes! You can reschedule or cancel up to 24 hours in advance through your booking confirmation text or by contacting us directly."
      },
      { 
        question: "Do you accept same-day bookings?", 
        answer: "We operate by appointment only, but if there's an opening, we may accommodate same-day requests. Call or text us to check availability!"
      },
    ],
  },
  {
    category: "Grooming & Services",
    questions: [
      { 
        question: "What is included in the grooming package?", 
        answer: "Our all-inclusive package includes a hypoallergenic wash, brushing, blowout drying, nail trimming & filing, ear cleaning, organic conditioner, teeth brushing, expressed glands, professional deshedding, paw trimming, sanitary trimming, and a blueberry facial."
      },
      { 
        question: "Do you groom all breeds?", 
        answer: "We service most breeds, but we do not groom poodles or doodle mixes. Check our breed list before booking!"
      },
      { 
        question: "How long does a grooming session take?", 
        answer: "A typical session takes between 40-90 minutes, depending on your pet’s size, coat condition, and behavior."
      },
       { 
        question: "Do you need to connect to water or electricity at my location?", 
        answer: "Just to electricity! Our mobile grooming van is fully equipped with water, electricity, and all the tools needed for a complete grooming session."
      },
      
    ],
  },
  {
    category: "Pricing & Payments",
    questions: [
      { 
        question: "How much does grooming cost?", 
        answer: "Pricing varies by dog size and coat condition: Small ($85), Medium ($95-$125), Large ($140-$185), Extra Large ($200+). All services are included!"
      },
      { 
        question: "Do you accept credit cards or cash?", 
        answer: "Yes! We accept all major credit/debit cards and cash payments. No personal checks."
      },
      { 
        question: "Are there any additional fees?", 
        answer: "Our pricing is all-inclusive. However, heavily matted coats or extremely aggressive dogs may incur an additional handling fee."
      },
    ],
  },
  {
    category: "Pet Safety & Comfort",
    questions: [
      { 
        question: "Is mobile grooming safe for my pet?", 
        answer: "Absolutely! Our mobile grooming van is climate-controlled, sanitized between appointments, and designed for a stress-free one-on-one experience."
      },
      { 
        question: "What if my pet is anxious or aggressive?", 
        answer: "We use gentle handling techniques, but if your pet shows extreme distress or aggression, we may need to stop the session for safety reasons."
      },
      { 
        question: "Do you sedate pets?", 
        answer: "No, we do not sedate pets. If your pet requires sedation, please consult your veterinarian before scheduling a grooming session."
      },
    ],
  },
];

// Motion Animation for FAQ
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const FAQPage = () => {
  const [search, setSearch] = useState("");

  const filteredFAQs = faqData.map((section) => ({
    ...section,
    questions: section.questions.filter((q) =>
      q.question.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((section) => section.questions.length > 0);
  

  return (
    <Box sx={{ py: 6, px: { xs: 3, md: 6 }, maxWidth: 900, mx: "auto", textAlign: "center" }}>
       {/* 🔥 SEO & Metadata */}
     <Head>
  {/* Page Title & Meta */}
  <title>FAQ | Fluffy Pet Wash</title>
  <meta name="description" content="Find answers to common questions about Fluffy Pet Wash, including pricing, booking, grooming services, and pet safety." />
  <meta name="keywords" content="dog grooming FAQ, mobile pet grooming questions, pet grooming pricing, dog grooming services" />
  <meta name="author" content="Fluffy Pet Wash" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://fluffypetwash.com/faq" />

  {/* Favicon */}
  <link rel="icon" href="/fluffycon.ico" />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="FAQ | Fluffy Pet Wash" />
  <meta property="og:description" content="Answers to all your pet grooming questions – from pricing and services to safety and scheduling." />
  <meta property="og:image" content="https://fluffypetwash.com/fluffy-circle.png" />
  <meta property="og:image:alt" content="Fluffy Pet Wash Questions" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://fluffypetwash.com/faq" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="FAQ | Fluffy Pet Wash" />
  <meta name="twitter:description" content="Answers to all your pet grooming questions – from pricing and services to safety and scheduling." />
  <meta name="twitter:image" content="https://fluffypetwash.com/fluffy-circle.png" />

  {/* FAQ Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.flatMap(section =>
          section.questions.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        )
      })
    }}
  />
</Head>

      {/* Title */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Typography variant="h3" fontWeight="bold" color="#067C92" mb={3}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={4}>
          Need help? Find answers to the most common questions about our services, pricing, and pet care.
        </Typography>
      </motion.div>

      {/* Search Bar */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for a question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            mb: 4,
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
            }
          }}
        />
      </motion.div>

      {/* FAQ Sections */}
      {filteredFAQs.map((section, sectionIndex) => (
        <motion.div key={sectionIndex} initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <Typography variant="h5" fontWeight="bold" color="#038B95" mt={4} mb={2}>
            {section.category}
          </Typography>
          <Divider sx={{ mb: 2, bgcolor: "#038B95", opacity: 0.5 }} />
          
          {section.questions.map((faq, faqIndex) => (
            <Accordion key={faqIndex} sx={{ mb: 2, boxShadow: 3, borderRadius: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#038B95" }} />}>
                <Typography fontWeight="bold">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </motion.div>
      ))}

      {/* No Results */}
      {filteredFAQs.length === 0 && (
        <Typography variant="h6" color="error" mt={4}>
          No results found. Try searching for something else.
        </Typography>
      )}
    </Box>
  );
};

export default FAQPage;