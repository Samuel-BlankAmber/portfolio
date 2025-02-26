import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Transition from "./Transition";
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Transition />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
