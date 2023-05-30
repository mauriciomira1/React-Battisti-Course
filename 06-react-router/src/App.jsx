import "./App.css";

// 1 - configurando react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

// Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <BrowserRouter>
        {/*         2 - Links com React router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
