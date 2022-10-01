import React from 'react'
import styled from 'styled-components'

// CSS TO CORRECTION

const StyledHeading = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  color: white;
  > .toggle-box {
    width: fit-content;
    height: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 35%;
    > .toggle-container {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      > .toggle-presets {
        text-indent: 1rem;
        text-align: center;
        letter-spacing: 1rem;
      }
      > .toggle-switch {
        height: 1.5rem;
        background-color: ${props => {return props.theme.toggleBackground}};
        border-radius: 20px;
        position: relative;
        > .toggle-switch-box {
          transform: translate(-50%, -50%);
          width: 1.20rem;
          height: 1.20rem;
          background-color: ${props => {return props.theme.toggle}};
          border-radius: 50%;
          transition: 0.5s;
          position: absolute;
          top: 50%;
          ${props => {
            switch(props.currentTheme) {
              case 0:
                return `left: 22.5%;`
              case 1:
                return `left: 49%;`
              case 2:
                return `left: 76%;`
            }
          }}
        }
      }
    }
  } 

`

function Heading(props) {

  function changeTheme() {
    switch(props.currentTheme) {
      case 0:
        return props.setTheme(1)
      case 1:
        return props.setTheme(2)
      case 2:
        return props.setTheme(0)
    }
  }

  return (
    <StyledHeading currentTheme={props.currentTheme}>
      <h4>calc</h4>
      <div className='toggle-box'>
        <p>THEME</p>
        <div className='toggle-container'>
          <div className='toggle-presets'>
            123
          </div>
          <div className='toggle-switch' onClick={() => changeTheme()}>
            <div className='toggle-switch-box'>
            </div>
          </div>
        </div>
      </div>
    </StyledHeading>
  )
}

export default Heading