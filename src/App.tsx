import { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskInput.trim() !== "") {
      const newTask: Task = {
        id: nanoid(),
        text: taskInput.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  const handleToggleTaskCompletion = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-lg">
        <h1 className="my-5 font-bold text-3xl md:text-4xl lg:text-4xl">
          <span className="text-sky-700">TypeScript React</span> To-Do List
        </h1>
        <p>
          Writing your daily tasks on a list can help you increase productivity
          and decrease stress.
        </p>
        <div className=" border-b-2"></div>
        <form onSubmit={handleAddTask} className="my-5">
          <input
            type="text"
            className="border-l-2 border-b-2 border-sky-700 outline-none px-2 py-2 mx-2 my-2"
            value={taskInput}
            onChange={handleInputChange}
            placeholder="Add a new task..."
          />
          <button
            type="submit"
            className="border-r-2 border-t-2 border-sky-700 px-2 py-2"
          >
            Add
          </button>
        </form>
      </div>
      <ul className="w-full max-w-lg">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between my-2 px-3 py-2 bg-white shadow-md rounded-md"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTaskCompletion(task.id)}
                className="mr-3 h-5 w-5"
              />
              <p
                className={
                  task.completed
                    ? "line-through text-sm md:text-base lg:text-lg"
                    : "text-sm md:text-base lg:text-lg"
                }
              >
                {task.text}
              </p>
            </div>
            {task.completed && (
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-600 text-sm md:text-base lg:text-lg"
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
