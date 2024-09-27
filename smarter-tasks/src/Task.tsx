import "./TaskCard.css";
import { TaskItem } from "./types";

// interface TaskProps {
//   item: TaskItem;
//   removeTask: (task: TaskItem) => void;
// }
const Task = (props: TaskItem) => {
  console.log(props.id);
  return (
    <div className="TaskItem shadow-md  border-slate-100">
     <div className="shadow-md  border-slate-100">
          <h2 className="text-sm text-slate-500">
            <a href={`/tasks/${props.id}`}>{props.title} </a>
          </h2>
     </div>
      <p className="text-sm text-slate-500">Due Date :{props.DueDate}</p>
      <p className="text-sm text-slate-500">Description : {props.description}</p>
    </div>
  );
};

 export default Task;