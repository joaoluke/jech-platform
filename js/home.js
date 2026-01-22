/**
 * Inicializa os componentes interativos da página inicial
 */
function initHomePage() {
    // Inicializa os tooltips
    initTooltips();
    
    // Inicializa a animação dos cards de features
    initFeatureCards();
    
    // Inicializa o contador de exemplos
    initExampleCounter();
}

/**
 * Inicializa os tooltips dos elementos com data-tooltip
 */
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = tooltipText;
        
        element.appendChild(tooltip);
        
        // Posiciona o tooltip acima do elemento
        const updatePosition = () => {
            const rect = element.getBoundingClientRect();
            tooltip.style.left = `${rect.left + (element.offsetWidth / 2) - (tooltip.offsetWidth / 2)}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`;
        };
        
        element.addEventListener('mouseenter', () => {
            tooltip.style.visibility = 'visible';
            updatePosition();
        });
        
        element.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
        });
        
        window.addEventListener('resize', updatePosition);
    });
}

/**
 * Adiciona efeito de hover nos cards de features
 */
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calcula a posição do gradiente com base na posição do mouse
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${xPercent}%`);
            card.style.setProperty('--mouse-y', `${yPercent}%`);
        });
    });
}

/**
 * Inicializa o contador de exemplos
 */
function initExampleCounter() {
    const counterElement = document.getElementById('example-counter');
    if (!counterElement) return;
    
    const targetCount = 25; // Número total de exemplos
    let currentCount = 0;
    const duration = 2000; // 2 segundos
    const increment = Math.ceil(targetCount / (duration / 16)); // 60fps
    
    const updateCounter = () => {
        currentCount += increment;
        
        if (currentCount >= targetCount) {
            currentCount = targetCount;
            counterElement.textContent = `+${currentCount}`;
        } else {
            counterElement.textContent = `+${currentCount}`;
            requestAnimationFrame(updateCounter);
        }
    };
    
    // Inicia a animação quando o elemento estiver visível
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCounter();
            observer.disconnect();
        }
    });
    
    observer.observe(counterElement);
}

// Inicializa a página quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initHomePage);
