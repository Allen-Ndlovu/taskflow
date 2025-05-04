import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/actions/taskActions';
import TaskItem from './TaskItem';
import styles from '../styles/components/TaskList.css';

export default function TaskList() {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector(state => state.tasks);

  useEffect(() => { dispatch(fetchTasks()); }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  return (
    <div className={styles.list}>
      {tasks.map(task => <TaskItem key={task._id} task={task} />)}
    </div>
  );
}