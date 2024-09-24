import React from "react";
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
        DueDate:""
  }
}

addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
        title: this.state.title,
        description:this.state.description,
        DueDate:this.state.DueDate,
      };
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
     <div>Task form
        <form onSubmit={this.addTask}>
            <label className="TaskItem" htmlFor="todoTitle">Title</label>
            <input className="TaskItem" id="todoTitle" type="text" value={this.state.title} onChange={this.titleChanged} required/>
            <label className="TaskItem" htmlFor="todoDescription">Description</label>
            <input className="TaskItem" id="todoDescription" type="text" value={this.state.description} onChange={(this.descriptionChanged)} required/>
            <label className="TaskItem" htmlFor="todoDueDate">DueDate</label>
            <input className="TaskItem" id="todoDueDate" type="text" value={this.state.DueDate} onChange={(this.DueDateChanged)} required/>
            <button id="addTaskButton" type="submit">Add item</button>
        </form>
     </div>
    )
  }
}
 export default TaskForm;