import React, { useState } from 'react'
import { ChoiceContainer, ChoiceText, ChoicePrefix } from './Question.styled'

export default function Question({ question, changeQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState(-1);
    const [answering, setAnswering] = useState(false);
    const checkAnswer = (selectedAnswer) => {
        if (answering) return;

        setAnswering(true);
        setSelectedAnswer(selectedAnswer);
        const bonus = selectedAnswer === question.answer ? 10 : 0;

        setTimeout(() => {
            setSelectedAnswer(-1);
            setAnswering(false);
            changeQuestion(bonus);
        }, 1000);
    };
    return (
        <>
            <h1 dangerouslySetInnerHTML={{ __html: question.question }}></h1>
            {question.answerChoices.map((choice, index) => (
                <ChoiceContainer key={index}
                    onClick={() => checkAnswer(index)}
                >
                    <ChoicePrefix>{index + 1}</ChoicePrefix>
                    <ChoiceText dangerouslySetInnerHTML={{ __html: choice }}></ChoiceText>
                </ChoiceContainer>
            ))}
        </>
    )
}
