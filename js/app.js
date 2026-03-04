function initNavigation() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (
      linkPath === currentPath ||
      (currentPath === "" && linkPath === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function initScrollHeader() {
  const header = document.querySelector("header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateThemeIcon(newTheme);
  });

  updateThemeIcon(savedTheme);
}

/**
 * @param {string} theme - 'dark' ou 'light'
 */
function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("theme-icon");
  if (!themeIcon) return;

  themeIcon.className = theme === "dark" ? "moon" : "sun";
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initScrollHeader();
  initTheme();
});
