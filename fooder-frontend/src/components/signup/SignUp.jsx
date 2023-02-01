import React from 'react'
import { useState } from 'react'
import classes from '../login/Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import LoginSvg from '../../assets/login.svg'

// import LoginSvg from '../../assets/login.svg'
import { toast } from 'react-toastify'
import axios from "axios"
import {useDispatch} from 'react-redux'
import { register } from '../../redux/authSlice'

const SignUp = () => {
  const [values, setValues] = useState({ username: "", password: "", email: "" });
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(values);

    if (validateForm()) {

      try {
        const {username, email, password} = values
        const res = await axios.post("http://localhost:8000/api/user/register", {
          email, password, username
        })
        const data = await res.data
        console.log(data)
        dispatch(register(data)) // {userDetails, token}
        localStorage.setItem('user', JSON.stringify(data))
        navigate("/")

      } catch (error) {
        console.log(error)
        toast.error(error.response.data.msg)
      }
    }
  }

  const validateForm = () => {
    const { email, password, username } = values;
    if (email === "" || password === "" || username === "") {
      toast.error("Uername, Email and Password is required.");
      return false;
    } if (password.length < 6){
      toast.error("password must be atleast 6 characters");
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };


  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          {/* <img src={LoginSvg} className={classes.leftImg} alt="imgs" /> */}
          <img src={LoginSvg} className={classes.leftImg} alt="imgs" />

        </div>
        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Register</h2>
          <form onSubmit={(event) => handleRegister(event)}  className={classes.loginForm}>
            <input type="text" placeholder='Username' name='username' onChange={(e) => handleChange(e)} />
            <input type="email" placeholder='Email' name='email' onChange={(e) => handleChange(e)} />
            <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
            <button className={classes.submitBtn}>Register</button>
            <p>Already have an account? <Link to="/login" style={{ textDecoration: "underline" }}>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp