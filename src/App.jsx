import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Meal from "./components/Meal";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Meal />} />
        {/* <Route path="/" element={<Meal />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
