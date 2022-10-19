import React, { useState, useEffect, FunctionComponent } from 'react';
import { useFirebase } from '../../components/Firebase/FirebaseContext';
import { Loader } from '../../components/Loader/Loader';
import {
  HighScoreContainer,
  HighScoresList,
  HighScoreTitle,
  HighScoreButton,
} from './HighScores.style';
import { Link } from 'react-router-dom';

interface Score {
  key: string;
  name: string;
  score: number;
}

interface HighScoresProps {
  highScores: Score[];
  loadingInit?: boolean;
}

const HighScores: FunctionComponent<HighScoresProps> = ({
  highScores,
  loadingInit = true,
}) => {
  const firebase = useFirebase();
  const [scores, setScores] = useState(highScores);
  const [loading, setLoading] = useState(loadingInit);

  useEffect(() => {
    firebase.scores().once('value', (snapshot: any) => {
      const data = snapshot.val();
      const sortedScores = formatScoreData(data);
      setScores(sortedScores);
      setLoading(false);
    });
  }, [firebase]);

  const formatScoreData = (firebaseScores: any) => {
    const scores = [];

    for (let key in firebaseScores) {
      const val = firebaseScores[key];
      val['key'] = key;
      scores.push(val);
    }

    return scores
      .sort((score1, score2) => score2.score - score1.score)
      .slice(0, 10);
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <HighScoreContainer>
          <HighScoreTitle>High Scores</HighScoreTitle>
          <HighScoresList>
            {scores.map((record, index) => (
              <div className="highScoreItem" key={record.key}>
                <div className="leftCol">
                  <h6> {index + 1} </h6>
                  <h5>{record.name}</h5>
                </div>
                <h5>{record.score}</h5>
              </div>
            ))}
          </HighScoresList>
          <HighScoreButton as={Link} to='/'>
            Go Home
          </HighScoreButton>
        </HighScoreContainer>
      )}
    </>
  );
};

export default HighScores;
