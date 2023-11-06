import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
const theme = createTheme({
  palette: {
    primary: {
      main: '#454545'
    },
    secondary: {
      main: '#454545'
    },

    error: {
      main: '#d32f2f'
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
  </Router>
)

