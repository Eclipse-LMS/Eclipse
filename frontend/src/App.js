import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import RegisterBox from './Screens/RegisterScreen';
import LoginBox from './Screens/LoginScreen';
import ForgotPassword from './Screens/ForgotPassword';
import HomeScreen from './Screens/HomeScreen';
import ResetPassword from './Screens/ResetPassword';


class App extends React.Component {
  state = {
    isSwitchOn: false
  }

  render() {
    return (
      <Router>

        <Switch>
          <Route exact path="/" component = {HomeScreen}></Route>
          <Route exact path="/login" component = {LoginBox}></Route>
          <Route exact path="/register" component = {RegisterBox}></Route>
          <Route exact path="/forgotpassword" component = {ForgotPassword}></Route>
          <Route exact path="/resetpassword/:resetToken" component = {ResetPassword}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;