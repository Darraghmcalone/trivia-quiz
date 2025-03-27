const admin = require('firebase-admin');

// Replace with your Firebase service account path
const serviceAccount = require('./trivia-quiz-bb5c7-firebase-adminsdk-dygm0-074ffc72f0.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://trivia-quiz-bb5c7.firebaseio.com', // replace with yours
});

const db = admin.database();

const backfillScoreOrder = async () => {
  const ref = db.ref('scores');
  const snapshot = await ref.once('value');

  const updates = {};
  snapshot.forEach((child) => {
    const key = child.key;
    const data = child.val();
    const score = data.score;
    const timestamp = data.timestamp || Date.now(); // fallback to now if missing

    if (score !== undefined && !data.score_order) {
      const scoreOrder = `${-score}:${timestamp}`;
      updates[`/scores/${key}/score_order`] = scoreOrder;
    }
  });

  console.log(`Updating ${Object.keys(updates).length} scores...`);
  await db.ref().update(updates);
  console.log('✅ Backfill complete!');
};

backfillScoreOrder().catch((err) => {
  console.error('Error during backfill:', err);
});
