// ======================= FULL STACK =======================
const FULLSTACK = [
  {
    title: "Portfolio Website",
    about: "Responsive personal portfolio built using HTML, CSS & JS.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/saivenkateshr21/Portfolio-Website",
    demo: null
  },
  {
    title: "Flight Ticket Booking",
    about: "Full-stack flight booking app with authentication and payment flow.",
    tech: ["React", "Vite", "Firebase", "JavaScript"],
    github: "https://github.com/saivenkateshr21/flight-ticket-booking",
    demo: null
  },
  {
    title: "E-Commerce Website",
    about: "Full-stack shopping website with product listings and cart.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/saivenkateshr21/ecommerce-website",
    demo: null
  }
];

// ======================= FRONTEND PROJECTS =======================
const FRONTEND = [
  {
    title: "Color Flipper",
    about: "Generates random colors with one click.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/saivenkateshr21/Color-Flipper",
    demo: null
  },
  {
    title: "Flip the Coin",
    about: "Fun interactive coin flip game.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/saivenkateshr21/Flip-the-coin",
    demo: null
  }
];

// ======================= MACHINE LEARNING =======================
const ML = [
  {
    title: "ML Mini Project",
    about: "Built ML model for prediction tasks.",
    tech: ["Python", "Machine Learning"],
    github: "https://github.com/saivenkateshr21",
    demo: null
  },
  {
    title: "Digit Recognizer",
    about: "Digit classifier trained on MNIST dataset.",
    tech: ["Python", "TensorFlow", "ML"],
    github: "https://github.com/saivenkateshr21/digit-recognizer",
    demo: null
  }
];

// ======================= RAG / AI =======================
const RAG = [
  {
    title: "RAG Project",
    about: "Retrieval-Augmented Generation with vector DB + LLM.",
    tech: ["Python", "LLM", "Vector DB", "AI"],
    github: "https://github.com/saivenkateshr21/RAG-Project",
    demo: null
  }
];

// ======================= GAMES =======================
const GAMES = [
  {
    title: "Two Player Games",
    about: "Mini collection of browser-based multiplayer games.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/saivenkateshr21/two-player-games",
    demo: null
  }
];

// ======================= MINI APPS =======================
const MINI_APPS = [
  {
    title: "Mindease",
    about: "Simple mood tracking & relaxation app.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/saivenkateshr21/Mindease",
    demo: null
  }
];

// ========= RENDER ==========
function renderProjects(list, id) {
  document.getElementById(id).innerHTML = list.map(p => `
    <article class="project-card">
      <h3>${p.title}</h3>
      <p>${p.about}</p>
      <span class="tech">${p.tech.join(" • ")}</span>
      <a href="${p.github}" target="_blank">GitHub ↗</a>
    </article>
  `).join("");
}

renderProjects(FULLSTACK, "fullstackGrid");
renderProjects(FRONTEND, "frontendGrid");
renderProjects(ML, "mlGrid");
renderProjects(RAG, "ragGrid");
renderProjects(GAMES, "gamesGrid");
renderProjects(MINI_APPS, "miniGrid");

document.getElementById("year").textContent = new Date().getFullYear();
