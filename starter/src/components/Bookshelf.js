import React from "react";
import Book from "./Book";

const Bookshelf = ({ shelfType, bookList }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfType}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book bookInfo={{}} />
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
