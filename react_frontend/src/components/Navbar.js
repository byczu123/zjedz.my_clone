import './Navbar.css'
import {Link} from 'react-router-dom'
import { Context } from '../context/appContext'
import { useContext } from 'react'
import logo from '../assets/navbar-logo.png'

function Navbar() {
    
    const {store, actions} = useContext(Context)
    

    console.log('Navbar rendered. Store: ', store.email, store.username)
    
    return (
        <div className="navbar-container">
            <div className='left-section'>
                <Link to='/' id="logo" className='link'>
                    <img src={logo}></img>
                    <p>PROJECT</p><span id="dot" className='sieema'>.</span><p>db</p>
                </Link >
            </div>
            {
            store.email && store.username ? 
            <div className='right-section'>
                <p>hello, </p><p id='username'>{store.username}</p>
                <Link className='link' onClick={actions.logout}>Log out</Link>
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