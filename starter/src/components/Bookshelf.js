import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Bookshelf = ({ shelfType, bookList }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfType}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {!bookList.length && <p>No books in this shelf</p>}
          {bookList.length > 0 &&
            bookList.map((book) => <Book bookInfo={book} key={book.id} />)}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;

Bookshelf.propTypes = {
  bookList: PropTypes.array.isRequired,
  shelfType: PropTypes.string.isRequired,
};
