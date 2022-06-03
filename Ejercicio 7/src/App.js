import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState({
    name: "",
    date: "",
    priority: "",
    description: ""
  });

  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({
      name: "",
      date: "",
      priority: "",
      description: ""
    });
  };

  const handleChangeName = (index) => {
    let newTasks = [...tasks];
    newTasks[index].name = prompt("Name");
    setTasks(newTasks);
  };

  const handleChangeDate = (index) => {
    let newTasks = [...tasks];
    newTasks[index].date = prompt("Date");
    setTasks(newTasks);
  };

  const handleChangePriority = (index) => {
    let newTasks = [...tasks];
    newTasks[index].priority = prompt("Priority");
    setTasks(newTasks);
  };

  const handleChangeDescription = (index) => {
    let newTasks = [...tasks];
    newTasks[index].description = prompt("Description");
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    let newTasks = [...tasks];
    newTasks = newTasks.filter((e, i) => i !== index);
    setTasks(newTasks);
  };

  const handleClear = () => {
    setTasks([]);
  };

  const handleClearFields = () => {
    setTask({
      name: "",
      date: "",
      priority: "",
      description: ""
    });
  };

  return (
    <div className="App">
      <div className="form">
        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="name">Name</label>
          <input
            className="input"
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={task.name}
            onChange={handleChange}
          />
          <label htmlFor="date">Date</label>
          <input
            className="input"
            type="date"
            placeholder="Date"
            id="date"
            name="date"
            value={task.date}
            onChange={handleChange}
          />
          <label htmlFor="priority">Priority</label>
          <select
            className="input"
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            <option hidden> Select Priority </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <label htmlFor="description">Description</label>
          <textarea
            className="input"
            placeholder="Description"
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
          <button
            className="input"
            disabled={
              !task.name || !task.date || !task.priority || !task.description
            }
            onClick={handleSubmit}
          >
            Submit
          </button>
          
        </form>
        <button onClick={handleClearFields}>Clear</button>
        <button onClick={handleClear}>Delete Results</button>
      </div>

      <table className="result">
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>Name: {task.name}</td>
              <br />
              <td>Date: {task.date}</td>
              <br />
              <td>Priority: {task.priority}</td>
              <br />
              <td>Description: {task.description}</td>
              <td>
                <button onClick={() => handleChangeName(index)}>
                  <span role="img" aria-label="edit">
                    📝
                  </span>
                </button>
                <button onClick={() => handleChangeDate(index)}>
                  <span role="img" aria-label="edit">
                    📅
                  </span>
                </button>
                <button onClick={() => handleChangePriority(index)}>
                  <span role="img" aria-label="edit">
                    🔥
                  </span>
                </button>
                <button onClick={() => handleChangeDescription(index)}>
                  <span role="img" aria-label="edit">
                    📝
                  </span>
                </button>
                <button onClick={() => handleDelete(index)}>
                  <span role="img" aria-label="delete">
                    ❌
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
