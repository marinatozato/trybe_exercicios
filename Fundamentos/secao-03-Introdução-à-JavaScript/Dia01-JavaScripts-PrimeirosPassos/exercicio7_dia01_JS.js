let notaAluno = 87;


if (notaAluno) {
    if (notaAluno >= 90 && notaAluno <= 100) {
        console.log('A');
    } else if (notaAluno >= 80 && notaAluno <= 90) {
        console.log('B');
    } else if (notaAluno >= 70 && notaAluno <= 80) {
        console.log('C');
    } else if (notaAluno >=60 && notaAluno <= 70) {
        console.log('D');
    } else if (notaAluno >= 50 && notaAluno <=60) {
        console.log('E');
    } else if (notaAluno < 50) {
        console.log('F');
    } else {
        console.log('Código Inválido');
    }
};
