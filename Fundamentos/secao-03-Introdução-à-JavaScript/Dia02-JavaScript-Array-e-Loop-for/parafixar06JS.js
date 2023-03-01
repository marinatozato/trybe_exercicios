
/* let d1 = Math.ceil(Math.random() * 6);
console.log('resultado d1:', d1);
let d2 = Math.ceil(Math.random() * 6);

while (d1 !== d2) {
  d2 = Math.ceil(Math.random() * 6);
  console.log('resultado d2:', d2);
} */

/* Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, 
imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: “Valor menor que 16”: */

/* let fruits = [3, 4, 10, 1, 12];

let soma = 0;

for (let index = 0; index < fruits.length; index += 1) {
    soma += fruits[index];
}

if (soma > 15) {
    console.log(soma);
} else {
    console.log('Valor menor que 16');
} */

/* Exercício de Loteria na aula do dia 02_JS */
let loterryNumbers = [];
let firstGame = [9, 14, 56, 57, 59, 39];

for (let index = 0; index < 6; index += 1) {
    let randomNumber = Math.ceil((Math.random)() * 60);
    if(!loterryNumbers.includes(randomNumber)) {
        loterryNumbers.push(randomNumber);
    } else {
        index -= 1;
    }
        
}

/* console.log(loterryNumbers);
console.log(firstGame); */

/* Comparação do Sorteio com o meu jogo*/

let numberOfHits = 0;
let hits = [];

for (let indexloterry = 0; indexloterry < loterryNumbers.length; indexloterry += 1){
    for (let indexFirstGame = 0; indexFirstGame < firstGame.length; indexFirstGame += 1) {
        if (loterryNumbers[indexloterry] === firstGame[indexFirstGame]) {
            numberOfHits += 1;
            hits.push(loterryNumbers[indexloterry]);
        }
    }
} 
/*mostra os resultados*/
console.log('Números sorteados;', loterryNumbers);
console.log('Jogo;', firstGame);
console.log('Quantidade de acertos:', numberOfHits);
console.log('Número acertados', hits);
