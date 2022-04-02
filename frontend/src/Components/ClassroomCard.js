import "./ClassroomCard.css";
import {React, useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Cookies from "universal-cookie";


function ClassroomCard(props) {
  const [classroom, setclassroom] = useState(props.classroom);
  const [user, setuser] = useState(props.user);

  const join = async () => {
    try {
      const cookies = new Cookies();
      const res = await axios.post('http://localhost:5010/api/user/joinclassroom',{
        sid: user._id,
        cid: classroom._id
      },
      {headers: {
        'sessionToken': cookies.get('sessionToken'),
      }});
      setclassroom(res.data.classroom);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <Router>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{classroom.ClassroomName}</h5>
          <p class="card-text">{classroom.HostedBy}</p>
          { classroom.Students.includes(user._id)
            ?
            <div class="btn">
            Go to Classroom
            </div>
            :
            <div class="btn" onClick={join}>
            JoinClassroom
            </div>
          }
        </div>
      </div>
    </Router>
  );
}

export default ClassroomCard;
