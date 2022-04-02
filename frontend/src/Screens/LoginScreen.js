import "../Screens/LoginScreen.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import loginimage from "../BgImages/cherry-681.png";
import Cookies from "universal-cookie";

function LoginBox() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({});
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({});
  const history = useHistory();

  const onSubmit = async (e) => {
    const user = { email, password };
    e.preventDefault();
    const isValid = formValidation();
    if (isValid)
      try {
        const { data } = await axios.post("http://localhost:5010/api/auth/login", user);
        const cookies = new Cookies();
        cookies.set('sessionToken', data.sessionToken, { path: '/' });
        history.push("/dashboard");
      } catch (error) {
        alert(error)
        console.log(error.data);
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
    if (!passRegex.test(password)) {
      passwordError.error = "Please enter valid password";
      isValid = false;
    }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email)) {
      emailError.error = "Please enter valid email";
      isValid = false;
    }
    setPasswordError(passwordError)
    setEmailError(emailError);
    return isValid;
  }

  return (
    <div className="root-container">
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
                  <input type="checkbox" value="IsRememberMe" name="remember" />

                  <label for="remember-me" className="remember-me">
                    Remember me
                  </label>

                <Link to="/forgotpassword"><a className="forpass" href="#">Forgot Password?</a></Link>

              </div>
            </div>
            <div className="center">
              <button type="button" className="login-btn" onClick={onSubmit}>Login</button>
            </div>
          </div>

        </div>
      </div>
      <div className="box-controller1">

        <div className="active-button">
          <Link to="/login">Login</Link>
        </div>
        <div className="inactive-button1" >
          <Link to="/register">Register</Link>
        </div>
      </div>

    </div>
  )
}

export default LoginBox;