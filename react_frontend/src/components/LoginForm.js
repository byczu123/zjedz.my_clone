import React, { useContext, useState, useEffect, useRef } from 'react'
import { Context } from '../context/appContext'
import '../styles/LoginAndRegisterForm.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEnvelope, faK } from '@fortawesome/free-solid-svg-icons'

const LoginForm = () => {

    const { store, actions } = useContext(Context)
    const [errorMessage, setErrorMessage] = useState(null)

    const emailInput = useRef()
    const passwordInput = useRef()

    console.log('LoginForm rendered. Store: ', store.email, store.username)

    const submitLogin = () => {
        const email = emailInput.current.value
        const password = passwordInput.current.value

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }

        fetch('auth/login', options)
            .then(res => {
                if (res.status === 200) return res.json()
            })
            .then(data => {
                console.log('Data from backend: ', data)
                setErrorMessage(data.message)
                if (data.token) {
                    const user_id = data.user_id
                    const username = data.username
                    const email = data.email
                    console.log('Call setUserData in LoginForm')
                    actions.setUserData(user_id, email, username)
                }
            })
    }

    return (
        <div className='login-modal-form'>
            <div className='form-inner-container'>
                <FontAwesomeIcon icon={faEnvelope} className='login-form-icon' />
                <input type='text' placeholder='email...' ref={emailInput}></input>
            </div>
            <div className='form-inner-container'>
                <FontAwesomeIcon icon={faKey} className='login-form-icon' />
                <input type='password' placeholder='hasło...' ref={passwordInput}></input>
            </div>
            <div className='form-inner-container'>
                <p style={{ margin: '0', color: 'red' }}>{errorMessage}</p>
            </div>
            <div className='login-form-footer'>
                <button type='button' onClick={submitLogin}>ZALOGUJ SIĘ</button>
            </div>
        </div>
    )
}

export default LoginForm