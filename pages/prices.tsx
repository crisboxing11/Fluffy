import { Box, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PriceHeroImage from '../public/Dog8.jpg'; // Ensure this is inside public/
import PawPattern from '../public/paw-pattern.jpeg'; // ✅ Add a seamless repeating paw print image
import Head from 'next/head';
// **Animations**
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// **Grooming Packages**
const packages = [
  {
    name: "Basic",
    features: [
      "Hypoallergenic Wash",
      "Towel & blow dryer",
      "Brush out",
      "Perfume",
    ],
  },
  {
    name: "Premium",
    features: [
      "Everything in Basic Plus",
      "Nail Trim & filing",
      "Ear Cleaning",
      "Teeth Brushing",
      "Conditioning treatment",
      "Paw cleaning and Sanitary trim",
    ],
  },
  {
    name: "Fluffy Royale",
    features: [
      "Everything in Premium Plus",
      "Blueberry Facial",
      "paws + pad massage with balm",
      "tear stain treatment",
      "De-shedding treatment & brushing",
      "Deep teeth cleaning",
      "Premium cologne spritz",
      "Seasonal bandana or bow",
    ],
  },
];

// **Pricing by Dog Size**
const dogSizes = [
  { size: "Small", prices: { basic: 55, premium: 70, royale: 90 } },
  { size: "Medium", prices: { basic: 70, premium: 85, royale: 105 } },
  { size: "Large", prices: { basic: 90, premium: 115, royale: 145 } },
  { size: "Extra Large", prices: { basic: 100, premium: 125, royale: 165 } },
  { size: "XXL", prices: { basic: 110, premium: 145, royale: 185 } },
];

const PricesPage = () => {
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
              "offers": dogSizes.map(size => ({
                "@type": "Offer",
                "name": `${size.size} Dog Grooming`,
                "price": size.prices.basic,
                "priceCurrency": "USD"
              })),
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Grooming Packages",
                "itemListElement": packages.map(pkg => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": pkg.name,
                    "description": pkg.features.join(', ')
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
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)', // ✅ Adds text shadow for better contrast
      }}
    >
      Transparent & Affordable Pricing
    </Typography>
    <Typography
      variant="h6"
      sx={{
        maxWidth: 700,
        mx: 'auto',
        mt: 2,
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)', // ✅ Keeps text readable over image
      }}
    >
      Choose from three packages designed to pamper every pup.
    </Typography>
  </Box>
</Box>
      </motion.div>

      {/* Grooming Packages */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: 8, px: { xs: 3, md: 6 } }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#067C92">
            Our Grooming Packages
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {packages.map((pkg, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ boxShadow: 4, borderRadius: '15px', textAlign: 'center', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold" color="#038B95" mb={2}>
                      {pkg.name}
                    </Typography>
                    <List>
                      {pkg.features.map((feature, i) => (
                        <ListItem key={i} sx={{ justifyContent: 'center' }}>
                          <ListItemIcon>
                            <CheckCircleIcon sx={{ color: '#038B95' }} />
                          </ListItemIcon>
                          {feature}
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Pricing Table */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Box sx={{ py: 8, px: { xs: 3, md: 6 }, bgcolor: '#F8F9FA' }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#026D7C">
            Package Pricing by Dog Size
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Dog Size</TableCell>
                  <TableCell align="center">Basic</TableCell>
                  <TableCell align="center">Premium</TableCell>
                  <TableCell align="center">Fluffy Royale</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dogSizes.map((row) => (
                  <TableRow key={row.size}>
                    <TableCell component="th" scope="row">
                      {row.size}
                    </TableCell>
                    <TableCell align="center">${row.prices.basic}</TableCell>
                    <TableCell align="center">${row.prices.premium}</TableCell>
                    <TableCell align="center">${row.prices.royale}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2" color="textSecondary" textAlign="center" mt={3}>
            * A <b>3.4% service charge</b> applies to all credit/debit card transactions.
          </Typography>
          <Typography variant="body2" color="textSecondary" textAlign="center" mt={1}>
            Pricing is automatically calculated for each breed—no need to call.
          </Typography>
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
    Ready to Pamper Your Pet?
  </Typography>
  <Button
    variant="contained"
    size="large"
    sx={{ mt: 3, bgcolor: '#fff', color: '#038B95', fontWeight: 'bold' }}
    href="/#booking"
  >
    Book Now
  </Button>
</Box>
      </motion.div>
    </Box>
  );
};

export default PricesPage;





