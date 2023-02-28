/*let marina = 28;
let silva = 30;
let isa = 25;

if (marina > silva && marina > isa) {
    console.log('Marina é a pessoa mais velha e possui ' + marina + ' anos');
} else if (silva > marina && silva > isa) {
    console.log('Silva é a pessoa mais velha e possui ' + silva + ' anos');
} else if (isa > marina && isa > silva) {
    console.log('Isa é a pessoa mais velha e possui ' + isa + ' anos');
} 




/*let comida = 1;

if (comida == 1) {
    console.log('1 - Trybe Lanche Feliz');
} else if (comida == 2) {
    console.log('2 - McTrybe');
} else if (comida == 3) {
    console.log('3 - TrybeWooper');
} else if (comida == 4) {
    console.log('4 - X-Trybe');
}  else if (comida == 5) {
    console.log('5 - Triplo Trybe com JS');
} else {
    console.log('Ainda não possuímos esta opção :(');
}*/

let calculadora;
let age = 26;
let sex = 'M';
let weight = 69;
let height = 171;
 

if (sex == 'M') {
    calculadora = ((height * 6.25) + (weight * 9.99) - (age * 4.92) + 5);
    } else if (sex == 'F') {
    calculadora = ((height * 6.25) + (weight * 9.99) - (age * 4.92) - 161);
    };

    console.log('A taxa metabólica basal é: ' + calculadora + 'Kcal')