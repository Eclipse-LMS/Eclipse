import './ClassroomGroup.css';
import React from 'react';
import ClassroomCard from './ClassroomCard';

const ClassroomGroup = (props) =>
{
    return (
        <div className="classroom-group">
            {
                props.clist.length ? props.clist.map((e)=> <ClassroomCard user = {props.user} classroom={e} />) : <h1 className="not_found">No class found</h1>
            }
        </div>
    )
}

export default ClassroomGroup;