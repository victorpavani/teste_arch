import styled from "styled-components";
import Navbar from "../components/Navbar";
import LivrosItens from "../components/LivrosItens";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { AddCircle } from "@material-ui/icons";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    
  }
`;

const Livros = () => {
  return (
    <Container>
      <Navbar />
      <Title>Livros</Title>
      <Button>
        <Icon>
          <AddCircle />
        </Icon>
      </Button>
      <LivrosItens />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Livros;
