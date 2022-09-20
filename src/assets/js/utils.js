export const createFaveButton = (isFave, func) => {
  const faveButton = document.createElement("button");
  faveButton.classList.add(
    "dashboard__fave",
    isFave ? "dashboard__fave_true" : "dashboard__fave_false"
  );
  faveButton.addEventListener("click", func);
  return faveButton;
};

export const createDeleteButton = (func) => {
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("dashboard__delete");
  deleteButton.addEventListener("click", func);
  return deleteButton;
};

export const validate = (input) => {
  if (
    input.dataset.name === "publishYear" &&
    input.value &&
    input.value.length !== 4
  ) {
    input.classList.add("is-invalid");
    return false;
  } else if (input.value.trim() === "" && input.dataset.name === "required") {
    input.classList.add("is-invalid");
    return false;
  } else {
    input.classList.remove("is-invalid");
    return true;
  }
};
