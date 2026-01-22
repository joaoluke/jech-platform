/**
 * Módulo para carregar e gerenciar o WASM do Jech
 */

const JechWASM = (function() {
    // Estado do módulo
    let moduleInstance = null;
    let isInitialized = false;
    let isInitializing = false;
    let initCallbacks = [];
    
    // Buffer para armazenar a saída
    let outputBuffer = '';
    
    /**
     * Configura o módulo Emscripten
     */
    const moduleConfig = {
        // Redireciona stdout para o buffer
        print: (text) => {
            outputBuffer += text + '\n';
            updateOutput();
        },
        
        // Redireciona stderr para o buffer
        printErr: (text) => {
            outputBuffer += `\x1b[31m${text}\x1b[0m\n`; // Adiciona cor vermelha para erros
            updateOutput();
        },
        
        // Chamado quando o módulo está pronto
        onRuntimeInitialized: () => {
            console.log('WASM carregado com sucesso!');
            isInitialized = true;
            isInitializing = false;
            
            // Chama todos os callbacks de inicialização
            initCallbacks.forEach(callback => callback());
            initCallbacks = [];
        },
        
        // Configurações adicionais
        wasmBinaryFile: '/wasm/jech.wasm', // Caminho para o arquivo .wasm
        noInitialRun: true, // Não executa a função main() automaticamente
    };
    
    /**
     * Atualiza o elemento de saída na página
     */
    function updateOutput() {
        const outputElement = document.getElementById('output');
        if (outputElement) {
            outputElement.textContent = outputBuffer;
            outputElement.scrollTop = outputElement.scrollHeight; // Rola para baixo
        }
    }
    
    /**
     * Inicializa o módulo WASM
     * @returns {Promise} Promessa que resolve quando o WASM estiver pronto
     */
    function init() {
        return new Promise((resolve, reject) => {
            if (isInitialized) {
                resolve(moduleInstance);
                return;
            }
            
            if (isInitializing) {
                // Já está inicializando, adiciona à fila de callbacks
                initCallbacks.push(() => resolve(moduleInstance));
                return;
            }
            
            isInitializing = true;
            
            // Carrega o script do Emscripten
            const script = document.createElement('script');
            script.src = '/wasm/jech.js';
            script.onload = () => {
                // O script do Emscripten define um módulo global chamado 'Module'
                if (typeof Module === 'undefined') {
                    const error = new Error('Falha ao carregar o módulo WASM');
                    console.error(error);
                    reject(error);
                    return;
                }
                
                // Configura o módulo
                Object.assign(Module, moduleConfig);
                moduleInstance = Module;
                
                // Se já estiver inicializado (pode acontecer em alguns casos)
                if (Module.asm) {
                    moduleConfig.onRuntimeInitialized();
                }
            };
            
            script.onerror = (error) => {
                console.error('Erro ao carregar o script WASM:', error);
                isInitializing = false;
                reject(error);
            };
            
            document.head.appendChild(script);
            
            // Adiciona à fila de callbacks
            initCallbacks.push(() => resolve(moduleInstance));
        });
    }
    
    /**
     * Executa código Jech
     * @param {string} code Código Jech para executar
     * @returns {Promise<string>} Saída do código
     */
    async function execute(code) {
        if (!isInitialized) {
            await init();
        }
        
        return new Promise((resolve, reject) => {
            try {
                // Limpa o buffer de saída
                outputBuffer = '';
                
                // Converte a string para um ponteiro C
                const codePtr = moduleInstance.allocate(
                    moduleInstance.intArrayFromString(code),
                    'i8',
                    0
                );
                
                // Chama a função de execução do Jech
                const result = moduleInstance._jech_execute(codePtr);
                
                // Libera a memória alocada
                moduleInstance._free(codePtr);
                
                // Pega a saída do buffer
                const output = outputBuffer.trim();
                resolve(output);
            } catch (error) {
                console.error('Erro ao executar código Jech:', error);
                reject(error);
            }
        });
    }
    
    /**
     * Obtém a versão do interpretador Jech
     * @returns {Promise<string>} Versão do interpretador
     */
    async function getVersion() {
        if (!isInitialized) {
            await init();
        }
        
        try {
            const versionPtr = moduleInstance._jech_version();
            const version = moduleInstance.UTF8ToString(versionPtr);
            return version;
        } catch (error) {
            console.error('Erro ao obter versão do Jech:', error);
            return 'Desconhecida';
        }
    }
    
    // Interface pública
    return {
        init,
        execute,
        getVersion,
        isInitialized: () => isInitialized
    };
})();
