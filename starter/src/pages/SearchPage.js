import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ContactsAPI from "../BooksAPI";
import Book from "../components/Book";

const validSearchTerms = [
  "Android",
  "Art",
  "Artificial Intelligence",
  "Astronomy",
  "Austen",
  "Baseball",
  "Basketball",
  "Bhagat",
  "Biography",
  "Brief",
  "Business",
  "Camus",
  "Cervantes",
  "Christie",
  "Classics",
  "Comics",
  "Cook",
  "Cricket",
  "Cycling",
  "Desai",
  "Design",
  "Development",
  "Digital Marketing",
  "Drama",
  "Drawing",
  "Dumas",
  "Education",
  "Everything",
  "Fantasy",
  "Film",
  "Finance",
  "First",
  "Fitness",
  "Football",
  "Future",
  "Games",
  "Gandhi",
  "Homer",
  "Horror",
  "Hugo",
  "Ibsen",
  "Journey",
  "Kafka",
  "King",
  "Lahiri",
  "Larsson",
  "Learn",
  "Literary Fiction",
  "Make",
  "Manage",
  "Marquez",
  "Money",
  "Mystery",
  "Negotiate",
  "Painting",
  "Philosophy",
  "Photography",
  "Poetry",
  "Production",
  "Programming",
  "React",
  "Redux",
  "River",
  "Robotics",
  "Rowling",
  "Satire",
  "Science Fiction",
  "Shakespeare",
  "Singh",
  "Swimming",
  "Tale",
  "Thrun",
  "Time",
  "Tolstoy",
  "Travel",
  "Ultimate",
  "Virtual Reality",
  "Web Development",
  "iOS",
];

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  useEffect(() => {
    const searchBooks = async () => {
      const res = await ContactsAPI.search(query);
      // Handleling invalid queries that return undefined responses
      if (!res)
        return setError(() => ({
          error: true,
          message: "Invalid query, please try with another search term.",
        }));

      // Handleling API errors
      if (res?.error) {
        if (res.error === "empty query") {
          return setError(() => {
            return {
              error: true,
              message: `There are no results found for that query.`,
            };
          });
        } else {
          return setError(() => {
            return {
              error: true,
              message: `It has been an error. ${res.error}`,
            };
          });
        }
      }

      setResults(res);
      setError(() => {
        return {
          error: false,
          message: "",
        };
      });
    };
    if (query === "") return;
    searchBooks();
  }, [query]);

  const showingResults =
    query === ""
      ? []
      : results.filter((c) =>
          c.title.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showingResults.map((book) => (
            <Book bookInfo={book} key={book.id} />
          ))}
        </ol>
      </div>
      <div className="suggested-queries-container">
        {error.error && (
          <div>
            <h3>{error.message} Try with one of the following terms:</h3>
            <div className="suggested-queries-list">
              {validSearchTerms.map((term, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => setQuery(term)}
                    className="suggested-queries-el"
                  >
                    {term}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
