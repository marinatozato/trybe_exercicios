let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

/*   console.log('O livro favorito de Julia Pessoa se chama ' + leitor.livrosFavoritos[0].titulo); */


let newBook = {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
}

leitor.livrosFavoritos.push(newBook)
/* 
console.log(leitor); */

for (let index in leitor.livrosFavoritos) {
    console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');
}