import React, { useContext, useEffect, useState } from 'react'
import { useRef } from 'react'
import { Context } from '../context/appContext'
import { decodeToken } from 'react-jwt'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const LoginPage = () => {
  
  const navigate = useNavigate()
  const {store, actions} = useContext(Context)
  const emailInput = useRef()
  const passwordInput = useRef()
  const [message, setMessage] = useState(null)

  
  
  useEffect(() => {
    const token = Cookies.get('token')
    const decodedToken = decodeToken(token)
    if (decodedToken) {
      actions.setUserData({username: decodedToken.username, email: decodedToken.email})
      console.log(decodedToken)
      navigate('/')
    }
  }, [])

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
      setMessage(data.message)
      
      sessionStorage.setItem("token", data.token)
      const token = data.token && data.token
      const username = data.username && data.username
      const email = data.email && data.email
      const decodedToken = decodeToken(token)
      console.log(decodedToken)
      if (decodedToken) {
        if (decodedToken.username === username && decodedToken.email === email) {
          actions.setUserData(username, email)
          navigate('/')
        }
      }
      //sessionStorage.setItem("token", data.token)
      // console.log(sessionStorage.getItem("token"))
    })
  }

  return (
    <div className='container'>
      <h1>
        Login
      </h1>
      {message ?(
                <p>{message}</p>
              ) :(
                <p></p>
              )}
      <input name="email" placeholder="email" type="text" ref={emailInput}></input>
      <input name="password" placeholder="password" type="password" ref={passwordInput}></input>
      <button onClick={submitLogin}>Log in</button>
    </div>
  )
}

export default LoginPage