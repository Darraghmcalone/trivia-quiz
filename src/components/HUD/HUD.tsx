import React, { FunctionComponent } from 'react';
import { HUDContainer, HUDPrefix } from './HUD.style';
import CircularProgress from '../CircularProgress/CircularProgress';

interface HUDProps {
  score: number;
  questionNumber: number;
  timeRemaining: number;
}

const HUD: FunctionComponent<HUDProps> = ({
  score,
  questionNumber,
  timeRemaining,
}) => {
  const totalTime = 10;
  return (
    <HUDContainer>
        <CircularProgress
          progress={timeRemaining}
          total={totalTime}
          size={70}
        />
      <div>
        <HUDPrefix>{questionNumber} of 10</HUDPrefix>
      </div>
      <div>
        <HUDPrefix>Score: {score}</HUDPrefix>
      </div>
    </HUDContainer>
  );
};
export default HUD;
