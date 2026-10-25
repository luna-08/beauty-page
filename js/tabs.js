// Onglets accessibles (clic et flèches du clavier)
document.querySelectorAll("[data-tabs]").forEach((root) => {
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const panels = [...root.querySelectorAll('[role="tabpanel"]')];

    const select = (index) => {
        tabs.forEach((tab, i) => {
            tab.setAttribute("aria-selected", i === index);
            tab.tabIndex = i === index ? 0 : -1;
        });
        panels.forEach((panel, i) => { panel.hidden = i !== index; });
    };

    tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => select(i));
        tab.addEventListener("keydown", (event) => {
            const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
            if (!step) return;
            const next = (i + step + tabs.length) % tabs.length;
            select(next);
            tabs[next].focus();
        });
    });

    select(0);
});
