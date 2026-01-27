/**
 * Módulo para carregar e gerenciar o WASM do Jech
 * Compilado com MODULARIZE=1 e EXPORT_NAME='JechModule'
 */

const JechWASM = (function() {
    // Estado do módulo
    let moduleInstance = null;
    let isInitialized = false;
    let isInitializing = false;
    
    // Buffer para armazenar a saída
    let outputBuffer = '';
    
    // Callback para atualizar a saída na página
    let outputCallback = null;
    
    /**
     * Define um callback para receber a saída
     */
    function setOutputCallback(callback) {
        outputCallback = callback;
    }
    
    /**
     * Adiciona texto ao buffer de saída
     */
    function appendOutput(text) {
        outputBuffer += text + '\n';
        if (outputCallback) {
            outputCallback(outputBuffer);
        }
    }
    
    /**
     * Inicializa o módulo WASM
     * @returns {Promise} Promessa que resolve quando o WASM estiver pronto
     */
    async function init() {
        if (isInitialized) {
            return moduleInstance;
        }
        
        if (isInitializing) {
            // Aguarda a inicialização em andamento
            return new Promise((resolve) => {
                const checkInit = setInterval(() => {
                    if (isInitialized) {
                        clearInterval(checkInit);
                        resolve(moduleInstance);
                    }
                }, 100);
            });
        }
        
        isInitializing = true;
        
        return new Promise((resolve, reject) => {
            // Carrega o script do Emscripten
            const script = document.createElement('script');
            script.src = 'wasm/jech.js';
            
            script.onload = async () => {
                try {
                    // Verifica se JechModule foi definido
                    if (typeof JechModule === 'undefined') {
                        throw new Error('JechModule não encontrado. Verifique se o arquivo wasm/jech.js foi compilado corretamente.');
                    }
                    
                    console.log('Carregando módulo WASM...');
                    
                    // Chama a função factory JechModule() com as configurações
                    moduleInstance = await JechModule({
                        // Redireciona stdout para o buffer
                        print: (text) => {
                            appendOutput(text);
                        },
                        
                        // Redireciona stderr para o buffer
                        printErr: (text) => {
                            console.error('[Jech Error]', text);
                            appendOutput(`[Erro] ${text}`);
                        },
                        
                        // Caminho para o arquivo .wasm
                        locateFile: (path) => {
                            if (path.endsWith('.wasm')) {
                                return 'wasm/jech.wasm';
                            }
                            return path;
                        }
                    });
                    
                    console.log('WASM carregado com sucesso!');
                    isInitialized = true;
                    isInitializing = false;
                    resolve(moduleInstance);
                    
                } catch (error) {
                    console.error('Erro ao inicializar o módulo WASM:', error);
                    isInitializing = false;
                    reject(error);
                }
            };
            
            script.onerror = (error) => {
                console.error('Erro ao carregar o script WASM:', error);
                isInitializing = false;
                reject(new Error('Falha ao carregar wasm/jech.js'));
            };
            
            document.head.appendChild(script);
        });
    }
    
    /**
     * Executa código Jech
     * @param {string} code Código Jech para executar
     * @returns {Promise<boolean>} true se executou com sucesso
     */
    async function execute(code) {
        if (!isInitialized) {
            await init();
        }
        
        try {
            // Limpa o buffer de saída
            outputBuffer = '';
            
            // Usa ccall para chamar a função C
            const result = moduleInstance.ccall(
                'jech_execute',    // Nome da função C
                'string',          // Tipo de retorno
                ['string'],        // Tipos dos argumentos
                [code]             // Argumentos
            );
            
            // Se houver resultado, adiciona ao buffer
            if (result && result.length > 0) {
                // O resultado já foi impresso via print callback
            }
            
            return true;
        } catch (error) {
            console.error('Erro ao executar código Jech:', error);
            appendOutput(`Erro: ${error.message}`);
            return false;
        }
    }
    
    /**
     * Limpa o estado da VM
     */
    async function clear() {
        if (!isInitialized) {
            return;
        }
        
        try {
            moduleInstance.ccall('jech_clear', null, [], []);
            outputBuffer = '';
        } catch (error) {
            console.error('Erro ao limpar estado:', error);
        }
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
            const version = moduleInstance.ccall(
                'jech_version',
                'string',
                [],
                []
            );
            return version || '0.1.0';
        } catch (error) {
            console.error('Erro ao obter versão do Jech:', error);
            return '0.1.0';
        }
    }
    
    /**
     * Obtém o buffer de saída atual
     */
    function getOutput() {
        return outputBuffer;
    }
    
    /**
     * Limpa o buffer de saída
     */
    function clearOutput() {
        outputBuffer = '';
    }
    
    // Interface pública
    return {
        init,
        execute,
        clear,
        getVersion,
        getOutput,
        clearOutput,
        setOutputCallback,
        isInitialized: () => isInitialized
    };
})();
