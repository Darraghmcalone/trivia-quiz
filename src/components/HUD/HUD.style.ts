import styled from 'styled-components';

export const HUDContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const HUDPrefix = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.darkGrey};
  @media only screen and (max-width: 786px) {
    font-size: 1rem;
  }
`;