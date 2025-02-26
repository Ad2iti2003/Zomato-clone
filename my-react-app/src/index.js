import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme(); // ✅ Ensures MUI theme is correctly created

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>  {/* ✅ Ensures ThemeProvider wraps correctly */}
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


