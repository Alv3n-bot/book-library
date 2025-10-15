import React from "react";
import { Heart, Trash2 } from "lucide-react";

const Favorites = ({ favorites, onRemoveFromFavorites, onViewBook }) => {
  if (favorites.length === 0) {
    return (
      <section className="py-10 px-4 bg-[#f6f6f6] max-w-[1440px] mx-auto min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl font-bold text-[#2b593f] mb-8 text-center">
            My Favorites
          </h1>
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Heart size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-xl text-gray-600">No favorite books yet</p>
            <p className="text-gray-500 mt-2">
              Start adding books to your favorites to see them here
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-4 bg-[#f6f6f6] min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-[#2b593f]">My Favorites</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <Heart size={20} fill="#4A7C59" className="text-[#4A7C59]" />
            <span className="font-semibold">{favorites.length} books</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((book) => (
            <div
              key={book.isbn || book.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div
                className="cursor-pointer"
                onClick={() => onViewBook(book)}
              >
                <div className="aspect-[2/3] bg-gray-200 overflow-hidden">
                  {book.image ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-[#2b593f] mb-2 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{book.author}</p>
                  
                  {book.subjects && book.subjects.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {book.subjects.slice(0, 2).map((subject, i) => (
                        <span
                          key={i}
                          className="bg-[#4A7C59] text-white px-2 py-1 rounded-full text-xs"
                        >
                          {subject}
                        </span>
                      ))}
                      {book.subjects.length > 2 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{book.subjects.length - 2} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="px-4 pb-4">
                <button
                  onClick={() => onRemoveFromFavorites(book)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                >
                  <Trash2 size={16} />
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;