import React from 'react'
import { ChoiceContainer, ChoiceText, ChoicePrefix } from './Question.styled'

export default function Question({ question }) {
    return (
        <>
            <h2>{question.question}</h2>
            {question.answerChoices.map((choice, index) => (
                <ChoiceContainer>
                    <ChoicePrefix>{index + 1}</ChoicePrefix>
                    <ChoiceText>{question.answerChoices[index]}</ChoiceText>
                </ChoiceContainer>
            ))}
        </>
    )
}
