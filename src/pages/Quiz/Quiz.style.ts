import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100dvh;
  justify-content: flex-start;

`;

export const QuizContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
  h3 {
    color: ${(props) => props.theme.colors.darkGrey};
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
}
`;
