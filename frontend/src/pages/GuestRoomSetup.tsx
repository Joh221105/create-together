import {useState} from "react";
import { useNavigate } from "react-router-dom";

const GuestRoomSetup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); // State to hold the username input, need to add random name generator for default
  const [roomLink, setRoomLink] = useState(""); // State to hold the room link 
  const [roomPassword, setRoomPassword] = useState(""); // State to hold optional room password input

  const createRoom = () => {
    if (!username.trim()) {
      alert("Please enter a username first!");
      return;
    }

    const roomId = Math.random().toString(36).substring(2, 8); // short random id for testing
    const link = `${window.location.origin}/room/${roomId}`; 
    setRoomLink(link);
  };
  
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(roomLink).then(() => {
      alert("Copied Link!");
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
      <h1 className="text-3xl font-bold mb-6">Create Guest Room</h1>

      {!roomLink ? (
        <div className="flex flex-col gap-4 w-80">
          <input
            type="text"
            placeholder="Enter a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Optional: Room password"
            value={roomPassword}
            onChange={(e) => setRoomPassword(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={createRoom}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Create Room
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition"
          >
            Home
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-80 items-center">
          <p className="text-lg">
            Room Link
          </p>
          <input
            type="text"
            value={roomLink}
            readOnly
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
          />
          <button
            onClick={copyLinkToClipboard}
            className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            Copy Link
          </button>
          <button
            onClick={() => navigate(roomLink.replace(window.location.origin, ""))}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Enter Room
          </button>
        </div>
      )}
    </div>
  );
};

export default GuestRoomSetup;