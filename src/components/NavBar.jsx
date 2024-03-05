import { Link } from "react-router-dom";

function NavBar() {
    return ( 
        <div className="navbar">
            <span><Link to='/'>Home</Link></span>
            <span><Link to='/form'>New Player</Link></span>
        </div>
     );
}

export default NavBar;