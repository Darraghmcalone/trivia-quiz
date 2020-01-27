import styled from 'styled-components';

export const HUDContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 10%;
@media only screen and (max-width: 786px) {
flex-direction: column-reverse;
justify-content: center;
align-items: center;
}
`;

export const HUDPrefix = styled.p`
text-align: center;
font-size: 2rem;
    `;

export const HUDText = styled.h1`
text-align: center;
    `;
