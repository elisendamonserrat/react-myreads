# MyReads Project

MyReads is a book tracking APP that allows the user to keep track of the books he/she is currently reading, wants to read or has read. It also allows the user to find new books and know about each book's detail (author, information, etc.).

## Install Project

To download and install the project in your IDE and Code Editor, follow the following steps:

    $ git clone https://github.com/elisendamonserrat/react-myreads.git
    $ cd starter
    $ npm install
    $ npm start

You can also install the project dependencies with `pnpm install` or `yarn`.

To launch the project run the following command $ npm start

## Features

1. Saved books in different shelfs: read, want to read and currently reading
2. Search for new books by its title, author(s) or ISBN
3. Get suggested search terms to find a new books
4. See each book information detail
5. Get suggested search terms to find a new books
6. User book selection persist between page refreshes

## File Structure

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── data # Whitelisted short collection of available search terms for the searchbar feature
    │   ├── index.js
    ├── hooks # Folder storing the custom hooks created
    │    ├── useDebounce.js
    ├── components # Reusable and generic components that are used in different views/pages
    │    ├── Book.js
    │    ├── BooksGridContainer.js
    │    ├── Bookshelf.js
    │    ├── LoadingSpinner.js
    │    ├── SearchInput.js
    │    ├── SuggestedSearchTerms.js
    │    ├── Title.js
    ├── pages # Main views/pages of the APP
    │    ├── Book.js
    │    ├── BooksGridContainer.js
    │    ├── Bookshelf.js
    ├── utils # Generic and reusable functions
    │    ├── index.js
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [data/index.js](data/index.js). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
