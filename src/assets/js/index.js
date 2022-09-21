import "../scss/main.scss";
import "./login";
import "./signup";

let token = localStorage.getItem('token');
if (token) window.location.href = '/dashboard.html'

const signupLink = login.querySelector(".signup-link");
const loginLink = signup.querySelector(".login-link");

const toggleViews = (blockToShow, blockToHide) => {
  blockToShow.style.display = "block";
  blockToHide.style.display = "none";
  blockToHide.querySelectorAll("input").forEach((input) => clear(input));
  const message = blockToHide.querySelector(".error-message");
  message.style.display = "none";
};

const clear = (input) => {
  input.value = "";
};

signupLink.addEventListener("click", () => toggleViews(signup, login));
loginLink.addEventListener("click", () => toggleViews(login, signup));
