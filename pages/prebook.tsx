import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

const PreBookingForm = dynamic(() => import('../components/PreBookingForm'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const benefits = [
  'Guaranteed appointment times that fit your schedule',
  'Reduced wait lists during peak grooming season',
  'Time to discuss special requests with our team before your visit'
];

const PrebookPage = () => (
  <Box>
    <Head>
      <title>Pre-Book | Fluffy Pet Wash</title>
      <meta name="description" content="Select your service area to start booking mobile grooming services." />
      <link rel="canonical" href="https://fluffypetwash.com/prebook" />
    </Head>
    <Box sx={{ py: 6, px: { xs: 3, md: 6 }, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h1" fontWeight="bold" textAlign="center" mb={4} color="#067C92">
        Book Your Appointment
      </Typography>
      <Typography variant="body1" mb={2}>
        Pre-booking ensures that your pet receives care when you need it most. Our calendar fills quickly during holiday weeks and the summer months, so reserving ahead saves you from last-minute scrambling. Simply tell us where you live and we will display the nearest Fluffy Pet Wash team ready to pamper your dog.
      </Typography>
      <Typography variant="body1" mb={2}>
        Unsure which package is right for you? Take a peek at our <Link href="/services" style={{ color: '#038B95', fontWeight: 'bold' }}>services page</Link> for a full breakdown of what’s included. Transparent rates are listed on our <Link href="/prices" style={{ color: '#038B95', fontWeight: 'bold' }}>pricing page</Link>, so there are no surprises when the grooming van arrives. Still have questions? Our helpful <Link href="/faq" style={{ color: '#038B95', fontWeight: 'bold' }}>FAQ</Link> covers common topics about breed restrictions, scheduling, and payment options.
      </Typography>
      <Typography variant="body1" mb={2}>
        Advantages of reserving early include:
      </Typography>
      <List sx={{ mb: 3 }}>
        {benefits.map((b, i) => (
          <ListItem key={i}>
            <ListItemText primary={b} />
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" mb={4}>
        Ready to continue? Choose your nearest city below and press continue to fill out our secure booking form. If you prefer to speak with a team member directly, feel free to <Link href="/contact" style={{ color: '#038B95', fontWeight: 'bold' }}>contact us</Link> anytime.
      </Typography>
      <PreBookingForm />
    </Box>
  </Box>
);

export default PrebookPage;
