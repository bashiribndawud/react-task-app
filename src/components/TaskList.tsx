import { useTaskContext } from "../context/TaskContext";
import { Task, TaskListProps } from "../interfaces/Task.interface";
import TaskItem from "./TaskItem";

const TaskList: React.FC<TaskListProps> = ({ onToggle, onDelete, onEdit }) => {
  const { tasks } = useTaskContext();
  console.log(tasks);
  return (
    <>
      <aside className="left-board">
        <div className="user-head">
          <h3>Hello John</h3>
          <span>What are your plans for today</span>
        </div>
        <ul className="chat-list ">
          {tasks.map((task: Task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>

        <footer className="mb-4 d-flex justify-content-end">
          <button className="btn btn-primary addtask">+</button>
        </footer>
      </aside>
    </>
  );
};

export default TaskList;
