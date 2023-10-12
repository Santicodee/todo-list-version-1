import "./App.css";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import TaskList from "./Components/TaskList";
import { useState } from "react";

const initialItems = [
  { id: 1, task: "practice coding", done: false },
  { id: 2, task: "Do the dishes", done: true },
  { id: 3, task: "watch lec vid", done: false },
];

function App() {
  const [newTask, setNewTask] = useState([]);

  function addTask(items) {
    setNewTask((newitems) => [...newitems, items]);
  }

  function deleteTask(id) {
    setNewTask((newitems) => newitems.filter((item) => item.id !== id));
  }
  function toggleDone(id) {
    setNewTask((newitem) =>
      newitem.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <>
      <Logo />
      <Form tasks={initialItems} addTask={addTask} />
      <TaskList
        initialItems={initialItems}
        newTask={newTask}
        deleteTask={deleteTask}
        toggleDone={toggleDone}
      />
    </>
  );
}

export default App;
