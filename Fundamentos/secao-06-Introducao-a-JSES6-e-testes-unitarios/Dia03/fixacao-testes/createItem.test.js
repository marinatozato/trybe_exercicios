const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    const expected = { name: 'morango', unit: 'kg', price: 10.99, quantity: 20 };
    const actual = createItem('morango', 'kg', 10.99, 20);
      expect(actual).toEqual(expected)
  });

  it('utiliza zero como quantidade padrão', () => {
    const qntExpected = 0;
    const actualNoQnt = createItem('morando', 'kg', 10.99)
    expect(actualNoQnt).toHaveProperty('quantity', qntExpected)
  });

  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();

  });

  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(10.99, 'kg', 'morango', 20)).toThrow('O nome do item deve ser uma string');
  });

  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('morango', 'kg', -0.01, 20)).toThrow('O preço do item deve ser maior que zero');
  });

  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('morango', 'kg', 0.00, 20)).toThrow('O preço do item deve ser maior que zero');
  });
  
});
