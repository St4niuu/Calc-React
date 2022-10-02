import React from 'react'
import styled from 'styled-components'

const StyledDisplay = styled.div`

  width: 100%;
  height: 20%;
  background-color: ${props => {return props.theme.screenBackground}};
  border-radius: 15px;
  transition: 1s;
  padding: 1.5rem;
  overflow: hidden;
  font-size: 150%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => {
    switch(props.currentTheme) {
      case 0:
        return `white`
      default:
        return props.theme.keyText
    }
  }};

`

function Display(props) {
  return (
    <StyledDisplay currentTheme={props.currentTheme}>
      {props.expression}
    </StyledDisplay>
  )
}

export default Display