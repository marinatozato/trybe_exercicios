const randomNumber = () => Math.floor(Math.random() * 5);

const verifyNumber = (sortedNumber, callback) => sortedNumber === callback ? 'Parabéns, você ganhou' : 'Tente novamente';

console.log(verifyNumber(1, randomNumber));


console.log(randomNumber());