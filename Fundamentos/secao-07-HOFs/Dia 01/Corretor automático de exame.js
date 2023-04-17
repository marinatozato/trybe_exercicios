const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const compareArrays = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } if (studentAnswers === 'N.A') {
  return 0;
  } 
  return -0.5;
}

const TotalPoints = (rightAnswers, studentAnswers, func) => {
  let sum = 0;
  for(let index = 0; index < rightAnswers.length; index += 1) {
    const funcReturn = func(rightAnswers[index], studentAnswers[index]);
    sum += funcReturn;
  }

  return `Resultado final: ${sum} pontos`;

}

console.log(TotalPoints(rightAnswers, studentAnswers, compareArrays));