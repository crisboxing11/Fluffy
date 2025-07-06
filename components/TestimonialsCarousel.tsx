import { Box, Card, CardContent, Typography, Rating } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: 'Katie Jones',
    rating: 5,
    quote: 'Fluffy Pet Wash makes my life super easy when it comes to grooming my frenchie!'
  },
  {
    name: 'Toni Robinson',
    rating: 5,
    quote: 'The service was amazing! They kept me updated the whole time.'
  },
  {
    name: 'David P.',
    rating: 5,
    quote: 'Highly recommended! Fantastic service and my dog looked perfect.'
  },
  {
    name: 'Linda Creelman',
    rating: 5,
    quote: 'Wow! Amazing groomers who cared lovingly for my 12 year old shepherd.'
  },
  {
    name: 'Chelsea Ortiz',
    rating: 5,
    quote: 'Always does an amazing job for my husky. Highly recommend!'
  }
];

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
};

const TestimonialsCarousel = () => (
  <Box sx={{ maxWidth: 600, mx: 'auto' }}>
    <Slider {...sliderSettings}>
      {reviews.map((review, idx) => (
        <Card key={idx} sx={{ p: 3, m: 2 }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Rating value={review.rating} readOnly />
            <Typography variant="body1" mt={2}>
              &quot;{review.quote}&quot;
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" mt={1}>
              - {review.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Slider>
  </Box>
);

export default TestimonialsCarousel;
