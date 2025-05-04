import API from '../../utils/api';

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch({ type: 'TASKS_REQUEST' });
    const { data } = await API.get('/tasks');
    dispatch({ type: 'TASKS_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'TASKS_FAILURE', payload: err.response?.data?.message || err.message });
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    await API.post('/tasks', task);
    dispatch(fetchTasks());
  } catch (err) {
    console.error(err);
  }
};