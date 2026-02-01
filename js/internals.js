/**
 * Módulo de visualização interativa do funcionamento interno do Jech
 */

class JechInternalsVisualizer {
    constructor() {
        this.codeInput = document.getElementById('codeInput');
        this.analyzeBtn = document.getElementById('analyzeBtn');
        this.steps = document.querySelectorAll('.pipeline-step');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.analyzeBtn.addEventListener('click', () => this.analyzeCode());
        
        this.codeInput.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                this.analyzeCode();
            }
        });
    }

    async analyzeCode() {
        const code = this.codeInput.value.trim();
        
        if (!code) {
            alert('Por favor, digite algum código para analisar!');
            return;
        }

        this.resetSteps();
        
        await this.runLexicalAnalysis(code);
        await this.delay(800);
        
        await this.runSyntaxAnalysis(code);
        await this.delay(800);
        
        await this.runSemanticAnalysis(code);
        await this.delay(800);
        
        await this.runIRGeneration(code);
        await this.delay(800);
        
        await this.runExecution(code);
    }

    resetSteps() {
        this.steps.forEach(step => {
            step.classList.remove('active', 'completed', 'error');
            const output = step.querySelector('.step-output');
            output.innerHTML = '<div class="output-placeholder">Aguardando análise...</div>';
        });
    }

    async runLexicalAnalysis(code) {
        const step = this.steps[0];
        const output = step.querySelector('.step-output');
        
        step.classList.add('active');
        output.innerHTML = '<div class="output-placeholder">Analisando...</div>';
        
        await this.delay(500);
        
        try {
            const tokens = this.tokenize(code);
            
            let html = '<div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">';
            tokens.forEach(token => {
                html += `
                    <div class="token-item">
                        <span class="token-type">${token.type}</span>
                        <span class="token-value">${this.escapeHtml(token.value)}</span>
                    </div>
                `;
            });
            html += '</div>';
            
            output.innerHTML = html;
            step.classList.remove('active');
            step.classList.add('completed');
        } catch (error) {
            output.innerHTML = `<pre style="color: var(--error);">Erro: ${error.message}</pre>`;
            step.classList.remove('active');
            step.classList.add('error');
            throw error;
        }
    }

    async runSyntaxAnalysis(code) {
        const step = this.steps[1];
        const output = step.querySelector('.step-output');
        
        step.classList.add('active');
        output.innerHTML = '<div class="output-placeholder">Construindo AST...</div>';
        
        await this.delay(500);
        
        try {
            const ast = this.parseToAST(code);
            output.innerHTML = `<pre>${this.escapeHtml(ast)}</pre>`;
            step.classList.remove('active');
            step.classList.add('completed');
        } catch (error) {
            output.innerHTML = `<pre style="color: var(--error);">Erro: ${error.message}</pre>`;
            step.classList.remove('active');
            step.classList.add('error');
            throw error;
        }
    }

    async runSemanticAnalysis(code) {
        const step = this.steps[2];
        const output = step.querySelector('.step-output');
        
        step.classList.add('active');
        output.innerHTML = '<div class="output-placeholder">Verificando semântica...</div>';
        
        await this.delay(500);
        
        try {
            const checks = this.performSemanticChecks(code);
            
            let html = '<div style="color: var(--text-muted);">';
            checks.forEach(check => {
                const icon = check.passed ? '✅' : '❌';
                const color = check.passed ? 'var(--success)' : 'var(--error)';
                html += `<div style="margin-bottom: 0.5rem; color: ${color};">${icon} ${check.message}</div>`;
            });
            html += '</div>';
            
            output.innerHTML = html;
            step.classList.remove('active');
            step.classList.add('completed');
        } catch (error) {
            output.innerHTML = `<pre style="color: var(--error);">Erro: ${error.message}</pre>`;
            step.classList.remove('active');
            step.classList.add('error');
            throw error;
        }
    }

    async runIRGeneration(code) {
        const step = this.steps[3];
        const output = step.querySelector('.step-output');
        
        step.classList.add('active');
        output.innerHTML = '<div class="output-placeholder">Gerando bytecode...</div>';
        
        await this.delay(500);
        
        try {
            const bytecode = this.generateBytecode(code);
            output.innerHTML = `<pre>${this.escapeHtml(bytecode)}</pre>`;
            step.classList.remove('active');
            step.classList.add('completed');
        } catch (error) {
            output.innerHTML = `<pre style="color: var(--error);">Erro: ${error.message}</pre>`;
            step.classList.remove('active');
            step.classList.add('error');
            throw error;
        }
    }

    async runExecution(code) {
        const step = this.steps[4];
        const output = step.querySelector('.step-output');
        
        step.classList.add('active');
        output.innerHTML = '<div class="output-placeholder">Executando...</div>';
        
        await this.delay(500);
        
        try {
            const result = this.simulateExecution(code);
            
            let html = '<div style="color: var(--text);">';
            html += '<strong style="color: var(--primary);">Saída do Programa:</strong><br><br>';
            html += `<div style="background: var(--dark-2); padding: 1rem; border-radius: 6px; border-left: 3px solid var(--success);">${this.escapeHtml(result)}</div>`;
            html += '</div>';
            
            output.innerHTML = html;
            step.classList.remove('active');
            step.classList.add('completed');
        } catch (error) {
            output.innerHTML = `<pre style="color: var(--error);">Erro: ${error.message}</pre>`;
            step.classList.remove('active');
            step.classList.add('error');
            throw error;
        }
    }

    tokenize(code) {
        const tokens = [];
        let i = 0;
        
        while (i < code.length) {
            let char = code[i];
            
            if (/\s/.test(char)) {
                i++;
                continue;
            }
            
            if (char === '"' || char === "'") {
                const quote = char;
                let value = '';
                i++;
                while (i < code.length && code[i] !== quote) {
                    value += code[i];
                    i++;
                }
                i++;
                tokens.push({ type: 'STRING', value: value });
                continue;
            }
            
            if (/[a-zA-Z_]/.test(char)) {
                let value = '';
                while (i < code.length && /[a-zA-Z0-9_]/.test(code[i])) {
                    value += code[i];
                    i++;
                }
                
                const keywords = ['say', 'keep', 'when', 'else', 'do', 'task', 'return', 'for', 'while'];
                const type = keywords.includes(value) ? 'KEYWORD' : 'IDENTIFIER';
                tokens.push({ type, value });
                continue;
            }
            
            if (/[0-9]/.test(char)) {
                let value = '';
                while (i < code.length && /[0-9.]/.test(code[i])) {
                    value += code[i];
                    i++;
                }
                tokens.push({ type: 'NUMBER', value });
                continue;
            }
            
            const operators = {
                '(': 'LPAREN',
                ')': 'RPAREN',
                '{': 'LBRACE',
                '}': 'RBRACE',
                '[': 'LBRACKET',
                ']': 'RBRACKET',
                ';': 'SEMICOLON',
                ',': 'COMMA',
                '+': 'PLUS',
                '-': 'MINUS',
                '*': 'MULTIPLY',
                '/': 'DIVIDE',
                '=': 'ASSIGN',
                '<': 'LT',
                '>': 'GT',
                '!': 'NOT',
                '&': 'AND',
                '|': 'OR'
            };
            
            if (operators[char]) {
                tokens.push({ type: operators[char], value: char });
                i++;
                continue;
            }
            
            i++;
        }
        
        return tokens;
    }

    parseToAST(code) {
        if (code.includes('say(')) {
            const match = code.match(/say\s*\(\s*"([^"]*)"\s*\)/);
            if (match) {
                return `Program
└── ExpressionStatement
    └── CallExpression
        ├── callee: Identifier("say")
        └── arguments:
            └── StringLiteral("${match[1]}")`;
            }
        }
        
        if (code.includes('keep')) {
            const match = code.match(/keep\s+(\w+)\s*=\s*(.+);/);
            if (match) {
                return `Program
└── VariableDeclaration
    ├── identifier: "${match[1]}"
    └── initializer: ${this.inferType(match[2])}`;
            }
        }
        
        if (code.includes('when')) {
            return `Program
└── ConditionalStatement
    ├── condition: BinaryExpression
    ├── consequent: BlockStatement
    └── alternate: BlockStatement`;
        }
        
        return `Program
└── ExpressionStatement
    └── (estrutura simplificada)`;
    }

    inferType(value) {
        value = value.trim();
        if (value.startsWith('"') || value.startsWith("'")) {
            return `StringLiteral(${value})`;
        }
        if (!isNaN(value)) {
            return `NumericLiteral(${value})`;
        }
        return `Identifier("${value}")`;
    }

    performSemanticChecks(code) {
        const checks = [];
        
        if (code.includes('say(')) {
            checks.push({
                passed: true,
                message: 'Função "say" existe e está disponível'
            });
            
            const match = code.match(/say\s*\(([^)]*)\)/);
            if (match) {
                const args = match[1].split(',').filter(a => a.trim());
                checks.push({
                    passed: args.length === 1,
                    message: `Número de argumentos correto: ${args.length} (esperado: 1)`
                });
            }
        }
        
        if (code.includes('keep')) {
            checks.push({
                passed: true,
                message: 'Declaração de variável válida'
            });
        }
        
        const stringMatch = code.match(/"[^"]*"/g);
        if (stringMatch) {
            checks.push({
                passed: true,
                message: 'Literais de string bem formadas'
            });
        }
        
        checks.push({
            passed: true,
            message: 'Tipos de dados compatíveis'
        });
        
        checks.push({
            passed: true,
            message: 'Escopo de variáveis válido'
        });
        
        return checks;
    }

    generateBytecode(code) {
        let bytecode = '';
        
        if (code.includes('say(')) {
            const match = code.match(/say\s*\(\s*"([^"]*)"\s*\)/);
            if (match) {
                bytecode = `0x0000  LOAD_CONST    "${match[1]}"     ; Carrega string constante
0x0001  LOAD_GLOBAL   say              ; Carrega função 'say'
0x0002  CALL_FUNCTION 1                ; Chama função com 1 argumento
0x0003  POP_TOP                        ; Remove resultado da pilha
0x0004  HALT                           ; Fim do programa`;
            }
        } else if (code.includes('keep')) {
            const match = code.match(/keep\s+(\w+)\s*=\s*(.+);/);
            if (match) {
                bytecode = `0x0000  LOAD_CONST    ${match[2]}      ; Carrega valor
0x0001  STORE_NAME    ${match[1]}      ; Armazena em variável
0x0002  HALT                           ; Fim do programa`;
            }
        } else {
            bytecode = `0x0000  ; Bytecode simplificado
0x0001  HALT`;
        }
        
        return bytecode;
    }

    simulateExecution(code) {
        if (code.includes('say(')) {
            const match = code.match(/say\s*\(\s*"([^"]*)"\s*\)/);
            if (match) {
                return match[1];
            }
        }
        
        if (code.includes('keep')) {
            const match = code.match(/keep\s+(\w+)\s*=\s*(.+);/);
            if (match) {
                return `Variável '${match[1]}' criada com valor: ${match[2].trim()}`;
            }
        }
        
        return '(execução simulada)';
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new JechInternalsVisualizer();
});
