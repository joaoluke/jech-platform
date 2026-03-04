function initDocsPage() {
  initSidebarNavigation();

  initCodeHighlighting();
  initInteractiveExamples();

  initBackToTop();
}

function initSidebarNavigation() {
  const sidebarLinks = document.querySelectorAll(".docs-sidebar a");
  const sections = document.querySelectorAll("h2[id], h3[id]");

  function updateActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = `#${section.id}`;
      }
    });

    sidebarLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === current);
    });
  }

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        history.pushState(null, "", targetId);
      }
    });
  });

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
}

function initCodeHighlighting() {
  const codeBlocks = document.querySelectorAll("pre code");

  codeBlocks.forEach((block) => {
    const code = block.textContent;
    const highlighted = code
      .replace(
        /\b(keep|when|else|task|say)\b/g,
        '<span class="keyword">$&</span>',
      )
      .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
      .replace(/\b(\d+)\b/g, '<span class="number">$&</span>')
      .replace(/\/\/(.*?)(?=\n|$)/g, '<span class="comment">//$1</span>');

    block.innerHTML = highlighted;
  });
}

function initInteractiveExamples() {
  const runButtons = document.querySelectorAll(".run-example");

  runButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const exampleId = button.getAttribute("data-example");
      const codeElement = document.querySelector(`#${exampleId} code`);
      const outputElement = document.querySelector(
        `#${exampleId} .example-output`,
      );

      if (codeElement && outputElement) {
        const code = codeElement.textContent;
        outputElement.textContent = "Executando...";
        outputElement.style.display = "block";

        setTimeout(() => {
          try {
            const mockResults = {
              "example-1": "10",
              "example-2": "Olá, João!",
              "example-3": "Maior de idade",
              "example-4": "1\n2\n3\n4\n5",
            };

            outputElement.textContent =
              mockResults[exampleId] || "Saída do exemplo";
          } catch (error) {
            outputElement.textContent = `Erro: ${error.message}`;
            outputElement.classList.add("error");
          }
        }, 500);
      }
    });
  });
}

function initBackToTop() {
  const backToTopButton = document.createElement("button");
  backToTopButton.id = "back-to-top";
  backToTopButton.innerHTML = "↑";
  backToTopButton.title = "Voltar ao topo";
  document.body.appendChild(backToTopButton);

  function toggleBackToTop() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  }

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();
}

document.addEventListener("DOMContentLoaded", initDocsPage);
