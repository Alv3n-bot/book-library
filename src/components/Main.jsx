import React from "react";

const Main = () => {
  return (
    <section className="text-center py-10 px-4 bg-[#f6f6f6]">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#2b593f]">
        🌿 Nurture Your Reading Habit
      </h2>
      <p className="text-gray-600 mt-2">
        Discover books that bloom in your imagination ✨
      </p>

      
      <div className="mt-8 flex justify-center">
        <div className="flex w-full sm:w-[500px] items-center border-2 border-[#87A96B] rounded-full overflow-hidden bg-white shadow-sm">
          <input
            type="text"
            placeholder="🔍 search for books, authors or topics"
            className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-[#4A7C59] text-white px-1 py-1 rounded-full hover:bg-green-700 transition">
            🔍 Search 🌸
          </button>
        </div>
      </div>

      
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          defaultValue="All Categories"
        >
          <option>All Categories</option>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Science</option>
          <option>History</option>
          <option>Technology</option>
        </select>

        <select
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          defaultValue="Relevance"
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
