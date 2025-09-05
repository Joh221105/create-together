import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex gap-8">
        <button
          onClick={() => navigate("/login")}
          className="px-8 py-4 text-2xl rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Work
        </button>
        <button 
          onClick = {() => navigate("/game")}
          className="px-8 py-4 text-2xl rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
          Play
        </button>
      </div>
    </div>
  );
};

export default Landing;
