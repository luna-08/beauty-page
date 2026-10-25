// Adresse qui reçoit les messages du formulaire : à remplacer par la vraie.
const CONTACT_EMAIL = "ton.email@example.com";

const form = document.getElementById("contactForm");
const status = document.getElementById("statusMessage");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const subject = data.get("subject");
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.textContent = "Votre application de messagerie s'ouvre : il ne reste qu'à envoyer le message.";
    form.reset();
});
