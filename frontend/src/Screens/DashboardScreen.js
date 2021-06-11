import './DashboardScreen.css';
import React from 'react';

import Dashboard from '../Components/Dashboard';
import Navbar from '../Components/Navbar';
import DashboardSidebar from '../Components/DashboardSidebar';
import Calendar from '../Components/Calendar';

function DashboardScreen(props) {
  return (
    <div className="dashboard-grid">
      <div className="navbar-item"><Navbar/></div>    
      <div className="sidebar-item"><DashboardSidebar/></div>    
      <div className="dashboard-item"><Dashboard/></div>    
      <div className="calendar-item"><Calendar/></div>    
    </div>
  )
}

export default DashboardScreen;