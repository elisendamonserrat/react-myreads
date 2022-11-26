import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Bookshelf = ({ shelfType, bookList }) => {
  const bookShelf = [
    { name: "Currently reading", value: "currentlyReading" },
    { name: "Want to Read", value: "wantToRead" },
    { name: "Read", value: "read" },
    { name: "None", value: "none" },
  ];

  // Checking in which shelf is each book
  const checkShelfValue = bookShelf.filter((shelf) => shelf.name === shelfType);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfType}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {!bookList.length && <p>No books in this shelf</p>}
          {bookList.length > 0 &&
            bookList.map((book) => (
              <Book
                bookInfo={book}
                key={book.id}
                shelfTypeValue={checkShelfValue[0].value}
              />
            ))}
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
