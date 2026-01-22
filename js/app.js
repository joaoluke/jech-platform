// Funções úteis compartilhadas entre as páginas

/**
 * Inicializa a navegação ativa baseada na URL atual
 */
function initNavigation() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || 
            (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Adiciona classe 'scrolled' ao header quando o usuário rolar a página
 */
function initScrollHeader() {
    const header = document.querySelector('header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Inicializa o tema escuro/claro
 */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    // Verifica se há preferência salva
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Atualiza o ícone
        updateThemeIcon(newTheme);
    });
    
    // Atualiza o ícone inicial
    updateThemeIcon(savedTheme);
}

/**
 * Atualiza o ícone do tema
 * @param {string} theme - 'dark' ou 'light'
 */
function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (!themeIcon) return;
    
    themeIcon.className = theme === 'dark' ? 'moon' : 'sun';
}

// Inicializa os componentes compartilhados quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollHeader();
    initTheme();
});
