import { bookForm } from "./bookForm";

const createBookButton = document.querySelector("#createBookButton");

export const createBook = (fetchOptions, getBooks) => {
  const createBookHandler = (e) => {
    e.preventDefault();
    const book = bookForm();

    if (book) {
      fetch(fetchOptions.queryString + "/create", {
        method: "POST",
        headers: fetchOptions.headers,
        body: JSON.stringify(book),
      })
        .then((response) => response.json())
        .then((message) => console.log(message));
      getBooks();
    }
  };
	
  createBookButton.addEventListener("click", createBookHandler);
};
