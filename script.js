const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const activePage = document.body.dataset.page;
const yearSpan = document.querySelector("[data-year]");
const contactForm = document.querySelector("[data-contact-form]");
const successMessage = document.querySelector("[data-success-message]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });
}

if (activePage && navLinks.length) {
  navLinks.forEach((link) => {
    if (link.dataset.navLink === activePage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.reset();
    if (successMessage) {
      successMessage.classList.add("is-visible");
      successMessage.setAttribute("role", "status");
      setTimeout(() => successMessage.classList.remove("is-visible"), 5000);
    }
  });
}
