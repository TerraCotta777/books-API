import { getBooks } from "./dashboard";
import { fetchOptions } from "./service";
import { isFavorite } from "./tag-variables";

export const fave = (id, isFavorite) => {
  fetch(fetchOptions.queryString + `/update/${id}`, {
    method: "PUT",
    headers: fetchOptions.headers,
    body: JSON.stringify({ isFavorite: !isFavorite }),
  });
  getBooks();
};
