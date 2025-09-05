import { useNavigate } from "react-router-dom";

const UnkownRoute = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">Page not found.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default UnkownRoute;
