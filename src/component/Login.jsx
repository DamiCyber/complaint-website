import React from 'react'
import "../assets/style/Login.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  
  const navigate = useNavigate()
  const sub = () => {

    navigate("/home")
  }
  return (
    <div>
      <div className="back">
        <div className="form">
          <div className="text">
            <h4>Welcome !</h4>
          </div>
          <input type="text" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button className='btm'>Sign In with Google</button>
          <button className='btn' onClick={sub}>Login</button>
        </div>
      </div>
    </div>)
}

export default Login