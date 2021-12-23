import { useState } from "react"; //useState is like a hook by which we can use state in functional components
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [addTaskToggle, setaddTaskToggle] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor appointment",
      day: "2021-12-23 Time : 20:21",
      reminder: true,
    },
    {
      id: 2,
      text: "Second Doctor's appointment",
      day: "2021-12-25 Time : 20:21",
      reminder: false,
    },
  ]);

  //delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //toggle reminder
  const reminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  //add new task
  const addTask = ({ taskInput, dayInput, reminderInput }) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    let dayInputArr = dayInput.split("T");
    let dayInputStr = dayInputArr[0] + " Time : " + dayInputArr[1];
    // console.log(dayInputStr);
    const newTask = {
      id,
      text: taskInput,
      day: dayInputStr,
      reminder: reminderInput,
    };
    // console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setaddTaskToggle(!addTaskToggle)}
        showBtn={addTaskToggle}
      />
      {addTaskToggle && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder} />
      <Footer />
    </div>
  );
}

export default App;
