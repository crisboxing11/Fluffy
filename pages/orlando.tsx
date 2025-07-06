import { Box, Typography } from '@mui/material';
import PreBookingForm from '../components/PreBookingForm';
import Home from '../components/Home';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const OrlandoPage = () => {
  const router = useRouter();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/orlando') {
        setKey(prevKey => prevKey + 1);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Box>
      <Head>
        <title>Fluffy Pet Wash Orlando | Mobile Grooming</title>
        <meta name="description" content="Fluffy Pet Wash now serves the Orlando area with premium mobile pet grooming." />
        <meta name="keywords" content="orlando mobile dog grooming, orlando pet grooming, fluffy pet wash orlando" />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://fluffypetwash.com/orlando" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Fluffy Pet Wash Orlando | Mobile Grooming" />
        <meta property="og:description" content="Book premium mobile pet grooming with Fluffy Pet Wash in Orlando." />
        <meta property="og:image" content="https://fluffypetwash.com/fluffy-circle.PNG" />
        <meta property="og:image:alt" content="Fluffy Pet Wash Logo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluffypetwash.com/orlando" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fluffy Pet Wash Orlando | Mobile Grooming" />
        <meta name="twitter:description" content="Book the best premium mobile pet grooming with Fluffy Pet Wash in Orlando." />
        <meta name="twitter:image" content="https://fluffypetwash.com/fluffy-circle.PNG" />
      </Head>

      <Home />

      <Box id="booking" sx={{ py: 6, px: 3, bgcolor: '#f9f9f9' }} key={key}>
        <Typography variant="h1" fontWeight="bold" textAlign="center" mb={4}>
          Fluffy Pet Wash Mobile Pet Grooming & Spa
        </Typography>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Book Your Appointment
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
          Before proceeding to booking, confirm your dog&apos;s eligibility for our services.
        </Typography>
        <PreBookingForm />
      </Box>
    </Box>
  );
};

export default OrlandoPage;
