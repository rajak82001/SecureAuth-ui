import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/scan/:id" element={<ScanDetail />} />
    </Routes>
  );
}

export default App;
