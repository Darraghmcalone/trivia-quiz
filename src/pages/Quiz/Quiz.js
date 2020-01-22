import React, { Component } from 'react'
import Question from '../../components/Question/Question';
import { loadQuestions } from '../../helper/QuestionsHelper';
import { Loader } from '../../components/Loader/Loader';
import HUD from '../../components/HUD/HUD';
import SaveScoreForm from '../../components/SaveScoreForm/SaveScoreForm';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            currentQuestion: null,
            loading: true,
            score: 0,
            questionNumber: 0,
            done: false
        };
    }
    async componentDidMount() {
        try {
            const questions = await loadQuestions();
            this.setState(
                { questions },
                () => {
                    this.changeQuestion();
                }
            );
        } catch (err) {
            console.error(err);
        }
    }

    scoreSaved = () => {
        this.props.history.push('/')
    }

    changeQuestion = (bonus = 0) => {
        if (this.state.questions.length === 0) {
            return this.setState((prevState) => ({
                done: true,
                score: prevState.score + bonus
            }))
        }
        const randomQuestionIndex = Math.floor(
            Math.random() * this.state.questions.length
        );
        const currentQuestion = this.state.questions[randomQuestionIndex];
        const remainingQuestions = [...this.state.questions];
        remainingQuestions.splice(randomQuestionIndex, 1);

        this.setState((prevState) => ({
            questions: remainingQuestions,
            currentQuestion,
            loading: false,
            score: prevState.score + bonus,
            questionNumber: prevState.questionNumber + 1
        }));
        console.log(this.state.score);
    };

    render() {
        const { loading, done, currentQuestion, questionNumber, score } = this.state;
        return (
            <>
                {loading && !done && (
                    <Loader />
                )}
                {!loading &&
                    !done && currentQuestion && (
                        <>
                            <HUD
                                score={score}
                                questionNumber={questionNumber}
                            />
                            <Question question={currentQuestion} changeQuestion={this.changeQuestion} />

                        </>
                    )}
                {done && <SaveScoreForm score={score} scoreSaved={this.scoreSaved}/>}
            </>
        );
    }
}
