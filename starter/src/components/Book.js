import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  bookShelfOptions,
  checkAuthorsDetails,
  checkThumbnailImg,
} from "../utils";

const Book = ({ bookInfo, shelfTypeValue, updateBookShelf }) => {
  const { title, authors, imageLinks, id } = bookInfo;

  let navigate = useNavigate();

  const goDetailsPage = () => {
    navigate(`/book/${id}`, { state: { book: bookInfo } });
  };

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
              backgroundImage: `url(${checkThumbnailImg(imageLinks)})`,
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
        <div className="book-authors">{checkAuthorsDetails(authors)}</div>
      </div>
      <button onClick={goDetailsPage} className="btn-default">More Info</button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  shelfTypeValue: PropTypes.string.isRequired,
};
