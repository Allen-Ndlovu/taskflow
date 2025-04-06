import React from 'react';
import API from '../api';

const TaskList = ({ tasks, fetchTasks }) => {
  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task._id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p><strong>Status:</strong> {task.status}</p>
          <p><strong>Assigned To:</strong> {task.assignedTo}</p>
          <p><strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}</p>
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
