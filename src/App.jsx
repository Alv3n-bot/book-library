import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import Favorites from "./components/Favorites";

const App = () => {
  const [searchData, setSearchData] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentView, setCurrentView] = useState('home'); 

  const handleSearch = (data) => {
    setSearchData(data);
    setCurrentView('books');
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
    setCurrentView('details');
  };

  const handleBackToBooks = () => {
    setSelectedBook(null);
    setCurrentView('books');
  };

  const handleAddToFavorite = (book) => {
    setFavorites(prev => {
      const exists = prev.some(fav => fav.isbn === book.isbn);
      if (exists) {
        // Remove if already in favorites
        return prev.filter(fav => fav.isbn !== book.isbn);
      }
      // Add to favorites
      return [...prev, book];
    });
  };

  const handleRemoveFromFavorites = (book) => {
    setFavorites(prev => prev.filter(fav => fav.isbn !== book.isbn));
  };

  const handleViewHome = () => {
    setCurrentView('home');
    setSelectedBook(null);
  };

  const handleViewSearch = () => {
    setCurrentView('search');
    setSelectedBook(null);
  };

  const handleViewBooks = () => {
    setCurrentView('books');
    setSelectedBook(null);
  };

  const handleViewFavorites = () => {
    setCurrentView('favorites');
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f6f6] text-gray-900">
      <Header 
        onViewHome={handleViewHome}
        onViewSearch={handleViewSearch}
        onViewBooks={handleViewBooks}
        onViewFavorites={handleViewFavorites}
        favoritesCount={favorites.length}
        currentView={currentView}
      />
      
      {currentView === 'details' && selectedBook ? (
        <BookDetails 
          book={selectedBook} 
          onBack={handleBackToBooks}
          onAddToFavorite={handleAddToFavorite}
          favorites={favorites}
        />
      ) : currentView === 'favorites' ? (
        <Favorites
          favorites={favorites}
          onRemoveFromFavorites={handleRemoveFromFavorites}
          onViewBook={handleSelectBook}
        />
      ) : currentView === 'search' ? (
        <Main onSearch={handleSearch} />
      ) : currentView === 'books' ? (
        <Books 
          searchData={searchData} 
          onSelectBook={handleSelectBook}
          onAddToFavorite={handleAddToFavorite}
          favorites={favorites}
        />
      ) : (
        <>
          <Main onSearch={handleSearch} />
          <Books 
            searchData={searchData} 
            onSelectBook={handleSelectBook}
            onAddToFavorite={handleAddToFavorite}
            favorites={favorites}
          />
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default App;