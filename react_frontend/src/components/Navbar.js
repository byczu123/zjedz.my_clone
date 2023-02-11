import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../context/appContext'
import { useContext, useState } from 'react'
import logo from '../assets/navbar-logo.png'
import RegisterModal from './RegisterModal'
import LoginRegisterModal from './LoginRegisterModal'

function Navbar() {
    const [modalShow, setModalShow] = useState(false);
    const { store, actions } = useContext(Context)

    console.log('Navbar rendered. Store: ', store.email, store.username)

    return (
        <div className="navbar-container">
            <div className='left-section'>
                <Link to='/' className='navbar-link'>
                    <img src={logo}></img>
                    <p>PROJECT</p>
                    <p id="dot" className='sieema'>.</p>
                    <p>db</p>
                </Link >
            </div>
            {
                store.email && store.username ?
                    <div className='right-section'>
                        <p>hello,&nbsp;</p><p id='username'>{store.username}</p>
                        <Link className='navbar-link' to='/reservations'>Twoje rezerwacje</Link>
                        <Link className='navbar-link' onClick={actions.logout}>Wyloguj</Link>
                    </div>
                    :
                    <div className='right-section'>
                        {/* <Link onClick={() => setModalShow(true)} className='navbar-link'>Register</Link>
                <Link className='navbar-link' to="/login">Log in</Link> */}
                        {/* <RegisterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> */}
                        <LoginRegisterModal />
                    </div>
            }
        </div>
    )
};
export default Navbar;