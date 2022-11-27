import React from "react";
import PropTypes from "prop-types";
import { bookShelfOptions } from "../utils";

const Book = ({ bookInfo, shelfTypeValue, updateBookShelf }) => {
  const { title, authors, imageLinks } = bookInfo;

  const authorsInfo = !authors
    ? "The book's are not known"
    : authors.map((author) => author);

  const thumbnailImg = imageLinks?.thumbnail
    ? imageLinks.thumbnail
    : "thumbnail";

  const handleChange = (e) => {
    const shelf = e.target.value;
    updateBookShelf(bookInfo, shelf);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnailImg})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={shelfTypeValue} onChange={handleChange}>
              <option value="none" disabled>
                Move to...
              </option>
              {bookShelfOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authorsInfo}</div>
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  shelfTypeValue: PropTypes.string.isRequired,
};
