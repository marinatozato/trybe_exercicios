/* Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. 
Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, 
caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array. */


function excludeClients(client) {
    let clientesTrybeBank = ['Ada', 'John', 'Gus'];
    
        if (typeof client === 'string') {
            clientesTrybeBank.splice(clientesTrybeBank.indexOf(client), 1)
                return clientesTrybeBank 
        } else {
            return "Erro"
        }

}
console.log(excludeClients('John')); 