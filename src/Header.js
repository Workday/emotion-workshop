import React from 'react'
import styled from '@emotion/styled'

const HeaderContainer = styled.h1`
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: blue;
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
`
function Header() {
  return <HeaderContainer>Todos</HeaderContainer>
}

export default Header
