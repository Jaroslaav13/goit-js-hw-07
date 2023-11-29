function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const initialSize = 30;
  const boxes = [];
boxesContainer.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const newSize = initialSize + i * 10;
    const box = document.createElement('div');
    box.style.width = `${newSize}px`;
    box.style.height = `${newSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    console.log('Значення має бути в межах від 1 до 100');
  }
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes()
});