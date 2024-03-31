import React from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer, HomeButton, ButtonContainer } from './Home.styled'



export default function Home() {
    return (
        <HomeContainer>
            <h1>Trivia Quiz</h1>
            <ButtonContainer>
                <HomeButton as={Link} to="/quiz">Start Quiz</HomeButton>
                <HomeButton as={Link} to="/highscores">High Scores</HomeButton>
            </ButtonContainer>
        </HomeContainer>

    )
}
