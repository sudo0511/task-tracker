const AddTask = () => {
  return (
    <div className="mx">
      <form>
        <div className="my-1">
          <label className="form-label">Task</label>
          <input type="text" className="form-control" placeholder="Add Task" />
        </div>
        <div className="my-1">
          <label className="form-label">Date and Time</label>
          <input
            className="form-control"
            type="datetime-local"
            placeholder="Add Date and Time"
          />
        </div>

        <div className="form-switch my-1">
          <label className="form-check-label">Set Reminder</label>
          <input className="form-check-input form-control" type="checkbox" />
        </div>
        <input type="submit" value="Save Task" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddTask;
