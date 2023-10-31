import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider,createTheme } from '@mui/material'
import App from './App.jsx'
import './index.css'
const theme = createTheme({
  palette: {
    primary: {
      main: "#454545",
      // light: '#E36478', 
      // dark: '#89071C'
    },
    secondary: {
      main: "#454545",
      // light: "#0000009e",
    },
    // white: {
    //   main: "#ffffff",
    //   dark: '#c8c8c8'
    // },
    error: {
      main: "#d32f2f",
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <App/>
   </ThemeProvider>
  </React.StrictMode>,
)
