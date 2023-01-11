import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../context/appContext'
import { useContext, useState } from 'react'
import logo from '../assets/navbar-logo.png'
import RegisterModal from './RegisterModal'
import LoginRegisterModal from './LoginRegisterModal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [modalShow, setModalShow] = useState(false);
    const { store, actions } = useContext(Context)

    console.log('Navbar rendered. Store: ', store.email, store.username, store.user_id)

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
                        <p>Witaj,&nbsp;</p><p id='username'>{store.username}</p>
                        <Link to='profile'state={{
                                        user_id: store.user_id
                                    }}><FontAwesomeIcon icon={faList} className='list-icon'></FontAwesomeIcon></Link>
                        <Link className='navbar-link' onClick={actions.logout}>Log out</Link>
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