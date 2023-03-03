/* let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}


let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }
 */
  /* No exemplo acima, utilizamos o for/of para percorrer o iterável e retornar o valor dos elementos.

Agora que você já sabe a diferença entre eles e como usá-los, chegou o momento de praticar.

Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, 
substituindo o xxxxx pelo nome em questão. */


  let names = {
    person1: 'João',
    person2: 'Marina',
    person3: 'Jorge',
  };
  
  for (let name in names) {
    console.log('Olá', names[name]);
  }

  
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let index in car) {
    console.log(index, car[index]);
}