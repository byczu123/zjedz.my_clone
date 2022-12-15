import React from 'react'

const RegisterPage = () => {
  return (
    <div>
        <h1>
            Register
        </h1>
        <form method='POST'>
            <input name="email" placeholder="email"></input>
            <input name="password" placeholder="password"></input>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default RegisterPage