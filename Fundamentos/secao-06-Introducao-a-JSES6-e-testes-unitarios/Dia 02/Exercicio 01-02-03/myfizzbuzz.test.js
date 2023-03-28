const myFizzBuzz = require('./myfizzbuzz.js');

describe('Verifica a função myFizzBuzz', () => {
  it('Executar a função myFizzBuzz, sendo num um número divisível por 3 e 5, e verifique se é o retorno esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('Executar a função myFizzBuzz, sendo num um número divisível por 3, e verifique se é o retorno esperado', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });

  it('Executar a função myFizzBuzz, sendo num um número divisível por 5, e verifique se é o retorno esperado', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });

  it('Executar a função myFizzBuzz, sendo num um número que não é divisível por 3 e 5, e verifique se é o retorno esperado', () => {
    expect(myFizzBuzz(1)).toEqual(1);
  });

  it('Executar a função myFizzBuzz, sendo num um parâmetro que não é número, e verifique se é o retorno esperado', () => {
    expect(myFizzBuzz('a')).toEqual(false);
  });
});
