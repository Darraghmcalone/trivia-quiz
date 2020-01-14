import React from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer } from './Home.styled'
import { Button } from '../../components/Button/Button'

export default function Home() {
    return (
        <HomeContainer>
            <h1>Trivia Quiz</h1>
            <Button as={Link} to="/quiz">Start Quiz</Button>
            <Button as={Link} to="/highscores">High Scores</Button>
        </HomeContainer>

    )
}
