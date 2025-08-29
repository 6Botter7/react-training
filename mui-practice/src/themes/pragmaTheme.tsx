// theme.ts
import { createTheme } from '@mui/material/styles';

const pragmaTheme = createTheme({
  palette: {
    primary: {
      main: 'rgba(2, 101, 143, 0.8)',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F97316',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#4B5563',
      disabled: '#B0BEC5',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#1A3C65',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#f3f3f3ff',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem',
      color: '#1A3C65',
    },
    body1: {
      fontSize: '1rem',
      color: '#1F2937',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#4B5563',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: '8px 20px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(220deg, #19a3daff 0%, #1284b1ff 100%)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer',
            // use theme primary
            background: 'linear-gradient(220deg, #19a3daff 0%, #1284b1ff 100%)'
          },
          "&:hover span": {
            color: '#FFFFFF'
          }
        },
      },
    },
  },
});

export default pragmaTheme;
