import React from "react";
import "./TaskCard.css";
interface TaskProp {
  title: string;
  description:string;
  DueDate:string;
}



class Task extends React.Component<TaskProp> {
    render() {
      return (
        <div className="TaskItem shadow-md border border-slate-100">
        <h2 className=" text-base font-bold my-1">{this.props.title}</h2>
        <p className=" text-sm text-slate-500">
          Due Date:{this.props.DueDate}
        </p>
        <p className=" text-sm text-slate-500">
          Description:{this.props.description} 
        </p>
      </div>
      )
    }
  };
// const Task = (props: TaskProp) => {
//   return (
//     <div className="TaskItem shadow-md border border-slate-100">
//       <h2 className="text-base font-bold my-1">{props.title}</h2>
//       <p className="text-sm text-slate-500">{props.DueDate}</p>
//       <p className="text-sm text-slate-500">Description: {props.description}</p>
//     </div>
//   );
// };

 export default Task;