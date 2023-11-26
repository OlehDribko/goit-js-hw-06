// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const inputText = document.querySelector("#validation-input");

function ver (event) {
    
    const inputDataLength = Number(inputText.dataset.length);
    const inputValueLebgth = Number(inputText.value.trim().length);


    if (inputDataLength === inputValueLebgth) {
        inputText.classList.add("valid");
        inputText.classList.remove("invalid")
    } else {
        inputText.classList.add("invalid");
        inputText.classList.remove("valid");
}



}

inputText.addEventListener("blur", ver);

