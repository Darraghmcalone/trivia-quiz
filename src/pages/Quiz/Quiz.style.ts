import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100dvh;
  justify-content: flex-start;

`;

export const QuizContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: ${(props) => props.theme.colors.darkGrey};
  }
`;
