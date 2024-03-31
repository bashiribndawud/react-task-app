import React, { useState } from "react";
import { Task, TaskItemProps } from "../interfaces/Task.interface";
import { useTaskContext } from "../context/TaskContext";

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const { toggleTask, deleteTask, handleCurrentEditTask } = useTaskContext();

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleEdit = () => {
    handleCurrentEditTask(task);
  };

  return (
    <>
      <li className="d-flex justify-content-between p-3 bg-white m-3 rounded">
        <div className="">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
            className="c"
          />

          <div className={`${task.completed ? "completed task-content" : "task-content"}`}>
            {task.content}
          </div>
        </div>
        <button onClick={handleEdit} className="btn btn-outline-primary">Edit</button>
      </li>
      {/* <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      {isEditing ? (
        <input type="text" value={editedContent} onChange={handleChange} />
      ) : (
        <span>{task.content}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Cancel" : "Edit"}</button>
      {!isEditing && <button onClick={handleDelete}>Delete</button>}
      {isEditing && <button onClick={handleSave}>Save</button>} */}
    </>
  );
};

export default TaskItem;
