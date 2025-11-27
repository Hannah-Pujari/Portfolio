// ===============================
// Mobile Menu Toggle
// ===============================
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  if (!nav) return;

  const isVisible = nav.style.display === "flex";

  nav.style.display = isVisible ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.right = "20px";
  nav.style.top = "64px";
  nav.style.background = "white";
  nav.style.padding = "12px";
  nav.style.borderRadius = "10px";
  nav.style.boxShadow = "0 10px 30px rgba(25,20,80,0.08)";
}


// ===============================
// Smooth Fade-up on Scroll
// ===============================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));


// ===============================
// Gallery Lightbox
// ===============================
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");

function openLightbox(img) {
  lbImg.src = img.src;
  lightbox.style.display = "flex";
  lightbox.setAttribute("aria-hidden", "false");
}

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightbox.setAttribute("aria-hidden", "true");
  lbImg.src = "";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
    lightbox.setAttribute("aria-hidden", "true");
    lbImg.src = "";
  }
});

// generate sparkles (tweak count if needed)
    (function createSparkles() {
      const container = document.getElementById('sparkles');
      const count = 40;
      for (let i = 0; i < count; i++) {
        const s = document.createElement('span');
        s.className = 'sparkle';
        const size = Math.random() * 10 + 3; // 3-13 px
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.setProperty('--size', `${size}px`);
        s.style.setProperty('--duration', `${(Math.random() * 3 + 1.5).toFixed(2)}s`);
        s.style.setProperty('--delay', `${(Math.random() * 6).toFixed(2)}s`);
        s.style.setProperty('--float-duration', `${(Math.random() * 12 + 6).toFixed(2)}s`);
        container.appendChild(s);
      }
    })();

// ===============================
// Smooth Scroll for Navbar Links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (href === "#" || href === "") return;

    e.preventDefault();

    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });

    const nav = document.querySelector(".nav-links");
    if (nav && window.innerWidth <= 980) nav.style.display = "none";
  });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  
  fetch('https://your-api.com/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(() => alert('Message sent!'));
});
