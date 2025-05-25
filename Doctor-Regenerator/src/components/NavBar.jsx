import React from "react";
import { Link } from 'react-router-dom';
import '../Nav.css';



function NavBar() {
  return (
    <nav className="nav">
    <h2 id="title">Doctor Who <br /> Regenerator</h2>
    <br />
    <div className="siteTitle"></div>
                <Link to="/"></Link>
      <ul>
        <li>
          <Link to="/">REGENERATOR</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}




export default NavBar;