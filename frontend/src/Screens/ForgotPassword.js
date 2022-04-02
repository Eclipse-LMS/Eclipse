import '../Screens/ForgotPassword.css';
import React, { useState } from 'react';
import axios from 'axios';


function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState({});

    const onSubmit = async () => {
        const isValid = formValidation();
        if (isValid) {
            try {
                const { res } = await axios.post("http://localhost:5010/api/auth/forgotpassword", { email });
            } catch (error) {
                alert("Authentication Error");
            }
        }
    };

    const formValidation = () => {
        const emailError = {};
        let isValid = true;
        if (email == "") {
            emailError.error = "Please provide Email";
            isValid = false;
        }
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!emailRegex.test(email)) {
            emailError.error = "Please enter valid email";
            isValid = false;
        }
        setEmailError(emailError);
        return isValid;
    }

    return (
        <div className="root-container ">
            <div class="form-decor-fp">
                <div className="box-container reglog-form">

                    <div className="inner-container">
                        <div className="header">
                            Forgot Password? <br /> No Worries
                            <p id = "text1">Enter your registered email below and we will send you the steps to reset your password.</p>
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