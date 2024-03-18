import styled from 'styled-components';

export const Loader = styled.div`
border: 1.6rem solid white;
border-radius: 50%;
border-top: 1.6rem solid ${(props) => props.theme.colors.primary};;
width: 12rem;
height: 12rem;
animation: spin 2s linear infinite;
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`;

