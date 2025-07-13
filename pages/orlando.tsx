import { Box, Typography } from '@mui/material';
import Head from 'next/head';

const OrlandoGroomingPage = () => (
  <Box>
    <Head>
      <title>Mobile Dog Grooming in Orlando | Fluffy Pet Wash</title>
      <meta
        name="description"
        content="Professional mobile pet grooming services in Orlando. Learn about the benefits, our process, and answers to common questions."
      />
      <link rel="canonical" href="https://fluffypetwash.com/orlando" />
    </Head>
    <Box sx={{ py: 6, px: 3 }}>
      <Typography variant="h1" fontWeight="bold" mb={4} color="#067C92">
        Orlando Mobile Pet Grooming
      </Typography>
      <Typography variant="body1" paragraph>
        Fluffy Pet Wash proudly brings spa-quality grooming directly to pet parents around Orlando. Our fully equipped mobile vans arrive at your home ready to provide a calm and personalized experience for your dog. By avoiding crowded salons and lengthy waits, your pet receives focused attention in a familiar environment. Our Orlando team is passionate about gentle handling and thoughtful care, ensuring each grooming session leaves tails wagging and owners smiling.
      </Typography>
      <Typography variant="body1" paragraph>
        Clients choose Fluffy Pet Wash because we combine convenience with top-notch results. Every visit includes a soothing bath using hypoallergenic products, a complete brush out, ear cleaning, nail trimming, and a fluff dry. We also offer coat conditioning and specialized treatments for sensitive skin. Regular grooming keeps your dog comfortable and reduces shedding around the house. Best of all, you never have to rearrange your day to drive across town—our groomers come straight to your doorstep at a time that works for you.
      </Typography>
      <Typography variant="body1" paragraph>
        Our process is simple. After you schedule an appointment online or by phone, we confirm your pet’s needs and any special requests. On the day of service, our groomer greets your dog with patience and kindness before beginning the bath and grooming routine. We carefully check for any health concerns such as skin irritations or ear issues and let you know about them. Throughout the session, we keep your pet safe and comfortable, and we finish with a tidy trim and fresh scent so your dog looks and feels amazing.
      </Typography>
      <Typography variant="body1" paragraph>
        Because we work out of custom vans outfitted with clean water tanks and professional tools, there is no mess for you to worry about. Our service is ideal for busy households, senior pet owners, or anyone who wants a stress-free grooming solution. We handle dogs of all sizes and breeds and tailor our approach to suit their temperament. Fluffy Pet Wash takes great pride in building trusting relationships with pets and their families throughout the Orlando area.
      </Typography>
      <Typography variant="h2" fontWeight="bold" mt={6} mb={2} color="#067C92">
        Frequently Asked Questions
      </Typography>
      <Typography variant="h6" fontWeight="bold" mt={2}>How do I book an appointment?</Typography>
      <Typography variant="body1" paragraph>
        Booking is easy—simply use our online form or give us a call. You can choose a time that suits your schedule, and we will confirm all details including your dog’s breed and any special instructions.
      </Typography>
      <Typography variant="h6" fontWeight="bold" mt={2}>What areas of Orlando do you serve?</Typography>
      <Typography variant="body1" paragraph>
        We provide mobile grooming throughout the greater Orlando region, including Winter Park, Lake Nona, and the surrounding suburbs. If you are unsure whether we cover your neighborhood, just reach out and we’ll be happy to assist.
      </Typography>
      <Typography variant="h6" fontWeight="bold" mt={2}>Do you groom nervous or elderly dogs?</Typography>
      <Typography variant="body1" paragraph>
        Absolutely. Our groomers have experience working with dogs of all temperaments and ages. The calm one-on-one setting inside our van helps reduce anxiety, and we adjust our techniques to keep senior pets comfortable from start to finish.
      </Typography>
    </Box>
  </Box>
);

export default OrlandoGroomingPage;
