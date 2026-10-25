// Adresse qui reçoit les messages du formulaire : à remplacer par la vraie.
const CONTACT_EMAIL = "ton.email@example.com";

const form = document.getElementById("contactForm");

// Pré-remplissage depuis la réservation, une monture ou un test
const params = new URLSearchParams(window.location.search);
if (params.get("service")) {
    const date = params.get("date");
    const model = params.get("model");
    form.elements.subject.value = date ? `Rendez-vous : ${params.get("service")}` : params.get("service");
    form.elements.message.value = date
        ? `Bonjour, je souhaite un rendez-vous (${params.get("service")}) le ${date} à ${params.get("time")}.`
        : model
            ? `Bonjour, je souhaite essayer la monture ${model}.`
            : `Bonjour, je souhaite prendre rendez-vous pour : ${params.get("service")}.`;
}
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const subject = data.get("subject");
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    statusMessage.textContent = "Votre application de messagerie s'ouvre : il ne reste qu'à envoyer le message.";
    form.reset();
});
