import './Navbar.css'
import logo from '../assets/restaurant_icon.jpg'
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="header">
            <div className='left-section'>
                <button>Our restaurants</button>
                <Link to='/restaurants'>Make a reservation</Link>
                <button>Make a reservation</button>
                <button>Gallery</button>
            </div>
            <div className='middle-section'>
                <img src={logo}></img>
            </div>
            <div className='right-section'>
                <button>Register</button>
                <button>Log in</button>
            </div>
	    </div>
    )
};
    export default Navbar;