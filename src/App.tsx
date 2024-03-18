import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import HighScores from './pages/HighScores/HighScores';
import GlobalStyle from './Global';
import { RouteContainer } from './App.style'
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <RouteContainer>
          <Route exact path="/" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/highscores" component={HighScores} />
        </RouteContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
