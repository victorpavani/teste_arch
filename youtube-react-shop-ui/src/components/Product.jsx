import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 2%;
`;

const Container = styled.div`
  flex: 1;
  margin: 7px;
  min-width: 280px;
  height: 400px;
  border-radius: 2%;
  box-shadow: 4px 8px 20px #cccccc;
  display: flex;
  align-items: start;
  justify-content: center;
  background-color: white;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
    border-radius: 2%;
  }
`;


const Image = styled.img`
  margin-top: 5%;
  height: 60%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    
  }
`;

const Title = styled.h1`
margin: 25px;
font-size: 20px;
justify-content: center;  
margin-top: 100%;
margin-bottom: 0%;
  z-index: 4;
  position: absolute;
`;

const Price = styled.h1`
margin: 25px;
font-size: 20px;
justify-content: center;
margin-top: 90%;  
margin-bottom: 0%;
  z-index: 4;
  position: absolute;
`;

const Desc = styled.h1`
margin: 35px;
font-size: 13px;
align-items: center;
justify-content: center;
margin-top: 115%;  
margin-bottom: 0%;
  z-index: 4;
  position: absolute;
`;

const Product = ({ item }) => {
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={item.img} />
      <Price>R$ {item.price}</Price>
      <Title>{item.name}</Title>
      <Desc>{item.description}</Desc>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        {/* <Icon>
          <SearchOutlined />
        </Icon> */}
        {/* <Icon>
          <FavoriteBorderOutlined />
        </Icon> */}
      </Info>
    </Container>
  );
};

export default Product;
