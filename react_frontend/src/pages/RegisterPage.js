import React from 'react'
import { useRef } from 'react'
import './RegisterPage.css'

const RegisterPage = () => {
  
  const emailInput = useRef()
  const passwordInput = useRef()
  const usernameInput = useRef()

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
    })
  }
  
  return (
        <div className='container'>
              <h1>
                  Register
              </h1>
              <input name="username" placeholder="Username" type="text" ref={usernameInput}></input>
              <input name="email" placeholder="E-mail" type="text" ref={emailInput}></input>
              <input name="password" placeholder="Password" type="password" ref={passwordInput}></input>
              <button onClick={submitRegistration}>Confirm</button>
        </div>
  )
}

export default RegisterPage