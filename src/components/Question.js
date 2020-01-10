import React from 'react'
import { ChoiceContainer, ChoiceText, ChoicePrefix } from './Question.styled'

export default function Question({ question }) {
    return (
        <>
            <h1 dangerouslySetInnerHTML={{ __html: question.question }}></h1>
            {question.answerChoices.map((choice, index) => (
                <ChoiceContainer key={index}>
                    <ChoicePrefix>{index + 1}</ChoicePrefix>
                    <ChoiceText dangerouslySetInnerHTML={{ __html: question.answerChoices[index] }}></ChoiceText>
                </ChoiceContainer>
            ))}
        </>
    )
}
