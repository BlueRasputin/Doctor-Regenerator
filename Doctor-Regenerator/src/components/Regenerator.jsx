
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Doctors from './Doctors';
import '../Regenerator.css';



function Regenerator() {

    //index and setIndex used to change what doc is being displayed
    // const [index, setIndex] = useState(0);

    //useParams used to obtain doctor id
    const { id } = useParams();
    const initialIndex = Doctors.findIndex(doc => doc.id === parseInt(id));
    const [index, setIndex] = useState(initialIndex !== -1 ? initialIndex : 0);
    const navigate = useNavigate();
   

    //currentDoctor represents the doc that's being displayed.

    
    const currentDoctor = Doctors[index];

    useEffect(() => {
        const newIndex = Doctors.findIndex(doc => doc.id === parseInt(id));
        if (newIndex !== -1 && newIndex !== index) {
        setIndex(newIndex);
        }
    }, [id, index]

);
    

    useEffect(() => {
        document.body.className = currentDoctor.id <= 2 ? 'grayscale' : ''
    }, [currentDoctor.id]
    );


    // };
//Function to obtain props from doctor objects
//Function to iterate through doctors
//assign object to button

//How can I iterate through doctors?
//I've used an array of objects to store the data about the doctors.
//First, I should worry about displaying the content.  Forget all of the mechanics of the button.
//TODO: setDoctor needs to be used (and the use state).  onClick needs to have behavior for moving forward.
//Edge case: Do I care about a user being able to go back a doc?  Do I care about what happens when they reach the end?  Maybe a stretch goal.


//TODO:

function handleRegenerate() {
    let newIndex = index + 1;
    if (newIndex >= Doctors.length) {
        newIndex = 0;
    }
    
    // creates routes for the Doctor Directory to directly access doctor profiles
    setIndex(newIndex);
    navigate(`/Doctors/${Doctors[newIndex].id}`);
}

if (!currentDoctor) {
        return (<div>
        <h2>Doctor not found!</h2>
        </div>);
    }

return ( 
    <>
    <style> 
    background-image: <img src={currentDoctor.consoleRoom} alt="console-room" />
     </style>
     <div className="Doctor-page">

    <div className="Doctor-Picture">
        <img src={currentDoctor.image} alt="Doctor Image Here" / >
    </div>


    <div className="Doctor-Profile">
    <ul className="Doctor-Profile-Info">
        <li id="DoctorNumber"> {currentDoctor.doctorNumber} <br />DOCTOR</li>
        <li id="ageRange">Age Range: <br /> {currentDoctor.age}</li>
        <li id="actor">Portrayed by: <br /> {currentDoctor.actor}</li>
     
        <li id="notableWardrobe">Notable wardrobe item: <br />{currentDoctor.wardrobe}</li>
        <li id="Tenure">Tenure: {currentDoctor.tenure}</li>
        <li id="numEpisodes">Appearances: {currentDoctor.appearances}</li>
        <li id="intFact">Interesting Fact: {currentDoctor.intFact}</li>
        <br />
    </ul>
        <button className="Regenerate" onClick={handleRegenerate}>REGENERATE</button>
    </div>
    </div>
    <div className="Doctor-bio">
        {currentDoctor.Bio}
    </div>
    <div>
        
    </div>
    </>


    );


} 
export default Regenerator;

