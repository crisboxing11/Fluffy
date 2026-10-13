import { Box, Typography } from '@mui/material';
import Head from 'next/head';

const PrivacyPolicyPage = () => {
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
        Last updated: October 12, 2026
      </Typography>

      <Typography component="p" variant="body1" mb={3}>
        This policy describes how Fluffy Pet Wash handles information when you use this website, book a mobile grooming appointment, or contact us. It explains what we collect, why we use it, which companies help us provide service, and how you can ask us about your information.
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
        <li><Typography component="span" variant="body1">Service address</Typography></li>
        <li><Typography component="span" variant="body1">Pet information (name, breed, preferences)</Typography></li>
      </Box>
      <Typography component="p" variant="body1" mb={2}>
        Booking information is entered through MoeGo. That includes your name, phone number, email address, service address, and pet details. Our booking page shows the MoeGo scheduling page in a frame. Las Vegas appointments use the Fluffy Pet Wash page on booking.moego.pet. Orlando appointments use the Orlando page on booking.moego.pet. The cat grooming page also links directly to the Las Vegas MoeGo booking page.
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        Before that frame opens, the pre-booking step on the home page and the pre-book page only asks you to choose a service area: Las Vegas, Nevada or Orlando, Florida. That step does not ask for your name, phone number, email address, or pet details. If you choose Orlando, you can instead open a MoeGo request form at form.moego.pet in a new browser tab.
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        The contact form on our contact page asks for your name, email address, a subject, and a message. Submitting the form sends those fields to this website. We then email your name, email address, and message to our inbox through Gmail. Appointments are booked through MoeGo, not through the contact form.
      </Typography>
      <Typography component="p" variant="body1" mb={3}>
        On the home page, we ask ipapi.co whether your connection appears to be in the Orlando, Florida area. ipapi.co returns approximate location details from that request, including region and coordinates. If the result is in the Orlando area, we may send you to the Orlando page. We use that response only to decide the redirect. We do not save a location profile from it.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        2. How We Use Your Information
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        We use the information you provide strictly to:
      </Typography>
      <Box component="ul" sx={{ pl: 4, mb: 3, listStyleType: 'disc' }}>
        <li><Typography component="span" variant="body1">Schedule and manage appointments</Typography></li>
        <li><Typography component="span" variant="body1">Provide updates and reminders</Typography></li>
        <li><Typography component="span" variant="body1">Provide the grooming service you requested</Typography></li>
        <li><Typography component="span" variant="body1">Improve our services and communication</Typography></li>
        <li><Typography component="span" variant="body1">Send service confirmations and relevant updates</Typography></li>
        <li><Typography component="span" variant="body1">Reply to messages you send us</Typography></li>
      </Box>
      <Typography component="p" variant="body1" mb={3}>
        Booking information entered through MoeGo is used for scheduling, reminders, and service.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        3. Payments
      </Typography>
      <Typography component="p" variant="body1" mb={3}>
        Payments are processed through MoeGo. Fluffy Pet Wash does not store your card number on this website.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        4. Cookies and Measurement
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        Google Tag Manager, container GTM-PG7XP5HS, loads on every page. Browsers that do not run scripts still receive a hidden Google Tag Manager frame. Using that tag library, this site configures Google Analytics 4 property G-YTSZ6NZWP3 and Google Ads accounts AW-17319676855 and AW-10869086002. That same tag manager container also loads Google tag G-G17GCFVQT2. These Google tags use cookies to measure page views, recognize a browser across pages, and record advertising clicks.
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        When you move from one page to another, we send the page path to Google Analytics. We record a booking conversion when you follow a Las Vegas MoeGo booking link or continue on the Las Vegas booking path, and a call conversion when you click the Las Vegas phone number. These events measure visits and ads. They do not include your name, phone number, email address, service address, pet details, or card number.
      </Typography>
      <Typography component="p" variant="body1" mb={3}>
        Vercel Analytics and Vercel Speed Insights also run on every page. Vercel Analytics measures which pages are visited. Vercel Speed Insights measures how quickly pages load.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        5. We Do Not Sell Your Information
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        We <strong>do not</strong> sell, rent, or lease your personal information. We share information only with service providers that help us operate this website and provide grooming:
      </Typography>
      <Box component="ul" sx={{ pl: 4, mb: 3, listStyleType: 'disc' }}>
        <li>
          <Typography component="span" variant="body1">
            MoeGo, for booking pages, the Orlando request form, scheduling, reminders, and payment processing
          </Typography>
        </li>
        <li>
          <Typography component="span" variant="body1">
            Google, for Tag Manager, Analytics, Ads, and Gmail delivery of contact-form messages
          </Typography>
        </li>
        <li>
          <Typography component="span" variant="body1">
            Vercel, for Analytics and Speed Insights
          </Typography>
        </li>
        <li>
          <Typography component="span" variant="body1">
            ipapi.co, for the home page location check described above
          </Typography>
        </li>
      </Box>
      <Typography component="p" variant="body1" mb={3}>
        The footer and some pages link to our Facebook and Instagram profiles. Those are ordinary links. This site does not load a Facebook or Instagram advertising pixel.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        6. Data Security
      </Typography>
      <Typography component="p" variant="body1" mb={3}>
        This website tells browsers to keep using an encrypted connection. Booking details and card payments are handled by MoeGo. Contact messages are delivered through Gmail.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        7. How Long We Keep Information
      </Typography>
      <Typography component="p" variant="body1" mb={3}>
        We keep personal information while we need it to schedule appointments, provide service, and keep business records. We do not keep it once those purposes no longer require it.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        8. Your Rights
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        You may contact us at any time to:
      </Typography>
      <Box component="ul" sx={{ pl: 4, mb: 3, listStyleType: 'disc' }}>
        <li><Typography component="span" variant="body1">Access or update your information</Typography></li>
        <li><Typography component="span" variant="body1">Request data deletion</Typography></li>
        <li><Typography component="span" variant="body1">Ask questions about our data practices</Typography></li>
      </Box>
      <Typography component="p" variant="body1" mb={3}>
        You may ask us to access, correct, or delete the personal information we hold about you. Contact us with that request and we will respond.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        9. Children
      </Typography>
      <Typography component="p" variant="body1" mb={3}>
        This website and our grooming services are not directed at children.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        10. Changes to This Policy
      </Typography>
      <Typography component="p" variant="body1" mb={3}>
        We may update this policy when the website or our services change. We will post the updated policy on this page and change the date at the top.
      </Typography>

      <Typography component="h2" variant="h5" fontWeight="bold" color="#067C92" mb={1}>
        11. Contact Us
      </Typography>
      <Typography component="p" variant="body1" mb={2}>
        For questions or concerns about this Privacy Policy, please contact us at:
      </Typography>
      <Typography component="p" variant="body1">
        <strong>Fluffy Pet Wash</strong><br />
        Email: <a href="mailto:contact@fluffypetwash.com">contact@fluffypetwash.com</a><br />
        Phone: <a href="tel:+17025086248">702-508-6248</a><br />
        6628 Sky Pointe Dr #280, Las Vegas, NV 89131<br />
        Website: <a href="https://www.fluffypetwash.com" target="_blank" rel="noopener noreferrer">Fluffy Pet Wash website</a>
      </Typography>
    </Box>
  );
};

export default PrivacyPolicyPage;
