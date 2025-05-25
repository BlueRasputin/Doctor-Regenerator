
import React, { useState } from 'react';
import Doctors from './Doctors';
import '../Regenerator.css';



function Regenerator() {

    //index and setIndex used to change what doc is being displayed
    const [index, setIndex] = useState(0);



    //BELOW IS EXPERIMENTAL CODE I MADE WHEN I WAS SLEEPY
    // const fetchDoc = () => {
    //     if (doctor && typeof docMap[doctor] === "object")
    // const docMap = doctor Map();
    // Doctors.forEach((Doctor) => m.set(doc.picture, doc.actor, doc.ageRange, doc.bio));


    //currentDoctor represents the doc that's being displayed.

    //I need to access the data of currentDoctor through dot notation 
    //EX: currentDoctor.picture, currentDoctor.actor, etc.
    const currentDoctor = Doctors[index];


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
    
    setIndex(newIndex);
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
        <h3 id="DocNum"> {currentDoctor.doctorNumber} <br />Doctor</h3>
        <h5 id="ageRange">Age Range: <br /> {currentDoctor.age}</h5>
        <h5 id="actor">Portrayed by: <br /> {currentDoctor.actor}</h5>
     <h5></h5>
        <h5 id="notableWardrobe">Notable wardrobe item: <br />{currentDoctor.wardrobe}</h5>
        <h5 id="Tenure">Tenure: {currentDoctor.tenure}</h5>
        <h5 id="numEpisodes">Appearances: {currentDoctor.appearances}</h5>
        <h6 id="intFact">Interesting Fact: {currentDoctor.intFact}</h6>
        <br />
        <button id="regenerate" onClick={handleRegenerate}>REGENERATE</button>
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

