import { Box, Typography, Grid, Button, IconButton, TextField, TextareaAutosize } from '@mui/material';
import { motion } from 'framer-motion';

import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import Head from 'next/head';

// **Animations**
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill out all fields.');
      return;
    }
    setError('');
    alert('Your message has been sent! We will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ py: 6, px: { xs: 3, md: 6 }, maxWidth: 1000, mx: 'auto', textAlign: 'center' }}>
       {/* 🔥 SEO & Metadata */}
      <Head>
        <title>Contact Us | Fluffy Pet Wash</title>
        <meta name="description" content="Get in touch with Fluffy Pet Wash for inquiries, bookings, or franchising opportunities. Call, email, or use our contact form." />
        <meta name="keywords" content="contact Fluffy Pet Wash, mobile pet grooming contact, dog grooming phone number, franchise pet grooming" />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* 🚀 Structured Data for Contact Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Fluffy Pet Wash",
                "url": "https://fluffypetwash.com",
                "logo": "https://fluffypetwash.com/FPW-Logo.jpg",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+702-508-6248",
                    "contactType": "customer service",
                    "areaServed": "US",
                    "availableLanguage": ["English", "Spanish"]
                  }
                ],
                "sameAs": [
                  "https://facebook.com/fluffypetwash",
                  "https://instagram.com/fluffypetwash"
                ]
              }
            })
          }}
        />
      </Head>
      {/* Page Title */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Typography variant="h3" fontWeight="bold" color="#067C92" mb={3}>
          Get in Touch with Us
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={4}>
          Have questions or want to inquire about franchising? Fill out the form below, and we’ll get back to you as soon as possible.
        </Typography>
      </motion.div>

      {/* Contact Information Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} textAlign="center">
            <IconButton color="primary">
              <PhoneIcon sx={{ fontSize: 40, color: '#038B95' }} />
            </IconButton>
            <Typography variant="h6" fontWeight="bold">Call Us</Typography>
            <Typography variant="body1" color="textSecondary">(702) 508-6248</Typography>
          </Grid>

          <Grid item xs={12} sm={6} textAlign="center">
            <IconButton color="primary">
              <EmailIcon sx={{ fontSize: 40, color: '#038B95' }} />
            </IconButton>
            <Typography variant="h6" fontWeight="bold">Email Us</Typography>
            <Typography variant="body1" color="textSecondary">info@fluffypetwash.com</Typography>
          </Grid>
        </Grid>
      </motion.div>

      {/* Contact Form */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 6, textAlign: 'left', mx: 'auto', maxWidth: 600 }}>
          {error && <Typography color="error" mb={2}>{error}</Typography>}

          <TextField
            label="Your Name"
            name="name"
            fullWidth
            required
            value={form.name}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Your Email"
            name="email"
            fullWidth
            required
            value={form.email}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <TextareaAutosize
            minRows={4}
            name="message"
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            sx={{
              mt: 3,
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              textTransform: 'none',
              background: 'linear-gradient(90deg, #00ADCD, #038B95)',
              '&:hover': { background: 'linear-gradient(90deg, #038B95, #00ADCD)' },
            }}
          >
            Send Message
          </Button>
        </Box>
      </motion.div>

      {/* Social Media Links */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box mt={6} textAlign="center">
          <Typography variant="h5" fontWeight="bold" mb={2} color="#067C92">
            Connect With Us
          </Typography>
          <Box display="flex" justifyContent="center" gap={3}>
            <IconButton color="inherit" href="https://facebook.com" target="_blank" sx={{ '&:hover': { color: '#A1E0E3' } }}>
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank" sx={{ '&:hover': { color: '#A1E0E3' } }}>
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </motion.div>

      {/* Google Maps Embed (Purely Aesthetic) */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ mt: 6, borderRadius: '10px', overflow: 'hidden', boxShadow: 3 }}>
          <iframe
            title="Fluffy Pet Wash Location (Aesthetic)"
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?q=Las%20Vegas%20NV&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{ borderRadius: '10px' }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactPage;