import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SaveScoreFormContainer, Form } from './SaveScoreForm.styled'
import { Button } from "../Button/Button";
import { useFirebase } from '../Firebase/FirebaseContext';

export default function SaveScoreForm({ score, scoreSaved }) {
    const [username, setUsername] = useState('');
    const firebase = useFirebase();

    console.log(firebase);

    const onUsernameChange = (e) => {
        const updatedUsername = e.target.value;
        setUsername(updatedUsername);
    };

    const saveHighScore = (e) => {
        e.preventDefault();
        const record = {
            name: username,
            score
        };
        firebase.scores().push(record, () => {
            console.log('Score Saved!')
            scoreSaved()
        })
        console.log(record);
    };

    return (
        <SaveScoreFormContainer>
            <h1>Score: {score}</h1>
            <Form onSubmit={saveHighScore}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Your Full Name"
                    value={username}
                    onChange={onUsernameChange}
                />
                <Button type="submit" disabled={!username}>
                    Save
                </Button>
            </Form>
            <Button as={Link}to="/" >
                Go Home
            </Button>
        </SaveScoreFormContainer>
    );
}