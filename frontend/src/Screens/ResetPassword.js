import '../Screens/ResetPassword.css';
import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';

const ResetPasswrod = ({match}) =>
{
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({});

  const [confpassword, setConfPassword] = useState("");
  const [confpasswordError, setConfPasswordError] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid){
      try {
        const {res} = await axios.put(`/api/auth/resetpassword/${match.params.resetToken}`, {password});
        alert("form has been submitted");
        history.push("/login");
      } catch (error) {
        alert("Authentication Error");
      }
    }
  };

  const formValidation = () => {
    const passwordError = {};
    const confpasswordError = {};
    let isValid = true;
    if (password == "") {
      passwordError.error = "Please provide password";
      isValid = false;
    }
    var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(!passRegex.test(password)) {
      passwordError.error = "Please enter valid password";
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
        <div class="form-decor-fp">
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