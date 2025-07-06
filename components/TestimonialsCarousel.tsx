import { Box, Card, CardContent, Typography, Rating, IconButton } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PetsIcon from '@mui/icons-material/Pets';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: 'Katie Jones',
    rating: 5,
    quote: 'Fluffy Pet Wash makes my life super easy. They treat my frenchie like royalty!'
  },
  {
    name: 'Toni Robinson',
    rating: 5,
    quote: 'The service was amazing! They kept me updated and calmed my nervous pup.'
  },
  {
    name: 'David P.',
    rating: 5,
    quote: 'Highly recommended! Fantastic service and my dog looked perfect.'
  },
  {
    name: 'Linda Creelman',
    rating: 5,
    quote: 'Wow! Amazing groomers who cared lovingly for my senior shepherd.'
  },
  {
    name: 'Chelsea Ortiz',
    rating: 5,
    quote: 'Always does an amazing job for my husky. Highly recommend!'
  }
];

type ArrowProps = { onClick?: () => void; direction: 'next' | 'prev' };
const Arrow = ({ onClick, direction }: ArrowProps) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      [direction === 'next' ? 'right' : 'left']: -40,
      bgcolor: '#00ADCD',
      color: '#fff',
      '&:hover': { bgcolor: '#038B95' },
      zIndex: 1,
    }}
  >
    {direction === 'next' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
  </IconButton>
);

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  swipeToSlide: true,
  nextArrow: <Arrow direction="next" />,
  prevArrow: <Arrow direction="prev" />,
};

const TestimonialsCarousel = () => (
  <Box sx={{ maxWidth: 600, mx: 'auto' }}>
    <Slider {...sliderSettings}>
      {reviews.map((review, idx) => (
        <Card key={idx} sx={{ p: 4, m: 2, bgcolor: '#F8F9FA', borderRadius: '20px', position: 'relative' }}>
          <PetsIcon sx={{ position: 'absolute', top: -20, left: 'calc(50% - 16px)', fontSize: 32, color: '#00ADCD' }} />
          <CardContent sx={{ textAlign: 'center', mt: 2 }}>
            <FormatQuoteIcon sx={{ fontSize: 40, color: '#038B95', mb: 1 }} />
            <Typography variant="body1" color="text.secondary" mb={2}>
              “{review.quote}”
            </Typography>
            <Rating value={review.rating} readOnly sx={{ color: '#FFC107' }} />
            <Typography variant="subtitle2" color="#067C92" mt={1} fontWeight="bold">
              - {review.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Slider>
  </Box>
);

export default TestimonialsCarousel;
