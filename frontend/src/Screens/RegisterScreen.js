import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


function RegisterBox() {
  const [firstname, setFirstName] = useState("");
  const [firstnameError, setFirstNameError] = useState({});

  const [lastname, setLastName] = useState("");
  const [lastnameError, setLastNameError] = useState({});

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({});

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({});

  const [confpassword, setConfPassword] = useState("");
  const [confpasswordError, setConfPasswordError] = useState({});




  async function onSubmit() {
    // this.setState({ firstnameError: "" })
    // this.setState({ lastnameError: "" })
    // this.setState({ emailError: "" })
    // this.setState({ passwordError: "" })
    // this.setState({ confpasswordError: "" })
    const user = { firstname , lastname, email, password};
    const isValid = formValidation();
    if (isValid) {
      try {
        const { res } = await axios.post("/api/auth/register", user);
        alert("From has been submited")
      } catch (error) {
        alert(error.response.data.error)
      }
    }
  }

  const formValidation = () => {
    const firstnameError = {};
    const lastnameError = {};
    const emailError = {};
    const passwordError = {};
    const confpasswordError = {};
    let isValid = true;
    if (firstname == "") {
      firstnameError.error = "Please provide first name";
      isValid = false;
    }

    if (lastname == "") {
      lastnameError.error = "Please provide last name";
      isValid = false;
    }

    if (!email.includes("@")) {
      emailError.error = "Please provide valid email";
      isValid = false;
    }

    if (password.length < 5) {
      passwordError.error = "Password length must be atleast 5 characters";
      isValid = false;
    }

    if (password != confpassword) {
      confpasswordError.error = "Password is not matching";
      isValid = false;
    }

    setFirstNameError(firstnameError)
    setLastNameError(lastnameError)
    setEmailError(emailError)
    setPasswordError(passwordError)
    setConfPasswordError(confpasswordError)
    return isValid;
  }

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
                    <input type="text" for="Firstname" id="First-add" required onChange={(e) => { setFirstName(e.target.value) }} />
                    <span class="placeholder form-lable">Enter Firstname</span>
                  </lable>
                </div>

                <div className="input-group">
                  <lable htmlFor="lastname">
                    <input type="text" for="Lastname" id="Last-add" required onChange={(e) => { setLastName(e.target.value) }} />
                    <span class="placeholder form-lable">Enter Lastname</span>
                  </lable>
                </div>
                <p style={{ color: "red", fontSize: "12px" }}>{firstnameError.error}</p>
                <p style={{ color: "red", fontSize: "12px" }}>{lastnameError.error}</p>
              </div>

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

              <div className="input-group">
                <lable htmlFor="confirm-password">
                  <input type="password" for="confirm-password" id="Password-add" required onChange={(e) => { setConfPassword(e.target.value) }}></input>
                  <span class="placeholder form-lable">Confirm Password</span>
                </lable>
              </div>

              <p style={{ color: "red", fontSize: "12px" }}>{confpasswordError.error}</p>

              <button type="button" className="register-btn" onClick={onSubmit}>Register</button>

            </div>
          </div>
          <div className="box-controller2">
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

export default RegisterBox;