import React, { useEffect, useState } from 'react';
import { useFirebase } from '../../components/Firebase/FirebaseContext';
import { Loader } from '../../components/Loader/Loader';
import { HighScoreContainer, HighScoresList, HighScoreTitle, HighScoreButton } from './HighScores.style'
import { Link } from 'react-router-dom';

export default function HighScores() {
    const firebase = useFirebase();
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase.scores().once('value', (snapshot) => {
            const data = snapshot.val();
            const sortedScores = formatScoreData(data);
            setScores(sortedScores);
            setLoading(false);
        });
    },[firebase]);

    const formatScoreData = (firebaseScores) => {
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
                        {scores.map((record) => (
                            <li key={record.key}>
                                {record.name} - {record.score}
                            </li>
                        ))}
                    </HighScoresList>
                    <HighScoreButton as={Link} to="/" >
                        Go Home
                    </HighScoreButton>
                </HighScoreContainer>
            )}
        </>
    );
}
