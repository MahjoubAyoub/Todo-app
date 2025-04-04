import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.find(t => t.id === id);
      if (task) {
        task.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
