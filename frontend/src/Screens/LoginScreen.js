import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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
  
              <a className="forpass" href="#">Forgot Password?</a>
            </div>
          </div>
          <button type="button" className="login-btn" onClick={() => this.submit()}>Login</button>
  
        </div>
      )
    }
  }

  export default LoginBox;