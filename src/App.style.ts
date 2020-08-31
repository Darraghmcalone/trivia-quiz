import styled from 'styled-components';

export const RouteContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
align-items: center;
width: 65vw;
max-width: 80rem;
margin: 0 auto;
padding: 0 2rem;
background: linear-gradient(rgba(250,0,0,0.5),transparent);
background-color: white;
@media only screen and (max-width: 786px) {
    width: 100%;
    padding: 0rem;
}
`;


