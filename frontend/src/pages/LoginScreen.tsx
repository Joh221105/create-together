const LoginScreen = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Ready To Work Together</h1>

      <div className="flex flex-col gap-4 w-64">
        <button className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          Log In
        </button>
        <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
          Create Account
        </button>
        <button className="px-6 py-3 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition">
          👤 Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
