import React, { useCallback, useEffect, useState } from 'react';
import { useFirebase } from '../components/Firebase/FirebaseContext';

interface Score {
  key: string;
  name: string;
  score: number;
}

interface UseHighScoresReturn {
  handlePageNavigation: (
    e: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => void;
  totalPages: number;
  scoresPerPage: number;
  scores: Score[];
  loading: boolean;
  hasNextPage: boolean;
  currentPage: number;
}

const useHighScores = (): UseHighScoresReturn => {
  const firebase = useFirebase();
  const [allScores, setAllScores] = useState<Score[]>([]);
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const scoresPerPage: number = 10;

  const totalPages = Math.ceil(allScores.length / scoresPerPage);
  const hasNextPage = currentPage < totalPages;

  useEffect(() => {
    setLoading(true);
    firebase
      .scores()
      .once('value')
      .then((snapshot: any[]) => {
        const fetchedScores: Score[] = [];
        snapshot.forEach((child) => {
          const key = child.key!;
          const data = child.val();
          fetchedScores.push({ key, ...data });
        });

        const sorted = fetchedScores.sort((a, b) => b.score - a.score);

        setAllScores(sorted);
        setLoading(false);
      });
  }, [firebase]);

  useEffect(() => {
    const start = (currentPage - 1) * scoresPerPage;
    const end = start + scoresPerPage;
    setScores(allScores.slice(start, end));
  }, [currentPage, allScores, scoresPerPage]);

  const handlePageNavigation = (
    e: React.MouseEvent<HTMLButtonElement>,
    page: number
  ): void => {
    e.preventDefault();
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return {
    handlePageNavigation,
    totalPages,
    scoresPerPage,
    scores,
    loading,
    hasNextPage,
    currentPage,
  };
};

export default useHighScores;
