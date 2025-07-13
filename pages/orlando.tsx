import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';

const OrlandoPage = () => (
  <Box sx={{ py: 6, px: { xs: 3, md: 6 }, maxWidth: 900, mx: 'auto' }}>
    <Head>
      <title>Mobile Pet Grooming Orlando, FL | Fluffy Pet Wash</title>
      <meta
        name="description"
        content="Learn about Fluffy Pet Wash&apos;s mobile dog grooming services in Orlando. Explore benefits, FAQs, and how to book your appointment."
      />
      <link rel="canonical" href="https://fluffypetwash.com/orlando" />
    </Head>
    <Typography variant="h1" fontWeight="bold" color="#067C92" mb={3} textAlign="center">
      Mobile Grooming Comes to Orlando
    </Typography>
    <Typography variant="body1" mb={2}>
      We are excited to bring our luxurious grooming van to the neighborhoods of Orlando. Our team delivers stress-free baths, blowouts, and paw treatments right to your driveway, so your pup stays relaxed in familiar surroundings. From Park Lake to Lake Nona, we service most Orlando communities with the same gentle touch that pet parents already love in Las Vegas. By arriving at your home, we remove the hassle of car rides and noisy salons. It&apos;s just your dog and our friendly groomer in a fully equipped mobile spa.
    </Typography>
    <Typography variant="body1" mb={2}>
      Each appointment includes our all-inclusive <Link href="/services" style={{ color: '#038B95', fontWeight: 'bold' }}>service package</Link> with hypoallergenic shampoo, nail trimming, ear cleaning, teeth brushing, and stylish finishing touches. Pricing is transparent—see the latest rates on our <Link href="/prices" style={{ color: '#038B95', fontWeight: 'bold' }}>prices page</Link>. If you have questions about breed eligibility or scheduling, our <Link href="/faq" style={{ color: '#038B95', fontWeight: 'bold' }}>FAQ</Link> has plenty of helpful answers.
    </Typography>
    <Typography variant="body1" mb={4}>
      Ready to reserve your slot? Use our simple form below to confirm that we service your part of Orlando, then continue to secure your preferred appointment time. You can always reach out through our <Link href="/contact" style={{ color: '#038B95', fontWeight: 'bold' }}>contact page</Link> if you need assistance.
    </Typography>
    <Typography variant="h2" fontWeight="bold" color="#067C92" mb={2}>
      Orlando FAQ
    </Typography>
    <List>
      <ListItem>
        <ListItemText primary="Which areas do you serve?" secondary="We currently cover downtown Orlando, Winter Park, Lake Nona, and surrounding neighborhoods." />
      </ListItem>
      <ListItem>
        <ListItemText primary="Do you groom large breeds?" secondary="Yes, our spacious van accommodates most breeds up to 120 pounds." />
      </ListItem>
      <ListItem>
        <ListItemText primary="How do I book?" secondary="Select &apos;Orlando&apos; in the pre-booking form and follow the prompts to confirm your appointment." />
      </ListItem>
    </List>
  </Box>
);

export default OrlandoPage;
