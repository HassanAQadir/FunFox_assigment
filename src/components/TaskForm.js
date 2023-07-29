import React, {useState} from "react";
import { toast } from 'react-toastify';
const TaskForm = ({ handleAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const showSuccessToast = (message) => {
        toast.success(message, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
      };
    
      // Function to show an error toast notification
      const showErrorToast = (message) => {
        toast.error(message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
      };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description) {
          handleAddTask(title, description);
          showSuccessToast('Task added successfully!');
          setTitle('');
          setDescription('');
        } else {
          showErrorToast('Please fill in both title and description.');
        }
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  };

  export default TaskForm;