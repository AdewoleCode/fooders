import React from 'react'
import { useState } from 'react'
import classes from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import RegSvg from '../../assets/reg2.svg'

import { toast } from 'react-toastify'
import axios from "axios"
import {useDispatch} from 'react-redux'
import { login } from '../../redux/authSlice'

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log(values);

    if (validateForm()) {
      console.log(values);

      try {
        const { email, password } = values;
        const res = await axios.post("http://localhost:8000/api/user/login", {
          email, password
        })
        const data = await res.data
        console.log(data)
        dispatch(login(data)) // {userDetails, token}
        navigate("/")

      } catch (err) {
        console.log(err);
        toast.error(err.response.data)
      }
    }
  }


  const validateForm = () => {
    const { email, password } = values;
    if (email === "" || password === "") {
      toast.error("Email and Password is required.");
      return false;
    } if (password.length < 6) {
      toast.error("password must be atleast 6 characters");
      return false
    }
    return true;
  };


  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          <img src={RegSvg} className={classes.leftImg} alt="img" />
        </div>
        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Login</h2>
          <form action="" onSubmit={(event) => handleLogin(event)} className={classes.loginForm}>
            <input
              type="email"
              placeholder='Email'
              name='email'
              onChange={(e) => handleChange(e)} />
            <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
            <button className={classes.submitBtn}>Login</button>
            <p>Don't have an account? <Link to="/signup" style={{ textDecoration: "underline" }}>Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login