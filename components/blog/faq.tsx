import { Box, Typography } from '@mui/material';
import { BlogFaq } from '../../data/posted';

export function BlogFaqSection({ faq }: { faq: BlogFaq[] }) {
  if (faq.length === 0) return null;
  return (
    <Box component="section" aria-labelledby="post-faq-heading" sx={{ mt: 4 }}>
      <Typography id="post-faq-heading" variant="h2" component="h2" gutterBottom>
        Common questions
      </Typography>
      {faq.map((item) => (
        <Box key={item.question}>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            <strong>{item.question}</strong>
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            {item.answer}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export function faqPageJsonLd(faq: BlogFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
