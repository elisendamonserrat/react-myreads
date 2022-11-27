import React from "react";
import { Link } from "react-router-dom";
import { Title } from "../components/Title";
import { useLocation } from "react-router-dom";
import {
  bookShelfOptions,
  checkAuthorsDetails,
  checkThumbnailImg,
} from "../utils";

const BookDetail = () => {
  let location = useLocation();
  const {
    state: { book },
  } = location;
  console.log(book);
  return (
    <div className="list-books">
      <Title title={"Book Information Page"} />
      <div className="wrapper">
        <div>
          <Link to="/">
            <div className="nav-link">
              <span className="close-search"></span> <span>Homepage</span>
            </div>
          </Link>
        </div>
        <div className="book-details-container">
          <div className="book-details-container-img">
            <div
              className="book-cover"
              style={{
                width: 250,
                height: 350,
                backgroundImage: `url(${checkThumbnailImg(book.imageLinks)})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                position: 'relative',
              }}
            >
              <div className="book-shelf-changer book-shelf-changer--bg">
                <select value={"none"} onChange={() => {}}>
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
          </div>
          <div className="book-details-container-info">
            <h2
              style={{
                marginTop: "unset",
              }}
            >
              {book.title}
            </h2>
            <p>{book.description}</p>
            <h3
              style={{
                color: "#999",
              }}
            >
              Authors: {checkAuthorsDetails(book.authors)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
