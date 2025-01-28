import React, { useState } from "react";
import Task from "./Task";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        description: inputValue, // Use inputValue for description
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue("");
    }
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 myHeader">My React To Do List</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            type="text"
            onKeyDown={handleKeyDown}
            onChange={handleOnChange}
            value={inputValue}
			placeholder = "Enter your task here"
			className="taskInput"
          />
        </li>
        {tasks.map((task) => (
          <Task
            key={task.id} // Use task.id as the key
            id={task.id} // Pass the task's id
            description={task.description} // Pass the task's description
            onDelete={deleteTask} // Pass the delete function
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
