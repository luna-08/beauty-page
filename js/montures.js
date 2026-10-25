// Filtre par forme
const chips = document.querySelectorAll(".chip");
const models = document.querySelectorAll(".model");
const counter = document.querySelector("[data-count-models]");

chips.forEach((chip) => {
    chip.addEventListener("click", () => {
        chips.forEach((c) => c.setAttribute("aria-pressed", c === chip));

        let visible = 0;
        models.forEach((model) => {
            const show = chip.dataset.filter === "all" || model.dataset.shape === chip.dataset.filter;
            model.hidden = !show;
            if (show) visible++;
        });
        counter.textContent = visible;
    });
});
