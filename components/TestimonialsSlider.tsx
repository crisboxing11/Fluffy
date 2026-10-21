import { useState, type HTMLAttributes } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import Image, { type StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewDog1 from "../public/ReviewDog1.jpg";
import ReviewDog2 from "../public/ReviewDog2.jpg";
import ReviewDog4 from "../public/ReviewDog4.jpg";
import ReviewDog5 from "../public/ReviewDog5.jpg";
import ReviewDog6 from "../public/ReviewDog6.jpg";
import ReviewDog7 from "../public/ReviewDog7.jpg";

type HomeTestimonial = {
  name: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
};

const testimonials: HomeTestimonial[] = [
  {
    name: "Katie Jones, Las Vegas",
    text: "Fluffy pet wash makes my life super easy when it comes to grooming my crazy frenchie! It's the best not having to leave my house & drive my dog to the groomers. My dog loves to bark and freak out everytime he sees any other dog so taking him to an actual groomers was always a mission. Fluffy pet wash only takes around 20-30 mins to wash my dog and everytime he smells so good plus feels and looks so clean! The staff are very friendly and I know my dog is in great hands! I definitely recommend fluffy pet for all ur future dog grooming! 🐾🐶",
    image: ReviewDog1,
    imageAlt: "Woman in a black shirt holding a small white dog",
  },
  {
    name: "Toni Robinson, Las Vegas",
    text: "The service was amazing! They were so patient. My grand dog had never had a professional grooming before and they calmed her nerves and let me know every step of the way how it was going! I'm so grateful and will definitely use them again!",
    image: ReviewDog2,
    imageAlt: "Woman in a black shirt holding a small white dog indoors",
  },
  {
    name: "David P., North Las Vegas",
    text: "Highly recommended! Fantastic service, and my dog looked perfect!",
    image: ReviewDog4,
    imageAlt:
      "Small white dog with a red bow against a light background in North Las Vegas, NV",
  },
  {
    name: "Linda Creelman, North Las Vegas",
    text: "Wow! Amazing groomers! Vicente Cared lovingly for my 12 year old shepherd Chloe. Quality service!♥️🏚🐕😊",
    image: ReviewDog5,
    imageAlt: "Black and white dog lying on green grass outdoors",
  },
  {
    name: "Christie Gribben, Las Vegas",
    text: "Great same day grooming for my Rottweiler. My dog looked wonderful from top to bottom! Would highly recommend.",
    image: ReviewDog6,
    imageAlt: "Brown dog being bathed in a tub",
  },
  {
    name: "Chelsea Ortiz, Las Vegas",
    text: "Always does an amazing job for my husky. Highly recommend!",
    image: ReviewDog7,
    imageAlt: "Gray and white dog lying down against a blue-gray background",
  },
];

const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  adaptiveHeight: true,
  pauseOnHover: true,
  fade: true,
  cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  lazyLoad: "ondemand" as const,
};

function TestimonialCard({
  review,
  ...slideProps
}: { review: HomeTestimonial } & HTMLAttributes<HTMLDivElement>) {
  return (
    <Box {...slideProps} sx={{ px: 2 }}>
      <Card
        sx={{
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
          p: { xs: 2.5, sm: 3, md: 6 },
          borderRadius: { xs: "20px", sm: "24px", md: "32px" },
          bgcolor: "white",
          mx: { xs: 0.5, sm: "auto" },
          border: "1px solid rgba(147, 237, 240, 0.3)",
          background: "linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)",
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 0,
            "&:last-child": { pb: 0 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              mb: { xs: 2.5, sm: 3, md: 4 },
            }}
          >
            <Box
              sx={{
                width: { xs: 80, sm: 100, md: 150 },
                height: { xs: 80, sm: 100, md: 150 },
                borderRadius: "50%",
                overflow: "hidden",
                border: {
                  xs: "2px solid #93EDF0",
                  sm: "3px solid #93EDF0",
                  md: "4px solid #93EDF0",
                },
                boxShadow: "0 8px 32px rgba(0, 173, 205, 0.2)",
                position: "relative",
              }}
            >
              <Image
                src={review.image}
                alt={review.imageAlt}
                fill
                sizes="(max-width: 599px) 80px, (max-width: 899px) 100px, 150px"
                style={{
                  objectFit: "cover",
                  filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
                }}
                quality={75}
                loading="lazy"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: -4, sm: -6, md: -8 },
                right: { xs: -4, sm: -6, md: -8 },
                width: { xs: 24, sm: 28, md: 40 },
                height: { xs: 24, sm: 28, md: 40 },
                borderRadius: "50%",
                bgcolor: "#00ADCD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0, 173, 205, 0.4)",
              }}
            >
              <FavoriteIcon
                sx={{
                  color: "white",
                  fontSize: { xs: 12, sm: 14, md: 20 },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 0.5,
              mb: { xs: 2, sm: 2.5, md: 3 },
            }}
          >
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                sx={{
                  color: "#FFD700",
                  fontSize: { xs: 16, sm: 18, md: 20 },
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(147, 237, 240, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%)",
              borderRadius: { xs: "10px", sm: "12px", md: "16px" },
              p: { xs: 2, sm: 2.5, md: 3 },
              mb: { xs: 1.5, sm: 2, md: 3 },
              border: "1px solid rgba(147, 237, 240, 0.3)",
              position: "relative",
              maxWidth: { xs: "100%", sm: 650 },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#067C92",
                lineHeight: 1.6,
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1.15rem" },
                fontWeight: 500,
                fontStyle: "italic",
                position: "relative",
                "&::before": {
                  content: '""',
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                  color: "#93EDF0",
                  position: "absolute",
                  top: { xs: -8, sm: -10, md: -15 },
                  left: { xs: -8, sm: -10, md: -15 },
                  fontFamily: "serif",
                  lineHeight: 1,
                  opacity: 0.7,
                },
              }}
            >
              {review.text}
            </Typography>
          </Box>
          <Box
            sx={{
              background: "linear-gradient(135deg, #067C92 0%, #00ADCD 100%)",
              borderRadius: { xs: "8px", sm: "10px", md: "12px" },
              px: { xs: 2, sm: 2.5, md: 3 },
              py: { xs: 0.8, sm: 1 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#FFFFFF",
                fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                lineHeight: 1.2,
              }}
            >
              {review.name}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default function TestimonialsSlider() {
  const [ready, setReady] = useState(false);

  return (
    <div className="testimonials-slider-reserve">
      {ready ? null : <TestimonialCard review={testimonials[0]} />}
      <div className={ready ? undefined : "testimonials-slider-pending"}>
        <Slider
          {...testimonialSettings}
          onInit={() => setReady(true)}
          aria-label="Testimonials carousel"
        >
          {testimonials.map((review, index) => (
            <TestimonialCard key={index} review={review} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
