import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import TechstackPage from "./pages/TechstackPage/TechstackPage";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/techstack" element={<TechstackPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
