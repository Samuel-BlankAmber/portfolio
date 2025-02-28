import "./HomeRedesign.css";

export default function HomeRedesign() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center items-center w-full mt-10 mb-6">
        <h1 className="text-6xl">Home</h1>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-8 h-8 text-gray-700 hover:text-gray-900 transition"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        alt="Me"
        className="w-64 h-64 rounded-[10%] transition-transform duration-300 hover:scale-110 active:scale-110"
      />
      <p className="text-4xl mt-4 mb-4">
        Samuel
      </p>
      <p className="text-xl">
        Welcome!
      </p>
    </div>
  )
}
