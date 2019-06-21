/**
 * Steps:
 * 1. Pass a color prop to change the header color
 * 2. In your styled component, change the css color property based on your prop.
 * 	  If no color prop is passed, it should default to grey. For reference: https://emotion.sh/docs/styled#changing-based-on-props
 * 3. In App.js, test that your dynamic styling changes by passing '#1583F2' to your prop
 * 4. In App.js, if the todo's get longer than 5, change the Header color to red else let it be blue
 */

import React from 'react'
import styled from '@emotion/styled'

const HeaderContainer = styled.h1`
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: ${props => (props.color ? props.color : 'grey')};
  text-rendering: optimizeLegibility;
`
function Header({ color }) {
  return <HeaderContainer color={color}>Todos</HeaderContainer>
}

export default Header
