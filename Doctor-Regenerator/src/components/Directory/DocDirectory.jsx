import React from "react";
import { Link } from 'react-router-dom';
import './Doc-Directory.css'
import Doctors from "../Doctors.jsx";


//Displays Picture and name for each doctor in a directory page
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

