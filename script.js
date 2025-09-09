// script.js
document.addEventListener("DOMContentLoaded", () => {
  const saludo = document.getElementById("saludo");
  if (!saludo) return; // Evita error si no existe el elemento en el HTML

  const hora = new Date().getHours();
  let mensaje = "";

  if (hora >= 4 && hora < 12) {
    mensaje = "Buenos días";
  } else if (hora >= 12 && hora < 18) {
    mensaje = "Buenas tardes";
  } else {
    mensaje = "Buenas noches";
  }

  saludo.textContent = mensaje;

  // Botón para mostrar/ocultar experiencia laboral
  const toggleBtn = document.getElementById("toggle-experiencia");
  const experienciaSection = document.getElementById("experiencia");

  if (toggleBtn && experienciaSection) {
    toggleBtn.addEventListener("click", () => {
      if (experienciaSection.style.display === "none") {
        experienciaSection.style.display = "block";
        toggleBtn.textContent = "Ocultar experiencia laboral";
      } else {
        experienciaSection.style.display = "none";
        toggleBtn.textContent = "Mostrar experiencia laboral";
      }
    });
  }
});