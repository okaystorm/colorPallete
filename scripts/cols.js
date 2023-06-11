import { updateColorsHash } from "./hash.js";

const cols = document.querySelectorAll(".col");

const generateColor = () => {
  const hexCodes = "0123456789ABCDEF";
  let color = "";

  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
};

const setRandomColor = () => {
  const colors = [];

  cols.forEach((col) => {
    const isLocked = col.querySelector(".lock").classList.contains("fa-lock");
    const color = generateColor();
    const text = col.querySelector(".color-number");

    if (isLocked) {
      colors.push(text.textContent);
      return;
    }

    colors.push(color);

    text.textContent = color;
    col.style.background = color;
  });

  updateColorsHash(colors);
};

export { generateColor, setRandomColor, cols };
