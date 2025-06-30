import { useRouter } from 'next/router';
import Link from 'next/link';
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
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold">Franchise Not Found</h1>
        <p className="mt-4">
          Sorry, we couldn&apos;t find the franchise you&apos;re looking for. Please check the URL or go back to the{' '}
          <Link href="/" className="text-blue-500 underline">
            homepage
          </Link>.
        </p>
      </div>
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
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">{franchise.name} Franchise</h1>
        <p className="mt-4">{franchise.address}</p>
        <p className="mt-2">{franchise.phone}</p>

        {/* Optional: Display franchise image */}
        {franchise.image && (
          <div className="mt-6">
            <img src={franchise.image} alt={`${franchise.name} Location`} className="w-full max-w-md mx-auto rounded shadow-md" />
          </div>
        )}


        {/* Back to Home Link */}
        <div className="mt-8 text-center">
          <Link href="/">
           Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default FranchisePage;
