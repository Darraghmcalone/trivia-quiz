import styled from 'styled-components';

export const SaveScoreFormContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
h1 {
  font-size: 60px;
  color: #56a5eb
}
`;

export const Form = styled.form`
display: flex;
height: 50%;
justify-content: space-around;
align-items: center;
flex-direction: column;
input {
    margin-bottom: 1rem;
    width: 20rem;
    padding: 1.5rem;
    font-size: 1.8rem;
    border: none;
    box-shadow: 0 0.1rem 1.4rem 0 rgba(86, 185, 235, 0.5);
}
`
