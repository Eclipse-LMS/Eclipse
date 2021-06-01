import '../App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

function LoginBox() {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({});
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid)
      alert("form has been submitted");
  };

  const formValidation = () => {
    const emailError = {};
    const passwordError = {};
    let isValid = true;
    if (!email.includes("@")) {
      emailError.error = "Not a valid email";
      isValid = false;
    }
    if (password.length < 5) {
      passwordError.error = "Password length must be atleast 5 characters";
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