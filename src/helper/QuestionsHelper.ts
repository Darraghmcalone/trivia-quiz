import { QuestionType } from '../pages/Quiz/Quiz';

type fetchedQuestion = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

const convertQuestionsFromAPI = (rawQuestions: fetchedQuestion[]) => {
    return rawQuestions.map((loadedQuestion) => {
        const formattedQuestion: QuestionType = {
            question: loadedQuestion.question,
            answerChoices: [...loadedQuestion.incorrect_answers],
            answer: null
        };
        formattedQuestion.answer = Math.floor(Math.random() * 4);
        formattedQuestion.answerChoices.splice(
            formattedQuestion.answer,
            0,
            loadedQuestion.correct_answer
        );

        return formattedQuestion;
    });
};

export const loadQuestions = async (
    amount = 10,
    category = 9,
    difficulty = 'easy',
    type = 'multiple'
): Promise<any> => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

    try {
        const res = await fetch(url);
        const { results } = await res.json();
        return convertQuestionsFromAPI(results);
    } catch (err) {
        console.error(err);
    }
};

