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
  if (input.value.trim() === "") {
    input.classList.add("is-invalid");
    return false;
  } else {
    input.classList.remove("is-invalid");
    return true;
  }
};
