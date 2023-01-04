import React, {useContext, useState, useEffect, useRef} from 'react'
import { Context } from '../context/appContext'
import '../styles/LoginAndRegisterForm.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey, faEnvelope, faUser, faCheck} from '@fortawesome/free-solid-svg-icons'

const RegisterForm = () => {
    
    const {store, actions} = useContext(Context)
    const [errorMessage, setErrorMessage] = useState(null)

    const emailInput = useRef()
    const passwordInput = useRef()
    const usernameInput = useRef()
    const confirmPasswordInput = useRef()

    console.log('RegisterForm rendered. Store: ', store.email, store.username)
    
    const submitRegistration = () => {
        const username = usernameInput.current.value
        const email = emailInput.current.value
        const password = passwordInput.current.value
        const confirmPassword = confirmPasswordInput.current.value
      
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            })
        }
        fetch('/auth/register', options)
        .then(res => {
            if (res.status === 200) return res.json()
        })
        .then(data => {
            console.log(data)
            setErrorMessage(data.message)
            
        })
      }
    
      return (
        <div className='register-modal-form'>
            <div className='form-inner-container'>
                <FontAwesomeIcon icon={faUser} className='register-form-icon'/>
                <input type='text' placeholder='nazwa użytkownika...' ref={usernameInput}></input>
            </div>
            <div className='form-inner-container'>
                <FontAwesomeIcon icon={faEnvelope} className='register-form-icon'/>
                <input type='text' placeholder='email...' ref={emailInput}></input>
            </div>
            <div className='form-inner-container'>
                <FontAwesomeIcon icon={faKey} className='register-form-icon'/>
                <input type='password' placeholder='hasło...' ref={passwordInput}></input>
            </div>
            <div className='form-inner-container'>
                <FontAwesomeIcon icon={faCheck} className='register-form-icon'/>
                <input type='password' placeholder='potwierdź hasło...' ref={confirmPasswordInput}></input>
            </div>
            <div className='form-inner-container'>
                <p style={{margin: '0', color: 'red'}}>{errorMessage}</p>
            </div>
            <div className='login-form-footer'>
                <button type='button' onClick={submitRegistration}>UTWÓRZ KONTO</button>
            </div>
        </div>
    )
}

export default RegisterForm