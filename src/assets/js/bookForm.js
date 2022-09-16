import { validate } from "./utils";

const modal = document.querySelector(".modal");
const name = modal.querySelector("#bookNameInput");
const author = modal.querySelector("#authorInput");
const publishHouse = modal.querySelector("#publishHouseInput");
const publishYear = modal.querySelector("#publishYearInput");
const pagesNumber = modal.querySelector("#pagesNumberInput");
const genres = modal.querySelector("#genresInput");
const originalLanguage = modal.querySelector("#originalLanguageInput");
const isFavorite = modal.querySelector("#isFavoriteInput");

export const bookForm = () => {
  if (validate(name) && validate(author)) {
    const book = {
      name: name.value,
      author: author.value,
      isFavorite: isFavorite.checked,
      publishYear: publishYear.value || "",
      publishHouse: publishHouse.value || "",
      pagesNumber: pagesNumber.value || "",
      genres: genres.value || [],
      originalLanguage: originalLanguage.value || "",
    };

    // console.log(book);
    return book;
  }
};
