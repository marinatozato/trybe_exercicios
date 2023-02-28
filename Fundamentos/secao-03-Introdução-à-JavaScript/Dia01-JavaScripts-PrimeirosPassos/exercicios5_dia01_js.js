let angulo1 = 10;
let angulo2=  90;
let angulo3 = 80;

let somaDosAngulos = angulo1 + angulo2 + angulo3;

let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {

    if (somaDosAngulos === 180) {
        console.log("True");
    } else {
        console.log("false");
    };
}
else {
    console.log("Erro, ângulo negativo")
}