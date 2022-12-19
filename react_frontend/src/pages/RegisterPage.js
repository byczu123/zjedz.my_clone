import React from 'react'
import { useRef, useState, useContext, useEffect } from 'react'
import './RegisterPage.css'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/appContext'

const RegisterPage = () => {

  const navigate = useNavigate()
  const {store, actions} = useContext(Context)

  const emailInput = useRef()
  const passwordInput = useRef()
  const usernameInput = useRef()
  
  const [message, setMessage] = useState(null)

  console.log('RegisterPage rendered. Store: ', store.email, store.username)
  
  useEffect(() => {
    if (store.email && store.username) {
      navigate('/')
      console.log('Redirected from RegisterPage to HomePage')
    }
  }, [store.email, store.username])

  const submitRegistration = () => {
    const username = usernameInput.current.value
    const email = emailInput.current.value
    const password = passwordInput.current.value
    
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    }
  
    fetch('/auth/register', options)
    .then(res => {
      if (res.status === 200) return res.json()
    })
    .then(data => {
      console.log(data)
      setMessage(data.message)
      if(data.message === 'Użytkownik zalogowany pomyślnie') {
        navigate('/login')
      }
    })
  }
  
  return (
        <div className='container'>
              <h1>Register</h1>
              {message ?(
                <p>{message}</p>
              ) :(
                <p></p>
              )}
                <input name="username" placeholder="Username" type="text" ref={usernameInput}></input>
              <input name="email" placeholder="E-mail" type="text" ref={emailInput}></input>
              <input name="password" placeholder="Password" type="password" ref={passwordInput}></input>
              <button onClick={submitRegistration}>Confirm</button>
        </div>
  )
}

export default RegisterPage