import React from "react";
import { ArrowLeft } from "lucide-react";

const BookDetails = ({ book, onBack }) => {
  if (!book) {
    return (
      <section className="py-10 px-4 bg-[#f6f6f6] max-w-[1440px] mx-auto min-h-screen">
        <p className="text-center text-gray-600">No book selected</p>
      </section>
    );
  }

  const {
    title,
    author,
    image,
    description,
    publishedDate,
    isbn,
    pageCount,
    subjects,
  } = book;

  return (
    <section className="py-10 px-4 bg-[#f6f6f6] min-h-screen">
      <div className="max-w-[1000px] mx-auto">
    
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#4A7C59] hover:text-[#2b593f] mb-8 transition"
        >
          <ArrowLeft size={20} />
          Back to Books
        </button>

        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            
            <div className="md:col-span-1 flex justify-center">
              <div className="w-full md:w-64 aspect-[2/3] bg-gray-200 rounded-lg overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
            </div>

            
            <div className="md:col-span-2 flex flex-col gap-6">
             
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#2b593f] mb-2">
                  {title}
                </h1>
                <p className="text-lg text-gray-600">by {author}</p>
              </div>

            
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Publication Date
                </h3>
                <p className="text-lg text-gray-800">
                  {publishedDate || "N/A"}
                </p>
              </div>

            
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  ISBN
                </h3>
                <p className="text-lg text-gray-800">{isbn || "N/A"}</p>
              </div>

            
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Number of Pages
                </h3>
                <p className="text-lg text-gray-800">{pageCount || "N/A"}</p>
              </div>

              
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Subjects / Genres
                </h3>
                <div className="flex flex-wrap gap-2">
                  {subjects && subjects.length > 0 ? (
                    subjects.map((subject, i) => (
                      <span
                        key={i}
                        className="bg-[#4A7C59] text-white px-4 py-2 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-600">No genres available</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          
          {description && (
            <div className="border-t border-gray-200 p-8">
              <h3 className="text-xl font-bold text-[#2b593f] mb-4">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookDetails;