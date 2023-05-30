import "./App.css";

// 1 - configurando react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

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
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
