let inputPassword = document.getElementById("password");
let eyePasswordOpen = document.getElementById("eye-open");
let eyePasswordClosed = document.getElementById("eye-closed");
const form = document.querySelector("#form");

eyePasswordOpen.addEventListener("click", () => {
  inputPassword.type = "text";
  eyePasswordOpen.style.display = "none";
  eyePasswordClosed.style.display = "block";
});
eyePasswordClosed.addEventListener("click", () => {
  inputPassword.type = "password";
  eyePasswordOpen.style.display = "block";
  eyePasswordClosed.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const login = Object.fromEntries(formData.entries());
  const loginJson = JSON.stringify(login);
  console.log(loginJson);
  localStorage.setItem("login", loginJson);
});

function getName() {
  const nome = JSON.parse(localStorage.getItem("login"));
  console.log(nome);
}

getName();
