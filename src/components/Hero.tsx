const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 px-1 md:px-32">
        <h2 className=" text-xl font-bold">
          <a href="https://web-to-do-list-omega.vercel.app">
            <span className=" text-blue-600">Web</span> To-Do List
          </a>
        </h2>
        <button
          className="rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-amber-400 hover:text-blue-600;"
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/Ahmad-Maartmesrini/todo-list",
              "_blank"
            )
          }
        >
          GitHub
        </button>
      </nav>
      <div className="w-11/12 flex justify-center items-center flex-col">
        <h1 className="text-black italic text-4xl mb-2 md:text-6xl">
          Increase
          <span className="text-blue-600 font-bold"> Productivity </span>
          and decrease <span className=" line-through">stress</span>.
        </h1>
        <p className="text-sm sm:text-xl w-full md:w-3/6">
          To-do lists enable you to segment your goals into achievable
          activities and complete large projects by breaking them into smaller
          assignments.
        </p>
      </div>
    </header>
  );
};

export default Hero;
