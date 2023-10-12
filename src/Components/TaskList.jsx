const TaskList = ({ newTask, deleteTask }) => {
  return (
    <>
      <ul className="main-list">
        {newTask.map((item) => (
          <li
            className="list"
            key={item.id}
            style={item.done ? { textDecoration: "line-through" } : {}}
          >
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
