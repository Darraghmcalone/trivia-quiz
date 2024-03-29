import React, { useState, FunctionComponent } from 'react';
import {
  QuestionContaioner,
  ChoiceContainer,
  ChoiceText,
  ChoicePrefix,
} from './Question.styled';
import { QuestionType } from '../../pages/Quiz/Quiz';

interface QuestionProps {
  question: QuestionType;
  changeQuestion: (bonus: number) => void;
}

const Question: FunctionComponent<QuestionProps> = ({
  question,
  changeQuestion,
}) => {
  // React hooks to track state
  const [classToApply, setClassToApply] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);

  const checkAnswer = (selectedAnswer: number) => {
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
      <div>
        {question.answerChoices.map((choice, index) => (
          <ChoiceContainer key={index} onClick={() => checkAnswer(index)}>
            <ChoicePrefix>{index + 1}</ChoicePrefix>
            <ChoiceText
              className={`${selectedAnswer === index && classToApply}`}
              dangerouslySetInnerHTML={{ __html: choice }}
            ></ChoiceText>
          </ChoiceContainer>
        ))}
      </div>
    </QuestionContaioner>
  );
};
export default Question;
