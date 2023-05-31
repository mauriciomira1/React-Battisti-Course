import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <h1>React Context API</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
