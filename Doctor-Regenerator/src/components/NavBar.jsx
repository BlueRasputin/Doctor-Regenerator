import React from "react";
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <nav className="navbar">
    <div className="siteTitle"></div>
                <Link to="/"></Link>
      <ul>
        <li>
          <Link to="/">Regenerator</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}




export default NavBar;