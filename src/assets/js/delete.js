import { getBooks } from "./dashboard";
import { fetchOptions } from "./service";

export const deleteBook = async (id) => {
  await fetch(`${fetchOptions.queryString}/delete/${id}`, {
    method: "DELETE",
    headers: fetchOptions.headers,
  });

  getBooks();
};
