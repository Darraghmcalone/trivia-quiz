import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
${normalize()};
  html {
    box-sizing: border-box;
    height: 100vh; 
  }
`;

export default GlobalStyle;
