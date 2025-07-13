import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 10 }}>
      <Head>
        <title>Page Not Found | Fluffy Pet Wash</title>
        <meta name="description" content="Oops! The page you're looking for does not exist." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://fluffypetwash.com/404" />
      </Head>
      <Box sx={{ mb: 4 }}>
        <Image src="/fluffy-circle.PNG" alt="Fluffy Pet Wash Logo" width={150} height={150} />
      </Box>
      <Typography variant="h1" fontWeight="bold" color="#067C92" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        The page you are looking for might have been removed or is temporarily unavailable. Double-check the address or return to our homepage below.
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={2}>
        If you believe this is an error, please let us know through our contact page.
      </Typography>
      <Link href="/" passHref legacyBehavior>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
          <Button variant="contained" color="primary" aria-label="Go back to homepage">Go Back Home</Button>
        </motion.div>
      </Link>
    </Box>
  );
};

export default Custom404;
