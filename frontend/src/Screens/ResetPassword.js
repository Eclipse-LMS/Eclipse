import '../App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

function ResetPasswrod()
{
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({});

  const [confpassword, setConfPassword] = useState("");
  const [confpasswordError, setConfPasswordError] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid)
      alert("form has been submitted");
  };

  const formValidation = () => {
    const passwordError = {};
    let isValid = true;
    if (password.length < 5) {
      passwordError.error = "Password length must be atleast 5 characters";
      isValid = false;
    }

    if (password != confpassword) {
      confpasswordError.error = "Password is not matching";
      isValid = false;
    }

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
                Reset Password
              </div>
              <div className="box">



                <div className="input-group">
                  <lable htmlFor="password">
                    <input type="password" for="password" id="Password-add" required onChange={(e) => { setPassword(e.target.value) }}></input>
                    <span class="placeholder form-lable">Enter New Password</span>
                  </lable>
                </div>

                <p style={{ color: "red", fontSize: "12px" }}>{passwordError.error}</p>
                <div className="input-group">
                  <lable htmlFor="password">
                    <input type="password" for="password" id="Password-add" required onChange={(e) => { setConfPassword(e.target.value) }}></input>
                    <span class="placeholder form-lable">Confirm Password</span>
                  </lable>
                </div>

                <p style={{ color: "red", fontSize: "12px" }}>{confpasswordError.error}</p>


                <button type="button" className="button-confirm" onClick={onSubmit}>Submit</button>

              </div>
            </div>
          </div>
        </div>
      </div>


    )
}

export default ResetPasswrod;