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
      const res = await ContactsAPI.getAll();
      setUserBooks(res);
      setStatus("loaded");
    };

    getBooks();
  }, []);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home status={status} userBooks={userBooks} />}
      />
      <Route path="/search" element={<SearchPage userBooks={userBooks} />} />
    </Routes>
  );
}

export default App;
