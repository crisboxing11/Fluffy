import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Alert,
  AlertTitle,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PetsIcon from '@mui/icons-material/Pets';
import SpaIcon from '@mui/icons-material/Spa';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import PriceHeroImage from '../public/Dog8.jpg';
import PawPattern from '../public/paw-pattern.jpeg';
import Head from 'next/head';
// Animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Grooming packages and included features
const packages = [
  {
    name: "Basic",
    tagline: "Essential care",
    icon: PetsIcon,
    features: [
      "Hypoallergenic Wash",
      "Towel & blow dryer",
      "Brush out",
      "Perfume",
    ],
  },
  {
    name: "Premium",
    tagline: "Extra pampering",
    icon: SpaIcon,
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
    tagline: "Luxury spa treatment",
    icon: EmojiEventsIcon,
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

// Pricing for each dog size tier
const dogSizes = [
  { size: "Small", prices: { basic: 55, premium: 70, royale: 90 } },
  { size: "Medium", prices: { basic: 70, premium: 85, royale: 105 } },
  { size: "Large", prices: { basic: 90, premium: 115, royale: 145 } },
  { size: "Extra Large", prices: { basic: 100, premium: 125, royale: 165 } },
  { size: "XXL", prices: { basic: 110, premium: 145, royale: 185 } },
];

// Discounted pricing for recurring members (includes Fluffy Royale package)
const preferredPrices = [
  { size: "Small", price: 75 },
  { size: "Medium", price: 100 },
  { size: "Large", price: 125 },
  { size: "Extra Large", price: 145 },
  { size: "XXL", price: 185 },
];

const PricesPage = () => {
  const [showPreferred, setShowPreferred] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('preferredPopupDismissed');
      if (!dismissed) {
        setShowPreferred(true);
      }
    }
  }, []);

  const handleClosePreferred = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredPopupDismissed', 'true');
    }
    setShowPreferred(false);
  };

  return (
    <Box>
      {/* SEO & Metadata */}
      <Head>
        <title>Pet Grooming Prices | Fluffy Pet Wash</title>
        <meta name="description" content="Affordable and transparent pricing for luxury mobile pet grooming services. Check our pricing tiers and all-inclusive package." />
        <meta name="keywords" content="dog grooming prices, mobile pet grooming cost, pet grooming services, luxury pet wash pricing, affordable mobile grooming, cheap mobile dog grooming, mobile dog wash prices" />
        <meta name="author" content="Fluffy Pet Wash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://fluffypetwash.com/prices" />
         <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:title" content="Pet Grooming Prices | Fluffy Pet Wash" />
        <meta property="og:description" content="Check transparent, all-inclusive pricing tiers for mobile grooming services by Fluffy Pet Wash." />
        <meta property="og:image" content="https://fluffypetwash.com/fluffy-circle.png" />
        <meta property="og:image:alt" content="Fluffy Pet Wash Prices" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluffypetwash.com/prices" />

        {/* Twitter Card */}
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

      {/* Fluffy Preferred Pop-up */}
      <Dialog open={showPreferred} onClose={handleClosePreferred}>
        <DialogTitle sx={{ fontWeight: 'bold', color: '#067C92' }}>
          Join Fluffy Preferred
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Keep your pup on a six-week grooming schedule and enjoy automatic
            Fluffy Royale upgrades at discounted rates.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePreferred}>Maybe later</Button>
          <Button variant="contained" href="/#booking" onClick={handleClosePreferred}>
            Join Now
          </Button>
        </DialogActions>
      </Dialog>

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
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3))',
      zIndex: 1,
    }}
  />

  {/* Text Content */}
  <Container sx={{ position: 'relative', zIndex: 2, px: 3 }}>
    <Typography
      variant="h2"
      fontWeight="bold"
      sx={{
        fontSize: { xs: '2rem', md: '3.5rem' },
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)',
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
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
      }}
    >
      Choose from three packages designed to pamper every pup.
    </Typography>
  </Container>
</Box>
      </motion.div>

      {/* Grooming Packages */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#067C92">
            Our Grooming Packages
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {packages.map((pkg, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    boxShadow: 4,
                    borderRadius: '20px',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%)',
                    transition:
                      'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ px: 3, py: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <pkg.icon sx={{ color: '#067C92', fontSize: 40, mb: 1 }} />
                      <Tooltip title={pkg.tagline} arrow>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          color="#067C92"
                          mb={2}
                        >
                          {pkg.name}
                        </Typography>
                      </Tooltip>
                    </Box>
                    <List>
                      {pkg.features.map((feature, i) => (
                        <ListItem key={i} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: '#067C92' }} />
                          </ListItemIcon>
                          <Typography component="span">{feature}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>

      {/* Pricing Table */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Container sx={{ py: 8, bgcolor: '#F8F9FA' }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="#026D7C">
            Package Pricing by Dog Size
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead sx={{ backgroundColor: '#E1F5F8' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Dog Size</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Basic
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Premium
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Fluffy Royale
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dogSizes.map((row) => (
                  <TableRow
                    key={row.size}
                    sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}
                  >
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
        </Container>
      </motion.div>

      {/* Preferred Member Pricing */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <Container
          sx={{
            py: 8,
            mt: 4,
            background: 'linear-gradient(135deg, #FFF9C4 0%, #E1F5FE 100%)',
            borderRadius: 4,
            boxShadow: 6,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <StarIcon sx={{ color: '#F5B301', fontSize: 36, mr: 1 }} />
            <Typography variant="h4" fontWeight="bold" color="#067C92">
              Fluffy Preferred Member Pricing
            </Typography>
          </Box>
          <Typography textAlign="center" mb={3}>
            Keep your pup on a recurring schedule (six weeks or less) and automatically receive our
            Fluffy Royale package at these special rates.
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead sx={{ backgroundColor: '#E1F5F8' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Dog Size</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Fluffy Royale
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {preferredPrices.map((row) => (
                  <TableRow key={row.size} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                    <TableCell component="th" scope="row">{row.size}</TableCell>
                    <TableCell align="center">${row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2" color="textSecondary" textAlign="center" mt={3}>
            Pricing is automatically calculated for each breed—no need to call.
          </Typography>
          <Alert severity="warning" icon={<WarningAmberIcon />} sx={{ mt: 3 }}>
            <AlertTitle>Limited Spots</AlertTitle>
            Fluffy Preferred memberships are capped each year—reserve your place while spots last!
          </Alert>
        </Container>
      </motion.div>

      {/* CTA Section with PAW PRINTS Background */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
       <Box
  sx={{
    py: 6,
    textAlign: 'center',
    bgcolor: '#026D7C',
    color: 'white',
     backgroundImage: `url(${PawPattern.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '120px',
    backgroundBlendMode: 'multiply',
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





