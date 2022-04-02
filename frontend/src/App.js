import './App.css';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { v4 as uuidV4 } from "uuid";

// Screens
import RegisterBox from './Screens/RegisterScreen';
import LoginBox from './Screens/LoginScreen';
import ForgotPassword from './Screens/ForgotPassword';
import HomeScreen from './Screens/HomeScreen';
import ResetPassword from './Screens/ResetPassword';
import DashboardScreen from './Screens/DashboardScreen';
import LogoutHandle from './Components/LogoutHandle';
import Vidcon from './Screens/Vidcon';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component = {HomeScreen}></Route>
          <Route exact path="/login" component = {LoginBox}></Route>
          <Route exact path="/register" component = {RegisterBox}></Route>
          <Route exact path="/forgotpassword" component = {ForgotPassword}></Route>
          <Route exact path="/resetpassword/:resetToken" component = {ResetPassword}></Route>
          <Route path="/dashboard" component = {DashboardScreen} />
          <Route exact path="/vidcon">{<Redirect to = {`/vidcon/${uuidV4()}`} />}</Route>
          <Route exact path="/vidcon/:room" component = {Vidcon}/>
          <Route exact path="/logout" component = {LogoutHandle} />
        </Switch>
      </Router>
    )
  }
}

export default App;