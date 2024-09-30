// import React, { useState } from 'react';

// const Filtered = ({ onFilter }) => {
//   const [title, setTitle] = useState('');
//   const [rating, setRating] = useState('');

//   const handleFilter = () => {
//     onFilter({ title, rating });
//   };

//   return (
//     <div className="filter flex flex-col md:flex-row justify-center gap-4 mb-4">
//       <input
//         type="text"
//         placeholder="Filter by title"
//         className="border p-2 rounded"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Filter by rating"
//         className="border p-2 rounded"
//         value={rating}
//         onChange={(e) => setRating(e.target.value)}
//       />
//       <button className="bg-blue-500 text-white p-2 rounded" onClick={handleFilter}>Filter</button>
//     </div>
//   );
// };

// export default Filtered;

import React, { useState } from 'react';

const Filtered = ({ onFilter }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="filter-container p-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4 hover:bg-blue-700 transition duration-300"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle Filter
      </button>

      {isVisible && (
        <div className="filter-form flex flex-col md:flex-row justify-center gap-4 mb-4 animate-slideDown">
          <input
            type="text"
            placeholder="Filter by title"
            className="border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Filter by rating"
            className="border p-2 rounded"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
            onClick={handleFilter}
          >
            Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default Filtered;
