import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory} from 'react-router-dom';


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
  const history = useHistory();

   const onSubmit = async (e) =>{
     e.preventDefault();
    const user = { firstname , lastname, email, password};
    const isValid = formValidation();
    if (isValid) {
      try {
        const { data } = await axios.post("/api/auth/register", user);
        alert("From has been submited")
        history.push("/dashboard");
      } catch (error) {
        alert("Authentication Error");
      }
    }
  };

  const formValidation = () => {
    let firstnameError = {};
    let lastnameError = {};
    let emailError = {};
    let passwordError = {};
    let confpasswordError = {};
    let isValid = true;
    if (firstname == "") {
      firstnameError.error = "Please provide first name";
      isValid = false;
    }

    if (lastname == "") {
      lastnameError.error = "Please provide last name";
      isValid = false;
    }
    if (email == "") {
      emailError.error = "Please provide Email";
      isValid = false;
    }

    if (password == "") {
      passwordError.error = "Please provide password";
      isValid = false;
    }

    if (confpassword == "") {
      confpasswordError.error = "Please confirm password";
      isValid = false;
    }

    var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(!passRegex.test(password)) {
      passwordError.error = "Please enter valid password";
      isValid = false;
    }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!emailRegex.test(email)) {
      emailError.error = "Please enter valid email";
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