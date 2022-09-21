import { authQueryString } from "./service";
import { validate } from "./utils";

const signup = document.querySelector("#signup");
const signupNameInput = signup.querySelector("#nameInput");
const signupAgeInput = signup.querySelector("#ageInput");
const signupUsernameInput = signup.querySelector("#usernameInput");
const signupPasswordInput = signup.querySelector("#passwordInput");
const signupConfirmPasswordInput = signup.querySelector(
  "#passwordConfirmInput"
);
const signupButton = document.querySelector("#signupButton");

const signupFunc = (data) => {
  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.data));
    window.location.href = "dashboard.html";
  } else {
    signup.querySelector(".error-message").style.display = "block";
  }
};

const signupValidator = (e) => {
  e.preventDefault();
  let isValid = true;
  signup
    .querySelectorAll("input")
    .forEach((input) => (isValid = isValid && validate(input)));

  if (signupPasswordInput.value === signupConfirmPasswordInput.value) {
    isValid = true;
  } else isValid = false;
  if (isValid) {
    const user = {
      username: signupUsernameInput.value,
      password: signupPasswordInput.value,
      age: signupAgeInput.value,
      firstName: signupNameInput.value,
    };
    fetch(`${authQueryString}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then(signupFunc);
    return e;
  }
};

signupButton.addEventListener("click", signupValidator);
