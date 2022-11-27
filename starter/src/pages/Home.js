import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";
import { Title } from "../components/Title";

const Home = ({ userBooks, status, updateUserBooks }) => {
  // Filters each book depending on the shelf they are in
  const filterBooksByShelf = (shelf) =>
    userBooks.filter((book) => book.shelf === shelf);

  // Every time that the state will render, the lists of books will be updated too - so there is no need to define them as state
  const readBooks = filterBooksByShelf("read");
  const currentBooks = filterBooksByShelf("currentlyReading");
  const wantToReadBooks = filterBooksByShelf("wantToRead");

  const handleUpdateBook = (book, shelf) => updateUserBooks(book, shelf);

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
                updateShelf={handleUpdateBook}
              />
              <Bookshelf
                bookList={wantToReadBooks}
                shelfType={"Want to Read"}
                updateShelf={handleUpdateBook}
              />
              <Bookshelf
                bookList={readBooks}
                shelfType={"Read"}
                updateShelf={handleUpdateBook}
              />
              ;
            </>
          )}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"> Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
