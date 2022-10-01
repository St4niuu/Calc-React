import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'

const StyledContainer = styled.div`

  width: 100%;
  min-width: 20rem;
  max-width: 20rem;
  height: 100%;
  max-height: 37.5rem;
  @media (min-width: 400px) {
    min-width: 20rem;
    max-width: 32.5rem;
    min-height: 40rem;
    max-height: 40rem;
  }

`

function Container(props) {
  return (
    <StyledContainer>
      <Heading 
        currentTheme={props.currentTheme}
        setTheme={props.setTheme}
      />
    </StyledContainer>
  )
}

export default Container
