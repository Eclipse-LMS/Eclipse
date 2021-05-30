import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

class ResetPasswrod extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      passwordError: ""
    };
  }

  valid() {
    if (this.state.password.length < 5) {
      this.setState({ passwordError: "Password length must be atleast 5 characters" })
    }
    else {
      return true
    }
  }

  submit() {
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
                Reset Password
              </div>
              <div className="box">



                <div className="input-group">
                  <lable htmlFor="password">
                    <input type="password" for="password" id="Password-add" required onChange={(event) => { this.setState({ password: event.target.value }) }}></input>
                    <span class="placeholder form-lable">Enter New Password</span>
                  </lable>
                </div>

                <p style={{ color: "red", fontSize: "12px" }}>{this.state.passwordError}</p>
                <div className="input-group">
                  <lable htmlFor="password">
                    <input type="password" for="password" id="Password-add" required onChange={(event) => { this.setState({ password: event.target.value }) }}></input>
                    <span class="placeholder form-lable">Confirm Password</span>
                  </lable>
                </div>

                <p style={{ color: "red", fontSize: "12px" }}>{this.state.passwordError}</p>


                <button type="button" className="button-confirm" onClick={() => this.submit()}>Submit</button>

              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default ResetPasswrod;