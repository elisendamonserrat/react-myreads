import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";
import { Title } from "../components/Title";

const Home = ({ userBooks, status }) => {
  // Filters each book depending on the shelf they are in
  const filterBooksByShelf = (shelf) =>
    userBooks.filter((book) => book.shelf === shelf);

  // Every time that the state will render, the lists of books will be updated too - so there is no need to define them as state
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
        <Link to="/search"> Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
