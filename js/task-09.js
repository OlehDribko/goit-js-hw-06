const buttonChangeColor = document.querySelector ("button.change-color");
const spanColor = document.querySelector("span.color");
const body = document.body;
      function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
      }
buttonChangeColor.addEventListener('click', function () {
  body.style.backgroundColor=spanColor.textContent = getRandomHexColor();
});