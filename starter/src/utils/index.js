import NoBookCover from "../images/no-cover.gif";

export const bookShelfOptions = [
  { text: "Currently reading", value: "currentlyReading" },
  { text: "Want to Read", value: "wantToRead" },
  { text: "Read", value: "read" },
  { text: "None", value: "none" },
];

// Checking if the user has the searched books in its shelfs and, if so, in which one
export const checkBookInShelf = (bookFound, userBooks) => {
  const bookInUsersList = userBooks.filter((book) => book.id === bookFound.id);
  return !bookInUsersList.length ? "none" : bookInUsersList[0].shelf;
};

// Checking if a book has authors info or not
export const checkAuthorsDetails = (authorsArr) => {
  return !authorsArr ? "Unknown author" : authorsArr.map((author) => author);
};

// Checking if a book has thumbnail or not
export const checkThumbnailImg = (imgArr) => {
  return imgArr?.thumbnail ? imgArr.thumbnail : NoBookCover;
};

// Filters each book depending on the shelf they are in
export const filterBooksByShelf = (shelf, userBooks) =>
  userBooks.filter((book) => book.shelf === shelf);
