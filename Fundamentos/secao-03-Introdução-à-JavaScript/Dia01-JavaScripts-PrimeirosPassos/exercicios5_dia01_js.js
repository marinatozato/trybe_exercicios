let angulo1 = 100;
let angulo2= 100;
let angulo3 = 10;

let somaDosAngulos = angulo1 + angulo2 + angulo3;

let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {

    if (somaDosAngulos === 180) {
        console.log("True");
    } else {
    console.log("true");
    };
}
else {
    console.log("Erro")
}