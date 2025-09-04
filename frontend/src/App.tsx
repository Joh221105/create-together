import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginScreen from "./pages/LoginScreen";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/game" element = {<GamePage />} />
    </Routes>
  );
}

export default App;
