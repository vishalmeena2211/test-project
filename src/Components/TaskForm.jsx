import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTask } from '../redux/Slices/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const formData = {
      title,
      description,
      dateTime: new Date().toLocaleString('en-IN'), // Automatically generate Indian date and time
    };

    console.log(formData)
    dispatch(createTask({
        title,
        description,
        dateTime: new Date().toLocaleString(), // You can adjust this to get the current date and time in your preferred format
      }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-10 px-10 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Create New Task</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
