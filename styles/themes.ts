import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00ADCD', // Brand Primary
      contrastText: '#FFFFFF', // White Text
    },
    secondary: {
      main: '#0AC3E6', // Accent Color
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#DCDCDC', // Light Gray Background
      paper: '#FFFFFF', // White for Cards/Containers
    },
    text: {
      primary: '#067C92', // Dark Teal for Headings
      secondary: '#038B95', // Medium Teal for Secondary Text
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
            backgroundColor: '#04ACB8',
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