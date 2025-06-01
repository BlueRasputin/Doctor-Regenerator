import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Framing/Header.jsx'
import NavBar from './components/Framing/NavBar.jsx'
import App from './App.jsx'
import Footer from './components/Framing/Footer.jsx'
import {  BrowserRouter as Router } from 'react-router-dom';
import './index.css'
// import '/App.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Header />
    <NavBar />
      <App />
    <Footer />
    </Router>
  </StrictMode>
)
