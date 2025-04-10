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
        <meta name="description" content="Fluffy Pet Wash provides the best premium mobile pet grooming services across multiple locations. Book an appointment today!" />
        <meta name="keywords" content="Fluffy Pet Wash franchise, furryland, Zoomin Groomin, fluffy pet, mobile dog grooming near me, mobile pet grooming near me, pet grooming near me, dog wash near me, dog grooming, mobile dog grooming, dog grooming prices, mobile pet groomer, dog grooming at home, mobile dog grooming las vegas, mobile pet grooming las vegas, dog grooming las vegas, mobile dog groomer las vegas, mobile dog spa Las Vegas, dog groomer las vegas" />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://fluffypetwash.com/" />
        <link rel="icon" href="/favicon.ico" />
        {/* ✅ Open Graph */}
        <meta property="og:title" content="Fluffy Pet Wash | Mobile Pet Grooming Services" />
        <meta property="og:description" content="Book premium mobile pet grooming with Fluffy Pet Wash in Las Vegas." />
        <meta property="og:image" content="https://fluffypetwash.com/favicon.ico" />
        <meta property="og:image:alt" content="Fluffy Pet Wash Logo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluffypetwash.com/" />
{/* ✅ Twitter Card Meta Tags (used by iMessage and Discord too) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fluffy Pet Wash | Mobile Pet Grooming Services" />
        <meta name="twitter:description" content="Book the best premium mobile pet grooming with Fluffy Pet Wash in Las Vegas." />
        <meta name="twitter:image" content="https://fluffypetwash.com/fluffy-circle.PNG" />
        {/* 🚀 Structured Data for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness", "PetGrooming"],
              "@id": "https://fluffypetwash.com#fluffy",
              "name": "Fluffy Pet Wash",
              "description": "Fluffy Pet Wash is a mobile pet grooming franchise offering premium grooming services across multiple cities.",
              "logo": "https://fluffypetwash.com/fluffy-circle.PNG",
              "image": "https://fluffypetwash.com/fluffy-circle.PNG",
              "telephone": "+1-702-508-6248",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89101",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Las Vegas, NV",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "36.1699",
                    "longitude": "-115.1398"
                  }
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "112"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Katie Jones"
                  },
                  "reviewBody": "Fluffy pet wash makes my life super easy when it comes to grooming my crazy frenchie!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Toni Robinson"
                  },
                  "reviewBody": "The service was amazing! They were so patient and kept me updated the whole time."
                }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "08:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/fluffypetwash",
                "https://www.instagram.com/fluffypetwash"
              ]
            })
          }}
        />
      </Head>

      <Home />

      {/* 🏆 Improved Booking Section */}
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

export default HomePage;