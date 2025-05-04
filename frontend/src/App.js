import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import API from './api';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data } = await API.get('/tasks');
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>TaskFlow Project Management</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
};

export default App;
