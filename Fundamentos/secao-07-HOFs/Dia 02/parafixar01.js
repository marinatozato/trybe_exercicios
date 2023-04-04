const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui

people.sort((a, b) => a.age - b.age); /* Ordem crescente */
/* people.sort((a, b) => b.age - a.age); Ordem decrescente */ 
console.log(people);


const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];


const productsAndPrices = (listproducts, listprices) => listproducts.map((product, index) => (
  { [product]: listprices[index] }
));

console.log(productsAndPrices);

/* As principais diferenças são:

O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;

O forEach não tem retorno, ele é genérico e pode fazer diversas coisas, como executar uma função para cada elemento do array, modificar o array, atribuir valores a variáveis ou objetos, etc. */

