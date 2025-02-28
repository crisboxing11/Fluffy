import { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

// FAQ Data
const faqData = [
  {
    category: "Booking & Scheduling",
    questions: [
      { 
        question: "How do I book an appointment?", 
        answer: "Simply visit our booking page, select your location and dog breed, and pick an available time slot. You'll receive a confirmation email after booking."
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