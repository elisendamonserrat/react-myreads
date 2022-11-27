import "./App.css";
import * as ContactsAPI from "../src/BooksAPI";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  const [userBooks, setUserBooks] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await ContactsAPI.getAll();
        setUserBooks(res);
        setStatus("loaded");
      } catch (error) {
        setStatus("error");
      }
    };

    getBooks();
  }, []);

  const handleUpdateUserBooks = async (book, shelf) => {
    try {
      // API Call to update the books in the BE
      const updateBooksBE = await ContactsAPI.update(book, shelf);

      // Updating the books in the FE and triggering re-render
      const updateUserBook = [...userBooks]
        .filter((listedBook) => listedBook.id === book.id)
        .map((book) => (book.shelf = shelf));
      setUserBooks((prev) => [...prev, updateUserBook]);
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home
            status={status}
            userBooks={userBooks}
            updateUserBooks={handleUpdateUserBooks}
          />
        }
      />
      <Route path="/search" element={<SearchPage userBooks={userBooks} />} />
    </Routes>
  );
}

export default App;
