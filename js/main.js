// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav.menu");

toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
});

// Apparition douce des blocs au défilement
const blocks = document.querySelectorAll(".story, .timeline li, .team article, .payment, .store, .contener1, .contener2, .contener3, .services, .contact-section, .stats, .reassurance div, .tile, .booking, .quiz, .tabs, .values article, .model, .steps li, .why .cards article, .testimonials blockquote, .faq details, .cta-band");

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

// En-tête réduit et bouton « retour en haut » au défilement
const header = document.querySelector("header");
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
    backToTop.classList.toggle("show", window.scrollY > 600);
}, { passive: true });

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Compteurs animés
const counters = document.querySelectorAll("[data-count]");

if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const end = Number(el.dataset.count);
            const start = performance.now();
            const duration = 1400;

            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                el.textContent = Math.round(end * (1 - Math.pow(1 - progress, 3)));
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            counterObserver.unobserve(el);
        });
    }, { threshold: 0.6 });

    counters.forEach((el) => counterObserver.observe(el));
} else {
    counters.forEach((el) => { el.textContent = el.dataset.count; });
}
