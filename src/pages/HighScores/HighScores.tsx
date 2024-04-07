import React from 'react';
import { Loader } from '../../components/Loader/Loader';
import {
  HighScoreContainer,
  HighScoresList,
  HighScoreTitle,
  HighScoreButton,
  HighScoresPagination,
} from './HighScores.style';
import { Link } from 'react-router-dom';
import useHighScores from '../../hooks/useHighScores';


const HighScores = () => {
  const {
    handlePageNavigation,
    totalPages,
    scoresPerPage,
    scores,
    loading,
    hasNextPage,
    currentPage,
  } = useHighScores();
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <HighScoreContainer>
          <HighScoreTitle>High Scores</HighScoreTitle>
          <HighScoresList>
            {scores.map((record, index) => (
              <div className='highScoreItem' key={record.key}>
                <div className='leftCol'>
                  <h5 className='position'>
                    {' '}
                    {(currentPage - 1) * scoresPerPage + index + 1}{' '}
                  </h5>
                  <h5>{record.name}</h5>
                </div>
                <h5>{record.score}</h5>
              </div>
            ))}
          </HighScoresList>
          <HighScoresPagination>
            {/* Previous Page Link */}
            <div className='page-item'>
              {currentPage > 1 ? (
                <a
                  onClick={(e) => handlePageNavigation(e, currentPage - 1)}
                  href='#'
                  className='page-link inactive'
                >
                  <img src={require('../../assets/images/back-arrow.png')} />
                </a>
              ) : (
                <div className='page-link'>
                  <img
                    src={require('../../assets/images/back-arrow-inactive.png')}
                  />
                </div>
              )}
            </div>
            {/* Page Numbers */}
            <div className='page-numbers'>
              {[...Array(totalPages).keys()].map((pageNumber) => (
                <div
                  key={pageNumber + 1}
                  className={`page-item ${
                    currentPage === pageNumber + 1 ? 'active' : ''
                  }`}
                >
                  <a
                    onClick={(e) => handlePageNavigation(e, pageNumber + 1)}
                    href='#'
                    className='page-link'
                  >
                    {pageNumber + 1}
                  </a>
                </div>
              ))}
            </div>
            {/* Next Page Link */}
            <div className='page-item'>
              {hasNextPage ? (
                <a
                  onClick={(e) => handlePageNavigation(e, currentPage + 1)}
                  href='#'
                  className='page-link'
                >
                  <img src={require('../../assets/images/forward-arrow.png')} />
                </a>
              ) : (
                <div className='page-link inactive'>
                  <img
                    src={require('../../assets/images/forward-arrow-inactive.png')}
                  />
                </div>
              )}
            </div>
          </HighScoresPagination>
          <HighScoreButton as={Link} to='/'>
            Go Home
          </HighScoreButton>
        </HighScoreContainer>
      )}
    </>
  );
};

export default HighScores;
