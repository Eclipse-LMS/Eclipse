import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import RegisterBox from './Screens/RegisterScreen';
import LoginBox from './Screens/LoginScreen';


class App extends React.Component {
  state={
    isSwitchOn: false
  }

  render() {
    return (
      <Router>

        <div className="root-container ">
          <div class="form-decor">
            <div className="box-container reglog-form">
              <Route path="/login"><LoginBox /></Route>
              <Route path="/register"><RegisterBox /></Route>
            </div>

            <div className="box-controller log-form">
              <div className="controller" onClick={()=>this.setState({isSwitchOn: true})}>
                <Link to="/login">Login</Link>
              </div>
              <div className="controller regis-form" >
                <Link to="/register">Register</Link>
              </div>
            </div>
          </div>


        </div>
      </Router>
    )
  }
}

export default App;