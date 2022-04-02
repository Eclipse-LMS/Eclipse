import './DashboardScreen.css';
import {React, useState, useEffect} from 'react';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";


import Dashboard from '../Components/Dashboard';
import JoinClassroom from '../Components/JoinClassroom';
import CreateClassroom from '../Components/CreateClassroom';
import Navbar from '../Components/Navbar';
import DashboardSidebar from '../Components/DashboardSidebar';
import Calendar from '../Components/Calendar';
import Tabs from '../Components/Tabs';

function DashboardScreen(props) {
  const [User, setUser] = useState(undefined);
  const history = useHistory();
  useEffect(async () => {
    try {
      const cookies = new Cookies();
      const res = await axios.post('http://localhost:5010/api/authenticate/loggedin',
      {headers: {
        'sessionToken': cookies.get('sessionToken'),
      }});
      setUser(res.data.user);
    } catch (error) {
      alert(error);
      // history.push('/login');
    }
  },[]);
  return (
    <div className="dashboard-grid">
      <div className="navbar-item"><Navbar user={User}/></div>    
      {/* <div className="sidebar-item"><DashboardSidebar/></div>     */}
      <div className="dashboard-item">
        <Tabs/>
        <Switch>
          <Route exact path="/dashboard/" component = {Dashboard}></Route>
          <Route exact path="/dashboard/join-classroom"><JoinClassroom user={User}/></Route>
          <Route exact path="/dashboard/create-classroom"><CreateClassroom user={User}/></Route>
        </Switch>
      </div>    
      <div className="calendar-item"><Calendar/></div>    
    </div>
  )
}

export default DashboardScreen;