import "./ClassroomCard.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ClassroomCard(props) {
  return (
    <Router>
      <div class="card">
        <div class="card-body">
          <p class="card-text">{props.classroom.desc}</p>
          <a href="#" class="btn">
            Go to Classroom
          </a>
        </div>
      </div>
    </Router>
  );
}

export default ClassroomCard;