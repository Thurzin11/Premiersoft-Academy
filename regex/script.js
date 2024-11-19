// const texto = "Ontem faltou água, Anteontem faltou luz";
// const regex = /[a-z]/gi;
// const palavrasComR = texto.match(regex);
// console.log(palavrasComR);

const emailRegex = /^[\w-\.]+@gmail\.com$/;
const email = "example@gmail.com";
console.log(emailRegex.test(email));