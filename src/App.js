import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages//dashboard/home";
import Auth from "./pages/auth";
import CreateEmployee from "./pages/create_employee/create_employee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
