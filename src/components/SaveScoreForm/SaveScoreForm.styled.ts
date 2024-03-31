import styled from 'styled-components';
import { Button } from '../Button/Button';

export const SaveScoreFormContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
width: 350px;
background-color: ${(props) => props.theme.colors.transparent};
padding-left: 40px;
padding-right: 40px;
padding-bottom: 30px;
border-radius: 20px;
h1 {
  font-size: 4em
  color: ${(props) => props.theme.colors.darkGrey};
}
@media only screen and (max-width: 768px) {
  width: 300px;
  h1 {
  font-size: 3.5rem;
  }
}

`;

export const Form = styled.form`
  display: flex;
  height: 50%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  input {
    margin-bottom: 30px;
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

export const SaveScoreButton = styled(Button)`
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  border: none;
  box-shadow: 0 0.1rem 1.4rem 0 rgba(86, 185, 235, 0.5);
  padding: 15px 0px;
  text-decoration: none;
  margin-bottom: 2%;
  font-weight: bold;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.primaryHover};
    cursor: pointer;
  }

  @media only screen and (max-width: 786px) {
    width: 92%;
  }

  @media only screen and (max-width: 426px) {
    font-size: 1.5rem;
  }
`;
