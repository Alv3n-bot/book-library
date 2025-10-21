 BookLibrary 
Welcome BookLibrary, a web application designed to help you discover, explore, and organize your favorite books! Built with modern web technologies, this app connects to the Google Books API to bring millions of books right to your fingertips.
 Features
1.  Search System
Search for books by title, author, or topic with powerful filtering options:
Filter by category (Fiction, Non-Fiction, Science, History, Technology)
Sort results by relevance or newest releases
Quick search with Enter key support
2. Book Display
Books are displayed in an elegant grid layout with:
High-quality book cover images
Essential information at a glance (title, author, publication date)
Smooth hover animations for a polished feel
3. Book Details
Click any book to see:
Full-size cover image
Complete book description
Publication date
ISBN number
Page count
Subject categories/genres
4. Favorites Management
Add books to your favorites with a single click
Heart icon turns red when a book is favorited
Dedicated favorites page to view all your saved books
Counter badge shows how many favorites you have
Easy removal from favorites
5. Smooth Navigation
Clean, intuitive header with icon-based navigation
Active page highlighting so you always know where you are
Quick access to Home, Search, Books, and Favorites sections
 Technology Stack
React 18 - For building the interactive user interface
Lucide React - Beautiful, consistent icons throughout the app
Google Books API - Access to millions of books worldwide
Tailwind CSS - For responsive, utility-first styling
Vite - Lightning-fast development experience
 Getting Started
Prerequisites
Node.js (v14 or higher)
npm 
A Google Books API key
Installation
Clone the repository
git clone https://github.com/yourusername/book-library.git
cd book-library

Install dependencies
npm install
# or
yarn install

Set up your API key Create a .env file in the root directory:
VITE_GOOGLE_BOOKS_API_KEY=your_api_key_here

Start the development server
npm run dev
# or
yarn dev

Open your browser Navigate to http://localhost:5173 and start exploring!
 How to Use
Search Books: Start on the home page and use the search bar to find books that interest you
Filter Results: Use the category and sort dropdowns to refine your search
Explore Details: Click on any book card to see comprehensive information
Save Favorites: Click the "Add to Favorites" button on any book detail page
Manage Collection: Visit the Favorites page to view all your saved books
Structure
book-library/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Main.jsx            # Hero section with search
│   │   ├── Books.jsx           # Book grid display
│   │   ├── BookDetails.jsx     # Individual book view
│   │   └── Favorites.jsx       # Favorites collection
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── .env                        # API keys (not committed)
└── package.json

Design
BookLibrary follows a nature-inspired design language:
Color Palette: Earthy greens (#2b593f, #4A7C59, #87A96B) create a calming, natural feel
Typography: Clear, readable fonts that prioritize user experience
Spacing: Generous whitespace for a clean, uncluttered interface
Interactions: Subtle animations and hover effects that feel responsive and alive
Future Enhancements
We're always thinking about how to make BookLibrary better:
[ ] User authentication for personalized experience
[ ] Reading lists and collections
[ ] Book ratings and reviews
[ ] Reading progress tracker
[ ] Share books with friends
[ ] Dark mode support
[ ] Offline support with service workers
Contributing
We welcome contributions! Whether it's:
Bug reports
Feature suggestions
Documentation improvements
Design enhancements
Feel free to open an issue or submit a pull request.
License
This project is open source and available under the MIT License.
 Acknowledgments
Google Books API for providing access to their vast book database
The React community for excellent documentation and tools
All the book lovers who inspire projects like this
Contact
Have questions or feedback? We'd love to hear from you!
alvinkamotho9@gmail.com

Happy Reading! 📚✨
Made with ❤️ for book lovers everywhere


