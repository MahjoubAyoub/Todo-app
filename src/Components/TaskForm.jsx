import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.description) {
      alert('Please fill out both fields');
      return;
    }
    addTask({ ...task, id: Date.now(), completed: false });
    setTask({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
      />
      <input
        type="text"
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
