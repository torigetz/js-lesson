
const firstInput = document.querySelector('#first');
const secondInput = document.querySelector('#second');
const calcSubmit = document.getElementById('submit');

calcSubmit.onclick = function () {
    const first = parseInt(firstInput.value);
    const second = parseInt(secondInput.value);

    console.log(first)

    if (isNaN(first)) {
        alert('Введите в первое поле число');
        return;
    }

    if (isNaN(second)) {
        alert('Введите во второе поле число');
        return;
    }

    const result = first + second;

    alert(`Результат: ${result}`);
}