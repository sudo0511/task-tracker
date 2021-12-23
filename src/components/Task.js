import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`card my-2 py-1 card-space ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <strong>{task.text}</strong>
      <p>{task.day}</p>
      <FaTimes className="span-ele" onClick={() => onDelete(task.id)} />
      {/* <span className="span-ele">❌</span> */}
    </div>
  );
};

export default Task;
