import React, { useState } from "react";
import { BookOpen, Heart, Search, Home, User, Menu, X } from "lucide-react";

const Header = ({ onViewHome, onViewSearch, onViewBooks, onViewFavorites, favoritesCount, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (callback) => {
    callback();
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <>
      <header className="bg-[#2b593f] text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-3 md:p-4">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={onViewHome}
          >
            <BookOpen className="text-green-300" />
            <h1 className="text-lg md:text-xl font-bold">BookLibrary</h1>
          </div>
          
        
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={onViewHome}
              className={`hover:text-green-300 flex items-center gap-1 transition ${
                currentView === 'home' ? 'text-green-300' : ''
              }`}
            >
              <Home size={18} /> Home
            </button>
            <button 
              onClick={onViewSearch}
              className={`hover:text-green-300 flex items-center gap-1 transition ${
                currentView === 'search' ? 'text-green-300' : ''
              }`}
            >
              <Search size={18} /> Search
            </button>
            <button 
              onClick={onViewBooks}
              className={`hover:text-green-300 flex items-center gap-1 transition ${
                currentView === 'books' ? 'text-green-300' : ''
              }`}
            >
              <BookOpen size={18} /> Books
            </button>
            <button 
              onClick={onViewFavorites}
              className={`hover:text-green-300 flex items-center gap-1 relative transition ${
                currentView === 'favorites' ? 'text-green-300' : ''
              }`}
            >
              <Heart size={18} fill={favoritesCount > 0 ? "currentColor" : "none"} />
              Favorites
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>
          </nav>
          
          <div className="flex items-center gap-3">
            <button className="bg-green-300 text-[#2b593f] rounded-full p-2 hover:bg-green-200 transition">
              <User size={20} />
            </button>
            
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-green-300 transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

       
        {isMenuOpen && (
          <div className="md:hidden bg-[#2b593f] border-t border-green-300/20">
            <nav className="flex flex-col p-4 space-y-3">
              <button 
                onClick={() => handleNavClick(onViewHome)}
                className={`hover:text-green-300 flex items-center gap-2 py-2 px-3 rounded transition ${
                  currentView === 'home' ? 'text-green-300 bg-[#1e3f2c]' : ''
                }`}
              >
                <Home size={18} /> Home
              </button>
              <button 
                onClick={() => handleNavClick(onViewSearch)}
                className={`hover:text-green-300 flex items-center gap-2 py-2 px-3 rounded transition ${
                  currentView === 'search' ? 'text-green-300 bg-[#1e3f2c]' : ''
                }`}
              >
                <Search size={18} /> Search
              </button>
              <button 
                onClick={() => handleNavClick(onViewBooks)}
                className={`hover:text-green-300 flex items-center gap-2 py-2 px-3 rounded transition ${
                  currentView === 'books' ? 'text-green-300 bg-[#1e3f2c]' : ''
                }`}
              >
                <BookOpen size={18} /> Books
              </button>
              <button 
                onClick={() => handleNavClick(onViewFavorites)}
                className={`hover:text-green-300 flex items-center gap-2 py-2 px-3 rounded relative transition ${
                  currentView === 'favorites' ? 'text-green-300 bg-[#1e3f2c]' : ''
                }`}
              >
                <Heart size={18} fill={favoritesCount > 0 ? "currentColor" : "none"} />
                Favorites
                {favoritesCount > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {favoritesCount}
                  </span>
                )}
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;