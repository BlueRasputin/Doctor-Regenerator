import '../Header.css';
import { Link } from "react-router-dom";


function Header() {
    return (
    <>
    <Link rel="shortcut icon" href=""></Link>
    <Link to='/'><div className="light"></div></Link>
    
    <div className="Header">
        <h2>Doctor Who Regenerator</h2>
    </div>
    
</>
)
    }

export default Header;