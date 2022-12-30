import React, { useContext, useEffect } from 'react'
import { useRef, useState } from 'react'
import { Context } from '../context/appContext'
import { decodeToken } from 'react-jwt'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  
  const {store, actions} = useContext(Context)
  const [message, setMessage] = useState(null)
  
  const navigate = useNavigate()
  
  const emailInput = useRef()
  const passwordInput = useRef()
  
  console.log('LoginPage rendered. Store: ', store.email, store.username)

  useEffect(() => {
    if(store.email && store.username) {
      console.log('LoginPage ckeck if store exists: true')
      navigate('/') 
    } else {
      console.log('LoginPage ckeck if store exists: false')
    }
  }, [store.username, store.email])

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
      setMessage(data.message)
      if (data.token) {
        const username = data.username
        const email = data.email
        console.log('Call setUserData in LoginPage')
        actions.setUserData(email, username)
        navigate('/')
      }
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