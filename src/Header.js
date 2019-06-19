import React from 'react'
import styled from '@emotion/styled'

const HeaderContainer = styled.h1`
    position: absolute;
	top: -155px;
	width: 100%;
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color:${props => props.color ? props.color : 'grey'};
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
`
function Header({color}) {
    return ( <HeaderContainer color={color}>Todos</HeaderContainer>)
  }

export default Header
