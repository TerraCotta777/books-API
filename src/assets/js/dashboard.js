import * as bootstrap from "bootstrap";

import "../scss/main.scss";
import { createFaveButton, createDeleteButton } from "./utils";
import { createBook } from "./create";
import { getOneBook } from "./update";
import { fetchOptions } from "./service";
import {
  createButton,
  logoutButton,
  modal,
  userNameHeader,
} from "./tag-variables";

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
});

document.addEventListener("wheel", () => {
  if (document.activeElement.type === "number") {
    document.activeElement.blur();
  }
});

modal.addEventListener("hidden.bs.modal", (event) => {
  modal.querySelectorAll("input").forEach((input) => (input.value = ""));
});

export const bookModal = bootstrap.Modal.getOrCreateInstance(modal);

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

userNameHeader.textContent = capitalizeFirstLetter(
  JSON.parse(localStorage.getItem("user")).firstName
);

export const getBooks = async () => {
  const booksDiv = document.querySelector(".dashboard__books");
  const response = await fetch(fetchOptions.queryString, {
    method: "GET",
    headers: fetchOptions.headers,
  });
  const books = await response.json();

  booksDiv.innerHTML = "";
  books.forEach((book) => {
    const faveButton = createFaveButton(book.isFavorite, (e) => {
      getOneBook(book.id, e);
      return false;
    });
    const deleteButton = createDeleteButton((e) => getOneBook(book.id, e));
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
    bookDiv.querySelector(".dashboard__card").append(faveButton, deleteButton);
    booksDiv.append(bookDiv);
    bookDiv.addEventListener("click", (e) => {
      getOneBook(book.id, e);
    });
  });
};

getBooks();

createButton.addEventListener("click", () => {
  createBook();
});
