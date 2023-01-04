import React, {useState, useRef, useEffect, useContext} from 'react'
import '../styles/LoginRegisterModal.css'
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router-dom';

const LoginRegisterModal = () => {
    
    const [show, setShow] = useState(false);
    const [activeButton, setActiveButton] = useState('login-button')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const switchActive = event => {
        setActiveButton(event.target.dataset.button)
    }

    console.log('LoginRegisterModal rendered')

    return (
      <>
        <Link className='navbar-link' onClick={handleShow}>
            <FontAwesomeIcon className='icon' icon={faUser} style={{marginRight: '10%', color: 'white'}} /> Logowanie / rejestracja
        </Link>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Logowanie / rejestracja</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='login-register-navigation'>
                    <button data-button='login-button' 
                    className={activeButton === 'login-button' ? 'active' : ''} onClick={switchActive}>
                        ZALOGUJ SIĘ
                    </button>
                    <button data-button='register-button'
                    className={activeButton === 'register-button' ? 'active' : ''} onClick={switchActive}>
                        UTWÓRZ KONTO
                    </button>
                </div>
                <div className='login-register-form'>
                    {activeButton === 'login-button' ? 
                    <LoginForm/> 
                    : <RegisterForm/>}
                </div>
            </Modal.Body>
        </Modal>
      </>
    );
}

export default LoginRegisterModal