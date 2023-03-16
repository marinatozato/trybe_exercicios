const pai = document.getElementById('pai');

const criaIrmao = document.createElement('section')

criaIrmao.id = "terceiroFilhoPai";

pai.appendChild(criaIrmao);


const criaFilhoParaElementoOndeVoceEsta = document.createElement('section')

criaFilhoParaElementoOndeVoceEsta.id = "terceiroFilhoElementoOndeVoceEsta";

elementoOndeVoceEsta.appendChild(criaFilhoParaElementoOndeVoceEsta);


const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

const criaFilhoParaPrimeiroFilhoDoFilho = document.createElement('section');

criaFilhoParaPrimeiroFilhoDoFilho.id = 'primeiroFilho';

primeiroFilhoDoFilho.appendChild(criaFilhoParaPrimeiroFilhoDoFilho);

