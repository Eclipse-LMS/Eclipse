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







// import './DashboardScreen.css';
// import {React, useState, useEffect} from 'react';
// import {Switch, Route, Redirect, useHistory} from 'react-router-dom';
// import axios from 'axios';

// import Dashboard from '../Components/Dashboard';
// import JoinClassroom from '../Components/JoinClassroom';
// import CreateClassroom from '../Components/CreateClassroom';
// import Navbar from '../Components/Navbar';
// import DashboardSidebar from '../Components/DashboardSidebar';
// import Calendar from '../Components/Calendar';
// import Tabs from '../Components/Tabs';

// function DashboardScreen(props) {
//   const [User, setUser] = useState(undefined);
//   const history = useHistory();
//   useEffect(async () => {
//     try {
//       const res = await axios.post('/api/authenticate/loggedin');
//       setUser(res.data.user);
//     } catch (error) {
//       alert(error);
//       // history.push('/login');
//     }
//   },[]);
//   return (
//     <div className="dashboard-grid">
//       <div className="navbar-item"><Navbar user={User}/></div>    
//       {/* <div className="sidebar-item"><DashboardSidebar/></div>     */}
//       <div className="dashboard-item">
//         <Tabs/>
//         <Switch>
//           <Route exact path="/dashboard/" component = {Dashboard}></Route>
//           <Route exact path="/dashboard/join-classroom"><JoinClassroom user={User}/></Route>
//           <Route exact path="/dashboard/create-classroom"><CreateClassroom user={User}/></Route>
//         </Switch>
//       </div>    
//       <div className="calendar-item"><Calendar/></div>    
//     </div>
//   )
// }

// export default DashboardScreen;