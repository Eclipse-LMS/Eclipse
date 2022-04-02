import "./Tabs.css";
import React from "react";
import {Link} from "react-router-dom"

const Tabs = () => {
  return (
    <ul className="tabs-bar">
        <li className="tab">tab innactive</li>
        <li className="tab active">tab active</li>
    </ul>    
  );
};

export default Tabs;
