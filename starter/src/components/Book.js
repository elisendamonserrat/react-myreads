import React from "react";
import PropTypes from "prop-types";

const Book = ({ bookInfo }) => {
  const { title, authors, imageLinks } = bookInfo;

  const authorsInfo = !authors
    ? "The book's are not known"
    : authors.map((author) => author);

  const thumbnailImg = imageLinks?.thumbnail
    ? imageLinks.thumbnail
    : "thumbnail";

  const checkBookShelf = (value) => (bookInfo.shelf === value ? true : false);
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
            <select value={bookInfo.shelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
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
};
