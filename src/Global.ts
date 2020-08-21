import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
${normalize()};
  html {
    box-sizing: border-box;
  }
  .correct{
    background-color: #159AE1
  }
  .incorrect{
    background-color: #E61414;
  }
`;

export default GlobalStyle;
