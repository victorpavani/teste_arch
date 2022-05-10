import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, DarkTheme } from "../components/Themes";


const Home = () => {
  const [theme, setTheme] = useState("Light");

  const themeToggler = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  };

  return (
    <ThemeProvider theme={theme === "Light" ? lightTheme : DarkTheme}>
      <div>
        <Navbar /> {/* HEADER DA HOME */}
        <Categories /> {/* CATEGORIAS COM FOTO */}
        <Newsletter />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
