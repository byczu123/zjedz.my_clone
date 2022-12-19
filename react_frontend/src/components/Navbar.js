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
            {
            store.email && store.username ? 
            <div className='right-section'>
                <h2>{store.username}</h2>
                <button onClick={actions.logout}>Log out</button>
            </div> 
            :
            <div className='right-section'>
                <Link className='link' to="/register">Register</Link>
                <Link className='link' to="/login">Log in</Link>
            </div>
            }
	    </div>
    )
};
    export default Navbar;