import '../App.css';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class RegisterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confpassword: "",
      firstnameError: "",
      lastnameError: "",
      usernameError: "",
      emailError: "",
      passwordError: "",
      confpasswordError: ""
    };
  }

  valid() {
    let flag = 0
    if (this.state.firstname == "") {
      this.setState({ firstnameError: "Please provide firstname" })
      flag = 1
    }
    if (this.state.lastname == "") {
      this.setState({ lastnameError: "Please provide lastname" })
      flag = 1
    }
    if (this.state.email == "") {
      this.setState({ emailError: "Please provide Email" })
      flag = 1
    }
    if (!this.state.email.includes("@")) {
      this.setState({ emailError: "Invalid Email" })
      flag = 1
    }
    if (this.state.password.length < 5) {
      this.setState({ passwordError: "Password length must be atleast 5 characters" })
      flag = 1
    }
    if (this.state.password != this.state.confpassword) {
      this.setState({ confpasswordError: "Password is not matching" })
      flag = 1
    }
    if (flag == 0) {
      return true
    }
  }

  async submit() {
    this.setState({ firstnameError: "" })
    this.setState({ lastnameError: "" })
    this.setState({ emailError: "" })
    this.setState({ passwordError: "" })
    this.setState({ confpasswordError: "" })
    const user = { firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, password: this.state.password };
    if (this.valid()) {
      try {
        const { res } = await axios.post("/api/auth/register", user);
        alert("From has been submited")
      } catch (error) {
        alert(error.response.data.error)
      }
    }
  }

  render() {
    return (
      <div className="root-container ">
      <div class="form-decor">
        <div className="box-container reglog-form">
        <div className="inner-container">
          <div className="header">
            Register
        </div>

          <div className="box">

            <div id="fullname">
              <div className="input-group">
                <lable htmlFor="firstname">
                  <input type="text" for="Firstname" id="First-add" required onChange={(event) => { this.setState({ firstname: event.target.value }) }} />
                  <span class="placeholder form-lable">Enter Firstname</span>
                </lable>
              </div>

              <div className="input-group">
                <lable htmlFor="lastname">
                  <input type="text" for="Lastname" id="Last-add" required onChange={(event) => { this.setState({ lastname: event.target.value }) }} />
                  <span class="placeholder form-lable">Enter Lastname</span>
                </lable>
              </div>
              <p style={{ color: "red", fontSize: "12px" }}>{this.state.firstnameError}</p>
              <p style={{ color: "red", fontSize: "12px" }}>{this.state.lastnameError}</p>
            </div>

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

            <div className="input-group">
              <lable htmlFor="confirm-password">
                <input type="password" for="confirm-password" id="Password-add" required onChange={(event) => { this.setState({ confpassword: event.target.value }) }}></input>
                <span class="placeholder form-lable">Confirm Password</span>
              </lable>
            </div>

            <p style={{ color: "red", fontSize: "12px" }}>{this.state.confpasswordError}</p>

            <button type="button" className="register-btn" onClick={() => this.submit()}>Register</button>

          </div>
        </div>
        <div className="box-controller log-form">
          <div className="controller" onClick={() => this.setState({ isSwitchOn: true })}>
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

export default RegisterBox;