const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
};

const dividers = (number) => {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) arr.push(i);
  }
  return arr;
};

const full_dividers_response = (number) => {
  let divisores = dividers(number);
  let primeNumbers = divisores.filter(isPrime);
  return {
    numero: number,
    divisores: divisores,
    divisoresPrimos: primeNumbers,
  };
};

export { full_dividers_response };
