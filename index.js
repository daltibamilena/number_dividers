const { full_dividers_response } = require("./controller/DividersController");
const prompt = require("prompt-sync")();

const main = () => {
  let number = prompt("Digite um número inteiro: ");
  let { divisores, divisoresPrimos } = full_dividers_response(number);
  console.log(`Número de Entrada: ${number}\nNúmeros Divisores: ${divisores}\nDivisores Primos: ${divisoresPrimos}` );
};

main();
