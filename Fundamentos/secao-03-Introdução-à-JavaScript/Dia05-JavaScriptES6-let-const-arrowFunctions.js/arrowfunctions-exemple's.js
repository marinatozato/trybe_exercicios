/* Quando não há nada no corpo da função além do que será retornado, 
a sintaxe da arrow function permite simplificar ainda mais a função printName por meio 
da omissão do return e das chaves. */
const printName = () => 'Lucas';
console.log(printName());

/* Além disso, pode-se omitir os parênteses apenas em um cenário:
 quando a função recebe somente um argumento, como no exemplo a seguir. */
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

/* Em funções que recebem mais de um parâmetro, os parênteses não são omitidos. */

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

const contaPalavras = (frase) => frase.split(' ').length;
console.log(contaPalavras('Fala tribo, beleza?'));

/* Quando é um objeto precisa estar entre parentes ({})*/

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
console.log(objetoPessoa('Marina', 28));