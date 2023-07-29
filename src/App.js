import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { DragDropContext } from 'react-beautiful-dnd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // State to store tasks and user groups
  const [tasks, setTasks] = useState([]);
  const [userGroup, setUserGroup] = useState('Group 1');

  // Function to handle task submission
  const handleAddTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to handle task completion status
  const handleTaskStatus = (taskId, isCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  // Function to handle task deletion
  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  // Function to handle drag-and-drop reordering of tasks
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTasks = Array.from(tasks);
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);
    setTasks(reorderedTasks);
  };
    // Function to show a success toast notification
    
  

  return (
    <div className="app">
      <h1>funfox coding Assignment</h1>
      <TaskForm handleAddTask={handleAddTask} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <TaskList
          tasks={tasks}
          handleTaskStatus={handleTaskStatus}
          handleDeleteTask={handleDeleteTask}
        />
      </DragDropContext>
      <ToastContainer />
    </div>
  );
};

export default App;