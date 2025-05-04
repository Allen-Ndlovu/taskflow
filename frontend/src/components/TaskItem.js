import React from 'react';
import styles from '../styles/components/TaskItem.css';

export default function TaskItem({ task }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{task.title}</h3>
      <p className={styles.description}>{task.description}</p>
      <span className={styles.status}>{task.status}</span>
    </div>
  );
}