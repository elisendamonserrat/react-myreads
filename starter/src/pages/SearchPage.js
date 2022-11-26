import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ContactsAPI from "../BooksAPI";
import Book from "../components/Book";
import { SuggestedSearchTerms } from "../components/SuggestedSearchTerms";

const SearchPage = ({ userBooks }) => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  useEffect(() => {
    // Hanlder of the clean up function
    let isCancelled = false;

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
    if (!isCancelled) searchBooks();

    // Clean up function to abord API Calls
    return () => {
      isCancelled = true;
    };
  }, [query]);

  const showingResults =
    query === ""
      ? []
      : results.filter((c) =>
          c.title.toLowerCase().includes(query.toLowerCase())
        );

  const handleUpdateQuery = (term) => setQuery(term);

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
      {error.error && (
        <SuggestedSearchTerms
          message={error.message}
          updateQuery={handleUpdateQuery}
        />
      )}
    </div>
  );
};

export default SearchPage;
