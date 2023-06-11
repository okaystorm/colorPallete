import { cols } from "./cols.js";

// const promptingIcons = document.querySelectorAll(".prompting-icon");
const promptingButtons = document.querySelectorAll(".prompting-button");

const addCopyEvent = (tooltip, col) => {
  tooltip.addEventListener("click", () => {
    const prompt = document.createElement("p");
    prompt.textContent = "Copied!";
    prompt.classList.add("copied");

    col.append(prompt);
    setTimeout((_) => prompt.remove(), 800);
  });
};

for (let i = 0; i < promptingButtons.length; i++) {
  addCopyEvent(promptingButtons[i], cols[i]);
}
