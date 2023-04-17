// Exercício 01
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'manga', 'abacaxi'];

const fruitSalad = (fruit, additional) => {
  newlist = [
    ...fruit,
    ...additional,
  ];

  return newlist;
}

console.log(fruitSalad(specialFruit, additionalItens));

// Exercício 02


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const personalAndProfessional = {
  ...user,
  ...jobInfos,
}

const { name, age, nationality, profession, squad, squadInitials } = personalAndProfessional

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squade is ${squad}.`)