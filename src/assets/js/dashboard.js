import * as bootstrap from "bootstrap";

import "../scss/main.scss";
import { createFaveButton, createDeleteButton } from "./utils";
import { createBook } from "./create";
import { updateBook } from "./update";
import { deleteBook } from "./delete";

const logoutButton = document.querySelector("#logoutButton");
const createButton = document.querySelector("#createButton");
const booksDiv = document.querySelector(".dashboard__books");
logoutButton.addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
});

const fetchOptions = {
  queryString: "http://localhost:1717/books",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "X-Auth": localStorage.getItem("token"),
  },
};




const getBooks = () => {
  booksDiv.textContent = "";
  fetch(fetchOptions.queryString, {
    method: "GET",
    headers: fetchOptions.headers,
  })
    .then((response) => response.json())
    .then((books) => {
      books.forEach((book) => {
        const faveButton = createFaveButton(book.isFavorite, updateBook);
        const deleteButton = createDeleteButton((e) => deleteBook(fetchOptions, getBooks, e));
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("col-sm-12", "col-md-6", "col-lg-4", "mb-4");
        bookDiv.innerHTML = `<div id="${book.id}" class="card dashboard__card card-has-bg click-col">
						<div class="card-img-overlay d-flex flex-column">
							<div class="card-body d-flex flex-column justify-content-between">
								<h4 class="card-title mt-0">${book.name}</h4>
								<p>${book.author}</p>
							</div>
						</div>
					</div>`;
        bookDiv
          .querySelector(".dashboard__card")
          .append(faveButton, deleteButton);
        booksDiv.append(bookDiv);
      });
    });
};

getBooks();

createButton.addEventListener("click", () => {
  createBook(fetchOptions, getBooks);
});
