import React, { Component } from 'react'
import Question from '../../components/Question';
import { loadQuestions } from '../../helper/QuestionsHelper';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            currentQuestion: null
        };
    }
    async componentDidMount() {
        try {
            const questions = await loadQuestions();
            this.setState({ questions, currentQuestion: questions[0] });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        console.log(this.state)
        return (
            <>
                {this.state.currentQuestion && (
                    <Question question={this.state.currentQuestion} />
                )}
            </>
        );
    }
}
