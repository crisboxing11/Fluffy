import { Box, Typography, Button } from '@mui/material';
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
      <Typography variant="h3" fontWeight="bold" color="#067C92" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        The page you are looking for might have been removed or is temporarily unavailable.
      </Typography>
      <Link href="/" passHref legacyBehavior>
        <Button variant="contained" color="primary">Go Back Home</Button>
      </Link>
    </Box>
  );
};

export default Custom404;
