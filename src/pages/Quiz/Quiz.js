import React, { Component } from 'react'
import Question from '../../components/Question';
import { loadQuestions } from '../../helper/QuestionsHelper';
import { Loader } from '../../elements/Loader';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            currentQuestion: null,
            loading: true
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
    changeQuestion = () => {
        // get a random index of a question
        const getRandomQuestionIndex = Math.floor(Math.random() * this.state.questions.length);
        // Set the current question to the question at the random question index
        const currentQuestion = this.state.questions[getRandomQuestionIndex]
        // Remove that question from the questions going forward
        const remainingQuestions = [...this.state.questions]
        remainingQuestions.splice(getRandomQuestionIndex, 1)
        //Update the state to reflect these changes
        this.setState({
            questions: remainingQuestions,
            currentQuestion,
            loading: false
        })
    }

    render() {
        console.log(this.state)
        return (
            <>
                {this.state.loading && (
                    <Loader />
                )}
                {this.state.currentQuestion && (
                    <Question question={this.state.currentQuestion} />
                )}
            </>
        );
    }
}
