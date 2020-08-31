import styled from 'styled-components';
import { Button } from '../../components/Button/Button'

export const HomeContainer = styled.div`
height: 53%;
flex-direction: column;
display: flex;
align-items: center;
justify-content: space-between;
h1 {
    font-size: 6em;
    color: #56a5eb;
}
@media only screen and (max-width: 425px) {
h1 {
    font-size: 3.5em;
 }
}  
`;


export const HomeButton = styled(Button)`
@media only screen and (max-width: 786px) {
width: 70%;
}
@media only screen and (min-width: 426px) {
font-size: 2.5em;
}
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
height: 50%;
width: 90%;
justify-content: space-evenly;
align-items: center;
@media only screen and (min-width: 786px) {
width: 60%;
}
`