import './JoinClassroom.css';
import React, { useState } from "react";
import ClassroomGroup from './ClassroomGroup';
import axios from 'axios';

const JoinClassroom = (props) => {
    const [classroomlist, setclasroomlist] = useState([]);
    const [searchQuery, setsearchQuery] = useState("")
    const submit = async () =>{
        try {
            const cr = await axios.get(`/api/classrooms/bycid/${searchQuery}`);
            setclasroomlist([cr.data.classroom]);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="join-classroom">
            <div className="input-box">
                <div className="input-grp">
                    <div className="input-content">
                        <label>Enter Classroom code</label>
                        <input type="text" onChange={(e) =>{setsearchQuery(e.target.value)}}/>
                        <button className="button" onClick={submit}>Search</button>
                    </div>
                </div>
            </div>
            <ClassroomGroup user = {props.user} clist = {classroomlist}/>
        </div>
    )
}

export default JoinClassroom;