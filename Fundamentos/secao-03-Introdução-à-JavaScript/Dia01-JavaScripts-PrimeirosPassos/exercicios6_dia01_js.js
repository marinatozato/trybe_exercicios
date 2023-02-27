let nomeDaPeça =  'Peao';

switch (nomeDaPeça.toLowerCase()) {
    case 'cavalo':

        console.log("O cavalo realiza movimentos em “L” (duas casas em um sentido e uma casa em sentido perpendicular àquele), para qualquer direção");

        break;

    case 'peao':

        console.log("Os peões são apenas permitidos movimentos frontais, de modo que o primeiro movimento de cada peão pode abranger duas casas, os outros movimentos se restringem a uma casa à frente. Embora se movimente para frente, o ataque do peão sempre ocorre na diagonal");

        break;
    
    case 'bispo':

        console.log("O movimento do bispo ocorre, assim como no caso das torres, sem limitação de casas, porém apenas no sentido diagonal");

        break;
    case 'rainha':
        
        console.log("A rainha tem livre movimentação no jogo");

        break;
    case 'torre':
        
        console.log("A torre pode correr, sem restrições de número de casas, para frente/trás/direita/esquerda");

        break;
    case 'rei':

        console.log("O rei pode apenas ser movimentado de casa em casa, ainda que em qualquer direção do tabuleiro");

        break;
    default:    
        console.log("Peça inválida");
}