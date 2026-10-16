import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 10, px: { xs: 3, md: 6 }, maxWidth: 800, mx: 'auto' }}>
      <Head>
        <title>Page Not Found | Fluffy Pet Wash</title>
        <meta name="description" content="Oops! The page you&apos;re looking for does not exist." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.fluffypetwash.com/404" />
      </Head>
      <Box sx={{ mb: 4 }}>
        <Image src="/fluffy-circle.PNG" alt="Fluffy Pet Wash Logo" width={150} height={150} />
      </Box>
      <Typography variant="h1" fontWeight="bold" color="#067C92" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={2}>
        The link you followed might be broken or the page may have moved. While you&apos;re here, feel free to browse some of our popular resources below.
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={2}>
        Visit our <Link href="/services" style={{ color: '#038B95', fontWeight: 'bold' }}>services page</Link> to learn about full-groom packages, or check our <Link href="/prices" style={{ color: '#038B95', fontWeight: 'bold' }}>current pricing</Link> before booking. We also share helpful tips on our <Link href="/blog" style={{ color: '#038B95', fontWeight: 'bold' }}>blog</Link>.
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        If you still can&apos;t find what you need, our <Link href="/contact" style={{ color: '#038B95', fontWeight: 'bold' }}>contact page</Link> is the fastest way to get in touch. We&apos;ll be happy to point you in the right direction.
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
