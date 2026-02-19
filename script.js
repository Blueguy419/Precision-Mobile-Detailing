// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Close mobile menu when clicking a link
mobileMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileMenu.classList.remove("show"));
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Quick Quote -> opens SMS with prefilled info
const quoteForm = document.getElementById("quoteForm");

quoteForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(quoteForm);
  const carType = data.get("carType")?.toString().trim();
  const service = data.get("service")?.toString().trim();
  const city = data.get("city")?.toString().trim();

  const msg =
    `Hi Precision Mobile Detailing! I’d like a quote.\n\n` +
    `Car: ${carType}\n` +
    `Service: ${service}\n` +
    `City: ${city}\n\n` +
    `Best day/time: ____\n` +
    `Anything else: ____`;

  const smsLink = `sms:+19493751329?&body=${encodeURIComponent(msg)}`;
  window.location.href = smsLink;
});
