import React from 'react'
import { HUDContainer, HUDPrefix, HUDText } from './HUD.style';
import ProgressBar from '../ProgressBar/ProgressBar'

export default function HUD({ score, questionNumber }) {
    return (
        <HUDContainer>
            <div>
                <HUDPrefix>Question {questionNumber}/10</HUDPrefix>
                <ProgressBar max={10} current={questionNumber}/>
            </div>
            <div>
                <HUDPrefix>Score</HUDPrefix>
                <HUDText>{score}</HUDText>
            </div>
        </HUDContainer>
    )
}
