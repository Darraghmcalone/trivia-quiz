import React, { useEffect, useState } from 'react';
import { useFirebase } from '../components/Firebase/FirebaseContext';

interface Score {
  key: string;
  name: string;
  score: number;
}

interface UseHighScoresReturn {
  handlePageNavigation: (
    e: React.MouseEvent<HTMLAnchorElement>,
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
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastKey, setLastKey] = useState<string>('');
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalScores, setTotalScores] = useState<number>(0);

  useEffect(() => {
    const fetchTotalScoresCount = async () => {
      const count = await firebase.getTotalScoresCount();
      setTotalScores(count);
    };

    fetchTotalScoresCount();
  }, [firebase]);

  const scoresPerPage: number = 10;
  const totalPages: number = Math.ceil(totalScores / scoresPerPage);

  const fetchScores = (page: number, lastScoreKey: string) => {
    setLoading(true);
    firebase
      .fetchScores(scoresPerPage, lastScoreKey)
      .then(({ scores, lastKey, hasNextPage }: any) => {
        setScores(scores);
        setLastKey(lastKey);
        setHasNextPage(hasNextPage);
        setCurrentPage(page);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchScores(1, '');
  }, [firebase]);

  const handlePageChange = (page: number) => {
    if (page > currentPage && !hasNextPage) {
      return;
    }
    const newLastKey = page > currentPage ? lastKey : '';
    fetchScores(page, newLastKey);
  };

  const handlePageNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: number
  ): void => {
    e.preventDefault();
    handlePageChange(page);
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
