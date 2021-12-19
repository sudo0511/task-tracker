const tasks = [
  {
    id: 1,
    text: "Doctor appointment",
    day: "Dec 20th at 12 P.M",
  },
  {
    id: 2,
    text: "second Doctor appointment",
    day: "Dec 22th at 12 P.M",
  },
  {
    id: 3,
    text: "third Doctor appointment",
    day: "Dec 25th at 12 P.M",
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <div className="card card-space">
          {task.text}, {task.day}
          <span className="span-ele">❌</span>
        </div>
      ))}
    </>
  );
};

export default Tasks;
