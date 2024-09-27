import "./TaskCard.css";
import { TaskItem } from "./types";
// interface TaskProp {
//   title: string;
//   description:string;
//   DueDate:string;
//   id:String;
// }
// const Task = (props: TaskItem) => {
//   console.log(props.id);

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
      <p className="text-sm text-slate-500">{props.DueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
    </div>
  );
};

//  export default Task;
// import "./TaskCard.css";
// import { TaskItem } from "./types";

// interface TaskProps {
//   item: TaskItem;
//   removeTask: (task: TaskItem) => void;
// }
// const Task = (props: TaskProps) => {
//   const { item, removeTask } = props;
//   return (
//     <div className="TaskItem shadow-md border border-slate-100">
//       <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//         <div>
//           <a href={`/tasks/${item.id || ""}`}>
//             <h2 className="text-base font-bold my-1">{item.title}</h2>
//           </a>
//           <p className="text-sm text-slate-500">{item.DueDate}</p>
//           <p className="text-sm text-slate-500">
//             Description: {item.description}
//           </p>
//         </div>

//         <button className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
//           onClick={() => removeTask(item)}>
//           X
//         </button>
//       </div>
//     </div>
//   );
// };

 export default Task;