const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector(".nav-links");
const yearSpan = document.querySelector("[data-year]");
const form = document.querySelector("[data-contact-form]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "there";
    form.reset();
    const message = document.createElement("p");
    message.className = "form-note";
    message.textContent = `Thanks, ${name}! We’ll reach out soon.`;
    form.appendChild(message);
    setTimeout(() => message.remove(), 4000);
  });
}
