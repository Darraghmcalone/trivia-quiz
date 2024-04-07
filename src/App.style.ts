import styled from 'styled-components';

const quizBK = require('./assets/images/quiz-bk.png')
export const RouteContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
align-items: center;
margin: 0 auto;
padding: 0 2rem;
background-image: url(${quizBK}); 
background-size: cover; 
background-position: center;

@media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0rem;
}
`;


