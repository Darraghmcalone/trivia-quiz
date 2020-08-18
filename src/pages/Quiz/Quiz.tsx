import React, { useState, useEffect, useCallback, FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import Question from '../../components/Question/Question';
import { loadQuestions } from '../../helper/QuestionsHelper';
import { Loader } from '../../components/Loader/Loader';
import HUD from '../../components/HUD/HUD';
import SaveScoreForm from '../../components/SaveScoreForm/SaveScoreForm';
import { QuizContainer } from './Quiz.style';

export type QuestionType = {
    answer: number | null;
    answerChoices: string[];
    question: string;
};

const Quiz: FunctionComponent<RouteComponentProps> = ({ history }) => {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(
        null
    );
    const [loading, setLoading] = useState(true)
    const [score, setScore] = useState(0)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [done, setDone] = useState(false)

    useEffect(() => {
        loadQuestions()
            .then(questions => setQuestions(questions))
            .catch(err => console.log(err))
    }, [])

    const scoreSaved = () => {
        history.push('/')
    }

    const changeQuestion = useCallback(
        (bonus = 0) => {
            if (questions.length === 0) {
                setDone(true);
                return setScore(score + bonus);
            }

            const randomQuestionIndex = Math.floor(
                Math.random() * questions.length
            );
            const currentQuestion = questions[randomQuestionIndex];
            const remainingQuestions = [...questions];
            remainingQuestions.splice(randomQuestionIndex, 1);

            setQuestions(remainingQuestions);
            setCurrentQuestion(currentQuestion);
            setLoading(false);
            setScore(score + bonus);
            setQuestionNumber(questionNumber + 1);
        },
        [
            score,
            questionNumber,
            questions,
            setQuestions,
            setLoading,
            setCurrentQuestion,
            setQuestionNumber
        ]
    );

    useEffect(() => {
        if (!currentQuestion && questions.length) {
            changeQuestion();
        }
    }, [currentQuestion, questions, changeQuestion]);

    return (
        <>
            {loading && !done && (
                <Loader />
            )}
            {!loading &&
                !done && currentQuestion && (
                    <QuizContainer>
                        <HUD
                            score={score}
                            questionNumber={questionNumber}
                        />
                        <Question question={currentQuestion} changeQuestion={changeQuestion} />

                    </QuizContainer>
                )}
            {done && <SaveScoreForm score={score} scoreSaved={scoreSaved} />}
        </>
    );
}

export default Quiz