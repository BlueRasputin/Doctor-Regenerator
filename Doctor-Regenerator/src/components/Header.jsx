import '../Header.css';
import { Link } from "react-router-dom";


function Header() {
    return (
    <>
        <div >
        <Link to='/'><div className="light"></div></Link>
        </div>
        {/* <link to='/'
        url
        rel="icon" 
        type="image/png" 
        href='../assets/favicon.png' /> */}



        
        
        <div className="Header">
            <h2>Doctor Who Regenerator</h2>
        </div>
        
    </>
    )
    }

export default Header;