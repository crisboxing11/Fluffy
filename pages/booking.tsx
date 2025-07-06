import { Box } from '@mui/material';
import Head from 'next/head';

const BookingPage = () => {
  return (
    <Box>
      <Head>
        <title>Book Mobile Grooming | Fluffy Pet Wash</title>
        <meta name="description" content="Schedule a mobile pet grooming appointment with Fluffy Pet Wash." />
        <meta name="keywords" content="mobile dog grooming booking, schedule pet grooming, fluffy pet wash" />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://fluffypetwash.com/booking" />
        <meta property="og:title" content="Book Mobile Grooming | Fluffy Pet Wash" />
        <meta property="og:description" content="Easily schedule your next mobile grooming appointment with Fluffy Pet Wash." />
        <meta property="og:image" content="https://fluffypetwash.com/fluffy-circle.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluffypetwash.com/booking" />
        <meta property="og:image:alt" content="Fluffy Pet Wash Booking" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Mobile Grooming | Fluffy Pet Wash" />
        <meta name="twitter:description" content="Easily schedule your next mobile grooming appointment with Fluffy Pet Wash." />
        <meta name="twitter:image" content="https://fluffypetwash.com/fluffy-circle.png" />
      </Head>

      <Box component="main" sx={{ width: '100%', py: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            width: '100%',
            height: { xs: '80vh', md: '85vh' },
            minHeight: 600,
          }}
        >
          <iframe
            src="https://booking.moego.pet/ol/FLUFFYPETWASH/book?utm_medium=embed"
            style={{ border: 'none', width: '100%', height: '100%' }}
            title="Fluffy Pet Wash Booking"
            scrolling="yes"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BookingPage;
