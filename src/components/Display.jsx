import React from 'react'
import styled from 'styled-components'

const StyledDisplay = styled.div`

  width: 100%;
  height: 20%;
  background-color: ${props => {return props.theme.screenBackground}};
  border-radius: 15px;
  transition: 1s;

`

function Display() {
  return (
    <StyledDisplay>
      
    </StyledDisplay>
  )
}

export default Display