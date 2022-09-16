import { validate } from "./utils";

const signup = document.querySelector("#signup");
const signupNameInput = signup.querySelector("#nameInput");
const signupAgeInput = signup.querySelector("#ageInput");
const signupUsernameInput = signup.querySelector("#usernameInput")
const signupPasswordInput = signup.querySelector("#passwordInput");
const signupButton = document.querySelector("#signupButton");
const errorMessage = document.querySelectorAll(".error-message");

const signupFunc = (data) => {
  console.log(data);
  if (data.token) {
    localStorage.setItem("token", data.token);
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

  if (isValid) {
    const user = {
      username: signupUsernameInput.value,
      password: signupPasswordInput.value,
      age: signupAgeInput.value,
      firstName: signupNameInput.value,
    };
    console.log(user);
    fetch(`http://localhost:1717/signin`, {
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
