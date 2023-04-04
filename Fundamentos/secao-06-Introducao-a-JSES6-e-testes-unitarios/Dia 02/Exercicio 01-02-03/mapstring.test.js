const { default: expect } = require('expect');
const { encode, decode } = require('./mapstring');

describe('Testar as funções encode e decode', () => {
  it('Teste se decode é função', () => {
    expect(typeof decode).toBe('function')
  });

  it('Teste se encode é função', () => {
    expect(typeof encode).toBe('function');
  });

  it('Teste se a vogal a é convertida em 1 respectivamente', () => {
    expect(encode('marina')).toEqual('m1r3n1');
  });

  it('Teste se a vogal e é convertida em 2 respectivamente', () => {
    expect(encode('eva')).toEqual('2v1');
  });

  it('Teste se as vogais i, o, u são convertidas em 3, 4, 5 respectivamente', () => {
    expect(encode('imundo')).toEqual('3m5nd4');
  });

});