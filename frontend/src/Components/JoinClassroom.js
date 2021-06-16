import './JoinClassroom.css';
import React, { useState } from "react";
import ClassroomGroup from './ClassroomGroup';

const JoinClassroom = () => {
    const [classroomlist, setclasroomlist] = useState([]);

    let inp;

    const submit = async () =>{
        try {
            // list = await axios.get(`/api/classrooms/${inp}`);
            const list = [{cname: "myclassroom1", desc: "This is my classroom"},
            {cname: "myclassroom2", desc: "This is my classroom"},
            {cname: "myclassroom3", desc: "This is my classroom"},
            {cname: "myclassroom4", desc: "This is my classroom"},
            {cname: "myclassroom2", desc: "This is my classroom"},
            {cname: "myclassroom3", desc: "This is my classroom"},
            {cname: "myclassroom4", desc: "This is my classroom"},
            {cname: "myclassroom2", desc: "This is my classroom"},
            {cname: "myclassroom3", desc: "This is my classroom"},
            {cname: "myclassroom4", desc: "This is my classroom"},
            {cname: "myclassroom2", desc: "This is my classroom"},
            {cname: "myclassroom3", desc: "This is my classroom"},
            {cname: "myclassroom4", desc: "This is my classroom"},
            {cname: "myclassroom5", desc: "This is my classroom"}];
            setclasroomlist(list);
        } catch (error) {
            alert("Error occured");
        }
    }

    return (
        <div className="join-classroom">
            <div className="input-box">
                <div className="input-grp">
                    <div className="input-content">
                        <label>Enter Classroom code</label>
                        <input type="text" onChange={(e) =>{inp = e.target.value}}/>
                        <button className="button" onClick={submit}>Search</button>
                    </div>
                </div>
            </div>
            <ClassroomGroup clist = {classroomlist}/>
        </div>
    )
}

export default JoinClassroom;