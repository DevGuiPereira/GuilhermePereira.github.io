document.addEventListener("DOMContentLoaded", function () {
  // --- EFEITO DE DIGITAÇÃO COM TYPED.JS ---
  const typingElement = document.querySelector("#typing-effect");
  if (typingElement) {
    const typed = new Typed("#typing-effect", {
      strings: ["Analista de Dados", "Entusiasta de Dados", "Entusiasta de AI"],
      typeSpeed: 75,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });
  }
});

// --- FUNCIONALIDADE DO MENU HAMBÚRGUER ---
const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");
// Verifica se o menu hambúrguer existe na página antes de adicionar o evento
if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
