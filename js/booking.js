// Réservation de créneau : les horaires suivent ceux de la boutique
const OPENING = { 1: [9.5, 19], 2: [9.5, 19], 3: [9.5, 19], 4: [9.5, 19], 5: [9.5, 19], 6: [10, 18] };

const form = document.getElementById("bookingForm");
const dayList = document.getElementById("dayList");
const slotList = document.getElementById("slotList");
const summary = document.getElementById("bookingSummary");
const submit = document.getElementById("bookingSubmit");

const choice = { service: null, day: null, time: null };

const formatDay = (date) => date.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" });
const formatHour = (hour) => `${Math.floor(hour)}h${hour % 1 ? "30" : "00"}`;

// Pseudo-aléatoire stable pour simuler des créneaux déjà pris
const isTaken = (date, hour) => (date.getDate() * 7 + hour * 13) % 5 === 0;

function nextOpenDays(count) {
    const days = [];
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    while (days.length < count) {
        date.setDate(date.getDate() + 1);
        if (OPENING[date.getDay()]) days.push(new Date(date));
    }
    return days;
}

function refresh() {
    const parts = [choice.service, choice.day && formatDay(choice.day.date), choice.time && formatHour(choice.time)];
    summary.textContent = parts.some(Boolean) ? parts.filter(Boolean).join(" · ") : "Aucun créneau sélectionné";
    submit.disabled = !(choice.service && choice.day && choice.time);
}

function renderSlots(date) {
    const [open, close] = OPENING[date.getDay()];
    slotList.innerHTML = "";
    for (let hour = open; hour < close; hour += 0.5) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = formatHour(hour);
        button.setAttribute("aria-pressed", "false");
        button.disabled = isTaken(date, hour);
        button.addEventListener("click", () => {
            slotList.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b === button));
            choice.time = hour;
            refresh();
        });
        slotList.appendChild(button);
    }
}

form.querySelectorAll('[data-group="service"] button').forEach((button) => {
    button.addEventListener("click", () => {
        form.querySelectorAll('[data-group="service"] button').forEach((b) => b.setAttribute("aria-pressed", b === button));
        choice.service = button.dataset.value;
        refresh();
    });
});

nextOpenDays(6).forEach((date) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = formatDay(date);
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
        dayList.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b === button));
        choice.day = { date };
        choice.time = null;
        renderSlots(date);
        refresh();
    });
    dayList.appendChild(button);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const params = new URLSearchParams({
        service: choice.service,
        date: choice.day.date.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }),
        time: formatHour(choice.time),
    });
    window.location.href = `pages/contact.html?${params}`;
});
