import React from "react";
import { Link } from 'react-router-dom';
import '../Nav.css';



function NavBar() {
  return (
    <nav className="nav">
    
      <ul>
        
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/Regenerator">REGENERATOR</Link>
        </li>
        <li>
          <Link to="/DocDirectory">DOCTOR DIRECTORY</Link>
        </li>
        <li>
          <Link to="/Episodes">EPISODES</Link>
        </li>
        <li>
          <Link to="/About">ABOUT</Link>
        </li>
        <li>
          <Link to="/Contact">CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}




export default NavBar;