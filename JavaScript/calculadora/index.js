let display = document.getElementById("display");
let buttonReset = document.getElementById("reset");
const btns = document.querySelectorAll(".btns");
const btnsPai = document.querySelector(".btn-pai");

btnsPai.addEventListener("click", (event) => {
  const btn = event.target;

  if (btn.tagName == "BUTTON") {
    if (btn.value != "=") {
            display.value += btn.value;
            return;
          }
          let calculo = display.value.split(/([/*+-])/);
          let resultado = fazerCalculo(parseFloat(calculo[0]), calculo[1], parseFloat(calculo[2]));
          display.value = resultado;
  }
});

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (btn.value != "=") {
//       display.value += btn.value;
//       return;
//     }
//     let calculo = display.value.split(/([/*+-])/);
//     let resultado = fazerCalculo(calculo[0], calculo[1], calculo[2]);
//     display.value = resultado;
//   });
// });

let conta;

buttonReset.addEventListener("click", () => {
  display.value = "";
});

function adicionarNumeroConta(valor) {
  conta += valor;
}

function fazerCalculo(num1, op, num2) {
  switch (op) {
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    default:
      alert("Opcao invalida");
      break;
  }
}
