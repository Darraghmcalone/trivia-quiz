import React from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer, HomeInnerContainer } from './Home.styled'
import { Button } from '../../elements/Button'

export default function Home() {
    return (
        <HomeContainer>
            <HomeInnerContainer>
                <h1>Trivia Quiz</h1>
                <Button as={Link} to="/quiz">Start Quiz</Button>
                <Button as={Link} to="/highscores">High Scores</Button>
            </HomeInnerContainer>
        </HomeContainer>
    )
}
