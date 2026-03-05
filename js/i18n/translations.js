// eslint-disable-next-line no-unused-vars
const translations = {
  "pt-BR": {
    nav: {
      home: "Início",
      playground: "Playground",
      docs: "Documentação",
      internals: "Como Funciona",
      github: "GitHub"
    },

    home: {
      hero: {
        title: "Aprenda Como Linguagens de Programação Funcionam",
        subtitle:
          "Jech é uma linguagem educacional que demonstra como interpretadores e compiladores funcionam na prática.",
        ctaPlayground: "Experimentar no Playground",
        ctaDocs: "Ver Documentação"
      },
      features: {
        title: "Por Que Jech?",
        educational: {
          title: "Educacional",
          description:
            "Projetada para ensinar conceitos de compiladores, interpretadores e VMs de forma prática."
        },
        browser: {
          title: "Roda no Navegador",
          description:
            "Compilada para WebAssembly, execute código Jech diretamente no seu navegador."
        },
        simple: {
          title: "Simples e Rápida",
          description:
            "Sintaxe clara e intuitiva, perfeita para aprender os fundamentos de programação."
        },
        opensource: {
          title: "Open Source",
          description:
            "Código aberto escrito em C, explore e aprenda com a implementação completa."
        },
        bytecode: {
          title: "Bytecode VM",
          description:
            "Compila para bytecode e executa em uma máquina virtual customizada."
        },
        dynamic: {
          title: "Tipagem Dinâmica",
          description:
            "Sistema de tipos flexível com suporte a números, strings e arrays."
        }
      },
      syntax: {
        title: "Sintaxe Jech",
        variables: "Variáveis",
        conditionals: "Condicionais",
        arrays: "Arrays",
        functions: "Funções",
        examples: {
          jech: "Jech",
          x_greater: "X é maior que 5",
          x_less: "X é menor ou igual a 5",
          hello: "Olá, ",
          world: "Mundo",
          major: "Você é maior de idade!",
          minor: "Você é menor de idade!"
        }
      },
      architecture: {
        title: "Arquitetura do Interpretador",
        step1: { title: "1. Código Fonte", desc: "Arquivo .jc" },
        step2: { title: "2. Tokenizer", desc: "Análise Léxica" },
        step3: { title: "3. Parser", desc: "Análise Sintática (AST)" },
        step4: { title: "4. Compilador", desc: "Geração de Bytecode" },
        step5: { title: "5. VM", desc: "Execução" }
      },
      cta: {
        title: "Comece Agora!",
        phrase:
          "Experimente Jech no playground interativo ou explore o código fonte.",
        btnPlayground: "Abrir Playground",
        btnGithub: "Ver no GitHub"
      },
      footer: {
        description:
          "Linguagem de programação educacional para aprender sobre interpretadores e compiladores.",
        links: "Links",
        technologies: "Tecnologias",
        copyright:
          "© 2026 Jech Programming Language. Open Source sob MIT License."
      }
    },

    playground: {
      title: "Jech Playground",
      run: "Executar",
      clear: "Limpar",
      sourceCode: "Código Fonte",
      output: "Saída",
      outputPlaceholder: "A saída do seu código aparecerá aqui...",
      editorPlaceholder: "Digite seu código Jech aqui...",
      examples: "Exemplos:",
      exampleHello: "👋 Olá Mundo",
      exampleVariables: "🔢 Variáveis",
      exampleConditionals: "🔀 Condicionais",
      status: {
        initializing: "Inicializando o interpretador Jech...",
        ready: "Jech v{version} pronto!",
        running: "Executando...",
        success: "Executado com sucesso ({time}s)",
        error: "Erro durante a execução",
        errorInit: "Falha ao inicializar: {error}",
        noCode: "Nenhum código para executar",
        notReady:
          "O interpretador ainda não está pronto. Por favor, aguarde...",
        exampleLoaded: 'Exemplo "{name}" carregado',
        exampleNotFound: "Exemplo não encontrado",
        executing: "Executando código..."
      }
    },

    internals: {
      title: "Por Trás dos Panos",
      subtitle: "Entenda como seu código Jech é processado e executado",
      whatYouWillLearn: "O que você vai aprender",
      interactiveDemo: "Demonstração Interativa",
      demoPrompt:
        "Digite um código Jech e veja como ele é processado em cada etapa:",
      examples: {
        label: "Exemplo:",
        hello: "👋 Hello World",
        conditionals: "🔀 Condicionais",
        arrays: "📦 Arrays",
        functions: "⚙️ Funções"
      },
      sourceCodeLabel: "Código Fonte:",
      analyzeBtn: "🔬 Analisar Código",
      pipeline: {
        lexer: {
          title: "Análise Léxica (Lexer)",
          description:
            "O código fonte é dividido em tokens (unidades mínimas de significado).",
          detail:
            "Cada caractere é lido e agrupado em categorias: palavras-chave, identificadores, operadores, literais, etc."
        },
        parser: {
          title: "Análise Sintática (Parser)",
          description:
            "Os tokens são organizados em uma Árvore Sintática Abstrata (AST).",
          detail:
            "O parser verifica se a sequência de tokens segue as regras gramaticais da linguagem."
        },
        semantic: {
          title: "Análise Semântica",
          description: "Verifica se o código faz sentido lógico.",
          detail:
            "Checa tipos de dados, escopo de variáveis, e se funções/variáveis foram declaradas antes de serem usadas."
        },
        codegen: {
          title: "Geração de Código Intermediário",
          description:
            "A AST é convertida em bytecode ou código intermediário.",
          detail:
            "Este formato é mais fácil de executar e otimizar que a AST original."
        },
        runtime: {
          title: "Execução (Runtime)",
          description:
            "O código intermediário é executado pela máquina virtual.",
          detail:
            "A VM interpreta cada instrução e executa as operações correspondentes."
        }
      },
      detailed: {
        title: "Explicação Detalhada de Cada Etapa",
        lexer: {
          title: "1. Análise Léxica (Lexer/Tokenizer)",
          what: "O que faz:",
          whatDesc:
            "Transforma o código fonte (string) em uma sequência de tokens.",
          example: "Exemplo:",
          input: "Entrada:",
          output: "Saída (Tokens):",
          how: "Como funciona:",
          howList: [
            "Lê o código caractere por caractere",
            "Ignora espaços em branco e comentários",
            "Agrupa caracteres em tokens significativos",
            "Identifica o tipo de cada token (palavra-chave, operador, literal, etc.)"
          ]
        },
        parser: {
          title: "2. Análise Sintática (Parser)",
          what: "O que faz:",
          whatDesc:
            "Organiza os tokens em uma estrutura hierárquica (AST) que representa a estrutura do programa.",
          example: "Exemplo:",
          how: "Como funciona:",
          howList: [
            "Consome tokens da esquerda para a direita",
            "Aplica regras gramaticais da linguagem",
            "Constrói uma árvore que representa a estrutura do código",
            "Detecta erros de sintaxe (parênteses não fechados, etc.)"
          ]
        },
        semantic: {
          title: "3. Análise Semântica",
          what: "O que faz:",
          whatDesc:
            "Verifica se o código faz sentido do ponto de vista lógico.",
          checks: "Verificações realizadas:",
          checkList: [
            "A função say existe?",
            "O número de argumentos está correto?",
            "Os tipos de dados são compatíveis?",
            "As variáveis foram declaradas antes do uso?"
          ],
          how: "Como funciona:",
          howList: [
            "Percorre a AST verificando regras semânticas",
            "Mantém uma tabela de símbolos (variáveis e funções declaradas)",
            "Verifica compatibilidade de tipos",
            "Detecta erros como variáveis não declaradas ou tipos incompatíveis"
          ]
        },
        codegen: {
          title: "4. Geração de Código Intermediário",
          what: "O que faz:",
          whatDesc: "Converte a AST em instruções mais simples e otimizadas.",
          example: "Exemplo de Bytecode:",
          how: "Como funciona:",
          howList: [
            "Traduz cada nó da AST em instruções simples",
            "Usa uma representação baseada em pilha",
            "Aplica otimizações básicas",
            "Gera código independente de plataforma"
          ]
        },
        runtime: {
          title: "5. Execução (Runtime)",
          what: "O que faz:",
          whatDesc:
            "Executa as instruções do bytecode usando uma máquina virtual.",
          process: "Processo de Execução:",
          processList: [
            'VM lê a instrução LOAD_CONST "hello world"',
            "Empilha a string na pilha de operandos",
            "Lê LOAD_GLOBAL say e empilha a função",
            "Executa CALL_FUNCTION 1: desempilha função e argumento, executa",
            'A função say imprime "hello world" no console',
            "POP_TOP remove o resultado da pilha"
          ],
          how: "Como funciona:",
          howList: [
            "Mantém uma pilha de operandos e frames de chamada",
            "Executa instruções em um loop (fetch-decode-execute)",
            "Gerencia memória para variáveis e objetos",
            "Interage com funções nativas (como say)"
          ]
        }
      },
      architecture: {
        title: "Arquitetura do Jech",
        frontend: "Frontend",
        middleend: "Middle-end",
        backend: "Backend"
      },
      techStack: {
        title: "Stack Tecnológica",
        core: "Linguagem Core:",
        coreDesc: "C",
        web: "Compilação Web:",
        webDesc: "Emscripten → WebAssembly",
        ui: "Interface:",
        uiDesc: "HTML5 + CSS3 + JavaScript",
        runtime: "Execução:",
        runtimeDesc: "WASM VM no Browser"
      },
      resources: {
        title: "Recursos Adicionais",
        playground: "Playground",
        playgroundDesc:
          "Experimente o Jech no navegador e veja a execução em tempo real",
        docs: "Documentação",
        docsDesc: "Aprenda a sintaxe e recursos da linguagem Jech",
        github: "Código Fonte",
        githubDesc: "Explore a implementação completa no GitHub"
      }
    },

    docs: {
      sidebar: {
        title: "Conteúdo",
        gettingStarted: "Primeiros Passos",
        introduction: "Introdução",
        installation: "Instalação",
        helloWorld: "Olá Mundo",
        syntax: "Sintaxe",
        variables: "Variáveis",
        dataTypes: "Tipos de Dados",
        operators: "Operadores",
        conditionals: "Condicionais",
        loops: "Loops",
        functions: "Funções",
        advanced: "Avançado",
        arrays: "Arrays",
        scope: "Escopo",
        errorHandling: "Erros",
        examples: "Exemplos Práticos"
      },
      title: "📚 Documentação Completa Jech",
      intro: {
        title: "Introdução ao Jech",
        p1: "Bem-vindo à documentação oficial da linguagem de programação Jech! Esta linguagem foi criada com propósito educacional para demonstrar como interpretadores, compiladores e máquinas virtuais funcionam na prática.",
        p2: "Jech é uma linguagem de tipagem dinâmica com sintaxe clara e intuitiva, perfeita para aprender os fundamentos de linguagens de programação e entender como o código é processado desde a análise léxica até a execução."
      },
      story: {
        title: "📖 História do JECH",
        p1: "O Jech começou como uma curiosidade minha: eu queria entender como uma linguagem de programação é feita e como ela funciona por baixo dos panos.",
        p2: "Com isso, veio a ideia de abrir esse processo ao público, criando uma documentação onde pessoas com pouco conhecimento em C, compiladores e interpretadores possam acompanhar e entender como tudo funciona.",
        p3: "O nome JECH vem das iniciais dos meus filhos: Jonathan Edwards e Charles Haddon."
      },
      install: {
        title: "🚀 Instalação",
        p1: 'Atualmente, a maneira mais fácil de experimentar Jech é através do nosso <a href="/playground" class="text-primary hover:underline">Playground Online</a>. Nenhuma instalação é necessária!',
        p2: "Para rodar localmente, você precisará compilar o código fonte. No futuro, disponibilizaremos binários para os principais sistemas operacionais.",
        desc: "Existem duas formas de usar Jech:",
        playground: {
          title: "1. Playground Online (Recomendado para Iniciantes)",
          desc: 'A forma mais rápida de começar é usar o <a href="/playground" style="color: var(--primary);">playground</a> online. Não requer instalação e roda diretamente no navegador via WebAssembly.',
          item1: "Sem necessidade de instalação",
          item2: "Execução instantânea no navegador",
          item3: "Exemplos prontos para testar",
          item4: "Ideal para aprendizado rápido"
        },
        local: {
          title: "2. Instalação Local",
          desc: "Para desenvolvedores que querem explorar o código fonte e entender a implementação:",
          comment1: "# Clone o repositório",
          comment2: "# Compile o interpretador",
          comment3: "# Execute um arquivo .jc",
          comment4: "# Ou use o REPL interativo"
        }
      },
      firstSteps: {
        title: "🎯 Primeiros Passos",
        desc: 'Vamos começar com o programa mais simples possível em Jech: o famoso "Hello, World!".',
        comment: "// Seu primeiro programa Jech!",
        explain:
          "Este programa usa o comando say para exibir uma mensagem na tela. Simples assim! Vamos entender cada parte:",
        item1: "Função nativa que imprime valores na saída",
        item2: "Uma string (texto entre aspas duplas)",
        item3: "Ponto e vírgula obrigatório no final de cada instrução"
      },
      say: {
        title: "💬 Comando say - Exibindo Valores",
        desc: "O comando say é a forma de exibir informações em Jech. Ele aceita diferentes tipos de dados e os imprime na saída padrão.",
        strings: "Imprimindo Strings (Texto)",
        numbers: "Imprimindo Números",
        numsComment1: "// Números inteiros",
        numsComment2: "// Números decimais (floats)",
        booleans: "Imprimindo Booleanos",
        tip: "<strong>💡 Dica:</strong> O comando say automaticamente adiciona uma quebra de linha após cada valor impresso. Cada chamada de say imprime em uma nova linha."
      },
      vars: {
        title: "📦 Variáveis - Armazenando Dados com keep",
        p1: "Em Jech, usamos a palavra-chave keep para declarar variáveis. O nome 'keep' foi escolhido para ser intuitivo: você está 'guardando' um valor.",
        p2: "Jech possui tipagem dinâmica, o que significa que você não precisa declarar o tipo da variável - o interpretador descobre automaticamente!",
        declaring: "Declarando Variáveis",
        using: "Usando Variáveis",
        usingP:
          "Depois de declarar uma variável, você pode usá-la em qualquer lugar do código:",
        reassignment: "Reatribuição de Variáveis",
        reassignmentP:
          "Você pode mudar o valor de uma variável depois de declará-la. Note que na reatribuição você não usa a palavra keep novamente:",
        important:
          "<strong>📝 Importante:</strong> Todas as declarações e atribuições devem terminar com ponto e vírgula (;). Esquecer o ponto e vírgula causará um erro de sintaxe!"
      },
      types: {
        title: "🎨 Tipos de Dados",
        p: "Jech suporta quatro tipos principais de dados. Vamos explorar cada um em detalhes:",
        numbers: "1. Números (Numbers)",
        numbersP:
          "Jech trabalha com números inteiros e decimais (ponto flutuante). Não há distinção entre int e float - todos são tratados como números.",
        strings: "2. Strings (Texto)",
        stringsP:
          'Strings são sequências de caracteres delimitadas por aspas duplas ("). Elas podem conter letras, números, espaços e caracteres especiais.',
        booleans: "3. Booleanos (true/false)",
        booleansP:
          "Booleanos representam valores lógicos: verdadeiro (true) ou falso (false). São muito úteis em condicionais e controle de fluxo.",
        arrays: "4. Arrays (Listas)",
        arraysP:
          "Arrays são coleções ordenadas de valores. Podem conter números, strings ou valores mistos."
      },
      operators: {
        title: "🔢 Operadores Aritméticos",
        p: "Jech suporta as quatro operações matemáticas básicas. Você pode usar operadores diretamente em expressões ou modificar variáveis existentes.",
        addition: "Adição (+)",
        subtraction: "Subtração (-)",
        multiplication: "Multiplicação (*)",
        division: "Divisão (/)",
        combined: "Operações Combinadas",
        combinedP: "Você pode encadear múltiplas operações:",
        practical: "Exemplo Prático: Carrinho de Compras"
      },
      concat: {
        title: "🔗 Concatenação de Strings",
        p: "Em Jech, você pode juntar (concatenar) strings usando o operador +. Isso é muito útil para construir mensagens dinâmicas.",
        basic: "Concatenação Básica",
        vars: "Concatenação com Variáveis",
        mixed: "Misturando Variáveis e Literais",
        practical: "Exemplo Prático: Construindo Mensagens",
        warning:
          '<strong>⚠️ Atenção:</strong> Concatenação de strings com + é diferente de adição numérica! "10" + "20" resulta em "1020" (string), enquanto 10 + 20 resulta em 30 (número).'
      },
      conditionals: {
        title: "🔀 Condicionais - Tomando Decisões com when/else",
        p: "Condicionais permitem que seu programa tome decisões e execute diferentes códigos baseado em condições. Em Jech, usamos when (quando) para criar estruturas condicionais.",
        operators: "Operadores de Comparação",
        operatorsP:
          "Antes de usar condicionais, você precisa conhecer os operadores de comparação:",
        comparisonComment1: "// Igualdade",
        comparisonComment2: "// Comparação numérica",
        booleanTitle: "when com Booleanos",
        booleanP:
          "A forma mais simples de condicional usa valores booleanos diretamente:",
        comparesTitle: "when com Comparações",
        comparesP:
          "Você pode usar operadores de comparação para criar condições mais complexas:",
        stringsTitle: "when com Strings",
        stringsP: "Você também pode comparar strings usando ==:",
        elseTitle: "when/else - Lidando com Ambos os Casos",
        elseP:
          'Use else para executar código quando a condição é falsa. Isso cria uma estrutura "se-senão":',
        multipleTitle: "Múltiplas Condições (else when)",
        multipleP: "Para testar várias condições em sequência, use else when:",
        practical1: "Exemplo Prático: Sistema de Autenticação",
        practical2: "Exemplo Prático: Verificação de Estoque"
      },
      arrays: {
        title: "📋 Arrays - Trabalhando com Listas",
        p: "Arrays (ou listas) são coleções ordenadas de valores. Eles permitem armazenar múltiplos valores em uma única variável e acessá-los por índice.",
        creating: "Criando Arrays",
        creatingP:
          "Arrays são criados usando colchetes [] com valores separados por vírgula:",
        accessing: "Acessando Elementos",
        accessingP:
          "Arrays em Jech são indexados a partir de 0. Isso significa que o primeiro elemento está no índice 0, o segundo no índice 1, e assim por diante.",
        modifying: "Modificando Elementos",
        modifyingP:
          "Você pode alterar o valor de um elemento específico do array:",
        mapTitle: "Método map - Transformando Arrays",
        mapP: "O método map permite aplicar uma operação matemática a todos os elementos de um array de uma vez. É muito útil para transformações em massa.",
        practical1: "Exemplo Prático: Cálculo de Preços",
        practical2: "Exemplo Prático: Ajuste de Notas"
      },
      functions: {
        title: "🔧 Funções - Reutilizando Código com do",
        p: "Funções permitem agrupar código que pode ser reutilizado. Em Jech, usamos a palavra-chave do para definir funções.",
        simple: "Função Simples (Sem Parâmetros)",
        oneParam: "Função com Um Parâmetro",
        multiParams: "Função com Múltiplos Parâmetros",
        return: "Função com Retorno",
        returnP: "Funções podem retornar valores usando return:",
        practical: "Exemplo Prático: Calculadora"
      },
      practical: {
        title: "🎯 Exemplos Práticos Completos",
        ex1: {
          title: "1. Sistema de Autenticação de Usuário",
          p: "Um exemplo completo de sistema de login com verificação de credenciais:"
        },
        ex2: {
          title: "2. Gerenciamento de Inventário",
          p: "Sistema para controlar estoque de produtos:"
        },
        ex3: {
          title: "3. Sistema Bancário Simples",
          p: "Gerenciamento de conta bancária com depósitos e saques:"
        },
        ex4: {
          title: "4. Monitoramento de Temperatura",
          p: "Sistema de alerta baseado em leituras de temperatura:"
        },
        ex5: {
          title: "5. Calculadora de Pontuação de Quiz",
          p: "Sistema completo de quiz com cálculo de nota final:"
        }
      },
      cta: {
        tip: '<strong>💡 Dica:</strong> Todos estes exemplos estão prontos para executar! Copie e cole no <a href="playground.html" style="color: var(--primary);">playground</a> para ver como funcionam na prática.',
        important:
          "<strong>⚠️ Importante:</strong> Jech está em desenvolvimento ativo. Algumas funcionalidades podem mudar em versões futuras.",
        ready: "Pronto para começar?",
        readyP: "Teste seus conhecimentos no playground interativo!",
        open: "Abrir Playground"
      }
    },

    error404: {
      code: "404",
      title: "Página não encontrada",
      message: "A página que você está procurando não existe ou foi movida.",
      backHome: "Voltar ao Início",
      goPlayground: "Ir para o Playground"
    }
  },

  en: {
    nav: {
      home: "Home",
      playground: "Playground",
      docs: "Documentation",
      internals: "How It Works",
      github: "GitHub"
    },

    home: {
      hero: {
        title: "Learn How Programming Languages Work",
        subtitle:
          "Jech is an educational language that demonstrates how interpreters and compilers work in practice.",
        ctaPlayground: "Try the Playground",
        ctaDocs: "View Documentation"
      },
      features: {
        title: "Why Jech?",
        educational: {
          title: "Educational",
          description:
            "Designed to teach compiler, interpreter, and VM concepts in a practical way."
        },
        browser: {
          title: "Runs in Browser",
          description:
            "Compiled to WebAssembly, run Jech code directly in your browser."
        },
        simple: {
          title: "Simple & Fast",
          description:
            "Clear and intuitive syntax, perfect for learning programming fundamentals."
        },
        opensource: {
          title: "Open Source",
          description:
            "Open source code written in C, explore and learn from the complete implementation."
        },
        bytecode: {
          title: "Bytecode VM",
          description:
            "Compiles to bytecode and executes in a custom virtual machine."
        },
        dynamic: {
          title: "Dynamic Typing",
          description:
            "Flexible type system with support for numbers, strings, and arrays."
        }
      },
      syntax: {
        title: "Jech Syntax",
        variables: "Variables",
        conditionals: "Conditionals",
        arrays: "Arrays",
        functions: "Functions",
        examples: {
          jech: "Jech",
          x_greater: "X is greater than 5",
          x_less: "X is less or equal to 5",
          hello: "Hello, ",
          world: "World",
          major: "You are an adult!",
          minor: "You are a minor!"
        }
      },
      architecture: {
        title: "Interpreter Architecture",
        step1: { title: "1. Source Code", desc: ".jc File" },
        step2: { title: "2. Tokenizer", desc: "Lexical Analysis" },
        step3: { title: "3. Parser", desc: "Syntax Analysis (AST)" },
        step4: { title: "4. Compiler", desc: "Bytecode Generation" },
        step5: { title: "5. VM", desc: "Execution" }
      },
      cta: {
        title: "Get Started Now!",
        phrase:
          "Try Jech in the interactive playground or explore the source code.",
        btnPlayground: "Open Playground",
        btnGithub: "View on GitHub"
      },
      footer: {
        description:
          "Educational programming language for learning about interpreters and compilers.",
        links: "Links",
        technologies: "Technologies",
        copyright:
          "© 2026 Jech Programming Language. Open Source under MIT License."
      }
    },

    playground: {
      title: "Jech Playground",
      run: "Run",
      clear: "Clear",
      sourceCode: "Source Code",
      output: "Output",
      outputPlaceholder: "Your code output will appear here...",
      editorPlaceholder: "Type your Jech code here...",
      examples: "Examples:",
      exampleHello: "👋 Hello World",
      exampleVariables: "🔢 Variables",
      exampleConditionals: "🔀 Conditionals",
      status: {
        initializing: "Initializing Jech interpreter...",
        ready: "Jech v{version} ready!",
        running: "Running...",
        success: "Executed successfully ({time}s)",
        error: "Error during execution",
        errorInit: "Failed to initialize: {error}",
        noCode: "No code to execute",
        notReady: "The interpreter is not ready yet. Please wait...",
        exampleLoaded: 'Example "{name}" loaded',
        exampleNotFound: "Example not found",
        executing: "Executing code..."
      }
    },

    internals: {
      title: "Behind the Scenes",
      subtitle: "Understand how your Jech code is processed and executed",
      whatYouWillLearn: "What you will learn",
      interactiveDemo: "Interactive Demo",
      demoPrompt:
        "Type some Jech code and see how it is processed at each stage:",
      examples: {
        label: "Example:",
        hello: "👋 Hello World",
        conditionals: "🔀 Conditionals",
        arrays: "📦 Arrays",
        functions: "⚙️ Functions"
      },
      sourceCodeLabel: "Source Code:",
      analyzeBtn: "🔬 Analyze Code",
      pipeline: {
        lexer: {
          title: "Lexical Analysis (Lexer)",
          description:
            "The source code is divided into tokens (minimal units of meaning).",
          detail:
            "Each character is read and grouped into categories: keywords, identifiers, operators, literals, etc."
        },
        parser: {
          title: "Syntax Analysis (Parser)",
          description:
            "Tokens are organized into an Abstract Syntax Tree (AST).",
          detail:
            "The parser checks if the token sequence follows the language grammar rules."
        },
        semantic: {
          title: "Semantic Analysis",
          description: "Checks if the code makes logical sense.",
          detail:
            "Checks data types, variable scope, and if functions/variables were declared before being used."
        },
        codegen: {
          title: "Intermediate Code Generation",
          description:
            "The AST is converted into bytecode or intermediate code.",
          detail:
            "This format is easier to execute and optimize than the original AST."
        },
        runtime: {
          title: "Execution (Runtime)",
          description:
            "The intermediate code is executed by the virtual machine.",
          detail:
            "The VM interprets each instruction and executes the corresponding operations."
        }
      },
      detailed: {
        title: "Detailed Explanation of Each Stage",
        lexer: {
          title: "1. Lexical Analysis (Lexer/Tokenizer)",
          what: "What it does:",
          whatDesc:
            "Transforms the source code (string) into a sequence of tokens.",
          example: "Example:",
          input: "Input:",
          output: "Output (Tokens):",
          how: "How it works:",
          howList: [
            "Reads the code character by character",
            "Ignores whitespaces and comments",
            "Groups characters into meaningful tokens",
            "Identifies the type of each token (keyword, operator, literal, etc.)"
          ]
        },
        parser: {
          title: "2. Syntax Analysis (Parser)",
          what: "What it does:",
          whatDesc:
            "Organizes tokens into a hierarchical structure (AST) that represents the program structure.",
          example: "Example:",
          how: "How it works:",
          howList: [
            "Consumes tokens from left to right",
            "Applies language grammar rules",
            "Builds a tree that represents the code structure",
            "Detects syntax errors (unclosed parentheses, etc.)"
          ]
        },
        semantic: {
          title: "3. Semantic Analysis",
          what: "What it does:",
          whatDesc: "Checks if the code makes sense from a logical standpoint.",
          checks: "Checks performed:",
          checkList: [
            "Does the say function exist?",
            "Is the number of arguments correct?",
            "Are the data types compatible?",
            "Were variables declared before use?"
          ],
          how: "How it works:",
          howList: [
            "Traverses the AST checking semantic rules",
            "Maintains a symbol table (declared variables and functions)",
            "Checks type compatibility",
            "Detects errors like undeclared variables or incompatible types"
          ]
        },
        codegen: {
          title: "4. Intermediate Code Generation",
          what: "What it does:",
          whatDesc: "Converts the AST into simpler and optimized instructions.",
          example: "Bytecode Example:",
          how: "How it works:",
          howList: [
            "Translates each AST node into simple instructions",
            "Uses a stack-based representation",
            "Applies basic optimizations",
            "Generates platform-independent code"
          ]
        },
        runtime: {
          title: "5. Execution (Runtime)",
          what: "What it does:",
          whatDesc:
            "Executes the bytecode instructions using a virtual machine.",
          process: "Execution Process:",
          processList: [
            'VM reads the LOAD_CONST "hello world" instruction',
            "Pushes the string onto the operand stack",
            "Reads LOAD_GLOBAL say and pushes the function",
            "Executes CALL_FUNCTION 1: pops function and argument, executes",
            'The say function prints "hello world" to the console',
            "POP_TOP removes the result from the stack"
          ],
          how: "How it works:",
          howList: [
            "Maintains an operand stack and call frames",
            "Executes instructions in a loop (fetch-decode-execute)",
            "Manages memory for variables and objects",
            "Interacts with native functions (like say)"
          ]
        }
      },
      architecture: {
        title: "Jech Architecture",
        frontend: "Frontend",
        middleend: "Middle-end",
        backend: "Backend"
      },
      techStack: {
        title: "Tech Stack",
        core: "Core Language:",
        coreDesc: "C",
        web: "Web Compilation:",
        webDesc: "Emscripten → WebAssembly",
        ui: "Interface:",
        uiDesc: "HTML5 + CSS3 + JavaScript",
        runtime: "Execution:",
        runtimeDesc: "WASM VM in Browser"
      },
      resources: {
        title: "Additional Resources",
        playground: "Playground",
        playgroundDesc:
          "Try Jech in the browser and see execution in real-time",
        docs: "Documentation",
        docsDesc: "Learn Jech language syntax and features",
        github: "Source Code",
        githubDesc: "Explore the complete implementation on GitHub"
      }
    },

    docs: {
      sidebar: {
        title: "Contents",
        gettingStarted: "Getting Started",
        introduction: "Introduction",
        installation: "Installation",
        helloWorld: "Hello World",
        syntax: "Syntax",
        variables: "Variables",
        dataTypes: "Data Types",
        operators: "Operators",
        conditionals: "Conditionals",
        loops: "Loops",
        functions: "Functions",
        advanced: "Advanced",
        arrays: "Arrays",
        scope: "Scope",
        errorHandling: "Errors",
        examples: "Practical Examples"
      },
      title: "📚 Complete Jech Documentation",
      intro: {
        title: "Introduction to Jech",
        p1: "Welcome to the official Jech programming language documentation! This language was created for educational purposes to demonstrate how interpreters, compilers, and virtual machines work in practice.",
        p2: "Jech is a dynamically typed language with a clear and intuitive syntax, perfect for learning the fundamentals of programming languages and understanding how code is processed from lexical analysis to execution."
      },
      story: {
        title: "📖 JECH Story",
        p1: "Jech started as a personal curiosity: I wanted to understand how a programming language is built and how it works behind the scenes.",
        p2: "From that, the idea came to open this process to the public by writing documentation so that people with little knowledge of C, compilers, and interpreters can follow along and understand how everything works.",
        p3: "The name JECH comes from the initials of my children: Jonathan Edwards and Charles Haddon."
      },
      install: {
        title: "🚀 Installation",
        p1: 'Currently, the easiest way to try Jech is through our <a href="/playground" class="text-primary hover:underline">Online Playground</a>. No installation is required!',
        p2: "To run locally, you will need to compile the source code. In the future, we will provide binaries for the main operating systems.",
        desc: "There are two ways to use Jech:",
        playground: {
          title: "1. Online Playground (Recommended for Beginners)",
          desc: 'The fastest way to get started is to use the <a href="/playground" style="color: var(--primary);">online playground</a>. It requires no installation and runs directly in the browser via WebAssembly.',
          item1: "No installation required",
          item2: "Instant execution in the browser",
          item3: "Ready-to-test examples",
          item4: "Ideal for quick learning"
        },
        local: {
          title: "2. Local Installation",
          desc: "For developers who want to explore the source code and understand the implementation:",
          comment1: "# Clone the repository",
          comment2: "# Compile the interpreter",
          comment3: "# Execute a .jc file",
          comment4: "# Or use the interactive REPL"
        }
      },
      firstSteps: {
        title: "🎯 First Steps",
        desc: 'Let\'s start with the simplest possible program in Jech: the famous "Hello, World!".',
        comment: "// Your first Jech program!",
        explain:
          "This program uses the say command to display a message on the screen. Simple as that! Let's understand each part:",
        item1: "Native function that prints values to output",
        item2: "A string (text in double quotes)",
        item3: "Mandatory semicolon at the end of each instruction"
      },
      say: {
        title: "💬 say Command - Displaying Values",
        desc: "The say command is the way to display information in Jech. It accepts different data types and prints them to the standard output.",
        strings: "Printing Strings (Text)",
        numbers: "Printing Numbers",
        numsComment1: "// Integers",
        numsComment2: "// Decimals (floats)",
        booleans: "Printing Booleans",
        tip: "<strong>💡 Tip:</strong> The say command automatically adds a newline after each printed value. Each call to say prints on a new line."
      },
      vars: {
        title: "📦 Variables - Storing Data with keep",
        p1: "In Jech, we use the keep keyword to declare variables. The name 'keep' was chosen to be intuitive: you are 'keeping' a value.",
        p2: "Jech has dynamic typing, which means you don't need to declare the variable type - the interpreter finds out automatically!",
        declaring: "Declaring Variables",
        using: "Using Variables",
        usingP:
          "After declaring a variable, you can use it anywhere in the code:",
        reassignment: "Variable Reassignment",
        reassignmentP:
          "You can change a variable's value after declaring it. Note that in reassignment you don't use the word keep again:",
        important:
          "<strong>📝 Important:</strong> All declarations and assignments must end with a semicolon (;). Forgetting the semicolon will cause a syntax error!"
      },
      types: {
        title: "🎨 Data Types",
        p: "Jech supports four main data types. Let's explore each in detail:",
        numbers: "1. Numbers",
        numbersP:
          "Jech works with integers and decimals (floating point). There is no distinction between int and float - all are treated as numbers.",
        strings: "2. Strings (Text)",
        stringsP:
          'Strings are sequences of characters delimited by double quotes ("). They can contain letters, numbers, spaces, and special characters.',
        booleans: "3. Booleans (true/false)",
        booleansP:
          "Booleans represent logical values: true or false. They are very useful in conditionals and flow control.",
        arrays: "4. Arrays (Lists)",
        arraysP:
          "Arrays are ordered collections of values. They can contain numbers, strings, or mixed values."
      },
      operators: {
        title: "🔢 Arithmetic Operators",
        p: "Jech supports the four basic mathematical operations. You can use operators directly in expressions or modify existing variables.",
        addition: "Addition (+)",
        subtraction: "Subtraction (-)",
        multiplication: "Multiplication (*)",
        division: "Division (/)",
        combined: "Combined Operations",
        combinedP: "You can chain multiple operations:",
        practical: "Practical Example: Shopping Cart"
      },
      concat: {
        title: "🔗 String Concatenation",
        p: "In Jech, you can join (concatenate) strings using the + operator. This is very useful for building dynamic messages.",
        basic: "Basic Concatenation",
        vars: "Concatenation with Variables",
        mixed: "Mixing Variables and Literals",
        practical: "Practical Example: Building Messages",
        warning:
          '<strong>⚠️ Attention:</strong> String concatenation with + is different from numerical addition! "10" + "20" results in "1020" (string), while 10 + 20 results in 30 (number).'
      },
      conditionals: {
        title: "🔀 Conditionals - Taking Decisions with when/else",
        p: "Conditionals allow your program to make decisions and execute different code based on conditions. In Jech, we use when (when) to create conditional structures.",
        operators: "Comparison Operators",
        operatorsP:
          "Before using conditionals, you need to know the comparison operators:",
        comparisonComment1: "// Equality",
        comparisonComment2: "// Numerical comparison",
        booleanTitle: "when with Booleans",
        booleanP:
          "The simplest form of conditional uses boolean values directly:",
        comparesTitle: "when with Comparisons",
        comparesP:
          "You can use comparison operators to create more complex conditions:",
        stringsTitle: "when with Strings",
        stringsP: "You can also compare strings using ==:",
        elseTitle: "when/else - Handling Both Cases",
        elseP:
          'Use else to execute code when the condition is false. This creates an "if-else" structure:',
        multipleTitle: "Multiple Conditions (else when)",
        multipleP: "To test multiple conditions in sequence, use else when:",
        practical1: "Practical Example: Authentication System",
        practical2: "Practical Example: Inventory Check"
      },
      arrays: {
        title: "📋 Arrays - Working with Lists",
        p: "Arrays (or lists) are ordered collections of values. They allow storing multiple values in a single variable and accessing them by index.",
        creating: "Creating Arrays",
        creatingP:
          "Arrays are created using brackets [] with values separated by commas:",
        accessing: "Accessing Elements",
        accessingP:
          "Arrays in Jech are indexed starting from 0. This means the first element is at index 0, the second at index 1, and so on.",
        modifying: "Modifying Elements",
        modifyingP: "You can change the value of a specific array element:",
        mapTitle: "map Method - Transforming Arrays",
        mapP: "The map method allows applying a mathematical operation to all array elements at once. It's very useful for bulk transformations.",
        practical1: "Practical Example: Price Calculation",
        practical2: "Practical Example: Grade Adjustment"
      },
      functions: {
        title: "🔧 Functions - Reusing Code with do",
        p: "Functions allow grouping code that can be reused. In Jech, we use the do keyword to define functions.",
        simple: "Simple Function (No Parameters)",
        oneParam: "Function with One Parameter",
        multiParams: "Function with Multiple Parameters",
        return: "Function with Return",
        returnP: "Functions can return values using return:",
        practical: "Practical Example: Calculator"
      },
      practical: {
        title: "🎯 Practical Examples",
        ex1: {
          title: "1. User Authentication System",
          p: "A complete example of a login system with credential verification:"
        },
        ex2: {
          title: "2. Inventory Management",
          p: "System to control product stock:"
        },
        ex3: {
          title: "3. Simple Banking System",
          p: "Bank account management with deposits and withdrawals:"
        },
        ex4: {
          title: "4. Temperature Monitoring",
          p: "Alert system based on temperature readings:"
        },
        ex5: {
          title: "5. Quiz Score Calculator",
          p: "Complete quiz system with final grade calculation:"
        }
      },
      cta: {
        tip: '<strong>💡 Tip:</strong> All these examples are ready to run! Copy and paste into the <a href="playground.html" style="color: var(--primary);">playground</a> to see how they work in practice.',
        important:
          "<strong>⚠️ Important:</strong> Jech is in active development. Some features may change in future versions.",
        ready: "Ready to start?",
        readyP: "Test your knowledge in the interactive playground!",
        open: "Open Playground"
      }
    },

    error404: {
      code: "404",
      title: "Page not found",
      message: "The page you are looking for does not exist or has been moved.",
      backHome: "Back to Home",
      goPlayground: "Go to Playground"
    }
  }
};
