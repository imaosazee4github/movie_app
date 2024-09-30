// import React, { useState } from 'react';
// import MovieList from './components/MovieList';
// import Filtered from './components/Filtered';
// import AddMovie from './components/AddMovie';

// const App = () => {
//   const [movies, setMovies] = useState([
//     {
//       title: 'Inception',
//       description: 'A thief with the ability to enter dreams and steal secrets.',
//       posterURL: 'https://via.placeholder.com/150',
//       rating: 5,
//       trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
//     },
//     {
//       title: 'Interstellar',
//       description: 'A journey through space to save humanity.',
//       posterURL: 'https://via.placeholder.com/150',
//       rating: 4,
//       trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E',
//     },
//     {
//       title: 'The Dark Knight',
//       description: 'Batman faces the Joker, who wreaks havoc on Gotham City.',
//       posterURL: 'https://via.placeholder.com/150',
//       rating: 5,
//       trailer: 'https://www.youtube.com/embed/EXeTwQWrcwY',
//     },
//     {
//       title: 'The Matrix',
//       description: 'A hacker discovers the truth about his reality.',
//       posterURL: 'https://via.placeholder.com/150',
//       rating: 4,
//       trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8',
//     },
//     {
//       title: 'The Lord of the Rings: The Fellowship of the Ring',
//       description: 'A young hobbit embarks on a journey to destroy a powerful ring.',
//       posterURL: 'https://via.placeholder.com/150',
//       rating: 5,
//       trailer: 'https://www.youtube.com/embed/V75dMMIW2B4',
//     },
//     {
//       title: 'Star Wars: A New Hope',
//       description: 'A farm boy becomes a hero in a galactic war.',
//       posterURL: 'https://via.placeholder.com/150',
//       rating: 4,
//       trailer: 'https://www.youtube.com/embed/1g3_CFmnU7k',
//     },
//     {
//       title: 'Avengers: Endgame',
//       description: 'The Avengers assemble to undo Thanos\' destruction.',
//       posterURL: 'https://via.placeholder.com/150',
//       rating: 5,
//       trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c',
//     },
//     {
//       title: 'Gladiator',
//       description: 'A Roman general seeks revenge after being betrayed.',
//       posterURL: 'https://via.placeholder.com/150',
//       rating: 4,
//       trailer: 'https://www.youtube.com/embed/owK1qxDselE',
//     },
//     {
//       title: 'Jurassic Park',
//       description: 'Dinosaurs roam the earth in a theme park gone wrong.',
//       posterURL: 'https://via.placeholder.com/150',
//       rating: 4,
//       trailer: 'https://www.youtube.com/embed/QWBKEmWWL38',
//     },
//     {
//       title: 'Forrest Gump',
//       description: 'A man with a kind heart tells his extraordinary life story.',
//       posterURL: 'https://via.placeholder.com/150',
//       rating: 5,
//       trailer: 'https://www.youtube.com/embed/bLvqoHBptjg',
//     },
//   ]);
//   const [filteredMovies, setFilteredMovies] = useState(movies);
//   const [isFormVisible, setIsFormVisible] = useState(false); 

//   const handleFilter = (filter) => {
//     const { title, rating } = filter;
//     const filtered = movies.filter(movie =>
//       movie.title.toLowerCase().includes(title.toLowerCase()) &&
//       movie.rating >= (rating || 0)
//     );
//     setFilteredMovies(filtered);
//   };

//   const handleAddMovie = (newMovie) => {
//     setMovies([...movies, newMovie]);
//     setFilteredMovies([...movies, newMovie]);
// setIsFormVisible(false);
//   };

//   return (
//     <div className="app container mx-auto p-4">
//       <h1 className="text-4xl font-bold text-center mb-6">My Favorite Movies</h1>
//       <Filtered onFilter={handleFilter} />
//       <AddMovie onAdd={handleAddMovie} />
//       <MovieList movies={filteredMovies} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filtered from './components/Filtered';
import AddMovie from './components/AddMovie';
import MovieDescription from './components/MovieDescription';
import Header from './components/Header';
import img1 from './assets/image1.jpg'

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief with the ability to enter dreams and steal secrets.',
      posterURL: 'https://via.placeholder.com/150 ' || {img1},
      rating: 5,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      title: 'Interstellar',
      description: 'A journey through space to save humanity.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    },
    {
      title: 'The Dark Knight',
      description: 'Batman faces the Joker, who wreaks havoc on Gotham City.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers the truth about his reality.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      description: 'A young hobbit embarks on a journey to destroy a powerful ring.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/V75dMMIW2B4',
    },
    {
      title: 'Star Wars: A New Hope',
      description: 'A farm boy becomes a hero in a galactic war.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/1g3_CFmnU7k',
    },
    {
      title: 'Avengers: Endgame',
      description: 'The Avengers assemble to undo Thanos\' destruction.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c',
    },
    {
      title: 'Gladiator',
      description: 'A Roman general seeks revenge after being betrayed.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/owK1qxDselE',
    },
    {
      title: 'Jurassic Park',
      description: 'Dinosaurs roam the earth in a theme park gone wrong.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/QWBKEmWWL38',
    },
    {
      title: 'Forrest Gump',
      description: 'A man with a kind heart tells his extraordinary life story.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/bLvqoHBptjg',
    },
  ]);
  

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleFilter = (filter) => {
    const { title, rating } = filter;
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      movie.rating >= (rating || 0)
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
    setIsFormVisible(false);
  };

  const handleDeleteMovie = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

   // Toggle visibility of the Add Movie form
   const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="app container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">My Favorite Movies</h1>
      <Header onAddMovieToggle={toggleFormVisibility} />
      {isFormVisible && (
        <div className="add-movie-form container mx-auto p-4 animate-slideDown">
          <AddMovie onAdd={handleAddMovie} />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filtered onFilter={handleFilter} />
              {/* <AddMovie onAdd={handleAddMovie} /> */}
              <MovieList movies={filteredMovies} onDelete={handleDeleteMovie} />
            </>
          }
        />
        <Route path="/movie/:index" element={<MovieDescription movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;

