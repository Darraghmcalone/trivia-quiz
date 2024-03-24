import React from 'react';
import {
  CircleContainer,
  Svg,
  CircleBg,
  CircleProgress,
  CircleText,
} from './CircularProgress.style';

const CircularProgress = ({ size = 70, progress = 0, total = 10 }) => {
  const normalizedRadius = size / 2 - 5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (progress / total) * circumference;

  return (
    <CircleContainer>
      <Svg>
        <CircleBg cx={size / 2} cy={size / 2} r={normalizedRadius} />
        <CircleProgress
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          cx={size / 2}
          cy={size / 2}
          r={normalizedRadius}
        />
        <CircleText x={size / 2} y={size / 2}>
          {Math.round((progress / total) * 10)}
        </CircleText>
      </Svg>
    </CircleContainer>
  );
};

export default CircularProgress;
