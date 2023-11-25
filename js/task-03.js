const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    const textValue = event.currentTarget.value.trim();
    if (textValue === '' || textValue === ' ') {
    nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = textValue; 
    }
})  