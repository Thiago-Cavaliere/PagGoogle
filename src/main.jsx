import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Body from './assets/body/Body.jsx'
import { CssBaseline } from '@mui/material'
import Navbar from './assets/Navbar/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <Navbar />
    <Body />
    <App />
  </StrictMode>,
)
