const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'AUTH_REQUEST':
        return { ...state, loading: true };
      case 'AUTH_SUCCESS':
        localStorage.setItem('token', action.payload.token);
        return { ...state, loading: false, user: action.payload, token: action.payload.token };
      case 'AUTH_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'LOGOUT':
        localStorage.removeItem('token');
        return { ...initialState, token: null };
      default:
        return state;
    }
  }