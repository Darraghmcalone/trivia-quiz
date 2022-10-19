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
  margin-bottom: 4rem;
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
    h5 {
      margin-left: 40px;
    }
  }
  .highScoreItem {
    display: flex;
    align-items: center;
    border-radius: 6px;
    border: none;
    box-shadow: 0 0rem 0.4rem 0 rgb(86 185 235 / 50%);
    padding: 0px 15px;
    margin-top: 25px;
    height: 70px;
  }
  h5,h6 {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    width: 70%;
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
  color: #56a5eb;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const HighScoreButton = styled(Button)`
  width: 70%;
  margin-bottom: 5rem;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;
