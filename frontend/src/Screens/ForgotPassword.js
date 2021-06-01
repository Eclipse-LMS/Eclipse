import '../App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


function ForgotPassword() 
{
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState({});

    const onSubmit = () => {
        const isValid = formValidation();
        if (isValid)
            alert("form has been submitted");
    };

    const formValidation = () => {
        const emailError = {};
        let isValid = true;
        if (!email.includes("@")) {
            emailError.error = "Not a valid email";
            isValid = false;
        }
        setEmailError(emailError);
        return isValid;
    }


return (
    <div className="root-container ">
        <div class="form-decor">
            <div className="box-container reglog-form">

                <div className="inner-container">
                    <div className="header">
                        Forgot Password
          </div>
                    <div className="box">

                        <div className="input-group">
                            <lable htmlFor="userid">
                                <input type="text" for="Email" id="Email-add" required onChange={(e) => { setEmail(e.target.value) }} />
                                <span class="placeholder form-lable">Enter Email</span>
                            </lable>
                        </div>

                        <p style={{ color: "red", fontSize: "12px" }}>{emailError.error}</p>



                        <button type="button" className="fpsubmit-btn" onClick={onSubmit}>Submit</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ForgotPassword;