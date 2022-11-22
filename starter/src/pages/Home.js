import React, { useState, useEffect } from "react";
import * as ContactsAPI from "../BooksAPI";
import Bookshelf from "../components/Bookshelf";
import { Title } from "../components/Title";

const Home = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const getBooks = async () => {
      const res = await ContactsAPI.getAll();
      setAllBooks(res);
      setStatus("loaded");
    };

    getBooks();
  }, []);
    
  const filterBooksByShelf = (shelf) =>
    allBooks.filter((book) => book.shelf === shelf);

  const readBooks = filterBooksByShelf("read");
  const currentBooks = filterBooksByShelf("currentlyReading");
  const wantToReadBooks = filterBooksByShelf("wantToRead");

  return (
    <div className="list-books">
      <Title title={"My Reads"} />
      <div className="list-books-content">
        <div>
          {status === "loading" && <p>Loading your books</p>}
          {status === "loaded" && (
            <>
              <Bookshelf
                bookList={currentBooks}
                shelfType={"Currently reading"}
              />
              <Bookshelf
                bookList={wantToReadBooks}
                shelfType={"Want to Read"}
              />
              <Bookshelf bookList={readBooks} shelfType={"Read"} />;
            </>
          )}
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => {}}>Add a book</a>
      </div>
    </div>
  );
};

export default Home;
