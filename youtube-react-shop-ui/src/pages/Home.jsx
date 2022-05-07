import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";


const Home = () => {
  return (


    <div>
      {/*  <Announcement /> */} {/* barra azul de promoção */}
      <Navbar /> {/* HEADER DA HOME */}
      {/* <Slider /> */} {/* SLIDER DE FOTOS COM BOTAO */}
      <Categories /> {/* CATEGORIAS COM FOTO */}
      {/* <Products /> */} {/* PRODUTOS */}
      <Newsletter />
      <Footer />
    </div>




  );
};

export default Home;
