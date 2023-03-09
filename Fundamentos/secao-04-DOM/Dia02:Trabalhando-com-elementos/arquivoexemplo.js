const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta').firstElementChild.nextElementSibling;

const pai = elementoOndeVoceEsta.parentElement

pai.style.color = 'red'

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild

primeiroFilhoDoFilho.innerText = "Meu primeiro exercício do dia 02 de DOM "

const primeiroFilho = pai.firstElementChild

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling

const elementoTexto = elementoOndeVoceEsta.nextSibling

const terceiroFilho = elementoTexto.nextSibling

const terceiroFilho2 = pai.nextSibling.nextSibling.nextSibling.nextSibling

const terceiroFilho3 = pai.lastElementChild.previousElementSibling