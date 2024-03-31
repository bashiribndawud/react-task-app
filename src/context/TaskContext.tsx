// @ts-nocheck

import { createContext, ReactNode, useContext, useState } from "react";
import { Task } from "../interfaces/Task.interface";
interface TaskContextType {
  tasks: Task[];
  currentEditTask: Task;
  addTask: (content: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, content: string) => void;
  handleCurrentEditTask: (task: Task) => void;
}
const TaskContext = createContext<TaskContextType>({
  tasks: [],
  currentEditTask: {},
  addTask: () => {},
  toggleTask: () => {},
  deleteTask: () => {},
  editTask: () => {},
  handleCurrentEditTask: () => {},
});

// TaskProvider component
export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentEditTask, setcurrentEditTask] = useState<Task>(null);

  const addTask = (content: string) => {
    if (content.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        content: content,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number, content: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, content: content } : task
      )
    );
    setcurrentEditTask(null)
  };
  const handleCurrentEditTask = (task: Task) => {
    setcurrentEditTask(task);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask,
        editTask,
        handleCurrentEditTask,
        currentEditTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
