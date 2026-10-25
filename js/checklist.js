// Liste de bons réflexes avec barre de progression
const list = document.querySelector("[data-checklist]");
const boxes = list.querySelectorAll('input[type="checkbox"]');
const done = document.querySelector("[data-done]");
const bar = document.querySelector(".bar span");

const update = () => {
    const count = [...boxes].filter((box) => box.checked).length;
    done.textContent = count;
    bar.style.width = `${(count / boxes.length) * 100}%`;
};

boxes.forEach((box) => box.addEventListener("change", update));
update();
