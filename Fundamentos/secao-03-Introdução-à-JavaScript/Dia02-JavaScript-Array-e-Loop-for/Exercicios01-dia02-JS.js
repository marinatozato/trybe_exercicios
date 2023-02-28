let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/* 

//Percorra o array imprimindo todos os valores contidos nele com a função console.log().// 


for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
} 

*/


/* 

//Some todos os valores contidos no array e imprima o resultado.// 

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}
console.log(soma);

*/

/* //Calcule e imprima a média aritmética dos valores contidos no array.

A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.//


let mediaAritimetica = 0;
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}

console.log(mediaAritimetica = soma / numbers.length);

*/

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

let mediaAritimetica = soma / numbers.length;

if (mediaAritimetica > 20) {
    console.log('Valor maior que 20');
} else {
    console.log("Valor menor ou igual a 20");
}

