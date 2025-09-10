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

  // Botón para modo oscuro/claro (usando clase CSS)
  const themeBtn = document.getElementById("toggle-theme");

  if (themeBtn) {
    const applyTheme = (isDark) => {
      document.body.classList.toggle("dark-mode", isDark);
      themeBtn.textContent = isDark ? "Modo claro" : "Modo oscuro";
      themeBtn.setAttribute("aria-pressed", String(isDark));
    };

    // Estado inicial
    let isDark = document.body.classList.contains("dark-mode");
    applyTheme(isDark);

    // Toggle al hacer clic
    themeBtn.addEventListener("click", () => {
      isDark = !isDark;
      applyTheme(isDark);
    });
  }
});