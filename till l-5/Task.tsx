import "./TaskCard.css";
import { TaskItem } from "./types";

// interface TaskProps {
//   item: TaskItem;
//   removeTask: (task: TaskItem) => void;
// }
const Task = (props: TaskItem) => {
  console.log(props.id);
  return (
    <div className="TaskItem shadow-md border border-slate-100">
        <a href={`/tasks/${props.id}`}><h2 className="text-base font-bold my-1">{props.title}</h2></a>
        
        <p className="text-sm text-slate-500">Due Date :{props.DueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.description}
        </p>
      </div>
  );
};

 export default Task;