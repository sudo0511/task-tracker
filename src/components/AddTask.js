import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [taskInput, setText] = useState("");
  const [dayInput, setDay] = useState("");
  const [reminderInput, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!taskInput) {
      alert("Please enter a task to add new task");
      return;
    }
    onAdd({ taskInput, dayInput, reminderInput });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <div class="mx">
      <form onSubmit={onSubmit}>
        <div class="my-1">
          <label class="form-label">Task</label>
          <input
            type="text"
            id="task-detail"
            class="form-control"
            value={taskInput}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div class="my-1">
          <label class="form-label">Date and Time</label>
          <input
            type="datetime-local"
            id="date-time-detail"
            class="form-control"
            value={dayInput}
            onChange={(e) => {
              setDay(e.target.value);
            }}
          />
        </div>
        <div class="my-1 pt-1 mydiv">
          <div class="ms-3 form-switch form-check">
            <label class="form-check-label">Set Reminder</label>
            <input
              class="form-check-input form-check-control"
              type="checkbox"
              checked={reminderInput}
              value={reminderInput}
              onChange={(e) => {
                setReminder(e.currentTarget.checked);
              }}
            />
          </div>
          <input type="submit" value="Save Task" class="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
