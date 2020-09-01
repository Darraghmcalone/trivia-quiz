import styled from 'styled-components';
import { Button } from "../../components/Button/Button";

export const HighScoreContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const HighScoresList = styled.div`
list-style: none;
padding-left: 0;
margin-bottom: 4rem;
li {
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
}
@media only screen and (max-width: 768px) {
    width: 70%;
    li { font-size: 2rem;}
}
@media only screen and (min-width: 768px) {
    width: 100%;
}
`;

export const HighScoreTitle = styled.h1`
font-size: 5.41rem;
color: #56a5eb;
margin-bottom: 5rem;
@media only screen and (max-width: 768px) {
    margin-bottom: 3rem;
    font-size: 3rem;
} 
`
export const HighScoreButton = styled(Button)`
width: 70%;
@media only screen and (min-width: 768px) {
    width: 50%;
}
`
