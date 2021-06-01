import '../App.css';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function LoginBox() {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({});
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({});

  const onSubmit = async (e) => {
    const user = {email, password};
    e.preventDefault();
    const isValid = formValidation();
    if (isValid)
    try {
      const res = await axios.post("/api/auth/login",user);
      alert(res);
    } catch (error) {
      alert(error.response.data.error)
    }
  };

  const formValidation = () => {
    const emailError = {};
    const passwordError = {};
    let isValid = true;
    if (email == "") {
      emailError.error = "Please provide Email";
      isValid = false;
    }

    if (password == "") {
      passwordError.error = "Please provide password";
      isValid = false;
    }
    var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(!passRegex.test(password)) {
      passwordError.error = "Please enter valid password";
      isValid = false;
    }

    var emailRegex = new RegExp("^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$");
    if(!emailRegex.test(email)) {
      emailError.error = "Please enter valid email";
      isValid = false;
    }
    setPasswordError(passwordError)
    setEmailError(emailError);
    return isValid;
  }

  return (
    <div className="root-container ">
      <div class="form-decor">
        <div className="box-container reglog-form">

          <div className="inner-container">
            <div className="header">
              Login
          </div>
            <div className="box">

              <div className="input-group">
                <lable htmlFor="userid">
                  <input type="text" for="Email" id="Email-add" required onChange={(e) => { setEmail(e.target.value) }} />
                  <span class="placeholder form-lable">Enter Email</span>
                </lable>
              </div>

              <p style={{ color: "red", fontSize: "12px" }}>{emailError.error}</p>

              <div className="input-group">
                <lable htmlFor="password">
                  <input type="password" for="password" id="Password-add" required onChange={(e) => { setPassword(e.target.value) }}></input>
                  <span class="placeholder form-lable">Enter Password</span>
                </lable>
              </div>

              <p style={{ color: "red", fontSize: "12px" }}>{passwordError.error}</p>

              <div className="line">
                <label>
                  <input type="checkbox" value="IsRememberMe" name="remember" /> Remember me
              </label>
                <Link to="/forgotpassword"><a className="forpass" href="#">Forgot Password?</a></Link>
              </div>
            </div>

            <button type="button" className="login-btn" onClick={onSubmit}>Login</button>

          </div>
          <div className="box-controller1">
            <div className="controller">
              <Link to="/login">Login</Link>
            </div>
            <div className="controller regis-form" >
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginBox;