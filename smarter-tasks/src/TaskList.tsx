import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

// interface State {}

// class TaskList extends React.Component<Props, State> {
//     render() {
//         return this.props.tasks.map((task, idx) => (
//           <Task key={idx} title={task.title} description={task.description} DueDate={task.DueDate} />
//         ));
//     }
//   }
  const list=[];
  const TaskList = (props: Props) => {
    return props.tasks.map((task, idx) => (
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        DueDate={task.DueDate}
      />
    ));
    return <>{list}</>;
  };
export default TaskList;