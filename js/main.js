const modalButton = document.querySelector(".modal__button");
const loginButtonMobile = document.querySelector(".login__button-mobile");
const loginButtonDesktop = document.querySelector(".login__button");
const loginPopup = document.querySelector(".login__popup");
const loginForm = document.querySelector(".login__form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

modalButton.addEventListener("click", () => {
  loginPopup.style.display = "block";
});

loginButtonDesktop.addEventListener("click", () => {
  loginPopup.style.display = "block";
});

loginButtonMobile.addEventListener("click", () => {
  loginPopup.style.display = "block";
});

loginPopup.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("popup__close") ||
    event.target.classList.contains("login__button")
  ) {
    loginPopup.style.display = "none";
  }
});

loginForm.addEventListener("submit", (event) => {
  if (usernameInput.value.trim() === "") {
    event.preventDefault();
    usernameInput.classList.add("form__input--invalid");
    usernameError.classList.add("login__error--visible");
  } else {
    usernameInput.classList.remove("form__input--invalid");
    usernameError.classList.remove("login__error--visible");
  }

  if (passwordInput.value.trim() === "") {
    event.preventDefault();
    passwordInput.classList.add("form__input--invalid");
    passwordError.classList.add("login__error--visible");
  } else {
    passwordInput.classList.remove("form__input--invalid");
    passwordError.classList.remove("login__error--visible");
  }
});

usernameInput.addEventListener("input", () => {
  usernameInput.classList.remove("form__input--invalid");
  usernameError.classList.remove("login__error--visible");
});
