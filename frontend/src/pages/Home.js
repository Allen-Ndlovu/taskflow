import React, { useState, useEffect } from 'react';
import styles from '../styles/pages/Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const { user, error } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);

  const toggleMode = () => { setIsLogin(!isLogin); setForm({ name: '', email: '', password: '' }); };
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    isLogin ? dispatch(login(form)) : dispatch(register(form));
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              className={styles.input}
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button className={styles.button} type="submit">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <button className={styles.toggle} onClick={toggleMode}>
          {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
        </button>
      </div>
    </div>
  );
}