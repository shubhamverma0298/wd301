import React, { useState } from "react";
import { TaskItem } from "./types";
interface TaskFormProps{
    addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    title: string;
    description: string;
    DueDate:string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
        title: "",
        description:"",
        DueDate:"",
  }
}

addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
        title: this.state.title,
        description:this.state.description,
        DueDate:this.state.DueDate,
      };
    if(newTask.title.length === 0 || newTask.DueDate.length === 0){
      return;
    }
      this.props.addTask(newTask);
      this.setState({ title: "" });
      this.setState({description:""});
      this.setState({DueDate:""})
  };
titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(`${event.target.value}`);
  this.setState({ description: event.target.value });
};
DueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(`${event.target.value}`);
  this.setState({ DueDate: event.target.value });
};
 render(){
    return (
     <div>
        <form onSubmit={this.addTask}>
            <div>
            <label htmlFor="todoTitle">Title :</label>
            <input className=" border border-grey-300 rounded text-grey-900 w-full p-2 text-sm " id="todoTitle" type="text" value={this.state.title} onChange={this.titleChanged} />
            </div>
            <div>
            <label htmlFor="todoDescription">Description :</label>
            <input className=" border border-grey-300 rounded text-grey-900 w-full p-2 text-sm mp-2" id="todoDescription" type="text" value={this.state.description} onChange={(this.descriptionChanged)} />
            </div>
            <div>
            <label htmlFor="todoDueDate">DueDate :</label>
            <input className=" border border-grey-300 rounded text-grey-900 w-full p-2 text-sm" id="todoDueDate" type="date" value={this.state.DueDate} onChange={(this.DueDateChanged)} />
            </div>
            <button  className=" border border-grey-300 rounded p-2 text-sm bg-green-500" id="addTaskButton" type="submit">Add item</button>
        </form>
     </div>
    )
  }
}

//  const TaskForm = (props: TaskFormProps) => {;
//  const [formState, setFormState] = React.useState<TaskFormState>({
//   title: "",
//   description: "",
//   DueDate: "",
// }); 
//  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//   event.preventDefault();
//   console.log(`Submitted the form with`);
//   if (formState.title.length === 0 || formState.DueDate.length === 0) {
//     return;
//   }
//   props.addTask(formState);
//   setFormState({ title: "", description: "", DueDate: "" });
// };
//  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//   console.log(`${event.target.value}`);
//   setFormState({ ...formState, title: event.target.value });
// };
// const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
//   event
// ) => {
//   console.log(`${event.target.value}`);
//   setFormState({ ...formState, description: event.target.value });
// };
// const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//   console.log(`${event.target.value}`);
//   setFormState({ ...formState, DueDate: event.target.value });
// };
//  return (
//   <form onSubmit={addTask}>
//     <div className="grid md:grid-cols-6 md:gap-3 TaskItem">
//       <div className="relative z-0 w-full mb-6 group TaskItem">
//         <input
//           id="todoTitle"
//           name="todoTitle"
//           type="text"
//           value={formState.title}
//           onChange={titleChanged}
//           className=" TaskItem block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//         />
//         <label
//           htmlFor="todoTitle"
//           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//         >
//           Todo Title
//         </label>
//       </div>
//       <div className="relative z-0 w-full mb-6 group TaskItem">
//         <input
//           id="todoDescription"
//           name="todoDescription"
//           type="text"
//           value={formState.description}
//           onChange={descriptionChanged}
//           placeholder=" "
//           className=" TaskItem block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer TaskItem"
//         />
//         <label
//           htmlFor="todoDescription"
//           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//         >
//           Description
//         </label>
//       </div>
//       <div className="relative z-0 w-full mb-6 group TaskItem">
//         <input
//           id="todoDueDate"
//           name="todoDueDate"
//           type="date"
//           value={formState.DueDate}
//           onChange={dueDateChanged}
//           className=" TaskItem block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//           required
//         />
//         <label
//           htmlFor="todoDueDate"
//           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//         >
//           Due Date
//         </label>
//       </div>
//       <div className="relative z-0 w-full mb-6 group">
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Add item
//         </button>
//       </div>
//     </div>
//   </form>
// );
// }
export default TaskForm;