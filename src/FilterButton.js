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
  ${props => {
    let backgroundColorButton
    let textColor
    switch (props.buttonType) {
      case ButtonTypes.primary:
        backgroundColorButton = '#2196f3'
        textColor = 'white'
        break

      case ButtonTypes.secondary:
        backgroundColorButton = '#4caf50'
        textColor = 'white'
        break

      case ButtonTypes.default:
      default:
        backgroundColorButton = '#e0e0e0'
        textColor = 'black'
    }
    return {
      backgroundColor: backgroundColorButton,
      color: textColor,
    }
  }}
`
function FilterButton({ buttonType, onClick, href, text }) {
  return (
    <ButtonContainer href={href} onClick={onClick} buttonType={buttonType}>
      {text}
    </ButtonContainer>
  )
}

export default FilterButton
