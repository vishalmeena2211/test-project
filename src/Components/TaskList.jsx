import React from 'react';
import { FaCheck } from "react-icons/fa6";

const TaskCard = ({ task, onComplete }) => {
  const handleCompleteClick = () => {
    onComplete(task?.id,task);
  };

  return (
    <div className="relative bg-white shadow-md rounded-md p-4 mb-4 min-h-[150px]">
      <h2 className="text-lg font-bold mb-2">{task?.title}</h2>
      <p className="text-gray-700">{task?.description}</p>
      { !task?.completed ? <button
        onClick={handleCompleteClick}
        className="mt-2 bg-black text-white px-6 py-3 rounded-md flex justify-center items-center gap-2"
      >
        <span><FaCheck/></span>
        Mark as Completed
      </button> 
      :
      <button
        className="mt-2 bg-green-500 text-white px-6 py-3 rounded-md flex justify-center items-center gap-2"
      >
        <span><FaCheck/></span>
        Completed
      </button> }
      <div className="absolute top-0 right-0 mt-2 mr-2 text-sm text-gray-500">
        {task?.dateTime}
      </div>
    </div>
  );
};

const TaskList = ({ tasks, onComplete }) => {
  return (
    <div className="w-full mx-auto h-[500px] overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {tasks?.map((task) => (
        <TaskCard key={task.id} task={task} onComplete={onComplete} />
      ))}
    </div>
  );
};

export default TaskList;
