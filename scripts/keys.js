import { setRandomColor } from "./cols.js";

const refreshByButton = () => {
  const section = document.querySelector(".switch-panels");
  const startDiv = document.querySelector(".start-screen");

  section.classList.remove("invisible");
  section.classList.add("visible");
  section.classList.add("animation");

  startDiv.classList.add("animation2");

  document.querySelector(".nav__header").classList.remove("yellow-text");
  document.querySelector(".bottom-header").classList.remove("yellow-text");

  setRandomColor();
  setTimeout(
    "document.querySelector('.prompt').classList.add('animation2')",
    6500
  );
};

// Закрытие подсказки на крестик
const promptClosedButton = document.querySelector(".fa-circle-xmark");
promptClosedButton.addEventListener("click", () => {
  document.querySelector(".prompt").classList.add("animation2");
});

// Обновление на Enter
document.addEventListener("keydown", (event) => {
  if (event.code.toLowerCase() === "enter") {
    refreshByButton();
  }
});

// Обновление на Ctrl + mouse1
document.addEventListener("mouseup", (event) => {
  if (event.button === 0 && event.ctrlKey) {
    refreshByButton();
  }
});

export { refreshByButton };
