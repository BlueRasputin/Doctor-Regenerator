import '../Header.css';
import { Link } from "react-router-dom";


function Header() {
    return (
    <>

        <Link to='/'><div className="light"></div></Link>

        <link to='/'
        rel="icon" 
        type="image/png" 
        href='../assets/favicon.png' />



        
        
        <div className="Header">
            <h2>Doctor Who Regenerator</h2>
        </div>
        
    </>
    )
    }

export default Header;