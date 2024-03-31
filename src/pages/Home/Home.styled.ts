import styled from 'styled-components';
import { Button } from '../../components/Button/Button';

export const HomeContainer =  styled.div`
  height: 350px;
  width: 350px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.transparent};
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  border-radius: 20px
  h1 {
    font-size: 4em;
    color: ${(props) => props.theme.colors.darkGrey};
  }
  @media only screen and (max-width: 425px) {
    height: 300px;
    width: 300px;
    h1 {
      font-size: 3.5em;
    }
  }
`;

export const HomeButton = styled(Button)`
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
    background-color: ${(props) => props.theme.colors.primaryHover};
    cursor: pointer; 
  }

  @media only screen and (max-width: 426px) {
    font-size: 1.5rem;
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  width: 90%;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 426px) {
    height: 170px;
  }
`;
