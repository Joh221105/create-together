import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Welcome to Create Together</h1>

      <form className="mb-6 w-64" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      <div className="flex flex-col gap-4 w-64">
        <button className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          Log In
        </button>
        <button 
            onClick={() => navigate("/signup")}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
          Create Account
        </button>

        <hr className="my-2 border-gray-300" />

        <button 
            onClick={() => navigate("/guest-room")}
            className="px-6 py-3 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition">
          Continue as Guest
        </button>
        {/* Home button */}
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition mt-6"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
