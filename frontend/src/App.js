import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// Screens
import RegisterBox from './Screens/RegisterScreen';
import LoginBox from './Screens/LoginScreen';
import ForgotPassword from './Screens/ForgotPassword';
import HomeScreen from './Screens/HomeScreen';
import ResetPassword from './Screens/ResetPassword';
import DashboardScreen from './Screens/DashboardScreen';
import LogoutHandle from './Components/LogoutHandle';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="container">
          <Route exact path="/" component = {HomeScreen}></Route>
          <Route exact path="/login" component = {LoginBox}></Route>
          <Route exact path="/register" component = {RegisterBox}></Route>
          <Route exact path="/forgotpassword" component = {ForgotPassword}></Route>
          <Route exact path="/resetpassword/:resetToken" component = {ResetPassword}></Route>
          <Route exact path="/dashboard" component = {DashboardScreen} />
          <Route exact path="/logout" component = {LogoutHandle} />
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App;