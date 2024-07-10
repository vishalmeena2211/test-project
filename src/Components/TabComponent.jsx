import { useState } from 'react';
import TaskList from './TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask } from '../redux/Slices/taskSlice';


const TabComponent = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(1);
  const dummyTasks = useSelector(state => state.tasks.tasks);
  console.log(dummyTasks)
  const [tasks, setTasks] = useState(dummyTasks);

  const handleComplete = (taskId, task) => {
    const updatedTasks = tasks?.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    dispatch(updateTask({
      id: taskId,
      title: task.title, description: task.description,completed:true,

    }))
    setTasks(updatedTasks);

  };

  console.log(tasks)

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative flex">
        <button
          className={`relative z-10  p-2 w-1/2  focus:outline-none ${activeTab === 1 ? 'text-blue-500' : 'text-gray-600'
            }`}
          onClick={() => handleTabClick(1)}
        >
          Pending Tasks
        </button>
        <button
          className={`relative z-10 p-2 focus:outline-none w-1/2 ${activeTab === 2 ? 'text-blue-500' : 'text-gray-600'
            }`}
          onClick={() => handleTabClick(2)}
        >
          Completed Tasks
        </button>
        <span
          className="absolute bottom-0 left-0 h-[3px] bg-blue-600 transition-transform duration-300"
          style={{
            width: '50%',
            transform: activeTab === 1 ? 'translateX(0)' : 'translateX(100%)',
          }}
        ></span>
      </div>
      <div>
        {activeTab === 1 && (
          <div className="bg-gray-100 p-4">
            <TaskList tasks={tasks.filter((task) => (!task.completed))} onComplete={handleComplete} />
          </div>
        )}
        {activeTab === 2 && (
          <div className="bg-gray-100 p-4">
            <TaskList tasks={tasks.filter((task) => (task.completed))} onComplete={handleComplete} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
