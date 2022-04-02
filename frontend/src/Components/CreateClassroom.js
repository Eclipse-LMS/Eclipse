import React from 'react';
import './CreateClassroom.css';
import axios from 'axios';
import Cookies from "universal-cookie";

const CreateClassroom = (props) =>
{
    let inp;
    const submit = async () =>{
        try {
            const cookies = new Cookies();
            const cr = {
                ClassroomName: inp,
                HostedBy: props.user._id
            }
            const classroom = await axios.post('http://localhost:5010/api/classrooms/create',cr,
            {headers: {
                'sessionToken': cookies.get('sessionToken'),
            }});
        } catch (error) {
            alert(error);
        }
    }
    return (
            <div className="create-classroom">
                <div className="input-box">
                    
                    <div className="input-grp">
                        <label >Classroom Agenda</label>
                        <input type="text" onChange={(e)=>{inp = e.target.value}}/>
                    </div>
                    <button type="submit" onClick={submit}> Create </button>
               </div>
            </div>

    )
}

export default CreateClassroom;