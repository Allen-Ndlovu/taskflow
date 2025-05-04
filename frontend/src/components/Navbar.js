import React from 'react';
import styles from '../styles/components/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => navigate('/dashboard')}>
        TaskFlow
      </div>
      <div className={styles.actions}>
        {user ? (
          <button className={styles.button} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className={styles.button} onClick={() => navigate('/')}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}