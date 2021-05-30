import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class ForgotPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            emailError: ""
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
        else {
            return true
        }
    }

    submit() {
        this.setState({ emailError: "" })
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
                    Forgot Password
          </div>
                <div className="box">

                    <div className="input-group-fp">
                        <lable htmlFor="userid">
                            <input type="text" for="Email" id="Email-add" required onChange={(event) => { this.setState({ email: event.target.value }) }} />
                            <span class="placeholder form-lable">Enter Email</span>
                        </lable>
                    </div>

                    <p style={{ color: "red", fontSize: "12px" }}>{this.state.emailError}</p>



                    <button type="button" className="fpsubmit-btn" onClick={() => this.submit()}>Submit</button>

                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default ForgotPassword;