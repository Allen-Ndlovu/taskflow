import React from 'react';
import styles from '../styles/pages/Dashboard.css';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Dashboard() {
  return (
    <>  
      <Navbar />
      <div className={styles.dashboard}>
        <h2>Dashboard</h2>
        <TaskForm />
        <TaskList />
      </div>
    </>
  );
}