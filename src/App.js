import { useState } from "react"; //useState is like a hook by which we can use state in functional components
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor appointment",
      day: "Dec 20th at 12 P.M",
      reminder: true,
    },
    {
      id: 2,
      text: "second Doctor appointment",
      day: "Dec 22th at 12 P.M",
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
    const newTask = {
      id,
      text: taskInput,
      day: dayInput,
      reminder: reminderInput,
    };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder} />
      <Footer />
    </div>
  );
}

export default App;
