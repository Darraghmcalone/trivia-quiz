import React, { useState } from 'react'
import { QuestionContaioner, ChoiceContainer, ChoiceText, ChoicePrefix } from './Question.styled'

export default function Question({ question, changeQuestion }) {
    // React hooks to track state
    const [classToApply, setClassToApply] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState(-1);
    const [answering, setAnswering] = useState(false);

    const checkAnswer = (selectedAnswer) => {
        if (answering) return;

        setAnswering(true);
        setSelectedAnswer(selectedAnswer);

        const classToApply =
            selectedAnswer === question.answer ? 'correct' : 'incorrect';
        setClassToApply(classToApply);
        const bonus = selectedAnswer === question.answer ? 10 : 0;

        setTimeout(() => {
            setSelectedAnswer(-1);
            setAnswering(false);
            changeQuestion(bonus);
        }, 1000);
    };

 
    return (
        <QuestionContaioner>
            <h1 dangerouslySetInnerHTML={{ __html: question.question }}></h1>
            {question.answerChoices.map((choice, index) => (
                <ChoiceContainer key={index}
                    onClick={() => checkAnswer(index)}
                    className={`choice-container ${selectedAnswer === index &&
                        classToApply}`}
                >
                    <ChoicePrefix>{index + 1}</ChoicePrefix>
                    <ChoiceText dangerouslySetInnerHTML={{ __html: choice }}></ChoiceText>
                </ChoiceContainer>
            ))}
        </QuestionContaioner>
    )
}
