import React, { useState } from 'react';
import API from '../api';

const TaskForm = ({ fetchTasks }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'To Do',
    deadline: '',
    assignedTo: ''
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/tasks', task);
    fetchTasks();
    setTask({ title: '', description: '', status: 'To Do', deadline: '', assignedTo: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={task.description} onChange={handleChange} />
      <input name="assignedTo" placeholder="Assigned To" value={task.assignedTo} onChange={handleChange} />
      <input type="date" name="deadline" value={task.deadline} onChange={handleChange} />
      <select name="status" value={task.status} onChange={handleChange}>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
