/**
 * Inicializa os componentes interativos da página de documentação
 */
function initDocsPage() {
    // Inicializa a navegação da sidebar
    initSidebarNavigation();
    
    // Inicializa o highlight de código
    initCodeHighlighting();
    
    // Inicializa os exemplos interativos
    initInteractiveExamples();
    
    // Inicializa o botão de voltar ao topo
    initBackToTop();
}

/**
 * Inicializa a navegação da sidebar
 */
function initSidebarNavigation() {
    const sidebarLinks = document.querySelectorAll('.docs-sidebar a');
    const sections = document.querySelectorAll('h2[id], h3[id]');
    
    // Atualiza o link ativo na sidebar com base na rolagem
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = `#${section.id}`;
            }
        });
        
        sidebarLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === current);
        });
    }
    
    // Rola suavemente para a seção clicada
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Atualiza a URL sem recarregar a página
                history.pushState(null, '', targetId);
            }
        });
    });
    
    // Atualiza os links ativos durante a rolagem
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Chama uma vez para definir o estado inicial
}

/**
 * Aplica highlight de sintaxe aos blocos de código
 */
function initCodeHighlighting() {
    // Esta função seria implementada com uma biblioteca como Prism.js ou Highlight.js
    // Aqui está uma implementação básica para demonstração
    const codeBlocks = document.querySelectorAll('pre code');
    
    // Simula um highlight básico (em um cenário real, use uma biblioteca)
    codeBlocks.forEach(block => {
        const code = block.textContent;
        // Substitui palavras-chave por spans estilizados
        const highlighted = code
            .replace(/\b(keep|when|else|task|say)\b/g, '<span class="keyword">$&</span>')
            .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
            .replace(/\b(\d+)\b/g, '<span class="number">$&</span>')
            .replace(/\/\/(.*?)(?=\n|$)/g, '<span class="comment">//$1</span>');
        
        block.innerHTML = highlighted;
    });
}

/**
 * Inicializa exemplos interativos na documentação
 */
function initInteractiveExamples() {
    const runButtons = document.querySelectorAll('.run-example');
    
    runButtons.forEach(button => {
        button.addEventListener('click', () => {
            const exampleId = button.getAttribute('data-example');
            const codeElement = document.querySelector(`#${exampleId} code`);
            const outputElement = document.querySelector(`#${exampleId} .example-output`);
            
            if (codeElement && outputElement) {
                const code = codeElement.textContent;
                outputElement.textContent = 'Executando...';
                outputElement.style.display = 'block';
                
                // Simula a execução do código (em um cenário real, usaria o interpretador Jech)
                setTimeout(() => {
                    try {
                        // Aqui você chamaria o interpretador Jech
                        // const result = jechExecute(code);
                        // outputElement.textContent = result;
                        
                        // Simulação de saída
                        const mockResults = {
                            'example-1': '10',
                            'example-2': 'Olá, João!',
                            'example-3': 'Maior de idade',
                            'example-4': '1\n2\n3\n4\n5'
                        };
                        
                        outputElement.textContent = mockResults[exampleId] || 'Saída do exemplo';
                    } catch (error) {
                        outputElement.textContent = `Erro: ${error.message}`;
                        outputElement.classList.add('error');
                    }
                }, 500);
            }
        });
    });
}

/**
 * Inicializa o botão de voltar ao topo
 */
function initBackToTop() {
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.title = 'Voltar ao topo';
    document.body.appendChild(backToTopButton);
    
    // Mostra/oculta o botão com base na posição de rolagem
    function toggleBackToTop() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }
    
    // Rola suavemente para o topo
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop(); // Chama uma vez para definir o estado inicial
}

// Inicializa a página quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initDocsPage);
