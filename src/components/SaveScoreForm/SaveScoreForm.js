import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SaveScoreFormContainer, Form, FormButton } from './SaveScoreForm.styled'

export default function SaveScoreForm({ score }) {
    const [username, setUsername] = useState('');

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
                    placeholder="Your Full Name"
                    value={username}
                    onChange={onUsernameChange}
                />
                <FormButton type="submit" disabled={!username}>
                    Save
                </FormButton>
            </Form>
            <FormButton as={Link}to="/" >
                Go Home
            </FormButton>
        </SaveScoreFormContainer>
    );
}