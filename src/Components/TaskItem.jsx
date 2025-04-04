import React, { useState } from 'react';

function TaskItem({ task, updateTask, deleteTask, toggleCompletion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSaveEdit = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedTask.name}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleEditChange}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <span onClick={() => toggleCompletion(task.id)}>{task.name}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
