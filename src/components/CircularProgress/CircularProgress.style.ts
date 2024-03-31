import styled from 'styled-components';

export const CircleContainer = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
`;

export const Svg = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

export const CircleBg = styled.circle`
  fill: none;
  stroke: #eee;
  stroke-width: 4px;
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: #04aeef;
  stroke-width: 4px;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

export const CircleText = styled.text`
  fill: ${(props) => props.theme.colors.darkGrey};
  font-size: 1.5rem;
  text-anchor: middle;
  dominant-baseline: middle;
  transform: translate(68px,0px) rotate(90deg);
  @media only screen and (max-width: 786px) {
    font-size: 1rem;
  }
`;