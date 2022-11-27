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
      // Check if the book is already in the userBooks arr, if not add the shelf property to the obj
      const isTheBookInShelf = userBooks.some(
        (userBook) => userBook.id === book.id
      );
      if (isTheBookInShelf) {
        let updateCurrentUserBooks = [...userBooks].map((el) =>
          el.id === book.id ? { ...el, shelf: shelf } : el
        );
        setUserBooks(updateCurrentUserBooks);
      } else {
        const newBook = { ...book, shelf: shelf };
        setUserBooks((prev) => [...prev, newBook]);
      }
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
      <Route
        path="/search"
        element={
          <SearchPage
            userBooks={userBooks}
            updateUserBooks={handleUpdateUserBooks}
          />
        }
      />
    </Routes>
  );
}

export default App;
