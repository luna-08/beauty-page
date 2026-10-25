// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav.menu");

toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
});

// Apparition douce des blocs au défilement
const blocks = document.querySelectorAll(".contener1, .contener2, .contener3, .services, .contact-section");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    blocks.forEach((block) => {
        block.classList.add("reveal");
        observer.observe(block);
    });
}
