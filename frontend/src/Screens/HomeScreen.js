// import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import './HomeScreen.css';

// class HomeScreen extends React.Component 
function HomeScreen() {

  return (
    <div className="box-controller log-form">
      <div className="controller">
        <Link to="/login">Login</Link>
      </div>
      <div className="controller regis-form" >
        <Link to="/register">Register</Link>
      </div>

    </div>

  )
}

export default HomeScreen;