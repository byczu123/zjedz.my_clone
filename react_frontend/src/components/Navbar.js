import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import { Context } from '../context/appContext'
import { useContext,useState } from 'react'
import logo from '../assets/navbar-logo.png'
import RegisterModal from './RegisterModal'

function Navbar() {
    const [modalShow, setModalShow] = useState(false);
    const {store, actions} = useContext(Context)
    
    console.log('Navbar rendered. Store: ', store.email, store.username)
    
    return (
        <div className="navbar-container">
            <div className='left-section'>
                <Link to='/' className='link'>
                    <img src={logo}></img>
                    <p>PROJECT</p>
                    <p id="dot" className='sieema'>.</p>
                    <p>db</p>
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
                <Link onClick={() => setModalShow(true)} className='link'>Register</Link>
                <Link className='link' to="/login">Log in</Link>
                <RegisterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            }
	    </div>
    )
};
    export default Navbar;