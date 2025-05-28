import React from "react";
import { Link } from 'react-router-dom';

import Doctors from "./Doctors.jsx";



function DocDirectory() {
  return (
    <div className="Doctor-grid">
      {Doctors.map((Doctor) => (
        <Link to={`/Doctors/${Doctor.id}`} key={Doctor.id} className="Doctor-Card">
          <img src={Doctor.image} alt={`${Doctor.doctorNumber} Doctor`} />
          <h3>{Doctor.doctorNumber} Doctor</h3>
        </Link>
      ))}
    </div>
  );
}


export default DocDirectory;

