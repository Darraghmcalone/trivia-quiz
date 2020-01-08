import React from 'react';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import HighScores from './pages/HighScores/HighScores';
import GlobalStyle from './Global';
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/highscores" component={HighScores} />
      </Router>
    </>
  );
}

export default App;
