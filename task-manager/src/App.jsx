import { useState, useEffect } from 'react';
import Button from './components/Button';
import Layout from './layouts/Layout';
import ThemeToggle from './components/ThemeToggle';


function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "Write Lesson Plan", completed: false },
          { id: 2, title: "Review MongoDb Quiz", completed: true },
        ];
  });
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), title: newTask, completed: false };
    setTasks((curr) => [...curr, task]);
    setNewTask("");
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const toggleTask = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const deleteTask = (id) => {
    setTasks((curr) => curr.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-pink-200 flex items-center justify-center mb-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6625/6625896.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-4xl font-playfair text-primary mb-4">🎀 My Girly Task Manager 🎀</h1>

        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
          <div className="flex mb-4 w-full gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a cute task..."
              className="flex-grow p-2 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <Button onClick={addTask}>➕ Add</Button>
          </div>

          <div className="border-t border-pink-300 pt-4 mt-4">
            {/* Filter Buttons */}
            <div className="bg-yellow-100 rounded-xl p-3 flex justify-center gap-2 mb-4 border border-yellow-200">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-lg text-sm ${
                  filter === "all"
                    ? "bg-pink-500 text-white"
                    : "bg-yellow-100 text-pink-800"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`px-3 py-1 rounded-lg text-sm ${
                  filter === "active"
                    ? "bg-pink-500 text-white"
                    : "bg-yellow-100 text-pink-800"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-3 py-1 rounded-lg text-sm ${
                  filter === "completed"
                    ? "bg-pink-500 text-white"
                    : "bg-yellow-100 text-pink-800"
                }`}
              >
                Completed
              </button>
            </div>

            {/* Task List */}
            <ul className="space-y-2">
              {filteredTasks.map((task) => (
                <li
                  key={task.id}
                  className="bg-pink-100 p-3 rounded-xl text-pink-800 shadow-sm flex justify-between items-center"
                >
                  <span
                    onClick={() => toggleTask(task.id)}
                    className={`cursor-pointer flex-1 ${
                      task.completed ? "line-through opacity-60" : ""
                    }`}
                  >
                    ✨ {task.title}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg text-sm ml-4"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>

            {/* Clear Completed */}
            {tasks.some((task) => task.completed) && (
              <div className="flex justify-between items-center mt-4 text-sm">
                <span className="text-pink-800">
                  {tasks.filter((task) => !task.completed).length} task(s) remaining
                </span>
                <button
                  onClick={() => setTasks(tasks.filter((task) => !task.completed))}
                  className="text-red-500 hover:text-red-700 underline"
                >
                  Clear Completed
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;


