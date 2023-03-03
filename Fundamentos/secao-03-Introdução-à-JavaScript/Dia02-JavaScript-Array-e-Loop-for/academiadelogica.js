/* let numero = [1, 2, 3, 4, 5, 6, 7, 8];
let valor = 10;

let resultado;

for(let index = 0; index <= numero.length; index += 1) {
    if (valor === numero[index]) {
        resultado = numero[index]
    }
} 

if (resultado) {
    console.log(resultado)
} else {
    console.log ("Elemento não encontrado no array")
}
 */


/* --------------------------------------------------- */

/* 2. Retorne os números ímpares
Primeiramente divida seu problema em partes e só depois disso comece a codar.

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:

"x, y, z, ...n" */



let numbers = [];

for (let index = 0; index < 50; index += 1) {
    let randomNumber = Math.ceil(Math.random() * 50)
    if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber)
    } else {
        index -= 1
    }
}

let oddNumber = [];

if (numbers % 2 !== 0) {
    oddNumber += oddNumber.push(numbers)
}

console.log(oddNumber);


