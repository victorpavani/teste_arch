import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const ProductList = () => {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  }
  return (
    <Container id={theme}>
      <Navbar />
      <Title>Camisetas</Title>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
