const { soma, subtracao, multiplicacao, divisao, potencia } = require("../src/calculadora");

describe("Calculadora", () => {
  test("deve somar dois números corretamente", () => {
    // Arrange (Preparação)
    const num1 = 2;
    const num2 = 3;

    // Act (Ação)
    const resultado = soma(num1, num2);

    // Assert (Verificação)
    expect(resultado).toBe(5);
  });
});

describe("Calculadora", () => {
  test("deve subtrair dois números corretamente", () => {
    const num1 = 5;
    const num2 = 3;

    const resultado = subtracao(num1, num2);

    expect(resultado).toBe(2);
  });
});

describe("Calculadora", () => {
  test("deve multiplicar dois números corretamente", () => {
    const num1 = 5;
    const num2 = 3;

    const resultado = multiplicacao(num1, num2);

    expect(resultado).toBe(15);
  });
});

describe("Calculadora", () => {
  test("divisao por zero deve retornar uma mensagem", () => {
    const num1 = 6;
    const num2 = 0;

    const resultado = divisao(num1, num2);

    expect(resultado).toBe("Não é possivel divisao por zero");
  });
});


describe("Calculadora", () => {
  test("deve dividir dois números corretamente", () => {
    const num1 = 6;
    const num2 = 3;

    const resultado = divisao(num1, num2);

    expect(resultado).toBe(2);
  });
});

describe("Calculadora", () => {
  test("deve calcular a potencia do numero base pelo expoente corretamente", () => {
    const num1 = 2;
    const num2 = 4;

    const resultado = potencia(num1, num2);

    expect(resultado).toBe(16);
  });
});

