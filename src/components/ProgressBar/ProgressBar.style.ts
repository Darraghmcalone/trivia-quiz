import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
width: 20rem;
height: 4rem;
border: 0.4rem solid #56a5eb;
margin-top: 1.5rem;
@media only screen and (max-width: 425px) {
    width: 16rem;
    margin-top: 0;
    height: 2rem;
}
`;

export const ProgressBarFull = styled.div`
height: 3.4rem;
background-color: #56a5eb;
width: 0%;
`;


