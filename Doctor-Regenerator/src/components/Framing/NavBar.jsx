import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';
import { useEffect, useState } from "react";





//Function to check if  mobile and switch for icons accordingly
function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className={isMobile ? 'icon-home' : ''}>{isMobile ? '' : 'HOME'}</Link>
        </li>
        <li>
          <Link to="/Regenerator" className={isMobile ? 'icon-regenerator' : ''}>{isMobile ? '' : 'REGENERATOR'}</Link>
        </li>
        <li className="Navitem">
          <Link to="/DocDirectory" className={isMobile ? 'icon-doctor' : ''}>{isMobile ? '' : 'DOCTOR DIRECTORY'}</Link>
        </li>
        <li className="Navitem">
          <Link to="/Episodes" className={isMobile ? 'icon-episodes' : ''}>{isMobile ? '' : 'EPISODES'}</Link>
        </li>
        <li>
          <Link to="/About" className={isMobile ? 'icon-about' : ''}>{isMobile ? '' : 'ABOUT'}</Link>
        </li>
        <li>
          <Link to="/Contact" className={isMobile ? 'icon-contact' : ''}>{isMobile ? '' : 'CONTACT'}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;