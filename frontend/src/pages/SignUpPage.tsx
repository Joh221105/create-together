
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Create an Account</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mb-6 w-72 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button className="mt-4 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
          Sign Up
        </button>
      </form>

      {/* Back button */}
      <button
        onClick={() => navigate("/login")}
        className="px-6 py-3 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition"
      >
        Back
      </button>
    </div>
  );
};

export default SignUpPage;
