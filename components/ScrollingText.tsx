import { Box, Typography, keyframes } from '@mui/material';

const scrollAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const ScrollingText = () => {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        bgcolor: '#038B95',
        color: 'white',
        py: 2,
        position: 'relative',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          display: 'inline-block',
          animation: `${scrollAnimation} 15s linear infinite`,
          fontSize: { xs: '1rem', md: '1.3rem' },
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
      >
        We Focus and Specialize in The Mobile Dog Wash & Spa Experience For The Furry Members of Your Family 
      </Typography>
    </Box>
  );
};

export default ScrollingText;
