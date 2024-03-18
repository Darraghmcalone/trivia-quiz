import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
width: 20rem;
height: 4rem;
border: 0.4rem solid ${(props) => props.theme.colors.primary};
margin-top: 1.5rem;
@media only screen and (max-width: 425px) {
    width: 16rem;
    margin-top: 0;
    height: 2rem;
}
`;

export const ProgressBarFull = styled.div`
height: 3.4rem;
background-color: ${(props) => props.theme.colors.primary};
width: 0%;
`;


