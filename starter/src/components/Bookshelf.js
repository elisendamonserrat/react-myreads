import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import { bookShelfOptions } from "../utils";
import { BooksGridContainer } from "./BooksGridContainer";

const Bookshelf = ({ shelfType, bookList, updateShelf }) => {
  // Checking in which shelf is each book
  const checkShelfValue = bookShelfOptions.filter(
    (shelf) => shelf.text === shelfType
  );

  const handleUpdateBookShelf = (book, shelf) => updateShelf(book, shelf);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfType}</h2>
      <div className="bookshelf-books">
        <BooksGridContainer>
          {!bookList.length && <p>No books in this shelf</p>}
          {bookList.length > 0 &&
            bookList.map((book) => (
              <Book
                bookInfo={book}
                key={book.id}
                shelfTypeValue={checkShelfValue[0].value}
                updateBookShelf={handleUpdateBookShelf}
              />
            ))}
        </BooksGridContainer>
      </div>
    </div>
  );
};

export default Bookshelf;

Bookshelf.propTypes = {
  bookList: PropTypes.array.isRequired,
  shelfType: PropTypes.string.isRequired,
};
