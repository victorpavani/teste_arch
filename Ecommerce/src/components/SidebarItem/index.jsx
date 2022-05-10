
import React from 'react'
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';


const SidebarItem = ({ Icon, Text, Id }) => {
  let navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/" + Id)}>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem