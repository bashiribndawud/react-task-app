import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Task } from "./interfaces/Task.interface";
import TaskList from "./components/TaskList";

import AddTask from "./components/AddTask";
import { TaskProvider } from "./context/TaskContext";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj: Task = {
        id: Date.now(),
        content: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id: number, content: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, content: content } : task
      )
    );
  };
  return (
    <TaskProvider>
      <div className="container bootstrap snippets bootdey.com">
        <div className="row">
          <div className="col-md-12">
            <div className="box">
              <div className="task-board">
                <TaskList
                  tasks={tasks}
                  onToggle={handleToggleTask}
                  onDelete={handleDeleteTask}
                  onEdit={handleEditTask}
                />
                <AddTask
                  value={newTask}
                  handleChange={setNewTask}
                  handleTask={handleAddTask}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
