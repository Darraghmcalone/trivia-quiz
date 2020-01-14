import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
${normalize()};
  html {
    box-sizing: border-box;
    height: 100vh; 
  }
  container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem;
  }
  .correct{
    background-color: #159AE1
  }
  .incorrect{
    background-color: #E61414;
  }

`;

export default GlobalStyle;
