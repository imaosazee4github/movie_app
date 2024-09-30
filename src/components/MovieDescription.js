// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const MovieDescription = ({ movies }) => {
//   const { index } = useParams();
//   const movie = movies[index];
//   const navigate = useNavigate();

//   return (
//     <div className="movie-description container mx-auto p-4">
//       <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
//       <p className="text-lg mb-4">{movie.description}</p>
//       <div className="video-container">
//         <iframe
//           width="560"
//           height="315"
//           src={movie.trailer}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>
//       <button
//         className="bg-blue-500 text-white p-2 rounded mt-4"
//         onClick={() => navigate('/')}
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// };

// export default MovieDescription;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { index } = useParams();
  const movie = movies[index];
  const navigate = useNavigate();

  return (
    <div className="movie-description container mx-auto p-6 bg-white shadow-lg rounded-lg animate-fadeIn">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">{movie.title}</h2>
      <p className="text-lg mb-4 text-gray-700">{movie.description}</p>
      <div className="video-container mb-6">
        <iframe
          width="100%"
          height="400"
          src={movie.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-md transition-opacity duration-300 ease-in-out"
        ></iframe>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300"
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
};

export default MovieDescription;
