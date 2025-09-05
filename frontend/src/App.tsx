import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginScreen from "./pages/LoginScreen";
import GamePage from "./pages/GamePage";
import UnkownRoute from "./pages/UnknownRoute";
import SignUpPage from "./pages/SignUpPage";
import GuestRoomSetup from "./pages/GuestRoomSetup";
import RoomPage from "./pages/RoomPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/guest-room" element={<GuestRoomSetup />} />
      <Route path ="/room/:roomId" element={<RoomPage />} />
      <Route path="*" element={<UnkownRoute />} />
    </Routes>
  );
}

export default App;
