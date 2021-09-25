
const firstInput = document.querySelector('#first');
const secondInput = document.querySelector('#second');
const calcSubmit = document.getElementById('submit');

const calcError = document.querySelector('#calcError');
const calcResult = document.querySelector('#calcResult');

function showError (text) {
    calcError.innerHTML = text;
}

function showResult (text) {
    calcResult.innerHTML = text;
}

function clear () {
    showError('');
    showResult('');
}

calcSubmit.onclick = function () {
    clear();

    const first = parseInt(firstInput.value);
    const second = parseInt(secondInput.value);

    console.log(first)

    if (isNaN(first)) {
        showError('Введите в первое поле число');
        return;
    }

    if (isNaN(second)) {
        showError('Введите во второе поле число');
        return;
    }

    const result = first + second;

    showResult(`Результат: ${result}`);
}