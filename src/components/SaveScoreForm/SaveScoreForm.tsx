import React, { useState, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  SaveScoreFormContainer,
  Form,
  SaveScoreButton,
} from './SaveScoreForm.styled';
import { Button } from '../Button/Button';
import { useFirebase } from '../Firebase/FirebaseContext';

interface SaveScoreFormProps {
  score: number;
  scoreSaved: () => void;
}

const SaveScoreForm: FunctionComponent<SaveScoreFormProps> = ({
  score,
  scoreSaved,
}) => {
  const [username, setUsername] = useState('');
  const firebase = useFirebase();

  const onUsernameChange = (e: any) => {
    const updatedUsername = e.target.value;
    setUsername(updatedUsername);
  };

  const saveHighScore = (e: any) => {
    e.preventDefault();
    const record = {
      name: username,
      score,
    };
    firebase.scores().push(record, () => {
      scoreSaved();
    });
  };

  return (
    <SaveScoreFormContainer>
      <h1>Score: {score}</h1>
      <Form onSubmit={saveHighScore}>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='Enter Your Full Name'
          value={username}
          onChange={onUsernameChange}
        />
        <SaveScoreButton type='submit' disabled={!username}>
          Save
        </SaveScoreButton>
      </Form>
      <SaveScoreButton as={Link} to='/'>
        Go Home
      </SaveScoreButton>
    </SaveScoreFormContainer>
  );
};
export default SaveScoreForm;
