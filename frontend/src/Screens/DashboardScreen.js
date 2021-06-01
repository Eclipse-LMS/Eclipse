import '../App.css';
import React from 'react';

function DashboardScreen() {
  return (
    <div className="box-controller log-form">
        Dashboard Welcome User {localStorage.getItem("authToken")}
    </div>
  )
}

export default DashboardScreen;