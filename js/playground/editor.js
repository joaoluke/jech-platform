/**
 * Módulo do editor de código do Jech Playground
 */

const JechEditor = (function() {
    // Elementos do DOM
    let editorElement;
    let runButton;
    let clearButton;
    let outputElement;
    let runTextElement;
    let isRunning = false;
    
    /**
     * Inicializa o editor
     */
    function init() {
        // Seleciona os elementos
        editorElement = document.getElementById('editor');
        runButton = document.getElementById('runBtn');
        clearButton = document.getElementById('clearBtn');
        outputElement = document.getElementById('output');
        runTextElement = document.getElementById('runText');
        
        if (!editorElement || !runButton || !clearButton || !outputElement) {
            console.error('Elementos do editor não encontrados');
            return;
        }
        
        // Configura o editor
        setupEditor();
        
        // Configura os eventos
        setupEventListeners();
        
        // Carrega o código de exemplo
        loadExampleCode();
        
        // Inicializa o WASM
        initializeWASM();
    }
    
    /**
     * Configura o editor de código
     */
    function setupEditor() {
        // Configura o tamanho inicial
        updateEditorSize();
        
        // Adiciona números de linha
        addLineNumbers();
        
        // Atualiza os números de linha quando o conteúdo muda
        editorElement.addEventListener('input', updateLineNumbers);
        
        // Atualiza o tamanho quando a janela for redimensionada
        window.addEventListener('resize', updateEditorSize);
    }
    
    /**
     * Atualiza o tamanho do editor para preencher a altura disponível
     */
    function updateEditorSize() {
        const windowHeight = window.innerHeight;
        const editorRect = editorElement.getBoundingClientRect();
        const availableHeight = windowHeight - editorRect.top - 20; // 20px de margem
        
        editorElement.style.height = `${Math.max(200, availableHeight)}px`;
        
        // Atualiza os números de linha
        updateLineNumbers();
    }
    
    /**
     * Adiciona números de linha ao editor
     */
    function addLineNumbers() {
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'line-numbers';
        editorElement.parentNode.insertBefore(lineNumbers, editorElement);
        
        // Atualiza os números de linha iniciais
        updateLineNumbers();
    }
    
    /**
     * Atualiza os números de linha com base no conteúdo
     */
    function updateLineNumbers() {
        const lineNumbers = document.querySelector('.line-numbers');
        if (!lineNumbers) return;
        
        const lines = editorElement.value.split('\n').length;
        let lineNumbersHTML = '';
        
        for (let i = 1; i <= lines; i++) {
            lineNumbersHTML += `${i}\n`;
        }
        
        lineNumbers.innerHTML = lineNumbersHTML;
        
        // Ajusta a rolagem para sincronizar com o editor
        lineNumbers.scrollTop = editorElement.scrollTop;
    }
    
    /**
     * Configura os event listeners
     */
    function setupEventListeners() {
        // Executa o código quando o botão for clicado
        runButton.addEventListener('click', runCode);
        
        // Limpa a saída quando o botão for clicado
        clearButton.addEventListener('click', clearOutput);
        
        // Atalho de teclado: Ctrl+Enter para executar
        editorElement.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                runCode();
            }
        });
        
        // Atualiza os números de linha quando o editor for rolado
        editorElement.addEventListener('scroll', () => {
            const lineNumbers = document.querySelector('.line-numbers');
            if (lineNumbers) {
                lineNumbers.scrollTop = editorElement.scrollTop;
            }
        });
    }
    
    /**
     * Carrega um código de exemplo no editor
     */
    function loadExampleCode() {
        const exampleCode = `// Bem-vindo ao Jech Playground!
// Digite seu código aqui e clique em "Executar" ou pressione Ctrl+Enter

// Exemplo: Olá, Mundo!
say("Olá, Mundo!");

// Exemplo: Soma simples
keep a = 10;
keep b = 20;
say("A soma é: " + (a + b));

// Exemplo: Condicionais
keep idade = 18;

when (idade >= 18) {
    say("Você é maior de idade!");
} else {
    say("Você é menor de idade!");
}

// Tente modificar os exemplos ou escrever seu próprio código!`;
        
        editorElement.value = exampleCode;
        updateLineNumbers();
    }
    
    /**
     * Inicializa o módulo WASM
     */
    async function initializeWASM() {
        try {
            runButton.disabled = true;
            runTextElement.textContent = 'Carregando...';
            
            // Inicializa o WASM
            await JechWASM.init();
            
            // Obtém a versão do interpretador
            const version = await JechWASM.getVersion();
            
            // Atualiza a interface
            runButton.disabled = false;
            runTextElement.textContent = 'Executar (Ctrl+Enter)';
            
            console.log(`Jech ${version} carregado com sucesso!`);
            
            // Exibe uma mensagem de boas-vindas
            outputElement.textContent = `Jech ${version} pronto. Digite seu código e clique em "Executar" ou pressione Ctrl+Enter`;
        } catch (error) {
            console.error('Erro ao inicializar o Jech:', error);
            
            runButton.disabled = true;
            runTextElement.textContent = 'Erro ao carregar';
            
            outputElement.textContent = `Erro ao carregar o interpretador Jech: ${error.message}\n\nCertifique-se de que os arquivos WASM estão disponíveis em /wasm/`;
            outputElement.classList.add('error');
        }
    }
    
    /**
     * Executa o código do editor
     */
    async function runCode() {
        if (isRunning) {
            return;
        }
        
        const code = editorElement.value.trim();
        if (!code) {
            outputElement.textContent = 'Digite algum código para executar';
            return;
        }
        
        try {
            isRunning = true;
            runButton.disabled = true;
            runTextElement.textContent = 'Executando...';
            
            // Limpa a saída anterior
            outputElement.textContent = '';
            outputElement.classList.remove('error');
            
            // Executa o código
            const startTime = performance.now();
            await JechWASM.execute(code);
            const endTime = performance.now();
            
            // Exibe o tempo de execução
            const executionTime = (endTime - startTime).toFixed(2);
            const timeElement = document.createElement('div');
            timeElement.className = 'execution-time';
            timeElement.textContent = `\n\n[Executado em ${executionTime}ms]`;
            outputElement.appendChild(timeElement);
            
        } catch (error) {
            console.error('Erro ao executar o código:', error);
            
            outputElement.textContent = `Erro: ${error.message}`;
            outputElement.classList.add('error');
        } finally {
            isRunning = false;
            runButton.disabled = false;
            runTextElement.textContent = 'Executar (Ctrl+Enter)';
            
            // Rola para baixo para mostrar a saída
            outputElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }
    
    /**
     * Limpa a saída
     */
    function clearOutput() {
        outputElement.textContent = '';
        outputElement.classList.remove('error');
    }
    
    // Interface pública
    return {
        init
    };
})();

// Inicializa o editor quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => JechEditor.init());
