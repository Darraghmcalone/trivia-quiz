import React, { FunctionComponent } from 'react'
import { ProgressBarContainer, ProgressBarFull } from './ProgressBar.style';

interface ProgressBarProps {
    max?: number;
    current: number;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({ max = 10, current }) => {
    const width = (current / max) * 100;
    return (
        <ProgressBarContainer>
            <ProgressBarFull style={{ height: '100%', width: `${width}%` }}></ProgressBarFull>
        </ProgressBarContainer>
    );
}

export default ProgressBar