import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import './index.css'
import App from './App.jsx'
import {  BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.getElementById('root')).render(
  

   
  <StrictMode>
    <Router>
    <Header />
    <NavBar />
      <App />
    </Router>
  </StrictMode>
)
