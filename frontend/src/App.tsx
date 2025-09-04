import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginScreen from "./pages/LoginScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
