function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
  }
  imprimeIdade()


const pessoa = {
    nome: 'Henri',
    idade: 20
}

pessoa.name = 'Luna';
pessoa.idade = 19;

console.log(pessoa.name);
console.log(pessoa.idade);


/* 🚀 Modifique a variável para que não ocorra Erro.
Copie o código a seguir e rode-o para verificar sua saída. */

const favoriteFood = {
    comidaFavorita: 'Lasanha'
}   

favoriteFood.comidaFavorita = 'Hambúrguer';

console.log(favoriteFood.comidaFavorita);


const favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);


let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);


/* 🚀 Modifique as concatenações para template literals.

Copie o código a seguir. */

const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`)

let a = 3;
let b = 5;

function soma(a,b) {
  let resultado = a + b;
  return resultado;
}

console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a, b)}`)

/*  Modifique a estrutura das funções a seguir para que elas sejam arrow functions.

🚀 Transforme a função numeroAleatorio em uma arrow function.
Copie o código a seguir. */
function numeroAleatorio() {
    return Math.random()
  }
  console.log(numeroAleatorio());
/* --------- */
const numeroAleatorio = () => Math.random()
console.log(numeroAleatorio());

/* 🚀 Transforme a função hello em uma arrow function.
Copie o código a seguir. */

function hello(name) {
    return `Olá, ${name}!`
  }
  let name = 'Ivan';
  console.log(hello(name));

/* -------- */

let hello = name => `Olá, ${name}!`

let name = 'Ivan';
console.log(hello(name));

/* 🚀 Transforme a função nomeCompleto em uma arrow function.
Copie o código a seguir. */

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
  }
  let nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));

/* -------- */

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
console.log(nomeCompleto('Ivan', 'Pires'));

/*  Altere a expressão if/else utilizando ternary operator.

Copie o código a seguir. */

/* let speed = 90;
const speedCar = (speed) => {
  if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
  }
};
console.log(speedCar(speed)); */

/* --------- */
const speedCar = (speed) => (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
console.log(speedCar(180));




