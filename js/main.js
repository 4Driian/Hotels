document.addEventListener("DOMContentLoaded", () => {

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
    event.preventDefault(); // Prevenir el envío del formulario

    if (usernameInput.value.trim() === "") {
      usernameInput.classList.add("form__input--invalid");
      usernameError.classList.add("login__error--visible");
    } 

    if (passwordInput.value.trim() === "") {
      passwordInput.classList.add("form__input--invalid");
      passwordError.classList.add("login__error--visible");
    } 

    if (usernameInput.value.trim() !== "") {
      loginPopup.style.display = "none";
      const nombre = usernameInput.value.trim();
      document.querySelector(".user-welcome").textContent = `¡Hola ${nombre}!`;

      // Ocultar la imagen del usuario
      const userImage = document.querySelector(".user-image");
      userImage.style.display = "none";
    }
  });

  usernameInput.addEventListener("input", () => {
    usernameInput.classList.remove("form__input--invalid");
    usernameError.classList.remove("login__error--visible");
  });

  // Obtener el nombre del usuario almacenado en localStorage al cargar la página
  const nombreUsuario = localStorage.getItem("nombreUsuario");
  if (nombreUsuario) {
    document.querySelector(".user-welcome").textContent = `¡Hola ${nombreUsuario}!`;
    loginPopup.style.display = "none";
    const userImage = document.querySelector(".user-image");
    userImage.style.display = "none";
  }
});
