// Espera o documento HTML ser completamente carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
  // --- EFEITO DE DIGITAÇÃO COM TYPED.JS ---
  // Apenas este código é necessário aqui. A rolagem é feita pelo CSS.

  const typingElement = document.querySelector("#typing-effect");
  if (typingElement) {
    const typed = new Typed("#typing-effect", {
      strings: ["Analista de Dados.", "Entusiasta de Dados.", "Entusiasta de AI."],
      typeSpeed: 75,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });
  }
});
