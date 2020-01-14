import React from 'react';
import { ProgressBarContainer, ProgressBarFull } from './ProgressBar.style';

export default function ProgressBar({ max, current }) {
    const width = (current / max) * 100;
    return (
        <ProgressBarContainer>
            <ProgressBarFull style={{ height: '100%', width: `${width}%` }}></ProgressBarFull>
        </ProgressBarContainer>
    );
}