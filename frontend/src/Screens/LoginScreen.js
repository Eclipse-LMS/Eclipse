import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

class LoginBox extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    };
  }

  valid() {
    if ((!this.state.email.includes("@") || this.state.email == "") && (this.state.password.length < 5)) {
      this.setState({ emailError: "Invalid Email" })
      this.setState({ passwordError: "Password length must be atleast 5 characters" })
    }
    else if ((!this.state.email.includes("@") || this.state.email == "")) {
      this.setState({ emailError: "Invalid Email" })
    }
    else if (this.state.password.length < 5) {
      this.setState({ passwordError: "Password length must be atleast 5 characters" })
    }
    else {
      return true
    }
  }

  submit() {
    this.setState({ emailError: "" })
    this.setState({ passwordError: "" })
    if (this.valid()) {
      alert("Form has been submited")
    }
  }

  render() {
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
                <input type="text" for="Email" id="Email-add" required onChange={(event) => { this.setState({ email: event.target.value }) }} />
                <span class="placeholder form-lable">Enter Email</span>
              </lable>
            </div>

            <p style={{ color: "red", fontSize: "12px" }}>{this.state.emailError}</p>

            <div className="input-group">
              <lable htmlFor="password">
                <input type="password" for="password" id="Password-add" required onChange={(event) => { this.setState({ password: event.target.value }) }}></input>
                <span class="placeholder form-lable">Enter Password</span>
              </lable>
            </div>

            <p style={{ color: "red", fontSize: "12px" }}>{this.state.passwordError}</p>

            <div className="line">
              <label>
                <input type="checkbox" value="IsRememberMe" name="remember" /> Remember me
                </label>
                <Link to="/forgotpassword"><a className="forpass" href="#">Forgot Password?</a></Link>
            </div>
          </div>
          <button type="button" className="login-btn" onClick={() => this.submit()}>Login</button>

        </div>
        <div className="box-controller log-form">
              <div className="controller" onClick={()=>this.setState({isSwitchOn: true})}>
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
}

export default LoginBox;