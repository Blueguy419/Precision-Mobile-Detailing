const phone = "+19493751329";

function qs(sel, parent=document){ return parent.querySelector(sel); }

const yearEl = qs("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu
const burger = qs(".hamburger");
const mobileMenu = qs(".mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
    mobileMenu.hidden = expanded;
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    });
  });
}

// Quick quote -> opens SMS with filled message
const form = qs("#quoteForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const car = (data.get("car") || "").toString().trim();
    const service = (data.get("service") || "").toString().trim();
    const city = (data.get("city") || "").toString().trim();

    const msg =
      `Hi Brent & Jaxson! I'd like a quick quote.\n` +
      `Car: ${car}\nService: ${service}\nCity: ${city}\n` +
      `($10 off first detail?)`;

    const url = `sms:${phone}?&body=${encodeURIComponent(msg)}`;
    window.location.href = url;
  });
}
