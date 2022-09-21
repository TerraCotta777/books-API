import { authQueryString } from "./service";
import { validate } from "./utils";

const login = document.querySelector("#login");
const loginUsernameInput = login.querySelector("#username");
const loginPasswordInput = login.querySelector("#password");
const loginButton = login.querySelector("#loginButton");

const loginFunc = (data) => {
  if (data.token) {
    localStorage.setItem("user", JSON.stringify(data.data));
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } else {
    login.querySelector(".error-message").style.display = "block";
  }
};

const loginValidator = (e) => {
  e.preventDefault();
  let isValid = true;
  login
    .querySelectorAll("input")
    .forEach((input) => (isValid = isValid && validate(input)));
  if (isValid) {
    const user = {
      username: loginUsernameInput.value,
      password: loginPasswordInput.value,
    };
    fetch(`${authQueryString}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then(loginFunc);
  }
};

loginButton.addEventListener("click", loginValidator);
