import './DashboardScreen.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../Components/Dashboard';
import JoinClassroom from '../Components/JoinClassroom';
import CreateClassroom from '../Components/CreateClassroom';
import Navbar from '../Components/Navbar';
import DashboardSidebar from '../Components/DashboardSidebar';
import Calendar from '../Components/Calendar';

function DashboardScreen(props) {
  return (
    <div className="dashboard-grid">
      <div className="navbar-item"><Navbar/></div>    
      <div className="sidebar-item"><DashboardSidebar/></div>    
      <div className="dashboard-item">
        <Switch>
          <Route exact path="/dashboard/" component = {Dashboard}></Route>
          <Route exact path="/dashboard/join-classroom" component = {JoinClassroom}></Route>
          <Route exact path="/dashboard/create-classroom" component = {CreateClassroom}></Route>
        </Switch>
      </div>    
      <div className="calendar-item"><Calendar/></div>    
    </div>
  )
}

export default DashboardScreen;