import styled from 'styled-components';

export const RouteContainer = styled.div`
width: 65vw;
height: 100vh;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
align-items: center;
max-width: 80rem;
margin: 0 auto;
padding: 2rem;
background: linear-gradient(rgba(250,0,0,0.5),transparent);
background-color: white;
@media only screen and (max-width: 786px) {
    width: 100%;
    padding: 0rem;
}
`;


