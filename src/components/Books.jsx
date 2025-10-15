import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const Books = ({ searchData, onSelectBook, onAddToFavorite, favorites = [] }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
        
        let searchQuery = searchData?.query || "Top Picks";
        
        if (searchData?.category && searchData.category !== "All Categories") {
          searchQuery += `+subject:${searchData.category}`;
        }
        
        let orderBy = "relevance";
        if (searchData?.sort === "Newest") {
          orderBy = "newest";
        }
        
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=6&orderBy=${orderBy}&key=${apiKey}`
        );
        const data = await response.json();
        
        const formattedBooks = data.items?.map((item) => {
          const imageLinks = item.volumeInfo.imageLinks;
          let image = "";
          
          if (imageLinks) {
            image = imageLinks.thumbnail || imageLinks.smallThumbnail || "";
            if (image) {
              image = image.replace('http:', 'https:').replace('zoom=1', 'zoom=3');
            }
          }
          
          const identifiers = item.volumeInfo.industryIdentifiers || [];
          const isbn = identifiers.find(id => id.type === "ISBN_13")?.identifier ||
                       identifiers.find(id => id.type === "ISBN_10")?.identifier ||
                       "N/A";
          
          return {
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors?.[0] || "Unknown Author",
            date: item.volumeInfo.publishedDate || "N/A",
            image: image,
            description: item.volumeInfo.description || "No description available",
            publishedDate: item.volumeInfo.publishedDate || "N/A",
            isbn: isbn,
            pageCount: item.volumeInfo.pageCount || "N/A",
            subjects: item.volumeInfo.categories || [],
          };
        }) || [];
        
        setBooks(formattedBooks);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchData]);

  const isFavorite = (book) => {
    return favorites.some(fav => fav.isbn === book.isbn);
  };

  const handleFavoriteClick = (e, book) => {
    e.stopPropagation(); 
    onAddToFavorite(book);
  };

  if (loading) {
    return (
      <section className="py-10 px-4 bg-[#f6f6f6] max-w-[1440px] mx-auto">
        <h3 className="text-xl font-semibold text-[#2b593f] text-center mb-8">
          📚 Top Picks 📚
        </h3>
        <p className="text-center text-gray-600">Loading books...</p>
      </section>
    );
  }

  return (
    <section className="py-10 px-4 bg-[#ffffff] max-w-[1440px] mx-auto">
      <h3 className="text-xl font-semibold text-[#2b593f] text-center mb-8">
        📚 Top Picks 📚
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {books.map((book, i) => (
          <div
            key={i}
            className="
              bg-[#D9D9D9] shadow-md rounded-2xl p-4 flex flex-col
              hover:scale-[1.02] transition-all cursor-pointer
              w-[165px]
              sm:w-[200px]
              md:w-[220px]
              lg:w-[280px]
              xl:w-[320px]
              relative
            "
            onClick={() => onSelectBook(book)}
          >
            {/* Favorite Button */}
            <button
              onClick={(e) => handleFavoriteClick(e, book)}
              className="absolute top-6 right-6 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition"
              title={isFavorite(book) ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                size={18}
                className={isFavorite(book) ? "text-red-500" : "text-gray-400"}
                fill={isFavorite(book) ? "currentColor" : "none"}
              />
            </button>

            {/* Book Image */}
            <div className="bg-gray-200 rounded-md mb-3 w-full aspect-[1/1] overflow-hidden">
              {book.image ? (
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                  No Image
                </div>
              )}
            </div>
           
            {/* Book Info */}
            <div className="flex flex-col items-start gap-1">
              <p className="font-medium text-xs sm:text-sm md:text-base text-gray-800 line-clamp-2">
                {book.title}
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                {book.author}
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                {book.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;