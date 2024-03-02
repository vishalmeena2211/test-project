import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/Slices/taskSlice';

const EditTasks = ({ onUpdate}) => {
  const dispatch = useDispatch();
  const Task = useSelector(state => state.tasks?.tasks);
  const [tasks, setTasks] = useState(Task);
  const [selectedTask, setSelectedTask] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [confirmModal, setConfirmModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  console.log(isEdit)

  const handleEditClick = (task) => {
    setSelectedTask(task);
    setTitle(task.title);
    setDescription(task.description);
  };

  const handleUpdate = () => {
    onUpdate({
      ...selectedTask,
      title,
      description,
    });
    setSelectedTask(null);
  };

  const handleDeleteClick = (taskId) => {
    dispatch(deleteTask(taskId))
    setSelectedTask(null);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Task List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks?.map((task) => (
          <div key={task.id} className="bg-white rounded-md shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">{task.title}</h2>
            <p className="text-gray-700 mb-2">{task.description}</p>
            <p className="text-sm text-gray-500">{task.dateTime}</p>
            <div className="mt-4 flex justify-between">
              {(isEdit && selectedTask === task) ? (
                <div>
                  <label htmlFor="editTitle" className="block text-gray-700 font-semibold mb-2">Title:</label>
                  <input
                    type="text"
                    id="editTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <label htmlFor="editDescription" className="block text-gray-700 font-semibold mb-2 mt-4">Description:</label>
                  <textarea
                    id="editDescription"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <div className="flex justify-end mt-4">
                    <button onClick={() => { setSelectedTask(null); setIsEdit(false); }} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
                    <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">Save Changes</button>
                  </div>
                </div>
              ) : (
                <div>
                  <button onClick={() => { handleEditClick(task); setIsEdit(true); }} className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
                  <button onClick={() => { setSelectedTask(task); setConfirmModal(true); }} className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {selectedTask && confirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-md shadow-md p-4">
            <p className="text-lg font-semibold mb-4">Delete Task</p>
            <p className="mb-4">Are you sure you want to delete this task?</p>
            <div className="flex justify-end">
              <button onClick={() => { setSelectedTask(null); setConfirmModal(false); }} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
              <button onClick={() => handleDeleteClick(selectedTask?.id)} className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTasks;


