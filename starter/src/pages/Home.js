import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";
import { Title } from "../components/Title";
import { filterBooksByShelf } from "../utils";

const Home = ({ userBooks, status, updateUserBooks }) => {
  // Every time that the state will render, the lists of books will be updated too - so there is no need to define them as state
  const readBooks = filterBooksByShelf("read", userBooks);
  const currentBooks = filterBooksByShelf("currentlyReading", userBooks);
  const wantToReadBooks = filterBooksByShelf("wantToRead", userBooks);

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
