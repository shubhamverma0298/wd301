import React from 'react';
import './TaskCard.css'

interface TaskCard {
  dueDate: "string",
  completedAtDate : "string",
  assigneeName: "string",
}
const TaskCard = (props) =>{
    return(
      <div className="TaskItem py-3 px-5">
        <h4 className="text-xl font-bold">{props.title}</h4>
        {props.dueDate && <p className='text-left'>Due on: {props.dueDate}</p>}
        {props.completedAtDate && <p className='text-left'>Completed on: {props.completedAtDate}</p>}
        <p>AssigneeName : {props.assigneeName}</p>
      </div>
    );
  };

  export default TaskCard;
  