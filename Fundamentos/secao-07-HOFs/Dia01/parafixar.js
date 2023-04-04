/* FOREACH */
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui

emailListInData.forEach((email) => console.log(`O e-mail ${email} está cadastrado em nosso banco de dados!`));

/* FIND */

/* Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista: */
const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

const verifyIf = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(verifyIf);

/* Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista: */

const names1 = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui

const verifyFirstNameWithFiveLetters = names1.find((name) => name.length === 5)

console.log(verifyFirstNameWithFiveLetters);

/* Utilize o find para encontrar a música com id igual a '31031685', caso ela exista: */

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Adicione seu código aqui

const findMusic = musicas.find((music) => music.id === '31031685');

console.log(findMusic);

/* ARRAY SOME */

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (array, name) => array.some((currentName) => currentName === name);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

/* ARRAY EVERY */

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (array, age) => array.every((actualAge) => actualAge.age >= age); 

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));