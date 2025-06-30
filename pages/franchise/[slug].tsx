import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import franchises from '../../data/franchises.json'; // Import franchise data
import Head from 'next/head';

const FranchisePage = () => {
  const { query } = useRouter();
  const slug = query.slug as string;

  // Find the franchise details based on the slug
  const franchise = franchises.find((franchise) => franchise.slug === slug);

  // If no franchise matches the slug, show a 404-like message
  if (!franchise) {
    return (
      <Box sx={{ py: 10, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Franchise Not Found
        </Typography>
        <Typography sx={{ mt: 4 }}>
          Sorry, we couldn&apos;t find the franchise you&apos;re looking for. Please check the URL or go back to the{' '}
          <Link href="/" style={{ color: '#067C92', textDecoration: 'underline' }}>
            homepage
          </Link>.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{franchise.name} | Fluffy Pet Wash</title>
        <meta name="description" content={`Book an appointment with ${franchise.name} Fluffy Pet Wash.`} />
        <meta property="og:title" content={`${franchise.name} | Fluffy Pet Wash`} />
        <meta property="og:description" content={`Fluffy Pet Wash offers premium grooming services in ${franchise.name}.`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'LocalBusiness',
              name: franchise.name,
              address: {
                '@type': 'PostalAddress',
                streetAddress: franchise.address,
              },
              telephone: franchise.phone,
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <Box sx={{ py: 10, maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold">
          {franchise.name} Franchise
        </Typography>
        <Typography sx={{ mt: 4 }}>{franchise.address}</Typography>
        <Typography sx={{ mt: 2 }}>{franchise.phone}</Typography>

        {/* Optional: Display franchise image */}
          {franchise.image && (
            <Box sx={{ mt: 6 }}>
              <Image
                src={franchise.image}
                alt={`${franchise.name} Location`}
                width={400}
                height={300}
                style={{ width: '100%', maxWidth: 400, margin: '0 auto', borderRadius: 8, boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}
              />
            </Box>
          )}


        {/* Back to Home Link */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Link href="/" style={{ color: '#067C92', textDecoration: 'underline' }}>
            Back to Home
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default FranchisePage;
