import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import finish from ".././assets/win.mp3";
import del from ".././assets/whoosh.mp3";
import add from ".././assets/add.mp3";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const Task = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [taskInput, setTaskInput] = useState("");
  const [finsishAudio] = useState(new Audio(finish));
  const [deleteAudio] = useState(new Audio(del));
  const [addAudio] = useState(new Audio(add));

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
      playAddSound();
    }
  };

  const playFinishSound = (shouldPlay: boolean) => {
    if (shouldPlay) {
      // finsishAudio.currentTime = 0;  Reset the audio to the beginning
      finsishAudio.play();
    }
  };

  const playDeleteSound = () => {
    deleteAudio.play();
  };

  const playAddSound = () => {
    addAudio.play();
  };

  const handleToggleTaskCompletion = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    const completedTask = updatedTasks.find(
      (task) => task.id === taskId
    )?.completed;
    playFinishSound(completedTask ?? false);
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    playDeleteSound();
  };

  return (
    <>
      <div className="w-full max-w-lg">
        <div className="border-b-2 my-2  border-blue-600"></div>
        <form onSubmit={handleAddTask} className="my-5 ">
          <input
            type="text"
            className="bg-inherit border-l-2 border-b-2 border-blue-600 outline-none px-2 py-2 mx-2 my-2 placeholder-black"
            value={taskInput}
            onChange={handleInputChange}
            placeholder="New task..."
            required
          />
          <button
            type="submit"
            className="border-r-2 border-t-2 border-blue-600 px-2 py-2"
          >
            Add
          </button>
        </form>
      </div>
      <ul className="w-full max-w-lg">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="bg-inherit flex items-center justify-between border-l-2 border-b-2 border-blue-600 my-5 px-3 py-2"
          >
            <label className="flex items-center w-full cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTaskCompletion(task.id)}
                  className="mr-2 h-4 w-4 outline-none border-0"
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
            </label>
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
    </>
  );
};

export default Task;
