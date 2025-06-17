import { useState, useEffect } from 'react'
import Button from './components/Button'
import Layout from './layouts/Layout'

function App() {
  const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem("tasks");
  return saved
    ? JSON.parse(saved)
    : [
        { id: 1, title: "Write Week 3 Quiz", completed: false },
        { id: 2, title: "Review Week 3 Assignment", completed: true },
      ];
});

  const [newTask, setNewTask] = useState('');

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);


  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTaskObj = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    }
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks((curr) =>
      curr.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-pink-200 rounded-full w-24 h-24"></div>
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

          <table className="w-full text-left border border-pink-300 rounded-xl overflow-hidden">
  <thead>
    <tr className="bg-pink-300 text-pink-900">
      <th className="p-2">Task</th>
      <th className="p-2">Status</th>
    </tr>
  </thead>
  <tbody>
    {tasks.map((task) => (
      <tr key={task.id} className="bg-pink-100 border-t border-pink-200">
        <td className="p-2 cursor-pointer" onClick={() => toggleTask(task.id)}>
          {task.title}
        </td>
        <td className="p-2 text-center">
          {task.completed ? "Done" : "Pending"}
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </Layout>
  );
}

export default App;


