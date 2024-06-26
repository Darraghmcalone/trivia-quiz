import styled from 'styled-components';
import { Button } from '../../components/Button/Button';

export const HighScoreContainer = styled.div`
  height: 100%;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 426px) {
    width: 100%;
  }
`;

export const HighScoresList = styled.div`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  text-align: left;
  div {
    font-size: 1.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .leftCol {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    .position {
      margin-right: 40px;
    }
  }
  .highScoreItem {
    display: flex;
    align-items: center;
    border-radius: 6px;
    border-color: rgb(86 185 235 / 50%);
    border-width: 1px;
    border-style: solid;
    padding: 0px 15px;
    margin-top: 10px;
    height: 70px;
    width: auto;
    background-color: white;
  }
  h5,
  h6 {
    margin: 0;
    color: ${(props) => props.theme.colors.darkGrey};
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
    div {
      font-size: 1.5rem;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const HighScoreTitle = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.white};

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const HighScoreButton = styled(Button)`
  width: 70%;
  margin-bottom: 5rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
    cursor: pointer; 
  }
`;

export const HighScoresPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  .page-numbers {
    display: flex;
    height: 30px;
  }
  .page-item {
    width: 30px
    height: 100%;
  }
  .page-item button {
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .page-item button, div {
    color: white;
    text-decoration: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-item.active button {
    color:${(props) => props.theme.colors.primary};
  }
`;
