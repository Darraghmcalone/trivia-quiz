import styled from 'styled-components';

export const HUDContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 5%;
@media only screen and (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0%;
}
`;

export const HUDPrefix = styled.p`
text-align: center;
font-size: 2rem;
@media only screen and (max-width: 786px) {
    font-size: 1.6rem;
}
    `;

export const HUDText = styled.h1`
text-align: center;
@media only screen and (max-width: 786px) {
    font-size: 1.6rem;
}
    `;
