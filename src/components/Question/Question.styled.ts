import styled from 'styled-components';

export const QuestionContaioner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center
width: 600px;
background-color: ${(props) => props.theme.colors.transparent};
border-radius: 20px;
border-top-left-radius: 0px;
padding-bottom: 20px;
border-top-right-radius: 0px;
h1 {
  color: ${(props) => props.theme.colors.darkGrey};
  margin: 2rem 0 3rem 0;
  font-size: 1.5rem;
  padding-left: 30px;
  padding-right: 30px;
}
@media only screen and (max-width: 425px) {
    width: 85%;
    h1{
        font-size: 1.2rem;
    }
}
`;

export const ChoiceContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  width: auto;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 1.8rem;
  border: 0.1rem solid rgb(86, 165, 235, 0.25);
  background-color: white;
  :hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5);
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }
  @media only screen and (max-width: 425px) {
    height: 14%;
  }
`;

export const ChoicePrefix = styled.div`
  padding: 1.5rem 2.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  width: 15%;
  @media only screen and (max-width: 768px) {
    padding: 0;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ChoiceText = styled.div`
  padding: 1.5rem;
  width: 100%;
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 1.5rem;
  @media only screen and (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
  }
`;
