import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Intro from "./pages/Intro";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
