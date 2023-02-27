let numb1 = 1;
let numb2 = 1;
let numb3 = 30;

let n = 10;

let numeroPar = (numb1 % n === 0|| numb2 % n === 0|| numb3 % n === 0);

if (numeroPar) {
    console.log('True');
} else {
    console.log('False');
}