import React, { FunctionComponent } from 'react'
import { HUDContainer, HUDPrefix, HUDText } from './HUD.style';
import ProgressBar from '../ProgressBar/ProgressBar'

interface HUDProps {
    score: number,
    questionNumber: number
}

const HUD: FunctionComponent<HUDProps> = ({
    score,
    questionNumber,
}) => {
    return (
        <HUDContainer>
            <div>
                <HUDPrefix>Question {questionNumber}/10</HUDPrefix>
                <ProgressBar max={10} current={questionNumber} />
            </div>
            <div>
                <HUDPrefix>Score</HUDPrefix>
                <HUDText>{score}</HUDText>
            </div>
        </HUDContainer>
    )
}
export default HUD