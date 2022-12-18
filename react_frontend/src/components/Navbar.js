import './Navbar.css'
import logo from '../assets/restaurant_icon.jpg'
import {Link} from 'react-router-dom'

function Navbar() {
    return(
        <div className="header">
            <div className='left-section'>
                <Link className='link' >Our restaurants</Link >
                <Link className='link'>Make a reservation</Link >
                <Link className='link'>Gallery</Link >
            </div>
            <div className='middle-section'>
                <img src={logo}></img>
            </div>
            <div className='right-section'>
                <Link className='link' to="/register">Register</Link>
                <Link className='link' to="/login">Log in</Link>
            </div>
	    </div>
    )
};
    export default Navbar;