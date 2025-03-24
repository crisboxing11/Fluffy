import { Box, Typography, Grid, Button, IconButton, TextField, TextareaAutosize, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link'; 
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Head from 'next/head';

// **Animations**
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccessMessage(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    
    <Box sx={{ py: 6, px: { xs: 3, md: 6 }, maxWidth: 1000, mx: 'auto', textAlign: 'center' }}>
      <Head>
  <title>Contact Us | Fluffy Pet Wash</title>
  <meta name="description" content="Have questions? Contact Fluffy Pet Wash for mobile grooming appointments, franchising info, or general inquiries. Call, email, or fill out our contact form." />
  <meta name="keywords" content="contact mobile pet grooming, fluffy pet wash contact, dog grooming questions, mobile pet grooming franchise, mobile dog grooming questions, should I do mobile grooming, mobile grooming prices, how much for mobile grooming, mobile grooming questions, mobile dog grooming questions, mobile pet grooming questions, Is mobile grooming right for me" />
  <meta name="author" content="Fluffy Pet Wash" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* 🚀 Structured Data for LocalBusiness */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MobileBusiness",
        "name": "Fluffy Pet Wash",
        "url": "https://fluffypetwash.com",
        "description": "Mobile pet grooming service offering luxury grooming for dogs at your doorstep.",
        "image": "https://fluffypetwash.com/fluffy.PNG",
        "email": "contact.fluffypetwash@gmail.com",
        "telephone": "+1-702-508-6248",
        "areaServed": {
          "@type": "Place",
          "name": "Las Vegas, NV"
        },
        "sameAs": [
          "https://www.instagram.com/fluffypetwash",
          "https://www.facebook.com/fluffypetwash"
        ]
      })
    }}
  />
</Head>

      {/* ✅ Snackbar for Success Message (Top of the Screen) */}
      <Snackbar
        open={successMessage}
        autoHideDuration={4000} // Close after 4 seconds
        onClose={() => setSuccessMessage(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // ✅ Position at the top center
      >
        <Alert 
          onClose={() => setSuccessMessage(false)} 
          severity="success" 
          sx={{ 
            width: '100%', 
            fontSize: '1.1rem', // ✅ Make text more visible
            fontWeight: 'bold', 
            backgroundColor: '#038B95', // ✅ High contrast color
            color: 'white', 
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' // ✅ Strong shadow for visibility
          }}
        >
          ✅ Your message has been sent! We will get back to you soon.
        </Alert>
      </Snackbar>

      {/* Page Title */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Typography variant="h3" fontWeight="bold" color="#067C92" mb={3}>
          Get in Touch with Us
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={1}>
          Have questions or want to inquire about franchising? Fill out the form below, and we’ll get back to you as soon as possible.
        </Typography>
       <Typography variant="body1" mt={1} mb={4}>
  You can also explore our{' '}
  <Link href="/services" passHref legacyBehavior>
    <a style={{ color: '#038B95', fontWeight: 'bold' }}>services</a>
  </Link>{' '}
  or check our{' '}
  <Link href="/prices" passHref legacyBehavior>
    <a style={{ color: '#038B95', fontWeight: 'bold' }}>grooming prices</a>
  </Link>{' '}
  before reaching out.
</Typography>
      </motion.div>

      {/* Contact Information */}
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
          <Typography variant="body1" color="textSecondary">
  <a href="mailto:contact.fluffypetwash@gmail.com" style={{ color: '#038B95', fontWeight: 'bold' }}>
    contact.fluffypetwash@gmail.com
  </a>
</Typography>
          </Grid>
        </Grid>
      </motion.div>

      {/* Contact Form */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 6, textAlign: 'left', mx: 'auto', maxWidth: 600 }}>
          {error && <Typography color="error" mb={2}>{error}</Typography>}

          <TextField label="Your Name" name="name" fullWidth required value={form.name} onChange={handleChange} sx={{ mb: 3 }} />
          <TextField label="Your Email" name="email" fullWidth required value={form.email} onChange={handleChange} sx={{ mb: 3 }} />
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
          <Button variant="contained" color="primary" type="submit" size="large" sx={{ mt: 3 }}>
            Send Message
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactPage;