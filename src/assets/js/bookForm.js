import { author, isFavorite, name, pagesNumber, publishHouse, publishYear, genres, originalLanguage } from "./tag-variables";
import { validate } from "./utils";


export const bookForm = () => {
  let isValid = validate(name) && validate(author);
  isValid = isValid && validate(publishYear);

  if (isValid) {
    const book = {
      name: name.value,
      author: author.value,
      isFavorite: isFavorite.checked,
      publishYear: +publishYear.value || "",
      publishHouse: publishHouse.value || "",
      pagesNumber: +pagesNumber.value || "",
      genres: genres.value.split(/[, ]+/) || [],
      originalLanguage: originalLanguage.value || "",
    };

    return book;
  }
};
