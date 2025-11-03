const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector("#name-output");

userNameInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value;
    const trimmedValue = inputValue.trim();

    if (trimmedValue === '') {
        userNameOutput.textContent = 'Anonymous';
    } else {
        userNameOutput.textContent = trimmedValue;
    }
});