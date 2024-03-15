const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 px-1 md:px-32">
        <h2 className=" text-xl font-bold">
          <a href="https://web-to-do-list-omega.vercel.app">
            <span className=" text-blue-600">Web</span> To-Do List
          </a>
        </h2>
        <div className="relative overflow-hidden cursor-pointer">
          <a
            href="https://github.com/Ahmad-Maartmesrini/Todo-List"
            target="_blank"
            aria-label="Github"
          >
            <button className="relative z-10 py-2 px-5 bg-[#000000] rounded-3xl text-[#fff]  border-transparent transition-colors hover:bg-transparent hover:text-[#000]">
              GitHub
            </button>
          </a>
        </div>
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
