import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ContactsAPI from "../BooksAPI";
import Book from "../components/Book";
import { BooksGridContainer } from "../components/BooksGridContainer";
import SearchInput from "../components/SearchInput";
import { SuggestedSearchTerms } from "../components/SuggestedSearchTerms";
import { useDebounce } from "../hooks/useDebounce";

const defaultErrorState = {
  error: false,
  message: "",
};

const SearchPage = ({ userBooks, updateUserBooks }) => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const handleDebounce = useDebounce(query, 500);

  const fetchData = async (value) => {
    setError(defaultErrorState);
    try {
      setStatus('loading')
      const res = await ContactsAPI.search(value);
      setStatus("loaded");
      // Handleling invalid queries that return undefined responses
      if (!res) {
        setError(() => ({
          error: true,
          message: "Invalid query, please try with another search term.",
        }));
        setResults([]);
      }

      // Handleling API errors
      if (res?.error) {
        if (res.error === "empty query") {
          setError(() => {
            return {
              error: true,
              message: `There are no results found for that query.`,
            };
          });
          setResults([]);
        } else {
          setError(() => {
            return {
              error: true,
              message: `There has has been an error. ${res.error}`,
            };
          });
          setResults([]);
        }
      } else {
        setResults(res);
      }
    } catch (error) {
      setStatus("loaded");
      setResults([]);
      setError({
        error: true,
        message: error,
      });
    }
  };

  useEffect(() => {
    // Handler of the clean up function
    let isCancelled = false;

    // If the query is empty "" - we don't call the API but we reset results to [] and errors to their default state
    if (!handleDebounce) {
      setResults([]);
      setError(defaultErrorState);
    } else if (!isCancelled) {
      fetchData(handleDebounce);
    }
    // Clean up function to abord API Calls
    return () => {
      isCancelled = true;
    };
  }, [handleDebounce]);

  // Function that gets passed as a cb to SuggestedSearchTerms
  // and that updates the query state
  const handleUpdateQuery = (term) => setQuery(term);

  // Checking if the user has the searched books in its shelfs and, if so, in which one
  const checkBookInShelf = (bookFound) => {
    const bookInUsersList = userBooks.filter(
      (book) => book.id === bookFound.id
    );
    return !bookInUsersList.length ? "none" : bookInUsersList[0].shelf;
  };

  const handleUpdateShelf = (book, shelf) => {
    updateUserBooks(book, shelf);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <SearchInput
          query={query}
          placeholder={"Search by title, author, or ISBN"}
          updateQuery={handleUpdateQuery}
        />
      </div>
      <div className="search-books-results">
        <BooksGridContainer>
          {status === "loading" && <p>Is loading</p>}
          {status === "loaded" &&
            results.map((book) => (
              <Book
                bookInfo={book}
                key={book.id}
                shelfTypeValue={checkBookInShelf(book)}
                updateBookShelf={handleUpdateShelf}
              />
            ))}
        </BooksGridContainer>
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
