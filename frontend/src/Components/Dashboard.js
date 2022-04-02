import './Dashboard.css';
import React from 'react';
import ClassroomGroup from './ClassroomGroup';
import Taskbar from './Taskbar';

const Dashboard = () =>
{
    return (
        <div className="dashboard">
            <Taskbar/>
            <ClassroomGroup clist = {[]} />
        </div>
    )
}

export default Dashboard;