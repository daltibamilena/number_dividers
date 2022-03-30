import promptSync from "prompt-sync";
import fetch from "node-fetch";
const prompt = promptSync();

const fetchDividers = async (number) => {
  let body = { number: number };

  return await fetch("http://localhost:3000/dividers", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
};

const main = async () => {
  let number = prompt("Digite um número inteiro: ");
  let response = await fetchDividers(number);
  let { divisores, divisoresPrimos } = await response.json();

  console.log(
    `Número de Entrada: ${number}\nNúmeros Divisores: ${divisores}\nDivisores Primos: ${divisoresPrimos}`
  );
};

main();
