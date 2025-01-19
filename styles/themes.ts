import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#02a7cf', // Light Teal
      contrastText: '#ffffff', // White
    },
    secondary: {
      main: '#004d61', // Teal Blue
      contrastText: '#ffffff', // White
    },
    error: {
      main: '#ff6f61', // Coral
    },
    warning: {
      main: '#fcca46', // Yellow
    },
    background: {
      default: '#f9f9f9', // Off-White
      paper: '#ffffff', // White
    },
    text: {
      primary: '#333333', // Dark Gray
      secondary: '#002f4b', // Dark Blue
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#002f4b', // Dark Blue
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#002f4b', // Dark Blue
    },
    body1: {
      fontSize: '1rem',
      color: '#333333', // Dark Gray
    },
    body2: {
      fontSize: '0.875rem',
      color: '#333333', // Dark Gray
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#02a7cf',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#004d61',
          },
        },
        outlinedPrimary: {
          borderColor: '#02a7cf',
          color: '#02a7cf',
          '&:hover': {
            backgroundColor: '#a1e0e3',
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
              borderColor: '#d9e1e8', // Light Gray-Blue
            },
            '&:hover fieldset': {
              borderColor: '#02a7cf', // Light Teal
            },
            '&.Mui-focused fieldset': {
              borderColor: '#02a7cf', // Light Teal
            },
          },
        },
      },
    },
  },
});

export default theme;