let inputPassword = document.getElementById("password");
let eyePasswordOpen = document.getElementById("eye-open");
let eyePasswordClosed = document.getElementById("eye-closed");

eyePasswordOpen.addEventListener("click", () => {
  inputPassword.type = "text"
  eyePasswordOpen.style.display = "none";
  eyePasswordClosed.style.display = "block";
});
eyePasswordClosed.addEventListener("click", () => {
    inputPassword.type = "password"
  eyePasswordOpen.style.display = "block";
  eyePasswordClosed.style.display = "none";
});
