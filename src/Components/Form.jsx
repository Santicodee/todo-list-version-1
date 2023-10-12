import { useState } from "react";

const Form = ({ tasks, addTask }) => {
  const [task, setTask] = useState("");

  function handlingSubmit(e) {
    e.preventDefault();
    const newTask = { task, id: Date.now(), done: false };

    addTask(newTask);
    setTask("");
  }

  return (
    <>
      <div className="form">
        <form className="add-form" onSubmit={handlingSubmit}>
          <input
            className="add-task"
            type="text"
            placeholder="Add your task.."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="add">Add</button>
        </form>
      </div>
    </>
  );
};

export default Form;
