import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../Components/TaskList'
import { updateTask } from '../redux/Slices/taskSlice';
import { useState } from 'react';

const ViewAllTasksPage = () => {
    const dispatch = useDispatch();
    const task = useSelector(state => state.tasks.tasks);
    const [tasks,setTasks] = useState(task)
    const handleComplete = (taskId, task) => {
        const updatedTasks = tasks?.map((task) =>
          task.id === taskId ? { ...task, completed: true } : task
        );
        dispatch(updateTask({
          id: taskId,
          title: task.title, description: task.description
    
        }))
        setTasks(updatedTasks);
    
      };

    return (
        <div className='mx-auto max-w-2xl'>
            <h1 className='my-5 text-3xl font-bold text-center'>All Tasks</h1>
            <TaskList tasks = {tasks} onComplete={handleComplete} />
        </div>
    )
}

export default ViewAllTasksPage
