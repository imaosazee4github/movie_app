
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, onDelete, index }) => {
  return (
    <div className="movie-card bg-white shadow-md rounded-lg p-4 m-4 max-w-xs transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <img
        className="w-full rounded-t-lg"
        src={movie.posterURL || 'https://via.placeholder.com/150'}
        alt={movie.title || 'No title'}
      />
      <h3 className="text-xl font-bold my-2 text-center">{movie.title}</h3>
      <p className="text-gray-700 text-justify">{movie.description}</p>
      <span className="block mt-2 text-sm text-gray-600">Rating: {movie.rating}/5</span>
      
     <div className='flex gap-5'>
       <div className="flex justify-between items-center mt-4">
        <Link
          to={`/movie/${index}`}
          className="bg-blue-500 text-white p-2 rounded w-sm text-center transition-colors duration-300 hover:bg-blue-700"
        >
          Details
        </Link>
      </div>
      
      <button
        className="bg-red-500 text-white p-2 rounded w-sm mt-4 transition-opacity duration-500 ease-in-out hover:opacity-75"
        onClick={() => onDelete(index)}
      >
        Delete
      </button>
      </div>
    </div>
  );
};

export default MovieCard;

