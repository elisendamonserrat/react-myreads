import React from "react";
import { Link } from "react-router-dom";
import { Title } from "../components/Title";
import { useLocation } from "react-router-dom";
import { checkAuthorsDetails, checkThumbnailImg } from "../utils";

const BookDetail = () => {
  let location = useLocation();
  const {
    state: { book },
  } = location;

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
                position: "relative",
              }}
            ></div>
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
