// import "./ClassroomCard.css";
// import {React, useState } from "react";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';

// function ClassroomCard(props) {
//   const [classroom, setclassroom] = useState(props.classroom);
//   const [user, setuser] = useState(props.user);

//   const join = async () => {
//     try {
//       const res = await axios.post('/api/user/joinclassroom',{
//         sid: user._id,
//         cid: classroom._id
//       });
//       setclassroom(res.data.classroom);
//     } catch (error) {
//       alert(error);
//     }
//   }
//   return (
//     <Router>
//       <div class="card">
//         <div class="card-body">
//           <h5 class="card-title">{classroom.ClassroomName}</h5>
//           <p class="card-text">{classroom.HostedBy}</p>
//           { classroom.Students.includes(user._id)
//             ?
//             <div class="btn">
//             Go to Classroom
//             </div>
//             :
//             <div class="btn" onClick={join}>
//             JoinClassroom
//             </div>
//           }
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default ClassroomCard;


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