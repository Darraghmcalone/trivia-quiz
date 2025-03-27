import app from 'firebase/app';
import 'firebase/database';

type Score = {
  key: string;
  [key: string]: any;
};

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: 'https://trivia-quiz-bb5c7.firebaseio.com/',
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
  scores = (): app.database.Reference => app.database().ref('scores');

  fetchScores = (
    pageSize: number,
    lastScoreKey: string = ''
  ): Promise<{ scores: Score[]; lastKey: string; hasNextPage: boolean }> => {
    let query = this.scores()
    .orderByChild('score_order')
    if (lastScoreKey) query = query.startAt(lastScoreKey);

    return query.once('value').then((snapshot) => {
      const scores: Score[] = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();
        scores.push({ key, ...data });
      });
      const reversed = scores.reverse();
      const hasNextPage = scores.length > pageSize;
      if (hasNextPage) scores.pop();

      const lastKey = scores.length > 0 ? scores[scores.length - 1].key : '';

      return { scores:reversed, lastKey, hasNextPage };
    });
  };
  getTotalScoresCount = (): Promise<number> => {
    return this.scores()
      .once('value')
      .then((snapshot) => snapshot.numChildren());
  };
}

export default Firebase;
