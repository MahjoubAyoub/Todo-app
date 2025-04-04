import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice'; 

// Action types
const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const FILTER_TASKS = 'FILTER_TASKS';

// Action creators
export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });
export const editTask = (id, updatedTask) => ({ type: EDIT_TASK, payload: { id, updatedTask } });
export const filterTasks = (filter) => ({ type: FILTER_TASKS, payload: filter });

// Initial state
const initialState = {
  tasks: [],
  filter: 'all',  // Filter options: 'all', 'done', 'not_done'
};

// Reducer
/*const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
        ),
      };
    case FILTER_TASKS:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};*/

const store = configureStore({
    reducer: {
      tasks: taskReducer, // slice name: reducer
    },
  });

export default store;
