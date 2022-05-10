import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Livros from "./pages/Livros";
import Acessorios from "./pages/Acessorios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

function App() {

  const [theme, setTheme] = useState("Light");

  const themeToggler = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  };

  return (
    <Router>
      <Routes>
        <ThemeProvider>
          <Route path="/" element={<Home />} />
          <Route path="/Livros" element={<Livros />} />
          <Route path="/Acessorios" element={<Acessorios />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Cart" element={<Cart />} />
        </ThemeProvider>
      </Routes>

    </Router>
  );
}

export default App;