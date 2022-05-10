import React from 'react'
import { Container, Content } from './styles'
import {
  FaTimes,
  FaHome,
  FaTshirt,
  FaBook,
  FaRing,
  FaShoppingCart,
  FaMoon
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import SidebarItem from '../SidebarItem'




const Sidebar = ({ active }) => {
  let navigate = useNavigate();

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" Id="" />
        <SidebarItem Icon={FaBook} Text="Livros" Id="Livros" />
        <SidebarItem Icon={FaTshirt} Text="Camisetas" Id="ProductList" />
        <SidebarItem Icon={FaRing} Text="Acessórios" Id="Acessorios" />
        <SidebarItem Icon={FaShoppingCart} Text="Carrinho" Id="Cart" />
        <SidebarItem Icon={FaMoon} Text="Tema Escuro/Claro" Id="Cart" />
      </Content>
    </Container>
  )
}

export default Sidebar