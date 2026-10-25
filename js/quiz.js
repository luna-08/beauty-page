// Auto-évaluation auditive : résultat indicatif selon le nombre de « oui »
const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");

const messages = [
    { max: 1, title: "Peu de signes", text: "Votre audition ne semble pas poser de difficulté. Un bilan régulier reste conseillé après 50 ans." },
    { max: 3, title: "Quelques signes", text: "Certaines situations vous gênent. Un bilan auditif gratuit permettrait d'y voir plus clair." },
    { max: 5, title: "Plusieurs signes", text: "Plusieurs réponses évoquent une gêne auditive. Nous vous conseillons de réserver un bilan." },
];

quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const score = [...new FormData(quizForm).values()].reduce((sum, value) => sum + Number(value), 0);
    const { title, text } = messages.find((message) => score <= message.max);

    quizResult.innerHTML = `<strong>${title} (${score} sur 5)</strong><p>${text}</p>
        <a class="btn" href="contact.html?service=Bilan%20auditif">Réserver mon bilan offert</a>`;
    quizResult.hidden = false;
});
