

const Header = ({ onAddMovieToggle }) => {
  return (
    <header className="bg-slate-500 text-white p-4 flex justify-between items-center rounded-full">
      <button
        onClick={onAddMovieToggle}
        className="bg-green-500 px-4 py-2 rounded-full hover:bg-green-700 transition duration-300"
      >
        Add Movie
      </button>
    </header>
  );
};

export default Header;
