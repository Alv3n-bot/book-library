import React, { useState } from "react";

const Main = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSort, setSelectedSort] = useState("Relevance");

  const handleSearch = () => {
    onSearch({
      query: searchQuery,
      category: selectedCategory,
      sort: selectedSort
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="text-center py-16 md:py-20 lg:py-24 px-4 bg-[#595757]">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#4A7C59]">
        🌱 Nurture Your Reading Habit
      </h2>
      <p className="text-[#D4B996] mt-3 md:mt-4 text-base md:text-lg lg:text-xl">
        Discover books that bloom in your imagination ✨
      </p>
      <div className="mt-8 md:mt-10 lg:mt-12 flex justify-center">
        <div className="flex w-full sm:w-[500px] md:w-[600px] lg:w-[700px] items-center border-2 border-[#87A96B] rounded-full overflow-hidden bg-white shadow-sm p-2">
          <input
            type="text"
            placeholder="🔍 search for books, authors or topics"
            className="flex-grow px-4 md:px-6 py-2 md:py-3 text-sm md:text-base lg:text-lg text-gray-700 focus:outline-none bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="bg-[#4A7C59] text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 text-sm md:text-base lg:text-lg rounded-full hover:bg-green-700 transition whitespace-nowrap"
            onClick={handleSearch}
          >
            🔍 Search 🌸
          </button>
        </div>
      </div>
      <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
        <select
          className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base lg:text-lg border-2 border-[#87A96B] rounded-full bg-[#D9D9D9] text-[#2D5A3D] focus:outline-none focus:ring-2 focus:ring-[#87A96B]"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All Categories</option>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Science</option>
          <option>History</option>
          <option>Technology</option>
        </select>
        <select
          className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base lg:text-lg border-2 border-[#87A96B] rounded-full bg-[#D9D9D9] text-[#2D5A3D] focus:outline-none focus:ring-2 focus:ring-[#87A96B]"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option>Relevance</option>
          <option>Newest</option>
          <option>Oldest</option>
          <option>Most Popular</option>
        </select>
      </div>
    </section>
  );
};

export default Main;