import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import Display from './Display'
import Keyboard from './Keyboard'

const StyledContainer = styled.div`

  width: 100%;
  min-width: 20rem;
  max-width: 20rem;
  height: 100%;
  max-height: 37.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (min-width: 420px) {
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
      <Display />
      <Keyboard 
        currentTheme={props.currentTheme}
      />
    </StyledContainer>
  )
}

export default Container
