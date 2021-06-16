import './Dashboard.css';
import React from 'react';
import ClassroomGroup from './ClassroomGroup';

const Dashboard = () =>
{
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <ClassroomGroup clist = {[]} />
        </div>
    )
}

export default Dashboard;