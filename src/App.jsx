import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import Container from './components/Container'

// Setting themes

const themes = [{
  mainBackground: 'hsl(222, 26%, 31%)',
  toggleBackground: 'hsl(223, 31%, 20%)',
  keypadBackground: 'hsl(223, 31%, 20%)',
  screenBackground: 'hsl(224, 36%, 15%)',
  keyBackgroundFunctions: 'hsl(225, 21%, 49%)',
  keyShadowFunctions: 'hsl(224, 28%, 35%)',
  keyBackgroundEquals: 'hsl(6, 63%, 50%)',
  keyShadowEquals: 'hsl(6, 63%, 50%)',
  keyBackgroundDigits: 'hsl(30, 25%, 89%)',
  keyShadowDigits: 'hsl(28, 16%, 65%)',
  toggle: 'hsl(6, 63%, 50%)',
  keyText: 'hsl(221, 14%, 31%)'
},

{
  mainBackground: 'hsl(0, 0%, 90%)',
  toggleBackground: 'hsl(0, 5%, 81%)',
  keypadBackground: 'hsl(0, 5%, 81%)',
  screenBackground: 'hsl(0, 0%, 93%)',
  keyBackgroundFunctions: 'hsl(185, 42%, 37%)',
  keyShadowFunctions: 'hsl(185, 58%, 25%)',
  keyBackgroundEquals: 'hsl(25, 98%, 40%)',
  keyShadowEquals: 'hsl(25, 99%, 27%)',
  keyBackgroundDigits: 'hsl(45, 7%, 89%)',
  keyShadowDigits: 'hsl(35, 11%, 61%)',
  toggle: 'hsl(25, 98%, 40%)',
  keyText: 'hsl(60, 10%, 19%)'
},

{
  mainBackground: 'hsl(268, 75%, 9%)',
  toggleBackground: 'hsl(268, 71%, 12%)',
  keypadBackground: 'hsl(268, 71%, 12%)',
  screenBackground: 'hsl(268, 71%, 12%)',
  keyBackgroundFunctions: 'hsl(281, 89%, 26%)',
  keyShadowFunctions: 'hsl(285, 91%, 52%)',
  keyBackgroundEquals: 'hsl(176, 100%, 44%)',
  keyShadowEquals: 'hsl(177, 92%, 70%)',
  keyBackgroundDigits: 'hsl(268, 47%, 21%)',
  keyShadowDigits: 'hsl(290, 70%, 36%)',
  toggle: 'hsl(176, 100%, 44%)',
  keyText: 'hsl(52, 100%, 62%)'
}]

// Setting global styling

const GlobalStyle = createGlobalStyle`

  *::before, *::after, * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  #root {
    font-size: 32px;
    font-family: 'League Spartan', sans-serif;
    background-color: ${props => {return props.theme.mainBackground}};
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-height: 620px) {
      align-items: flex-start;
    }
  }

`

// Actual app

function App() {


  const [theme, setTheme] = useState(0)

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Container 
        currentTheme={theme}
        setTheme={setTheme}
      />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)


