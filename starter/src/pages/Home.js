import React from "react";
import Bookshelf from "../components/Bookshelf";
import { Title } from "../components/Title";

const Home = () => {
  return (
    <div className="list-books">
      <Title title={"My Reads"} />
      <div className="list-books-content">
        <div>
          <Bookshelf books={[]} shelfType={"Currently reading"} />
          <Bookshelf books={[]} shelfType={"Want to Read"} />
          <Bookshelf books={[]} shelfType={"Read"} />
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => {}}>Add a book</a>
      </div>
    </div>
  );
};

export default Home;
