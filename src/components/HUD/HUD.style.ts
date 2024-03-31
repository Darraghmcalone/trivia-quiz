import styled from 'styled-components';

export const HUDContainer = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.transparent};
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  padding-top: 20px;
  padding-bottom: 10px;
  @media only screen and (max-width: 425px) {
    width: 85%;
  }
`;

export const HUDPrefix = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.darkGrey};
  @media only screen and (max-width: 786px) {
    font-size: 1rem;
  }
`;
