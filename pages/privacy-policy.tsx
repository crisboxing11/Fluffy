import { Box, Typography } from '@mui/material';
import Head from 'next/head';
// import Link from 'next/link';
const PrivacyPolicyPage = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Box sx={{ py: 6, px: { xs: 3, md: 6 }, maxWidth: 800, mx: 'auto' }}>
      <Head>
        <title>Privacy Policy | Fluffy Pet Wash</title>
        <meta
          name="description"
          content="Learn how Fluffy Pet Wash collects and protects your personal information."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.fluffypetwash.com/privacy-policy" />
      </Head>

      <Typography component="h1" variant="h3" fontWeight="bold" color="#067C92" textAlign="center" mb={2}>
        Privacy Policy
      </Typography>
      <Typography component="p" variant="body1" textAlign="center" mb={4}>
        Last Updated: {lastUpdated}
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        1. Information We Collect
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        When you interact with our website, book an appointment, or contact us, we may collect personal information such as:
      </Typography>
      <Box component="ul" sx={{ pl: 4, mb: 3, listStyleType: 'disc' }}>
        <li><Typography component="span" variant="body1">Your name</Typography></li>
        <li><Typography component="span" variant="body1">Phone number</Typography></li>
        <li><Typography component="span" variant="body1">Email address</Typography></li>
        <li><Typography component="span" variant="body1">Home address</Typography></li>
        <li><Typography component="span" variant="body1">Pet information (name, breed, preferences)</Typography></li>
      </Box>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        2. How We Use Your Information
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        We use the information you provide strictly to:
      </Typography>
      <Box component="ul" sx={{ pl: 4, mb: 3, listStyleType: 'disc' }}>
        <li><Typography component="span" variant="body1">Schedule and manage appointments</Typography></li>
        <li><Typography component="span" variant="body1">Provide updates and reminders</Typography></li>
        <li><Typography component="span" variant="body1">Improve our services and communication</Typography></li>
        <li><Typography component="span" variant="body1">Send service confirmations and relevant updates</Typography></li>
      </Box>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        3. No Selling or Sharing of Your Information
      </Typography>
      <Typography component="p" variant="body1" mb={3}>
        We <strong>do not</strong> sell, rent, lease, or share your personal information with any third parties for marketing or commercial purposes. Your privacy is our top priority.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        4. Data Security
      </Typography>
      <Typography component="p" variant="body1" mb={3}>
        We use industry-standard security measures to protect your information, including encrypted communications, secure databases, and limited employee access.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        5. Your Rights
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        You may contact us at any time to:
      </Typography>
      <Box component="ul" sx={{ pl: 4, mb: 3, listStyleType: 'disc' }}>
        <li><Typography component="span" variant="body1">Access or update your information</Typography></li>
        <li><Typography component="span" variant="body1">Request data deletion</Typography></li>
        <li><Typography component="span" variant="body1">Ask questions about our data practices</Typography></li>
      </Box>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        6. Contact Us
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        For questions or concerns about this Privacy Policy, please contact us at:
      </Typography>
      <Typography component="p" variant="body1">
        <strong>Fluffy Pet Wash</strong><br />
        Email: <a href="mailto:contact@fluffypetwash.com">contact@fluffypetwash.com</a><br />
        Phone: 888-998-8381<br />
        Website: <a href="https://www.fluffypetwash.com" target="_blank" rel="noopener noreferrer">Fluffy Pet Wash website</a>
      </Typography>
    </Box>
  );
};

export default PrivacyPolicyPage;
