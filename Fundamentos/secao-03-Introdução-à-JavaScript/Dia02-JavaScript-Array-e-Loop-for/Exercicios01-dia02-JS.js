let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];




/* Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let oddNumber = 0;


for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
      oddNumber += 1
    }
}

if (oddNumber === 0) {
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log(oddNumber);
}   
 */



/* Utilizando for, descubra o maior valor contido no array e imprima-o.
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index]
    }
}
console.log(higherNumber); */

/* console.log(Math.max(...numbers)); */
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


/* Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”;
 e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

let mediaAritimetica = soma / numbers.length;

if (mediaAritimetica > 20) {
    console.log('Valor maior que 20');
} else {
    console.log("Valor menor ou igual a 20");
} */