/**
 * Steps:
 * 1. Within the props function, change the background color and text color of the buttons
 */

import React from 'react'
import styled from '@emotion/styled'

export const ButtonTypes = {
	primary: 'primary',
	secondary: 'secondary',
	default: 'default',
  }

const ButtonContainer = styled.a`
	margin: 3px;
	padding: 6px 10px;
	text-decoration: none;
	border: 1px solid transparent;
	border-radius: 3px;
	margin: 0 10px;
	font-weight: 600;
	${(props => {
		/* based on the button type, change the backgroundColor and text color  */
	}
	)}
`
function FilterButton({buttonType, onClick, href, text}) {
    return ( <ButtonContainer href={href} onClick={onClick} buttonType={buttonType}>{text}</ButtonContainer>)
  }

export default FilterButton
