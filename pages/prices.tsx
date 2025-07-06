import { Box, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PriceHeroImage from '../public/Dog8.jpg'; // Ensure this is inside public/
import PawPattern from '../public/paw-pattern.jpeg'; // ✅ Add a seamless repeating paw print image
import Head from 'next/head';
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation, Trans } from 'next-i18next';
// **Animations**
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// **Price Tiers**
const pricing = [
  { size: "Small Dog", price: "$85", desc: "Depending on Weight & Coat Condition" },
  { size: "Medium Dog", price: "$95 - $125", desc: "Depending on Weight & Coat Condition" },
  { size: "Large Dog", price: "$140 - $185", desc: "Depending on Weight & Coat Condition" },
  { size: "Extra Large Dog", price: "$200 & Up", desc: "Depending on Weight & Coat Condition" },
];
// **Fluffy Preferred Membership Pricing (Fixed Discounted Prices)**
const preferredPricing = [
  { size: "Small Dog", price: "$75", desc: "Exclusive rate for Fluffy Preferred Members" },
  { size: "Medium Dog", price: "$85 - $115", desc: "Exclusive rate for Fluffy Preferred Members" },
  { size: "Large Dog", price: "$125 - $165", desc: "Exclusive rate for Fluffy Preferred Members" },
  { size: "Extra Large Dog", price: "$185", desc: "Exclusive rate for Fluffy Preferred Members" },
];

// **All-Inclusive Services List**
const services = [
  "Professional Brush Out",
  "Professional Hypoallergenic Wash + Organic Conditioner & Moisturizer",
  "Towel & Blow Out Dryer",
  "Nails Trimming & Filing",
  "Ears Cleaning",
  "Mouth Wash and Teeth Brushing",
  "Expressed Glands (Optional)",
  "Professional DeShedding If Needed (Undercoat Removal)",
  "Paws Cleaning & Paws Trimming If Needed",
  "Sanitary/Backside/Ears Trimming If Needed ('Dog Tidy')",
  "Facial + Fresh & Clean Treatment",
  "Final Brush Out",
];

const PricesPage = () => {
  const { t } = useTranslation('prices');
  return (
    <Box>
       {/* 🔥 SEO & Metadata */}
      <Head>
        <title>Pet Grooming Prices | Fluffy Pet Wash</title>
        <meta name="description" content="Affordable and transparent pricing for luxury mobile pet grooming services. Check our pricing tiers and all-inclusive package." />
        <meta name="keywords" content="dog grooming prices, mobile pet grooming cost, pet grooming services, luxury pet wash pricing, affordable mobile grooming, cheap mobile dog grooming, mobile dog wash prices" />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://fluffypetwash.com/prices" />
         <link rel="icon" href="/favicon.ico" />
        {/* ✅ Open Graph */}
        <meta property="og:title" content="Pet Grooming Prices | Fluffy Pet Wash" />
        <meta property="og:description" content="Check transparent, all-inclusive pricing tiers for mobile grooming services by Fluffy Pet Wash." />
        <meta property="og:image" content="https://fluffypetwash.com/fluffy-circle.png" />
        <meta property="og:image:alt" content="Fluffy Pet Wash Prices" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluffypetwash.com/prices" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pet Grooming Prices | Fluffy Pet Wash" />
        <meta name="twitter:description" content="Check transparent, all-inclusive pricing tiers for mobile grooming services by Fluffy Pet Wash." />
        <meta name="twitter:image" content="https://fluffypetwash.com/fluffy-circle.png" />
        {/* 🚀 Structured Data for Pricing and Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Luxury Mobile Pet Grooming Prices",
              "provider": {
                "@type": "Organization",
                "name": "Fluffy Pet Wash",
                "url": "https://fluffypetwash.com",
                "logo": "https://fluffypetwash.com/fluffy-circle.PNG"
              },
              "serviceType": "Luxury Mobile Grooming",
              "offers": pricing.map(tier => ({
                "@type": "Offer",
                "name": `${tier.size} Grooming`,
                "price": tier.price.replace("$", ""),
                "priceCurrency": "USD",
                "description": tier.desc
              })),
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Fluffy Pet Wash Services",
                "itemListElement": services.map(service => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": service
                  }
                }))
              }
            })
          }}
        />
      </Head>

      {/* Hero Section with Full-Container Image */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
    <Box
  sx={{
    position: 'relative',
    width: '100%',
    height: { xs: '60vh', md: '70vh' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    overflow: 'hidden',
  }}
>
  {/* Background Image */}
  <Image
    src={PriceHeroImage}
   alt="Well-groomed happy dog"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
  loading="lazy"
  />

  {/* Overlay to Improve Readability */}
  <Box
    sx={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Dark overlay (adjust opacity as needed)
      zIndex: 1, // ✅ Ensures overlay is between image & text
    }}
  />

  {/* Text Content */}
  <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
    <Typography
      variant="h2"
      fontWeight="bold"
      sx={{
        fontSize: { xs: '2rem', md: '3.5rem' },
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)',
      }}
    >
      {t('hero.title')}
    </Typography>
    <Typography
      variant="h6"
      sx={{
        maxWidth: 700,
        mx: 'auto',
        mt: 2,
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
      }}
    >
      {t('hero.subtitle')}
    </Typography>
  </Box>
</Box>
      </motion.div>

      {/* Pricing Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: 8, px: { xs: 3, md: 6 } }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#067C92">
            {t('pricing.title')}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {pricing.map((tier, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
                  <Card
                    sx={{
                      boxShadow: 4,
                      borderRadius: '15px',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" fontWeight="bold" color="#038B95" mb={2}>
                        {tier.size}
                      </Typography>
                      <Typography variant="h4" fontWeight="bold" color="#067C92">
                        {tier.price}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" mt={1}>
                        {tier.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
           <Typography variant="body2" color="textSecondary" textAlign="center" mt={3}>
            <span dangerouslySetInnerHTML={{ __html: t('pricing.charge') }} />
          </Typography>
        </Box>
      </motion.div>
       {/* Fluffy Preferred Membership Pricing */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: 8, px: { xs: 3, md: 6 }, bgcolor: '#F8F9FA' }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#026D7C">
            {t('membership.title')}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {preferredPricing.map((tier, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ boxShadow: 4, borderRadius: '15px', textAlign: 'center', border: '2px solid #026D7C',transition: 'transform 0.3s ease-in-out',
                      '&:hover': { transform: 'scale(1.05)' } }}>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold" color="#026D7C" mb={2}>
                      {tier.size}
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" color="#FFD700">
                      {tier.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" mt={1}>
                      {tier.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body2" color="textSecondary" textAlign="center" mt={3}>
            {t('membership.note')}
          </Typography>
        </Box>
      </motion.div>


      {/* Included Services Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: 8, px: { xs: 3, md: 6 }, bgcolor: '#F8F9FA' }}>
          {/* Internal link to services page for SEO */}
<Typography variant="body1" textAlign="center" mt={0} mb={2}>
  <Trans i18nKey="included.curious" t={t} components={{ link: <Link href="/services" style={{ color: '#038B95', fontWeight: 'bold' }} /> }} />
</Typography>

<Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#067C92">
  {t('included.title')}
</Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Card sx={{ boxShadow: 3, padding: 3, borderRadius: '15px', bgcolor: 'white' }}>
                <List>
                  {services.map((service, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: '#038B95' }} />
                      </ListItemIcon>
                      {service}
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* CTA Section with PAW PRINTS Background */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
       <Box
  sx={{
    py: 6,
    textAlign: 'center',
    bgcolor: '#026D7C', // ✅ Darker teal for better contrast
    color: 'white',
     backgroundImage: `url(${PawPattern.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '120px', // ✅ Adjust size as needed
    backgroundBlendMode: 'multiply', // ✅ Subtle effect, blending with background color
    backgroundPosition: 'center',
  }}
>
  <Typography variant="h4" fontWeight="bold">
    {t('cta.title')}
  </Typography>
  <Button
    variant="contained"
    size="large"
    sx={{ mt: 3, bgcolor: '#fff', color: '#038B95', fontWeight: 'bold' }}
    href="/#booking"
  >
    {t('cta.button')}
  </Button>
</Box>
      </motion.div>
    </Box>
  );
};

export default PricesPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'prices'])),
  },
});





