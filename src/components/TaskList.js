import React from "react";
import { Draggable, Droppable } from 'react-beautiful-dnd';

const TaskList = ({ tasks, handleTaskStatus, handleDeleteTask }) => {
    return (
        <Droppable droppableId="tasks">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => handleTaskStatus(task.id, !task.completed)}>
                      {task.completed ? 'Incomplete' : 'Completed'}
                    </button>
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    );
  };

  export default TaskList;