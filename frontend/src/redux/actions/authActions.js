import API from '../../utils/api';

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_REQUEST' });
    const { data } = await API.post('/auth/register', formData);
    dispatch({ type: 'AUTH_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'AUTH_FAILURE', payload: err.response?.data?.message || err.message });
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_REQUEST' });
    const { data } = await API.post('/auth/login', formData);
    dispatch({ type: 'AUTH_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'AUTH_FAILURE', payload: err.response?.data?.message || err.message });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};