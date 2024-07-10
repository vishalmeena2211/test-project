// taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

let nextTaskId = 4; 


const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [{
    id: 1,
    title: 'Task 1',
    description: 'This is the description for Task 1.',
    completed: false,
    dateTime: new Date().toLocaleString('en-IN'), // Automatically generate Indian date and time
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'This is the description for Task 2.',
    completed: false,
    dateTime: new Date().toLocaleString('en-IN'), // Automatically generate Indian date and time
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'This is the description for Task 3.',
    completed: false,
    dateTime: new Date().toLocaleString('en-IN'), // Automatically generate Indian date and time
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'This is the description for Task 4.',
    completed: false,
    dateTime: new Date().toLocaleString('en-IN'), // Automatically generate Indian date and time
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'This is the description for Task 5.',
    completed: false,
    dateTime: new Date().toLocaleString('en-IN'), // Automatically generate Indian date and time
  },], // set the data empty here
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask(state, action) {
      const { title, description, dateTime } = action.payload;
      state.tasks.push({
        id: nextTaskId++,
        title,
        description,
        dateTime,
      });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, action) {
      const { id, title, description} = action.payload;
      const taskToUpdate = state.tasks.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.title = title;
        taskToUpdate.description = description;
        taskToUpdate.completed = true;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    deleteTask(state, action) {
      const taskId = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { updateTask, deleteTask,createTask } = taskSlice.actions;
export default taskSlice.reducer;
