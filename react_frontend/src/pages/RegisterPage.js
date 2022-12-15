import React from 'react'
import { useRef } from 'react'

const RegisterPage = () => {
  
  const emailInput = useRef()
  const passwordInput = useRef()

  const submitRegistration = () => {
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
  
    fetch('http://127.0.0.1:5000/auth/register', options)
    .then(res => {
      if (res.status === 200) return res.json()
      console.log('Mam odpowiedz')
    })
    .then(data => {
      console.log('Mam dane', data)
    })
  }
  
  return (
    <div>
        <h1>
            Register
        </h1>
        <input name="email" placeholder="email" ref={emailInput}></input>
        <input name="password" placeholder="password" ref={passwordInput}></input>
        <button onClick={submitRegistration}>Register</button>
    </div>
  )
}

export default RegisterPage