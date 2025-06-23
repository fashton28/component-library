import React from 'react';

const SearchBar = () => (
  <form className="flex items-center bg-[#181A20] p-2 rounded-lg w-full max-w-xs">
    <input
      type="text"
      placeholder="Search"
      className="bg-transparent text-white placeholder-gray-400 flex-1 outline-none px-2"
    />
    <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">Submit</button>
  </form>
);

export default SearchBar; 