import React, { Component } from 'react'
import Question from '../../components/Question/Question';
import { loadQuestions } from '../../helper/QuestionsHelper';
import { Loader } from '../../components/Loader/Loader';
import HUD from '../../components/HUD/HUD';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            currentQuestion: null,
            loading: true,
            score: 0,
            questionNumber: 0
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

    changeQuestion = (bonus = 0) => {
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
        //console.log(this.state)
        return (
            <>
                {this.state.loading && (
                    <Loader />
                )}
                {!this.state.loading && this.state.currentQuestion && (
                    <>
                        <HUD
                            score={this.state.score}
                            questionNumber={this.state.questionNumber}
                        />
                        <Question question={this.state.currentQuestion} changeQuestion={this.changeQuestion} />
                    </>
                )}
            </>
        );
    }
}
