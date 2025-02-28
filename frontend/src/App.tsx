import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Intro from "./pages/Intro";
// import Home from "./pages/Home";
import HomeRedesign from "./pages/HomeRedesign";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Intro />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/home" element={<HomeRedesign />} />
      </Routes>
    </BrowserRouter>
  );
}
