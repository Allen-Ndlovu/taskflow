import React, { useState } from 'react';
import styles from '../styles/components/TaskForm.css';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/actions/taskActions';

export default function TaskForm() {
  const [form, setForm] = useState({ title: '', description: '', status: 'To Do', deadline: '' });
  const dispatch = useDispatch();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createTask(form));
    setForm({ title: '', description: '', status: 'To Do', deadline: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="Task Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        className={styles.textarea}
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <select
        className={styles.select}
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <input
        className={styles.input}
        type="date"
        name="deadline"
        value={form.deadline}
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">Add Task</button>
    </form>
  );
}