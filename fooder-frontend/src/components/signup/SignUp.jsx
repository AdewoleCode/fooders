import React from 'react'
import { useState } from 'react'
import classes from '../login/Login.module.css'
// import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import LoginSvg from '../../assets/login.svg'
// import { login } from '../../redux/authSlice'

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  // const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
      e.preventDefault()

      try {
        const res = await fetch(`http://localhost:8000/auth/login`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({email, password})
        })

        const data = await res.json()
        console.log(data)
        // dispatch(login(data)) // {userInfo, token}
        navigate("/")
        
      } catch (error) {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000)
      }
  }

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          <img src={LoginSvg} className={classes.leftImg}/>
        </div>
        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Register</h2>
          <form onSubmit={handleLogin} className={classes.loginForm}>
            <input type="text" placeholder='Username' onChange={(e) => setEmail(e.target.value)}/>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <button className={classes.submitBtn}>Register</button>
            <p>Already have an account? <Link to="/login" style={{textDecoration: "underline"}}>Login</Link></p>
          </form>
          {
            error && <div className={classes.errorMessage}>
                 Wrong credentials! Try different ones
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default SignUp