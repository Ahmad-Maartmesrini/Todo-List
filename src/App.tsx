import "./App.css";
import Hero from "./components/Hero";
import Task from "./components/Task";

function App() {
  return (
    <main className="w-full min-h-screen flex items-center flex-col bg-[#FBFFEB] p-5">
      <Hero />
      <Task />
    </main>
  );
}

export default App;
