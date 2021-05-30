import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            emailError: ""
        };
    }


    render() {
        return (
            <div className="box-controller log-form">
            <div className="controller" onClick={() => this.setState({ isSwitchOn: true })}>
              <Link to="/login">Login</Link>
            </div>
            <div className="controller regis-form" >
              <Link to="/register">Register</Link>
            </div>
  
          </div>
  
        )
    }
}

export default HomeScreen;