import { bookForm } from "./bookForm";
import { bookModal, getBooks } from "./dashboard";
import { fetchOptions } from "./service";
import { modalTitle, submitBookButton } from "./tag-variables";

export const createBook = () => {
  modalTitle.textContent = "Add new book";
  submitBookButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const book = bookForm();

    if (book) {
      await fetch(fetchOptions.queryString + "/create", {
        method: "POST",
        headers: fetchOptions.headers,
        body: JSON.stringify(book),
      });
      getBooks();
      bookModal.hide();
    }
  });
};
