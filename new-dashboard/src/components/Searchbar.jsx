import React from 'react';

const Searchbar = () => {
  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button type="submit" className="absolute right-2 top-2 text-gray-500">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default Searchbar;
