const AddTask = () => {
  return (
    <div class="mx">
      <form>
        <div class="my-1">
          <label class="form-label">Task</label>
          <input type="text" id="task-detail" class="form-control" required />
        </div>
        <div class="my-1">
          <label class="form-label">Date and Time</label>
          <input
            type="datetime-local"
            id="date-time-detail"
            class="form-control"
            required
          />
        </div>
        <div class="my-1 pt-1 mydiv">
          <div class="ms-3 form-switch form-check">
            <label class="form-check-label">Set Reminder</label>
            <input
              class="form-check-input form-check-control"
              type="checkbox"
            />
          </div>
          <button type="button" id="save" class="btn btn-primary">
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
