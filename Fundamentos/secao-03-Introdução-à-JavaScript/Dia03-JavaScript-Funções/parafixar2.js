/* Faça um programa para adicionar clientes ao array de clientes do TrybeBank.
 Certifique-se de que a função deve receber um parâmetro do tipo string e 
 imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.
 */


function adicionaClientes(cliente) {
    let clientesTrybeBank = ['Ada', 'John', 'Gus'];
    
        if (typeof cliente === 'string') {
            clientesTrybeBank.push(cliente)
                return clientesTrybeBank 
        } else {
            return "Erro"
        }

}
console.log(adicionaClientes('Marina')); 


