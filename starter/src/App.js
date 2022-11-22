import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as ContactsAPI from "./BooksAPI";
import Home from "./pages/home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
