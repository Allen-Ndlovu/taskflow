const initialState = {
    tasks: [],
    loading: false,
    error: null,
  };
  
  export default function taskReducer(state = initialState, action) {
    switch (action.type) {
      case 'TASKS_REQUEST':
        return { ...state, loading: true };
      case 'TASKS_SUCCESS':
        return { ...state, loading: false, tasks: action.payload };
      case 'TASKS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }