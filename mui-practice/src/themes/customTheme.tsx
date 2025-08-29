import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#18181b', // dark background
      paper: '#23232a',   // slightly lighter for cards
    },
    primary: {
      main: '#39ff14', // neon green
      contrastText: '#18181b',
    },
    secondary: {
      main: '#ff00c8', // neon pink
      contrastText: '#18181b',
    },
    info: {
      main: '#00eaff', // neon blue
      contrastText: '#18181b',
    },
    text: {
      primary: '#e0e0e0', // light gray for text
      secondary: '#39ff14', // neon green for secondary text
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#39ff14',
      fontWeight: 700,
    },
    h2: {
      color: '#ff00c8',
      fontWeight: 600,
    },
    h3: {
      color: '#00eaff',
      fontWeight: 500,
    },
    body1: {
      color: '#e0e0e0',
    },
    body2: {
      color: '#39ff14',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      color: '#18181b',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 0 8px #39ff14',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#23232a',
          color: '#e0e0e0',
        },
      },
    },
  },
});

export { customTheme };
