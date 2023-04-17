window.onload = () => {
    const options = document.querySelectorAll('.options button');
    const body = document.querySelector("body");

  const backGroundElement = document.getElementById("background-color").children;
  for (let index = 1; index < backGroundElement.length; index += 1) {
    backGroundElement[index].addEventListener("click", (event) => {
      body.style.background = event.target.innerHTML;
      localStorage.setItem('backgroundColor', event.target.innerHTML)
    });
  }
  body.style.backgroundColor = localStorage.getItem('backgroundColor')

  const fontColor = document.getElementById("font-color").children;
  for (let index = 1; index < fontColor.length; index += 1) {
    fontColor[index].addEventListener("click", (event) => {
      body.style.color = event.target.innerHTML;
    });
  }
  body.style.fontColor = localStorage.getItem('font-color')

  const fontSize = document.getElementById("font-size").children;
  for (let index = 1; index < fontSize.length; index += 1) {
    fontSize[index].addEventListener("click", (event) => {
      body.style.fontSize = event.target.innerHTML;
    });
  }
  body.style.fontSize = localStorage.getItem('font-size')

  const lineHeight= document.getElementById("line-height").children;
  for (let index = 1; index < lineHeight.length; index += 1) {
    lineHeight[index].addEventListener("click", (event) => {
      body.style.lineHeight = event.target.innerHTML;
    });
  }
    body.style.lineHeight = localStorage.getItem('line-heigh')

  const fontFamily= document.getElementById("font-family").children;
  for (let index = 1; index < fontFamily.length; index += 1) {
    fontFamily[index].addEventListener("click", (event) => {
      body.style.fontFamily = event.target.innerHTML;
    });
  }
  body.style.fontFamily = localStorage.getItem('font-family')
};
