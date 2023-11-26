// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const inputText = document.querySelector('#font-size-control');

const textSize = document.querySelector('#text');

const lineSize = inputText.value;

textSize.style.fontSize = `${lineSize}px`;
inputText.addEventListener('input', () => {
    const number = inputText.value;
    textSize.style.fontSize = `${number}px`;

})




