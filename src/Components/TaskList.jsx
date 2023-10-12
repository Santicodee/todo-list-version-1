const TaskList = ({ newTask, deleteTask, toggleDone }) => {
  return (
    <>
      <ul className="main-list">
        {newTask.map((item) => (
          <li className={item.done ? "list done" : "list"} key={item.id}>
            <input
              type="checkbox"
              className="check"
              value={item.done}
              onChange={() => toggleDone(item.id)}
            />
            {item.task}
            <button onClick={() => deleteTask(item.id)} className="close">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
