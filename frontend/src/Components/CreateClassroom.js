import React from 'react';
import './CreateClassroom.css';
import axios from 'axios';

const CreateClassroom = (props) =>
{
    let inp;
    const submit = async () =>{
        try {
            const cr = {
                ClassroomName: inp,
                HostedBy: props.user._id
            }
            const classroom = await axios.post('/api/classrooms/create',cr);
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