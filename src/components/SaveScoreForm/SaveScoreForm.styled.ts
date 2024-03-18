import styled from 'styled-components';

export const SaveScoreFormContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
h1 {
  font-size: 4em
  color: ${(props) => props.theme.colors.darkGrey};
  @media only screen and (max-width: 768px) {
    font-size: 3.5rem;
}
}
`;

export const Form = styled.form`
  display: flex;
  height: 50%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  input {
    margin-bottom: 1rem;
    width: 20rem;
    padding: 1.5rem;
    font-size: 1.3rem;
    border: none;
    box-shadow: 0 0.1rem 1.4rem 0 rgba(86, 185, 235, 0.5);
    @media only screen and (max-width: 768px) {
      width: 14.4rem;
    }
  }
`;
