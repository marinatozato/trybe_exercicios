let custoProduto = 500;
let valorVenda = 800;
let custoTotalProduto = custoProduto + ((20 / 100) * custoProduto)

let qntProdutos = 1000;

const lucroProduto = valorVenda - custoTotalProduto


if (qntProdutos) {
    console.log(lucroProduto * qntProdutos);
} else {
    console.log('Entrada menor que zero');
}