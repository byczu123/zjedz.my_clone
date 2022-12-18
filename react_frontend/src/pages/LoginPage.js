import React from 'react'
import { useRef } from 'react'
import './RegisterPage.css'

const LoginPage = () => {
  
  const emailInput = useRef()
  const passwordInput = useRef()
  
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
      console.log(data)
      
      sessionStorage.setItem("token", data.token)
      // console.log(sessionStorage.getItem("token"))
    })
  }

  return (
    <div className='container'>
      <h1>
        Login
      </h1>
      <input name="email" placeholder="email" type="text" ref={emailInput}></input>
      <input name="password" placeholder="password" type="password" ref={passwordInput}></input>
      <button onClick={submitLogin}>Log in</button>
    </div>
  )
}

export default LoginPage