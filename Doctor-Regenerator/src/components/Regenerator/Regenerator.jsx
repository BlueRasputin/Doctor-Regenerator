
import React, { useState, useEffect, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Doctors from '../Doctors';
import './Regenerator.css';
// import RegenSound from '../assets/DWRegenSound.mp3'


function Regenerator() {

    //index and setIndex used to change what doc is being displayed
    // const [index, setIndex] = useState(0);

    //useParams used to obtain doctor id
    const { id } = useParams();
    const initialIndex = Doctors.findIndex(doc => doc.id === parseInt(id));
    const [index, setIndex] = useState(initialIndex !== -1 ? initialIndex : 0);
    const navigate = useNavigate();
    
   
    //currentDoctor represents the doc that's being displayed. Pulls based on index

    
    const currentDoctor = Doctors[index];


    //Updates index based on which Doctor Page URL
    useEffect(() => {
        const newIndex = Doctors.findIndex(doc => doc.id === parseInt(id));
        if (newIndex !== -1 && newIndex !== index) {
        setIndex(newIndex);
        }
    }, [id, index]

);
    
    //Function to toggle grayscale for doctors 1 & 2
    useEffect(() => {
        document.body.className = currentDoctor.id <= 2 ? 'grayscale' : ''
    }, [currentDoctor.id]
    );

//Function for regenerate button, adds one to index and returns that Doctor in the Doctors Array
function handleRegenerate() {
    let newIndex = index + 1;
    if (newIndex >= Doctors.length) {
        newIndex = 0;
    }
    
    // creates URL routes for the Doctor Directory to directly access doctor profiles
    setIndex(newIndex);
    navigate(`/Doctors/${Doctors[newIndex].id}`);
}
//Handles Edge case if Doctor Page is not reached properly or Doctor ID somehow is not accessible
if (!currentDoctor) {
        return (<div>
        <h2>Doctor not found!</h2>
        </div>);
    }

return ( 
    <>
    
    
     <div className="Doctor-page">

        <div className="Doctor-Picture">
            <img src={currentDoctor.image} alt="Doctor Image Here" / >
        </div>


        <div className="Doctor-Profile">
            <br />
                
            <button className="Regenerate" onClick={handleRegenerate}>Regenerate</button>
            
            <br />
            
            
            <ul className="Doctor-Profile-Info">
                <li id="Doctor-Number"> {currentDoctor.doctorNumber} DOCTOR</li>
                <li id="ageRange">Age Range: <br /> {currentDoctor.age}</li>
                <li id="actor">Portrayed by: <br /> {currentDoctor.actor}</li>
                <li id="Companions">Companion(s): <br />{currentDoctor.companions}</li>
                <li id="Tenure">Tenure: {currentDoctor.tenure}</li>
                <li id="numEpisodes">Appearances: {currentDoctor.appearances}</li>
                <li id="intFact">Interesting Fact:<br/>{currentDoctor.intFact}</li>              
            </ul>
            
            
        </div>
    </div> 
            <div className="Doctor-page">
                <div className="Doctor-bio">
                    {currentDoctor.bio ? currentDoctor.bio : 'No bio available.'}
                </div>
            </div>
    </>

    );
} 
export default Regenerator;

