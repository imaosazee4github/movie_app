
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onDelete }) => {
  return (
    <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          index={index}
          onDelete={onDelete}
          className="transform transition-transform hover:scale-105 duration-300"
        />
      ))}
    </div>
  );
};

export default MovieList;
