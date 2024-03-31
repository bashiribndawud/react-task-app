// @ts-nocheck
import React, { useState, useEffect } from "react";
import { AddTaskProps } from "../interfaces/Task.interface";
import { useTaskContext } from "../context/TaskContext";

const AddTask: React.FC<AddTaskProps> = ({
  value,
  handleChange,
  handleTask,
}) => {
  const [newTask, setNewTask] = useState("");
  const { addTask, currentEditTask, editTask, deleteTask } = useTaskContext();

  useEffect(() => {
    console.log(currentEditTask);
    if (currentEditTask) {
      setNewTask(currentEditTask?.content);
    }
  }, [currentEditTask]);

  const handleAddTask = () => {
    console.log(newTask, "tasj", currentEditTask);
    if (currentEditTask) {
      editTask(currentEditTask?.id, newTask);
    } else {
      addTask(newTask);
    }
    setNewTask("");
  };
  const handleDelete = () => {
    setNewTask("");
    console.log(currentEditTask);
    if (currentEditTask) {
      deleteTask(currentEditTask.id);
    }
  };

  return (
    <aside className="right-board">
      <div className="task-board-head">
        <h3>Edit Task</h3>
      </div>

      <div className="chat-txt px-3 pt-4  w-100">
        <label htmlFor="taskname ">Task Name</label>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control"
        />
      </div>

      <footer className="row mb-4">
        <div className="col-2">
          <button onClick={handleDelete} className="btn btn-danger py-2 px-3 ">
            Delete
          </button>
        </div>
        <div className="col-10">
          <button
            onClick={handleAddTask}
            className="btn btn-primary btn-lg w-100"
          >
            Save
          </button>
        </div>
      </footer>
    </aside>
  );
};

export default AddTask;
