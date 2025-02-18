import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00ADCD', // Main brand color
      contrastText: '#FFFFFF', // White text
    },
    secondary: {
      main: '#067C92', // Darker teal for contrast
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#DCDCDC', // Light gray background for sections
      paper: '#FFFFFF', // White for cards and containers
    },
    text: {
      primary: '#038B95', // Teal text
      secondary: '#067C92', // Darker teal for headings
    },
    error: {
      main: '#E53935',
    },
    warning: {
      main: '#FBC02D',
    },
    success: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
    h1: {
      fontSize: '2.8rem',
      fontWeight: 700,
      color: '#067C92',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 600,
      color: '#067C92',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 600,
      color: '#038B95',
    },
    body1: {
      fontSize: '1rem',
      color: '#067C92',
    },
    body2: {
      fontSize: '0.9rem',
      color: '#038B95',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s ease-in-out',
        },
        containedPrimary: {
          backgroundColor: '#00ADCD',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#038B95',
            transform: 'scale(1.05)',
          },
        },
        outlinedPrimary: {
          borderColor: '#00ADCD',
          color: '#00ADCD',
          '&:hover': {
            backgroundColor: '#93EDF0',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#038B95',
            },
            '&:hover fieldset': {
              borderColor: '#00ADCD',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0AC3E6',
            },
          },
        },
      },
    },
  },
});

export default theme;