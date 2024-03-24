import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  justify-content: flex-start;

`;

export const QuizContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;
  h3 {
    color: ${(props) => props.theme.colors.darkGrey};
  }
`;
