import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';


function ForgotPassword() 
{
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState({});

    const onSubmit = async () => {
        const isValid = formValidation();
        if (isValid){
            try {
                const {res} = await axios.post("/api/auth/forgotpassword",{email});
                alert("form has been submitted");
            } catch (error) {
                alert(error.response.data.error);
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
          var emailRegex = new RegExp("^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$");
          if(!emailRegex.test(email)) {
            emailError.error = "Please enter valid email";
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