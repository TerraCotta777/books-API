import { bookForm } from "./bookForm";
import { bookModal, getBooks } from "./dashboard";
import { deleteBook } from "./delete";
import { fave } from "./fave";
import { fetchOptions } from "./service";
import {
  author,
  genres,
  isFavorite,
  modalTitle,
  name,
  originalLanguage,
  pagesNumber,
  publishHouse,
  publishYear,
  submitBookButton,
} from "./tag-variables";

export const getOneBook = async (id, e) => {
  e.preventDefault();
  const response = await fetch(fetchOptions.queryString + `/${id}`, {
    method: "GET",
    headers: fetchOptions.headers,
  });
  const book = await response.json();

  if (e.target.classList.contains("dashboard__delete")) {
    deleteBook(id);
  } else if (e.target.classList.contains("dashboard__fave")) {
    fave(id, book.isFavorite);
		
  } else {
    bookModal.show();
    modalTitle.textContent = "Book info";
    name.value = book.name;
    author.value = book.author;
    publishHouse.value = book.publishHouse || "";
    publishYear.value = book.publishYear || "";
    pagesNumber.value = book.pagesNumber || "";
    genres.value = book.genres.join(", ");
    originalLanguage.value = book.originalLanguage;
    if (book.isFavorite) isFavorite.checked = true;
    const my = async (e) => {
      e.preventDefault();
      const book = bookForm();

      if (book) {
        await fetch(fetchOptions.queryString + `/update/${id}`, {
          method: "PUT",
          headers: fetchOptions.headers,
          body: JSON.stringify(book),
        });
        getBooks();
        bookModal.hide();
      }
    };

    submitBookButton.addEventListener("click", my, { once: true });
  }
};
