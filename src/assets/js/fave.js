import { getBooks } from "./dashboard";
import { fetchOptions } from "./service";

export const fave = (id, isFavorite, e) => {
  fetch(fetchOptions.queryString + `/update/${id}`, {
    method: "PUT",
    headers: fetchOptions.headers,
    body: JSON.stringify({ isFavorite: !isFavorite }),
  });
  getBooks();
};
