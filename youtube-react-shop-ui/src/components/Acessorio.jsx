import styled from "styled-components";
import { ProdutosAcessorios } from "../data";
import Acessories from "./Acessories";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Acessorio = () => {
  return (
    <Container>
      {ProdutosAcessorios.map((item) => (
        <Acessories item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Acessorio;
