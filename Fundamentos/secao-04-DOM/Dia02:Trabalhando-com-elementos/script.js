const body = document.getElementById('body');

const createH1 = document.createElement('h1');
createH1.innerHTML = 'TrybeTrip - Agência de Viagens';
createH1.className = 'title';
document.body.appendChild(creatH1);

const createMain = document.createElement('main');
createMain.className = 'main-content';
document.body.appendChild(createMain);

const createSection = document.createElement('section');
createSection.className = 'center-content';
createMain.appendChild(createSection);

const createParagraph = document.createElement('p');
createParagraph.innerHTML = 'Aqui você encontra os melhores preços de pacotes e passagens aéreas';
document.createSection.appendChild(createParagraph);

const createSection2 = document.createElement('section');
createSection2.className = 'left-content';
document.createMain.appendChild(createSection2);

const createSection3 = document.createElement('section');
createSection3.className = 'right-content';
document.createMain.appendChild(createSection3);

const createSmallImage = document.createElement('img');
createSmallImage.src = 'https://picsum.photos/200';
createSmallImage.className = 'small-image';
document.createSection2.appendChild(createSmallImage);

const createUList = document.createElement('ul')
createSection3.appendChild(createUList);

const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (let num in arrayNumbers) {
    const createLi = document.createElement('li');
    createLi.innerHTML = arrayNumbers[num];
    createUList.appendChild(createLi);
}

for (let index = 0; index < 3; index += 1){
    const createH3 = document.createElement('h3');
    createH3.innerHTML = 'Show ' + index;
    createH3.className = 'description';
    createMain.appendChild(createH3);
}

createMain.removeChild(createSection2);


