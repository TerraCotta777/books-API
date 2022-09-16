export const deleteBook = (fetchOptions, getBooks, e) => {
  const id = e.target.parentElement.id;
  fetch(`${fetchOptions.queryString}/delete/${id}`, {
    method: "DELETE",
    headers: fetchOptions.headers,
  })
    .then((response) => response.json())
    .then(getBooks());
};
