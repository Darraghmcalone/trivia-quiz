import styled from 'styled-components';

export const RouteContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
align-items: center;
margin: 0 auto;
padding: 0 2rem;
background: ${(props) => props.theme.colors.skyBlue};
@media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0rem;
}
`;


