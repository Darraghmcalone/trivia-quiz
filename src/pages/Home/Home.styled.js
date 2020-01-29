import styled from 'styled-components';
import { Button } from '../../components/Button/Button'

export const HomeContainer = styled.div`
height: 35%;
flex-direction: column;
display: flex;
align-items: center;
justify-content: space-between;
h1 {
    font-size: 4em;
    color: #56a5eb;
}
@media only screen and (max-width: 786px) {
    h1 {
        font-size: 3.5em;
    }
}
`;


export const HomeButton = styled(Button)`
@media only screen and (max-width: 786px) {
width: 70%;
}
`;