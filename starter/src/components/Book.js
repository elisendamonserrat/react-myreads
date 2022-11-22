import React from "react";

const Book = ({ bookInfo }) => {
  const {
    title,
    authors,
    imageLinks: { thumbnail },
  } = bookInfo;

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
              backgroundImage: `url(${thumbnail})`,
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
        <div className="book-authors">{authors.map((author) => author)}</div>
      </div>
    </li>
  );
};

export default Book;
