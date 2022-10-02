import React from 'react'
import styled from 'styled-components'

const StyledKeyboard = styled.div`

  width: 100%;
  height: 70%;
  border-radius: 15px;
  background-color: ${props => {return props.theme.keypadBackground}};
  padding: 1.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  transition: 1s;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    transition: 1s;
  }
  > .digit {
    background-color: ${props => {return props.theme.keyBackgroundDigits}};
    box-shadow: 0 4px 0 0 ${props => {return props.theme.keyShadowDigits}};
    color: ${props => {return props.theme.keyText}};
  }
  > .function {
    background-color: ${props => {return props.theme.keyBackgroundFunctions}};
    box-shadow: 0 4px 0 0 ${props => {return props.theme.keyShadowFunctions}};
    color: white;
    @media (max-width: 420px) {
      font-size: 60%;
    }
  }
  > .equals {
    background-color: ${props => {return props.theme.keyBackgroundEquals}};
    box-shadow: 0 4px 0 0 ${props => {return props.theme.keyShadowEquals}};
    grid-column-start: 3;
    grid-column-end: 5;
    font-size: 65%;
    color: ${props => {
      switch(props.currentTheme) {
        case 2:
          return `black`
        default:
          return 'white'
      }
    }};
  }
  > div:nth-of-type(17) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

`

const keys = [{sign: '7', class: 'digit'}, {sign: '8', class: 'digit'}, {sign: '9', class: 'digit'},
{sign: 'DEL', class: 'function'}, {sign: '4', class: 'digit'}, {sign: '5', class: 'digit'}, {sign: '6', class: 'digit'},
{sign: '+', class: 'digit'}, {sign: '1', class: 'digit'}, {sign: '2', class: 'digit'}, {sign: '3', class: 'digit'},
{sign: '-', class: 'digit'}, {sign: '.', class: 'digit'}, {sign: '0', class: 'digit'}, {sign: '/', class: 'digit'},
{sign: 'x', class: 'digit'}, {sign: 'RESET', class: 'function'}, {sign: '=', class: 'equals'}]

function Keyboard(props) {
  return (
    <StyledKeyboard currentTheme={props.currentTheme}>
      {keys.map(item => {
        return <div className={item.class} key={item.sign}>{item.sign}</div>
      })}
    </StyledKeyboard>
  )
}

export default Keyboard