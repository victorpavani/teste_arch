import styled from "styled-components";
import Navbar from "../components/Navbar";
import Acessorio from "../components/Acessorio";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const Acessorios = () => {
  return (
    <Container>
      <Navbar />
      <Title>Acessórios</Title>
      <Acessorio />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Acessorios;
