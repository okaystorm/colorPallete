import { cols } from "./cols.js";

const copyText = (text) => {
  return navigator.clipboard.writeText(text);
};

document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;

  if (type === "lock") {
    const node =
      event.target.tagName.toLowerCase() === "i"
        ? event.target
        : event.target.children[0];

    node.classList.toggle("fa-unlock");
    node.classList.toggle("fa-lock");
  } else if (type === "copy1") {
    copyText(cols[0].children[0].textContent.trim());
  } else if (type === "copy2") {
    copyText(cols[1].children[0].textContent.trim());
  } else if (type === "copy3") {
    copyText(cols[2].children[0].textContent.trim());
  } else if (type === "copy4") {
    copyText(cols[3].children[0].textContent.trim());
  } else if (type === "copy5") {
    copyText(cols[4].children[0].textContent.trim());
  }
});

export { copyText };
