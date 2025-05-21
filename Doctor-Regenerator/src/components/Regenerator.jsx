import Doctors from './Doctors'

function Regenerator() {

    // const [doctor, setDoctor] = useState("")
//Function to obtain props from doctor objects
//Function to iterate through doctors
//assign object to button

return ( 
    <>
    <div id="Doctor-Profile">
    {/* <img alt="Doctor Image Here">Doctor image here</img> */}
    <h3 id="DocNum">11th Doctor</h3>
    <h5 id="ageRange">Age Range: 900-1000</h5>
    <h4></h4>
    <h4 id="notableWardrobe">Notable wardrobe item: Bowties</h4>
    <h4 id="actor">Portrayed by: Matt Smith</h4>
    <h4 id="yearsActive">Tenure: 2011-2015</h4>
    <h4 id="numEpisodes">Number of Episodes: 27</h4>

    </div>
    <div>
        <button id="regenerate">REGENERATE</button>
    </div>
    </>


    );


} 
export default Regenerator;
