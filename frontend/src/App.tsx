import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginScreen from "./pages/LoginScreen";
import GamePage from "./pages/GamePage";
import UnkownRoute from "./pages/UnknownRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="*" element={<UnkownRoute />} />
    </Routes>
  );
}

export default App;
