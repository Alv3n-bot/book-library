import React from "react";
import { BookOpen, Heart, Search, Home, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#2b593f] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3 md:p-4">
        <div className="flex items-center gap-2">
          <BookOpen className="text-green-300" />
          <h1 className="text-lg md:text-xl font-bold">BookLibrary</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-green-300 flex items-center gap-1">
            <Home size={18} /> Home
          </a>
          <a href="#" className="hover:text-green-300 flex items-center gap-1">
            <Search size={18} /> Search
          </a>
          <a href="#" className="hover:text-green-300 flex items-center gap-1">
            <BookOpen size={18} /> Books
          </a>
          <a href="#" className="hover:text-green-300 flex items-center gap-1">
            <Heart size={18} /> Favorites
          </a>
        </nav>

        <button className="bg-green-300 text-[#2b593f] rounded-full p-2 hover:bg-green-200 transition">
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
