// import React, { useState , useRef} from 'react';

// const AddMovie = ({ onAdd }) => {
//   const [newMovie, setNewMovie] = useState({
//     title: '',
//     description: '',
//     posterURL: '',
//     rating: ''
//   });

//    // Create a ref for the file input
//    const fileInputRef = useRef(null);

//   // Handle change for text inputs
//   const handleTextChange = (e) => {
//     const { name, value } = e.target;
//     setNewMovie({ ...newMovie, [name]: value });
//   };

//     // Handle file input change
//     const handleFileChange = () => {
//       const file = fileInputRef.current.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setNewMovie({ ...newMovie, posterURL: reader.result });
//         };
//         reader.readAsDataURL(file);
//       }
//     };

//   const handleSubmit = () => {
//     onAdd(newMovie);
//     setNewMovie({
//       title: '',
//       description: '',
//       posterURL: '',
//       rating: ''
//     });
  

//     // Clear the file input after submission
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
// }

//   return (
//     <div className="add-movie flex flex-col gap-4 mb-4">

//       <input
//         name="title"
//         type="text"
//         placeholder="Movie Title"
//         className="border p-2 rounded"
//         value={newMovie.title}
//         onChange={handleTextChange}
//       />

//       <input
//         name="description"
//         type="text"
//         placeholder="Description"
//         className="border p-2 rounded"
//         value={newMovie.description}
//         onChange={handleTextChange}
//       />
//       <input
//         name="posterURL"
//         type="file"
//         accept='image/*'
//         placeholder="Poster URL"
//         className="border p-2 rounded"
//         ref={fileInputRef}
//         onChange={handleFileChange}
//       />
//       <input
//         name="rating"
//         type="number"
//         placeholder="Rating"
//         className="border p-2 rounded"
//         value={newMovie.rating}
//         onChange={handleTextChange}
//       />
//       <button className="bg-green-500 text-white p-2 rounded" onClick={handleSubmit}>Add Movie</button>
//     </div>
//   );
// };

// export default AddMovie;

import React, { useState, useRef } from 'react';

const AddMovie = ({ onAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    trailer: '',
  });

  const fileInputRef = useRef(null);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMovie({ ...newMovie, posterURL: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onAdd(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
      trailer: '',
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="add-movie flex flex-col gap-4 mb-4">
      <input
        name="title"
        type="text"
        placeholder="Movie Title"
        className="border p-2 rounded"
        value={newMovie.title}
        onChange={handleTextChange}
        required
      />
      <input
        name="description"
        type="text"
        placeholder="Description"
        className="border p-2 rounded"
        value={newMovie.description}
        onChange={handleTextChange}
        required
      />
      <input
        name="posterURL"
        type="file"
        accept="image/*"
        placeholder="Poster URL"
        className="border p-2 rounded"
        ref={fileInputRef}
        onChange={handleFileChange}
        required
      />
      <input
        name="rating"
        type="number"
        placeholder="Rating"
        className="border p-2 rounded"
        value={newMovie.rating}
        onChange={handleTextChange}
        required
      />
      <input
        name="trailer"
        type="text"
        placeholder="Trailer Link"
        className="border p-2 rounded"
        value={newMovie.trailer}
        onChange={handleTextChange}
        required
      />
      <button className="bg-green-500 text-white p-2 rounded" onClick={handleSubmit}>
        Add Movie
      </button>
    </div>
  );
};

export default AddMovie;