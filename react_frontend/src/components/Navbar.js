import './Navbar.css'
import logo from '../assets/restaurant_icon.jpg'
import {Link} from 'react-router-dom'
import { Context } from '../context/appContext'
import { useContext, useEffect } from 'react'

function Navbar() {
    
    const {store, actions} = useContext(Context)
    
    console.log('Navbar rendered. Store: ', store.email, store.username)

    return(
        <div className="header">
            <div className='left-section'>
                <Link className='link' >Our restaurants</Link >
                <Link to='/restaurants' className='link'>Make a reservation</Link >
                <Link className='link'>Gallery</Link >
            </div>
            <div className='middle-section'>
                <img src={logo}></img>
            </div>
            <div className='right-section'>
                <Link className='link' to="/register">Register</Link>
                <Link className='link' to="/login">Log in</Link>
                <h2>{store.email}</h2>
                <h2>{store.username}</h2>
            </div>
	    </div>
    )
};
    export default Navbar;