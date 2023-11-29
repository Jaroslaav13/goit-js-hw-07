const txtColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.body;
changeColorBtn.addEventListener('click', changeBackgroundColor)
function changeBackgroundColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  txtColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
