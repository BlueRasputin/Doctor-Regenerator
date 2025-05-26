import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import {  BrowserRouter as Router } from 'react-router-dom';
import './index.css'
const root = createRoot(document.getElementById('root')).render(
  

   
  <StrictMode>
    <Router>
    <Header />
    <NavBar />
      <App />
    <Footer />
    </Router>
  </StrictMode>
)
