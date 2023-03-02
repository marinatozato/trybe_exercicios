/* Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e 
concatene as informações para imprimir no console uma mensagem no seguinte formato: 
“A jogadora Marta Silva tem 34 anos de idade”. */
let player = {

    playerName: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
    },
}

console.log('A jogadora ' + player['playerName'] + ' ' + player['lastName'] + ' ' + 'tem' + ' ' + player['age'] + ' ' + 'anos de idade');

/* Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um array que 
contenha as datas em que a jogadora Marta foi considerada a melhor do mundo. */

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player)

/* Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte formato: 
“A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”. */

console.log('A jogadora ' + player['playerName'] + ' ' + player['lastName'] + ' ' + 'foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' anos');

/* Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: 
“A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.
 */
