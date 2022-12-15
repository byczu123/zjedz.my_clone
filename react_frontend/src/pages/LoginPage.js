import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <h1>
            Login
        </h1>
        <form method='POST'>
            <input name="email" placeholder="email"></input>
            <input name="password" placeholder="password"></input>
            <button type="submit">Log in</button>
        </form>
    </div>
  )
}

export default LoginPage