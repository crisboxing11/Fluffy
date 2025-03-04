import { Box, Typography } from '@mui/material';
import PreBookingForm from '../components/PreBookingForm';
import Home from './home';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const HomePage = () => {
  const router = useRouter();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/') {
        setKey((prevKey) => prevKey + 1); // Force re-render of PreBookingForm
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Box>
      {/* 🔥 SEO & Metadata */}
      <Head>
        <title>Fluffy Pet Wash | Mobile Pet Grooming Services</title>
        <meta name="description" content="Fluffy Pet Wash provides premium mobile pet grooming services across multiple locations. Book an appointment today!" />
        <meta name="keywords" content="mobile pet grooming, dog grooming, pet wash, Fluffy Pet Wash franchise,furryland, Furryland, Zoomin Groomin, zoomin groomin, fluffy pet, fluffy pet wash, mobile dog wash, mobile dog grooming service, mobile dog grooming, mobile pet grooming near me, mobile dog grooming near me" />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* 🚀 Structured Data for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileBusiness",
              "name": "Fluffy Pet Wash",
              "url": "https://fluffypetwash.com",
              "description": "Fluffy Pet Wash is a mobile pet grooming franchise offering premium grooming services across multiple cities.",
              "image": "https://fluffypetwash.com/logo.png",
              "telephone": "+1-555-555-5555",
              "serviceArea": [
                {
                  "@type": "Place",
                  "name": "Las Vegas, NV",
                  "geo": { "@type": "GeoCoordinates", "latitude": "36.1699", "longitude": "-115.1398" }
                },
                // {
                //   "@type": "Place",
                //   "name": "Los Angeles, CA",
                //   "geo": { "@type": "GeoCoordinates", "latitude": "34.0522", "longitude": "-118.2437" }
                // }
              ],
              // "makesOffer": {
              //   "@type": "Offer",
              //   "name": "Fluffy Pet Wash Franchise Opportunity",
              //   "url": "https://fluffypetwash.com/franchise",
              //   "description": "Start your own Fluffy Pet Wash mobile grooming business today!",
              //   "priceCurrency": "USD"
              // },
              "sameAs": [
                "https://www.facebook.com/fluffypetwash",
                "https://www.instagram.com/fluffypetwash",
                "https://twitter.com/fluffypetwash"
              ]
            })
          }}
        />
      </Head>

      <Home />

      {/* 🏆 Improved Booking Section */}
      <Box id="booking" sx={{ py: 6, px: 3, bgcolor: '#f9f9f9' }} key={key}>
        <Typography variant="h1" fontWeight="bold" textAlign="center" mb={4}>
          Fluffy Pet Wash - Mobile Pet Grooming & Spa
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

export default HomePage;