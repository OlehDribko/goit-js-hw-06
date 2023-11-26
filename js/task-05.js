// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputText = document.querySelector("#name-input");


const textoutput = document.querySelector("#name-output");


inputText.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();
    
    if (inputValue !== "") {
        textoutput.textContent = inputValue;
    } else {
        textoutput.textContent = "Anonymous";
    }
});