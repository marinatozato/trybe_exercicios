let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  /* Crie uma função para adicionar o turno da noite na lesson2. 
  Essa função deve ter três parâmetros: o objeto a ser modificado, 
  a chave a ser adicionada e o valor dela. */


  function adicionaTurno (obj) {
    obj.turno = 'noite'
    return obj
  }

  console.log(adicionaTurno(lesson2));

/* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
  
function listaKeys (objeto){
    return Object.keys(objeto);
  }

  console.log(listaKeys(lesson1));

/* Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro. */
 
function tamanhoObjeto (objeto) {
    return Object.keys(objeto).length
}

console.log(tamanhoObjeto(lesson3));

/* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */

function valoresObjeto (objeto) {
    return Object.values(objeto)
}
console.log(valoresObjeto(lesson1));

/* Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign.
 Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas 
 lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
 */

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});

console.log(allLessons);

/* Com base no objeto elaborado no tópico anterior,
crie uma função que retorne o número total de estudantes em todas as aulas. */


function totalEstudantes (objeto) {
    Object.values(allLessons.lesson1.numeroEstudantes)
    Object.values(allLessons.lesson2.numeroEstudantes)
    Object.values(allLessons.lesson3.numeroEstudantes)

    return (allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes)
}

console.log(totalEstudantes(allLessons));

/* Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. Por exemplo:*/

function getValueByNumber (objeto, numero){
   return Object.values(objeto)[numero];
}

console.log(getValueByNumber(lesson1, 0));

/* Crie uma função que verifique se o par chave/valor existe na função. 
Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. Por exemplo:
 */

function verifyPair (objeto, chave, valor){
   let keys = Object.keys(objeto)
   let values = Object.values(objeto)
   
   for (let index = 0; index < keys.length; index += 1){
    if (keys[index] === chave && values[index] === valor){
        return true
    }
   } 
   return false
}
console.log(verifyPair(lesson1, 'materia', 'Maria Clara'));