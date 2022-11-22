import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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
