// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001c2e',
      text: '#DEEEFA',
      light: '#CFCFCF',
      blueish: '#1E2749',

    },
    secondary: {
      main: '#DADDD8',
    },
    cls: {
      textcolor: '#EEFOF2', 
    },
  },
  typography: {
    fontFamily: 'Open Sans, Arial, sans-serif'
  },
});

export default theme;
