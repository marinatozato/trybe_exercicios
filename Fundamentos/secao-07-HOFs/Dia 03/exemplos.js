const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const filtro = dados.filter((item) => {
  // retorne apenas os elementos que são do tipo string
  return typeof item !== 'string';
});

console.log(filtro);


const listaNumeros = [10, 20, 30, 40];

// Armazena o resultado em uma nova variável maiorVinte
let maiorVinte = listaNumeros.filter((item) => {
  // retorne apenas os elementos que são maiores do que vinte
  return item > 20;
});

console.log(maiorVinte);

const numbers = [50, 85, -30, 3, 15];

const getHighestNumber =  (bigger, number) => ((bigger > number) ? bigger : number);

const highestNmber = numbers.reduce(getHighestNumber);

console.log(highestNmber);

