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
            this.setState({ questions, currentQuestion: questions[0], loading: false });
        } catch (err) {
            console.error(err);
        }
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
