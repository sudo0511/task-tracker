import { useState, useEffect } from "react"; //useState is like a hook by which we can use state in functional components
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  const [addTaskToggle, setaddTaskToggle] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskData = await fetchTasks();
      setTasks(taskData);
    };
    getTasks();
  }, []);

  //fetch all task data from json-server
  const fetchTasks = async () => {
    const request = await fetch("http://localhost:5000/tasks");
    const response = await request.json();
    return response;
  };

  //fetch specific task from json-server
  const getTask = async (id) => {
    const request = await fetch(`http://localhost:5000/tasks/${id}`);
    const response = await request.json();
    return response;
  };

  //delete a task
  const deleteTask = async (id) => {
    //to delete specific task from server
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const reminder = async (id) => {
    const taskToToggleReminder = await getTask(id);
    const updatedTask = {
      ...taskToToggleReminder,
      reminder: !taskToToggleReminder.reminder,
    };

    const req = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const res = await req.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: res.reminder } : task
      )
    );
  };

  //add new task
  const addTask = async (newtask) => {
    const { taskInput: text, dayInput: day, reminderInput: reminder } = newtask;
    const task = {
      text,
      day,
      reminder,
    };
    const request = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await request.json();
    setTasks([...tasks, data]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setaddTaskToggle(!addTaskToggle)}
          showBtn={addTaskToggle}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {addTaskToggle && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={reminder}
                  />
                ) : (
                  "No tasks to show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
